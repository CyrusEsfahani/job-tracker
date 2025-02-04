interface StatsCardProps {
    title: string;
    value: string;
    change: string;
  }
  
  export default function StatsCard({ title, value, change }: StatsCardProps) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <p className="text-3xl font-semibold text-gray-900">{value}</p>
          <span className="ml-2 text-sm font-medium text-green-600">
            {change}
          </span>
        </div>
      </div>
    )
  }