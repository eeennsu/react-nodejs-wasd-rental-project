import axiosPr from '../config/axiosPr';
import { PAGE_LIMIT } from '../config/axiosPu';

/* 
    1. 유저 토큰 필요, 마스터 토큰 필요 이런거는 무시
    2. page 매개변수에는 현재 페이지정보가 담긴 number값이 매개변수로 들어가면 됨 ex) 1, 2, 3 등등..
    3. 모든 함수에 들어가는 매개변수 형태는 컨트롤 + 우클릭해서 어떤 타입이 필요한지 확인 가능
*/

// 마스터 토큰 필요 / 기자재 추가
export const addTool_API = (tool: Tool) => axiosPr.post<ResAddTool>('/tool/addTool', tool);

// 마스터 토큰 필요 / 기자재 수정
export const updateTool_API = (tool: Tool) => axiosPr.post<ResUpdateTool>('/tool/updateTool', tool);

// 유저 토큰 필요 / 기자재 1개 조회
export const oneViewTool_API = (tool_id: string) => axiosPr.get<ResOneViewTool>(`/tool/viewTool/${tool_id}`);  

// 유저 토큰 필요 / 기자재 전체 조회 
export const viewTools_API = (page: number) => axiosPr.get<ResViewTools>(`/tool/viewTools/${page}/100`);

// 유저 토큰 필요 / 기자재 검색 
export const searchTool_API = (toolSearch: string, page: number) => axiosPr.get<ResSearchTool>(`/tool/searchTool/${toolSearch}/${page}/${PAGE_LIMIT}`); 

// 유저 토큰 필요 / 기자재 유형에 따른 정렬 
export const rangeTool_API = (tool_name: ToolName, page: number) => axiosPr.get<ResRangeTool>(`/tool/rangeTool/${tool_name}/${page}/${PAGE_LIMIT}`);

// 유저 토큰 필요 / 대여 가능한 기자재, 강의실의 개수
export const rentalToolCount_API = (tool_name: string) => axiosPr.get<ResRentalToolCount>(`/tool/rentalToolCount/${tool_name}`);

// 유저 토큰 필요 / 대여 불가능한 기자재, 강의실의 개수
export const notRentalToolCount_API = (tool_name: string) => axiosPr.get<ResRentalToolCount>(`/tool/notRentalToolCount/${tool_name}`);

// 관리자 토큰 필요 / 기자재 대여 불가 처리
export const cannotRental_API = (tool_id: string) => axiosPr.get<ResCanRental>(`/tool/cannotRental/${tool_id}`);

// 마스터 토큰 필요 / 기자재 대여 가능 처리
export const canRental_API = (tool_id: string) => axiosPr.get<ResCanRental>(`/tool/canRental/${tool_id}`);