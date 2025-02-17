interface StatsCardProps {
  title: string
  value: string
  change: string
  Icon: React.ElementType
  color: string
}

export default function StatsCard({ title, value, change, Icon, color }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <span className={`text-sm ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {change} from last month
          </span>
        </div>
        <div className={`${color} p-4 rounded-full`}>
          <Icon className="w-6 h-6 text-gray-700" />
        </div>
      </div>
    </div>
  )
}