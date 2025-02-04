import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './components/auth/Login';  // Corrected path
import Signup from './components/auth/Signup'; // Corrected path
import ForgotPassword from './features/auth/ForgotPassword';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            {/* Other protected routes */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}