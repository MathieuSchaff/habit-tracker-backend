import type { LinkProps } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Home, ListChecks, type LucideIcon } from 'lucide-react'

interface NavItem {
  to: LinkProps['to']
  icon: LucideIcon
  label: string
}

const navItems: NavItem[] = [
  {
    to: '/',
    icon: Home,
    label: 'Accueil',
  },
  {
    to: '/habits',
    icon: ListChecks,
    label: 'Habitudes',
  },
]

interface NavSideListProps {
  onItemClick?: () => void
  className?: string
}

export function NavSideList({ onItemClick, className = '' }: NavSideListProps) {
  return (
    <ul id="main-nav-list" className={`main-nav__list ${className}`}>
      {navItems.map((item) => (
        <li key={item.to as string}>
          <Link
            to={item.to}
            className="main-nav__link"
            onClick={onItemClick}
            aria-label={item.label}
          >
            <item.icon size={18} className="main-nav__icon" aria-hidden="true" />
            <span className="main-nav__label">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
