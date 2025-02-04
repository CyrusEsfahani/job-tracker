import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="fixed w-full bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-teal-600">
              JobTrack
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}