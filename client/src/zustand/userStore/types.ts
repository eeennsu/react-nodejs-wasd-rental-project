export type SessionUserInfo = {
    user_id: string;
    user_email: string;
    user_student_number: number;
    user_name: string;
    user_license: UserLicense;
    department_id: string;
}

export type UserStoreType = {
    isLogin: boolean;
    setLogin: () => void;
    setLogout: () => void;

    user: SessionUserInfo | null,
    setUser: (login: SessionUserInfo| null) => void;

    token: string;
    setToken: (token: string) => void;
}