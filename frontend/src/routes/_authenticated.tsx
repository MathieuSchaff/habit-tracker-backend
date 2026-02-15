import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { authQueries } from '../lib/queries/auth'
import { silentRefresh } from '../lib/queries/silentRefresh'
import { useAuthStore } from '../store/auth'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context, location }) => {
    const store = useAuthStore.getState()

    // si j'ai pas de accessToken ou accessToken est expiré, on doit refresh
    if (!store.accessToken || store.isTokenExpired()) {
      const refreshed = await silentRefresh(context.queryClient)

      if (!refreshed) {
        store.clearAuth()
        context.queryClient.removeQueries({ queryKey: ['session'] })
        context.queryClient.removeQueries({ queryKey: ['auth'] })

        throw redirect({
          to: '/login',
          search: { redirect: location.pathname },
        })
      }

      // silentRefresh a déjà fait setAuth + setQueryData , ça devrait fonctionner
      return
    }

    // si accessToken présent et non expiré, on va vérifier via le cache/serveur
    try {
      await context.queryClient.ensureQueryData(authQueries.session())
    } catch {
      // Le serveur a rejeté le token,
      // l'utilisateur a set un token lui meme?
      //  tenter un refresh
      const refreshed = await silentRefresh(context.queryClient)

      if (!refreshed) {
        store.clearAuth()
        context.queryClient.removeQueries({ queryKey: ['session'] })
        context.queryClient.removeQueries({ queryKey: ['auth'] })

        throw redirect({
          to: '/login',
          search: { redirect: location.pathname },
        })
      }
    }
  },
  component: () => <Outlet />,
})
