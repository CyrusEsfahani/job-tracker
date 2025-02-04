import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

export default function SocialLogins() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 bg-white border p-2 rounded hover:bg-gray-50"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
      <button
        onClick={handleGithubLogin}
        className="w-full flex items-center justify-center gap-2 bg-white border p-2 rounded hover:bg-gray-50"
      >
        <AiFillGithub className="text-xl" />
        Continue with GitHub
      </button>
    </div>
  );
}