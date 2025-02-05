import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'
import { XMarkIcon } from '@heroicons/react/24/outline'

type FormValues = {
  company: string
  role: string
  status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected'
  deadline: string
  notes?: string
}
interface AddJobModalProps {
    isOpen: boolean;
    closeModal: () => void;
  }
  export default function AddJobModal({ isOpen, closeModal }: AddJobModalProps) {
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Add API call here
      console.log('New job:', data)
      closeModal()
      reset()
    } catch (error) {
      console.error('Error adding job:', error)
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
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-semibold">Add New Job</Dialog.Title>
            <button
              onClick={closeModal}
              className="p-1 text-gray-500 hover:text-gray-700 rounded-lg"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company *
              </label>
              <input
                {...register('company', { required: true })}
                className={`w-full px-3 py-2 border ${
                  errors.company ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">Company is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Role *
              </label>
              <input
                {...register('role', { required: true })}
                className={`w-full px-3 py-2 border ${
                  errors.role ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
              />
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">Role is required</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status *
                </label>
                <select
                  {...register('status', { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="Applied">Applied</option>
                  <option value="Interviewing">Interviewing</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deadline *
                </label>
                <input
                  type="date"
                  {...register('deadline', { required: true })}
                  className={`w-full px-3 py-2 border ${
                    errors.deadline ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                {...register('notes')}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Add Job
            </button>
          </form>
        </Dialog.Panel>
      </motion.div>
    </Dialog>
  )
}