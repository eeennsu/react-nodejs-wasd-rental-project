import type { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUserStore } from '../../zustand';
import { shallow } from 'zustand/shallow';

type Props = {
    allowedRoles: UserLicense[];
}

const RequireAuth: FC<Props> = ({ allowedRoles }) => {
  
    const location = useLocation();
    const { isLogin, user_license } = useUserStore(state => ({
        isLogin: state.isLogin,
        user_license: state.user?.user_license
    }), shallow);

    return (
        allowedRoles.find(role => role === user_license) ? 
            <Outlet />
            : isLogin 
                ? <Navigate to='/unauthorized' state={{ from: location }} replace />
                : <Navigate to='/sampleLogin' state={{ from: location }} replace />
    );
};

export default RequireAuth;