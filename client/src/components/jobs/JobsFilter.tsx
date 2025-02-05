import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


interface JobFiltersProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
  }
  
  export default function JobFilters({ searchQuery, setSearchQuery }: JobFiltersProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="relative flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        />
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
      </div>

      <div className="ml-4 flex space-x-3">
        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
          <option>All Statuses</option>
          <option>Applied</option>
          <option>Interviewing</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        
        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
          <option>Newest First</option>
          <option>Oldest First</option>
          <option>Company Name</option>
        </select>
      </div>
    </div>
  )
}