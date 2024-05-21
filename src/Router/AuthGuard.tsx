import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';

export function AuthGuard({ isPrivate }: { isPrivate: boolean }) {
  const { signedIn } = useAuth();

  if (signedIn && !isPrivate) {
    return <Navigate to="/tasks" replace />;
  }

  if (!signedIn && isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
