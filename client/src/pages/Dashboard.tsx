import StatsCard from '../components/analytics/StatsCard'
import ProgressChart from '../components/analytics/ProgressChart'
import { ArrowUpIcon, UsersIcon, BriefcaseIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const stats = [
  { 
    title: 'Total Applications', 
    value: '24', 
    change: '+12%',
    icon: BriefcaseIcon,
    color: 'bg-blue-100'
  },
  { 
    title: 'Interview Rate', 
    value: '58%', 
    change: '+8%',
    icon: ChartBarIcon,
    color: 'bg-green-100'
  },
  { 
    title: 'Rejection Rate', 
    value: '22%', 
    change: '-3%',
    icon: UsersIcon,
    color: 'bg-red-100'
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-500 mt-2">Welcome back, John! Here's your job search progress</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="font-medium text-gray-900">John Doe</p>
              <p className="text-sm text-gray-500">Job Seeker</p>
            </div>
            <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <StatsCard 
              key={stat.title}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              Icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        {/* Progress Chart Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Progress Overview</h2>
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-sm">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Applications
              </span>
              <span className="flex items-center text-sm">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Interviews
              </span>
            </div>
          </div>
          <ProgressChart />
        </div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
            {/* Add recent applications list */}
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Upcoming Interviews</h3>
            {/* Add upcoming interviews list */}
          </div>
        </div>
      </div>
    </div>
  )
}