import StatsCard from '../components/analytics/StatsCard'
import ProgressChart from '../components/analytics/ProgressChart'

const stats = [
  { title: 'Total Applications', value: '24', change: '+12%' },
  { title: 'Interview Rate', value: '58%', change: '+8%' },
  { title: 'Rejection Rate', value: '22%', change: '-3%' },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Progress Overview</h2>
        <ProgressChart />
      </div>
    </div>
  )
}