
"use client";
import { useEffect } from 'react';
import { useAuth } from './context/AuthContext';

const AuthWrapper = ({ children }) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user && typeof window !== 'undefined') {
      import('next/router').then((Router) => {
        if (Router.pathname !== '/auth/signin') {
          Router.default.push('/auth/signin');
        }
      });
    }
  }, [user, loading]);

  return children;
};

export default AuthWrapper;



