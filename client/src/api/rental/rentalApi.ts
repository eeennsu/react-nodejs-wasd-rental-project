import axiosPri from '../config/axiosPr';
import axiosPub, { PAGE_LIMIT } from '../config/axiosPu';

/* 
    1. 유저 토큰 필요, 마스터 토큰 필요 이런거는 무시
    2. page 매개변수에는 현재 페이지정보가 담긴 number값이 매개변수로 들어가면 됨 ex) 1, 2, 3 등등..
    3. 모든 함수에 들어가는 매개변수 형태는 컨트롤 + 우클릭해서 어떤 타입이 필요한지 확인 가능
*/

// 유저 토큰 필요 / 타블렛, VR 기기 대여
export const rentalTool_API = (rentalToolInfo: RentalTool) => axiosPri.post<ResRentalTool>('/rental/rentalTool', rentalToolInfo);

// 유저 토큰 필요 / 타블렛, VR 기기 반납
export const returnTool_API = (returnToolInfo: ReturnTool) => axiosPri.post<ResReturnTool>('/rental/returnTool', returnToolInfo);

// 유저 토큰 필요 / 타블렛, VR 기기 연장
export const extensionTool_API = (extensionTool: ExtensionTool) => axiosPri.post<ResExtensionTool>('/rental/extensionTool', extensionTool);

// 유저 토큰 필요 / 강의실 대여
export const rentalClassRoom_API = (rentalClassRoom: RentalClassroom) => axiosPri.post<ResRentalClassroom>('/rental/rentalClassRoom', rentalClassRoom);

// 유저 토큰 필요 / 강의실 반납
export const returnClassRoom_API = (returnClassRoom: ReturnClassroom) => axiosPri.post<ResReturnClassroom>('/rental/returnClassRoom', returnClassRoom);

// 토큰 필요 x / 대여 중인 강의실 불러오기
export const notClassroomCount_API = (classroomName: ClassRoomName) => axiosPri.get<ResNotClassroomCount>(`/rental/NotClassCount/${classroomName}`);

// 토큰 필요 x / 대여 중인 VR, 테블릿 모두 불러오기
export const viewRental_API = () => axiosPri.get<ResViewRental>(`/rental/ViewRental/1`);

// 유저 토큰 필요 / 사용자의 현재 대여 목록 확인 (마이페이지는 페이지네이션이 필요)
export const myRentalList_API_MY_PAGE = (user_id: string) => axiosPri.get<ResMyRentalList>(`/rental/myRentalList/${user_id}`);

// 유저 토큰 필요 / 사용자의 현재 대여 목록 확인 (렌탈페이지는 페이지네이션이 필요 x)
export const myRentalList_API_RENTAL_PAGE = (user_id: string) => axiosPri.get<ResMyRentalList>(`/rental/myRentalList/${user_id}/${1}/${1000}`);

// 마스터 토큰 필요 / 기자재 삭제 
export const deleteTool_API = (tool_id: string) => axiosPri.get<ResDeleteTool>(`/tool/deleteTool/${tool_id}`);

// 유저 토큰 필요 / 사용자의 역대 대여 목록 (마이페이지는 페이지네이션이 필요하므로 이거 사용)
export const myAllRentalList_API_MY_PAGE = (user_id: string, page: number) => axiosPri.get<ResMyAllRentalList>(`/rental/myAllRentalList/${user_id}/${page}/${PAGE_LIMIT}`); 

// 유저 토큰 필요 / 사용자의 현재 대여 목록 확인 (렌탈페이지는 페이지네이션이 필요 x)
export const myAllRentalList_API_RENTAL_PAGE = (user_id: string) => axiosPri.get<ResMyAllRentalList>(`/rental/myAllRentalList/${user_id}/${1}/${1000}`); 

// 유저 토큰 필요 / 사용자의 연체 목록
export const myLateRentalList_API = (user_id: string) => axiosPri.get<ResMyLateRentalList>(`/rental/myLateRentalList/${user_id}`);

// 마스터 토큰 필요 / 연체 중인 사용자의 목록
export const lateRentalList_API = () => axiosPri.get<ResLateRentalList>('/rental/LateRentalList');

// 마스터 토큰 필요 / rentalDB에 있는 모든 정보 불러오기
export const rentalTableAll_API = () => axiosPri.post<ResRentalTableAll>('/rental/rentalTableAll');