export type UserStoreType = {
    isLogin: boolean;
    setLogin: () => void;
    setLogout: () => void;

    user: ResLogin['login'] | null,
    setUser: (login: ResLogin['login'] | null) => void;

    token: string;
    setToken: (token: string) => void;
}