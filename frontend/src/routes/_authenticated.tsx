import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
// import { sessionQueryOptions } from "";
import {authQueries} from "../lib/queries/auth"

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context, location }) => {
        try {
          console.log("in authenticated routed")
      await context.queryClient.ensureQueryData(authQueries.session());
        } catch {
            console.log("ça throw")
      throw redirect({
        to: "/login",
        search: {
          redirect: location.pathname,
        },
      });
    }
  },
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  return <Outlet />;
}
