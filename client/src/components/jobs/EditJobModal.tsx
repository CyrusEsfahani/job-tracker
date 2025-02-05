import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'
import { XMarkIcon } from '@heroicons/react/24/outline'
import type { Job } from '../../types/types'

interface EditJobModalProps {
    isOpen: boolean;
    closeModal: () => void;
    job: Job;
  }
  

  export default function EditJobModal({ isOpen, closeModal, job }: EditJobModalProps) {
 const { register, handleSubmit, formState: { errors }, reset } = useForm<Job>({
    defaultValues: job
  })

  const onSubmit: SubmitHandler<Job> = async (data) => {
    try {
      // Add API call here
      console.log('Updated job:', data)
      closeModal()
    } catch (error) {
      console.error('Error updating job:', error)
    }
  }

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed inset-0 flex items-center justify-center p-4"
      >
        <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl p-6">
          {/* Similar structure to AddJobModal with edit-specific fields */}
          {/* ... */}
        </Dialog.Panel>
      </motion.div>
    </Dialog>
  )
}