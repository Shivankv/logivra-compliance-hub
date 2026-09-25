import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

const title = "Demo requests — SysComp";
const description = "Internal list of demo requests submitted through the SysComp website.";

export const Route = createFileRoute("/_authenticated/demo-requests")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DemoRequestsPage,
  errorComponent: () => (
    <div className="p-10 text-center text-sm text-muted-foreground">
      We couldn't load the demo requests. Refresh to try again.
    </div>
  ),
  notFoundComponent: () => (
    <div className="p-10 text-center text-sm text-muted-foreground">Page not found.</div>
  ),
});

type DemoRequest = {
  id: string;
  email: string;
  full_name: string | null;
  company: string | null;
  phone: string | null;
  message: string | null;
  source: string;
  status: string;
  created_at: string;
};

function DemoRequestsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["demo-requests"],
    queryFn: async (): Promise<DemoRequest[]> => {
      const { data, error } = await supabase
        .from("demo_requests")
        .select("id, email, full_name, company, phone, message, source, status, created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as DemoRequest[];
    },
  });

  async function markContacted(id: string, status: string) {
    const next = status === "contacted" ? "new" : "contacted";
    const { error } = await supabase
      .from("demo_requests")
      .update({ status: next })
      .eq("id", id);
    if (error) {
      toast.error("Couldn't update this request.");
      return;
    }
    void queryClient.invalidateQueries({ queryKey: ["demo-requests"] });
  }

  function copyEmails() {
    const emails = (data ?? []).map((r) => r.email).join(", ");
    void navigator.clipboard.writeText(emails);
    toast.success("All emails copied to your clipboard.");
  }

  async function signOut() {
    await supabase.auth.signOut();
    queryClient.clear();
    navigate({ to: "/auth" });
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="font-display text-lg font-semibold text-foreground">
            SysComp
          </Link>
          <Button variant="outline" size="sm" onClick={signOut} className="border-border">
            Sign out
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Demo requests
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Everyone who asked for a demo on the website, newest first.
            </p>
          </div>
          <Button onClick={copyEmails} disabled={!data?.length} className="h-10">
            Copy all emails
          </Button>
        </div>

        {isLoading && (
          <div className="mt-8 space-y-3">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        )}

        {error && (
          <p className="mt-8 rounded-xl border border-border bg-background p-5 text-sm text-muted-foreground">
            We couldn't load the list. Refresh to try again.
          </p>
        )}

        {!isLoading && !error && data?.length === 0 && (
          <div className="mt-8 rounded-xl border border-border bg-background p-8 text-center">
            <p className="text-sm text-muted-foreground">
              No demo requests yet. New submissions from the website show up here
              automatically. If you expected to see entries, ask an administrator to give
              your account access.
            </p>
          </div>
        )}

        {!isLoading && !!data?.length && (
          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-background">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-surface text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Received</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">Name</th>
                  <th className="hidden px-4 py-3 font-semibold md:table-cell">Company</th>
                  <th className="hidden px-4 py-3 font-semibold lg:table-cell">Phone</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {data.map((r) => (
                  <tr key={r.id} className="border-b border-border last:border-0">
                    <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                      {new Date(r.created_at).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${r.email}`}
                        className="font-medium text-foreground hover:text-primary"
                      >
                        {r.email}
                      </a>
                    </td>
                    <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                      {r.full_name || "—"}
                    </td>
                    <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">
                      {r.company || "—"}
                    </td>
                    <td className="hidden px-4 py-3 text-muted-foreground lg:table-cell">
                      {r.phone ? (
                        <a href={`tel:${r.phone}`} className="hover:text-primary">
                          {r.phone}
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={r.status === "contacted" ? "secondary" : "default"}>
                        {r.status === "contacted" ? "Contacted" : "New"}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border"
                        onClick={() => void markContacted(r.id, r.status)}
                      >
                        {r.status === "contacted" ? "Mark new" : "Mark contacted"}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
