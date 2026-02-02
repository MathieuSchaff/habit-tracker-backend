import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { authQueries, useLogout } from '../../lib/queries/auth'
import './Header.css'
import { Button } from '../Button/Button'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const { data: session } = useQuery(authQueries.session())
  const navigate = useNavigate()
  const logout = useLogout()

  const isAuthenticated = session?.data?.authenticated

  const closeMenu = () => setOpen(false)

  const handleLogout = () => {
    logout.mutate(undefined, {
      onSuccess: () => {
        closeMenu()
        navigate({ to: '/login' })
      },
    })
  }

  // Ferme le menu si on passe en desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <header role="banner">
      <nav id="main-nav" aria-label="Navigation principale" className={open ? 'open' : ''}>
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="nav-list"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul role="list" id="nav-list">
          <li>
            <Link to="/" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/habits" onClick={closeMenu}>
              Habitudes
            </Link>
          </li>
        </ul>
      </nav>
      <nav aria-label="navigation secondaire">
        <ul>
          {isAuthenticated ? (
            <>
              {' '}
              <li>
                <Link to="/profile" onClick={closeMenu}>
                  Profil
                </Link>
              </li>
              <li>
                <Button
                  type="button"
                  onClick={handleLogout}
                  disabled={logout.isPending}
                  className="nav-logout-btn"
                >
                  {logout.isPending ? 'Déconnexion...' : 'Déconnexion'}
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" onClick={closeMenu}>
                Connexion
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
