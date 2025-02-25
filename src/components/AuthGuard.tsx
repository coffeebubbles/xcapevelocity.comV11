import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: ('super_admin' | 'agency' | 'client')[];
}

export function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const navigate = useNavigate();
  const { user, profile, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }

    if (!isLoading && user && profile && allowedRoles) {
      if (!allowedRoles.includes(profile.role)) {
        navigate('/dashboard');
      }
    }
  }, [user, profile, isLoading, navigate, allowedRoles]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#FFD700]"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}