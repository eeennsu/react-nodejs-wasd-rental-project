export type UserStoreType = {
    // id: string;
    // setId: (id: string) => void;
    
    // password: string;
    // setPassword: (password: string) => void;

    isLogin: boolean;
    setLogin: () => void;
    setLogout: () => void;

    loginResponse: ResLogin | null,
    setLoginResponse: (loginResponse: ResLogin) => void;
}