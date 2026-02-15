// import { useQuery } from '@tanstack/react-query'
import { Link, useNavigate } from '@tanstack/react-router'
import { Home, ListChecks, PanelLeftOpen } from 'lucide-react'
import { useRef, useState } from 'react'

import { useClickOutside } from '../../../hooks/useClickOutside'
import { useLogout } from '../../../lib/queries/auth'
import { useAuthStore } from '../../../store/auth'
import { Button } from '../../Button/Button'
import { AuroreLogo } from '../../Logo/Logo'
import { ThemeToggle } from '../../Themetoggle/Themetoggle'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()

  const isAuthenticated = useAuthStore((state) => !!state.accessToken)
  const logout = useLogout()

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  useClickOutside(navRef, closeMenu)

  const handleLogout = () => {
    logout.mutate(undefined, {
      onSuccess: () => {
        closeMenu()
        navigate({ to: '/login' })
      },
    })
  }

  return (
    <header className="main-header">
      <nav
        ref={navRef}
        className={`main-nav ${isOpen ? 'main-nav--open' : ''}`}
        aria-label="Navigation principale"
      >
        <div className="main-nav__header">
          {/*<h2 className="main-nav__title">Aurore</h2>*/}
          <div className="main-nav__logo">
            <AuroreLogo size={40} />
          </div>

          <button
            type="button"
            className="main-nav__toggle"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="main-nav-list"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <PanelLeftOpen />
          </button>
        </div>

        <ul id="main-nav-list" className="main-nav__list">
          <li>
            <Link to="/" onClick={closeMenu} className="main-nav__link">
              <Home size={15} className="main-nav__icon" aria-hidden="true" />
              <span className="main-nav__label">Accueil</span>
            </Link>
          </li>
          <li>
            <Link to="/habits" onClick={closeMenu} className="main-nav__link">
              <ListChecks size={15} className="main-nav__icon" aria-hidden="true" />

              <span className="main-nav__label">Habitudes</span>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="nav-secondary" aria-label="Navigation secondaire">
        <ul className="secondary-nav__list">
          <li>
            <ThemeToggle />
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/profile" onClick={closeMenu} className="secondary-nav__link">
                  Profil
                </Link>
              </li>
              <li>
                <Button
                  type="button"
                  onClick={handleLogout}
                  disabled={logout.isPending}
                  className="secondary-nav__logout"
                >
                  {logout.isPending ? 'Déconnexion...' : 'Déconnexion'}
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" onClick={closeMenu} className="secondary-nav__link">
                Connexion
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
