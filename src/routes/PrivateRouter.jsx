import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentAuth } from '../store/authSlice';

function PrivateRouter() {
  const { authenticated, accessToken } = useSelector(getCurrentAuth);
  const location = useLocation();

  if (!authenticated || !accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}

export default PrivateRouter;
