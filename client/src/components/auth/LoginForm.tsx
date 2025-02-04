import { useForm, SubmitHandler } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'

type FormValues = {
  email: string
  password: string
}

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          {...register('email', { required: true })}
          className={`w-full px-3 py-2 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password *
        </label>
        <input
          type="password"
          {...register('password', { required: true })}
          className={`w-full px-3 py-2 border ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
      >
        Sign In
      </button>
    </form>
  )
}