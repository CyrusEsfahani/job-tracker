import { useState } from 'react'
import AddJobModal from './AddJobModal'
import JobFilters from './JobsFilter'
import { PlusIcon } from '@heroicons/react/24/solid'
import type { Job, DropResult } from '../../types/types';


interface JobBoardProps {
    jobs: Job[];
    onDragEnd: (result: DropResult) => void;
  }
  
  export default function JobBoard({ jobs, onDragEnd }: JobBoardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

   // ✅ Defined filteredJobs
   const filteredJobs = jobs.filter(job => 
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ✅ Defined handleDragEnd function
  const handleDragEnd = (result: DropResult) => {
    console.log("Dragged:", result);
  };


  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Job Applications</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Job
          </button>
        </div>

        <JobFilters 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <JobBoard jobs={filteredJobs} onDragEnd={() => {}} />


        <AddJobModal 
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  )
}