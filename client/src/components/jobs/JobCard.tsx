import { motion } from 'framer-motion'
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline'

export default function JobCard({ job }) {
  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-3"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-teal-50 rounded-lg">
          <BriefcaseIcon className="w-5 h-5 text-teal-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{job.company}</h3>
          <p className="text-sm text-gray-600">{job.role}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <CalendarIcon className="w-4 h-4" />
        <span>{new Date(job.deadline).toLocaleDateString()}</span>
      </div>
    </motion.div>
  )
}