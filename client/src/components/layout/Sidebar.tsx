import { NavLink } from 'react-router-dom'
import {
  ChartBarIcon,
  BriefcaseIcon,
  CalendarIcon,
  CogIcon,
} from '@heroicons/react/24/outline'

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: ChartBarIcon },
    { name: 'Jobs', path: '/jobs', icon: BriefcaseIcon },
    { name: 'Analytics', path: '/analytics', icon: CalendarIcon },
    { name: 'Settings', path: '/settings', icon: CogIcon },
  ]

  return (
    <aside className="fixed left-0 top-16 h-full w-64 bg-white border-r border-gray-200">
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}