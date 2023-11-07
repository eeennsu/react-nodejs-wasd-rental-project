import axiosInst from '../axiosInst';

export const signUp_API = (detailUser: SignUpUser) => axiosInst.post<ISignUpRes>('/auth/signUp', detailUser);

export const login_API = (user: LoginUser) => axiosInst.post<ILoginRes>('/auth/login', user);

export const checkId_API = (userId: CheckId) => axiosInst.post<ICheckIdRes>('/auth/checkId', userId);

export const searchId_API = (userId: SearchId) => axiosInst.post<ISearchIdRes>('/auth/searchId', userId);

export const changePw_API = (password: ChangePw) => axiosInst.post<IChangePwRes>('/auth/changePW', password);

export const sendMail = (email: SendMail) => axiosInst.post<ISendMailRes>('/auth/sendMail', email);