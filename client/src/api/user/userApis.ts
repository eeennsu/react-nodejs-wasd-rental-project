import axiosPri from '../config/axiosPr';

/* 
    1. 유저 토큰 필요, 마스터 토큰 필요 이런거는 무시
    2. page 매개변수에는 현재 페이지정보가 담긴 number값이 매개변수로 들어가면 됨 ex) 1, 2, 3 등등..
    3. 모든 함수에 들어가는 매개변수 형태는 컨트롤 + 우클릭해서 어떤 타입이 필요한지 확인 가능
*/

// 유저 토큰 필요 / 개인 정보 조회 W
export const viewInfo_API = (user_id: string) => axiosPri.get<ResViewInfo>(`/user/viewInfo/${user_id}`);

// 유저 토큰 필요 / 개인 정보 수정 
export const changeInfo_API = (changeInfo: ChangeInfo) => axiosPri.post<ResChangeInfo>('/user/changeInfo', changeInfo);