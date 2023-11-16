import { useEffect, useState } from 'react';
import { useUserStore } from '../../zustand/index';
import { UserStoreType } from '../../zustand/userStore/types';
import { LOGIN_SESSION_STORAGE } from '../../zustand/userStore/useUserStore';

const getUserInfo = () => {
    
    const { isLogin, loginResponse } = useUserStore();

    const { login, token: _token } = loginResponse!;

    const { user_email, user_id, user_name, user_student_number, user_license, department_id } = login!;
    const { token } = _token!;

    return { 
        isLogin, user_email, user_id, user_name, user_student_number, user_license, department_id, token
    };
}

export default getUserInfo;