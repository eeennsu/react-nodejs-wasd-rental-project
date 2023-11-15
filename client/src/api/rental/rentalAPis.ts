import axiosInst from '../axiosInst';

/* 
    1. 유저 토큰 필요, 마스터 토큰 필요 이거는 일단 무시
    2. page 매개변수에는 현재 페이지정보가 담긴 number값이 매개변수로 들어가면 됨 ex) 1, 2, 3 등등..
    3. 모든 함수에 들어가는 매개변수 형태는 컨트롤 + 우클릭해서 어떤 타입이 필요한지 확인 가능.
*/

// 유저 토큰 필요 / 기자재 대여
export const rentalTool_API = (rentalToolInfo: RentalTool) => axiosInst.post('/rental/rentalTool', rentalToolInfo);

// 유저 토큰 필요 / 기자재 반납
export const returnTool_API = (returnToolInfo: ReturnTool) => axiosInst.post('/rental/returnTool', returnToolInfo);

// 유저 토큰 필요 / 기자재 연장
export const extensionTool_API = (extensionTool: ExtensionTool) => axiosInst.post('/rental/extensionTool', extensionTool);

// 유저 토큰 필요 / 현재 대여 목록 확인
export const myRentalList_API = (user_id: string) => axiosInst.get(`/rental/myRentalList/${user_id}`);

// 마스터 토큰 필요 / 기자재 삭제 / (오류 수정중이라고 함)
export const deleteTool_API = (tool_id: string) => axiosInst.get(`/tool/deleteTool/${tool_id}`);

// 유저 토큰 필요 / 사용자의 역대 대여 목록
export const myAllRentalList_API = (user_id: string) => axiosInst.get(`/rental/myAllRentalList/${user_id}`); 

// 마스터 토큰 필요 / 사용자의 연체 목록
export const myLateRentalList_API = () => axiosInst.get('/rental/LateRentalList');

// 마스터 토큰 필요 / rentalDB에 있는 모든 정보 불러오기
export const rentalTableAll_API = () => axiosInst.post('/rental/rentalTableAll');