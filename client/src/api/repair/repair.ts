import axiosInst from "../axiosInst";

// 유저 토큰 필요 / 수리 요청 
export const repairTool_API = (repairTool: RepairTool) => axiosInst.post<ResRepairTool>('/repair/repairTool', repairTool);

// 마스터 토큰 필요 / 수리 확인
export const checkRepair_API = (checkRepair: CheckRepair) => axiosInst.post<ResChekRepair>('/repair/checkRepair', checkRepair);

// 유저 토큰 필요 / 사용자의 수리 요청 목록
export const myRepairList_API = (user_id: string) => axiosInst.get<ResMyRepairList>(`/repair/myRepairList/${user_id}`); 

// 유저 토큰 필요 / 사용자의 수리 요청 목록 자세히
export const myRepairView_API = (user_id: string, repair_id: string) => axiosInst.get<ResMyRepairView>(`/repair/myRepairView/${user_id}/${repair_id}`);

// 관리자 토큰 필요 / 미확인 수리 요청 보기
export const notRepairList_API = () => axiosInst.get<ResNotRepairList>(`/repair/notRepairList`);

// post?
// 관리자 토큰 필요 / 지금까지 들어온 모든 수리 요청 보기와 rental DB에 있는 모든 정보 불러오기 
export const repairList_API = () => axiosInst.post<unknown>(`/repair/RepairList`);