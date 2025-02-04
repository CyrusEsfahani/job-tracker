import { createContext, useContext, useState } from 'react'
import type { Job } from '../types'

type JobsContextType = {
  jobs: Job[]
  addJob: (job: Job) => void
  updateJob: (id: string, updates: Partial<Job>) => void
  deleteJob: (id: string) => void
}

const JobsContext = createContext<JobsContextType>({
  jobs: [],
  addJob: () => {},
  updateJob: () => {},
  deleteJob: () => {},
})

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([])

  const addJob = (job: Job) => {
    setJobs([...jobs, { ...job, id: Date.now().toString() }])
  }

  const updateJob = (id: string, updates: Partial<Job>) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, ...updates } : job
    ))
  }

  const deleteJob = (id: string) => {
    setJobs(jobs.filter(job => job.id !== id))
  }

  return (
    <JobsContext.Provider value={{ jobs, addJob, updateJob, deleteJob }}>
      {children}
    </JobsContext.Provider>
  )
}

export const useJobs = () => useContext(JobsContext)