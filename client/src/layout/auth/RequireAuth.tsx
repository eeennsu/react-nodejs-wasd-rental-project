import type { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUserStore } from '../../zustand';

type Props = {
    allowedRoles: Array<1 | 4>;
}

const RequireAuth: FC<Props> = ({ allowedRoles }) => {
  
    const location = useLocation();
    const { isLogin, user_license } = useUserStore(state => ({
        isLogin: state.isLogin,
        user_license: state.login?.user_license
    }));

    return (
        allowedRoles.find(role => role === user_license) ? 
            <Outlet />
            : isLogin 
                ? <Navigate to='/unauthorized' state={{ from: location }} replace />
                : <Navigate to='/sampleLogin' state={{ from: location }} replace />
    );
};

export default RequireAuth;