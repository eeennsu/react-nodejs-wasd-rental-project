export type UserStoreType = {
    isLogin: boolean;
    setLogin: () => void;
    setLogout: () => void;

    login: ResLogin['login'] | null,
    setLoginInfo: (login: ResLogin['login'] | null) => void;

    token: string;
    setToken: (token: string) => void;
}