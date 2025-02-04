import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'

export default function ConfirmModal({
  isOpen,
  closeModal,
  title,
  message,
  onConfirm
}) {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed inset-0 flex items-center justify-center p-4"
      >
        <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl p-6">
          <Dialog.Title className="text-lg font-semibold mb-2">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-gray-600 mb-6">
            {message}
          </Dialog.Description>

          <div className="flex justify-end space-x-3">
            <button
              onClick={closeModal}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm()
                closeModal()
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Confirm
            </button>
          </div>
        </Dialog.Panel>
      </motion.div>
    </Dialog>
  )
}