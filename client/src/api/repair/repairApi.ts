import axiosPri from '../config/axiosPr';
import { PAGE_LIMIT_2 } from '../config/axiosPu';

/* 
    1. 유저 토큰 필요, 마스터 토큰 필요 이런거는 무시
    2. page 매개변수에는 현재 페이지정보가 담긴 number값이 매개변수로 들어가면 됨 ex) 1, 2, 3 등등..
    3. 모든 함수에 들어가는 매개변수 형태는 컨트롤 + 우클릭해서 어떤 타입이 필요한지 확인 가능
*/

// 유저 토큰 필요 / 수리 요청 
export const repairTool_API = (repairTool: RepairTool) => axiosPri.post<ResRepairTool>('/repair/repairTool', repairTool);

// 마스터 토큰 필요 / 수리 확인
export const checkRepair_API = (checkRepair: CheckRepair) => axiosPri.post<ResChekRepair>('/repair/checkRepair', checkRepair);

// 유저 토큰 필요 / 사용자의 수리 요청 목록
export const myRepairList_API = (user_id: string) => axiosPri.get<ResMyRepairList>(`/repair/myRepairList/${user_id}`); 

// 유저 토큰 필요 / 사용자의 수리 요청 목록 자세히
export const myRepairView_API = (user_id: string, repair_id: number) => axiosPri.get<ResMyRepairView>(`/repair/myRepairView/${user_id}/${repair_id}`);

// 관리자 토큰 필요 / 미확인 수리 요청 보기
export const notRepairList_API = (page: number) => axiosPri.get<ResNotRepairList>(`/repair/notRepairList/${page}/${PAGE_LIMIT_2}`);

// post?
// 관리자 토큰 필요 / 지금까지 들어온 모든 수리 요청 보기와 rental DB에 있는 모든 정보 불러오기 
export const repairList_API = () => axiosPri.post<unknown>(`/repair/RepairList`);