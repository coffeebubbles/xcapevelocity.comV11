import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

export function LoginPage() {
  const navigate = useNavigate();
  const signIn = useAuthStore(state => state.signIn);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signIn(formData.email, formData.password);
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="bg-[#111111] rounded-3xl p-8">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Welcome Back</h1>
          
          {error && (
            <div className="bg-red-500/10 text-red-500 p-4 rounded-xl flex items-center gap-2 mb-6">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          <form netlify method="POST" name="Login page" onSubmit={handleSubmit} className="space-y-6" data-netlify="true">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="relative group w-full"
            >
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </div>
            </button>

            <div className="text-center text-gray-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#FFD700] hover:underline">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}