import axiosInst from '../axiosInst';

// 유저 토큰 필요 / 개인 정보 조회 
export const viewInfo_API = (user_id: string) => axiosInst.get(`/user/viewInfo/${user_id}`);

// 유저 토큰 필요 / 개인 정보 수정 
export const changeInfo_API = (changeInfo: ChangeInfo) => axiosInst.post('/user/changeInfo');