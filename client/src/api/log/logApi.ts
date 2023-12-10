import axiosPri from '../config/axiosPr';
import { PAGE_LIMIT_2 } from '../config/axiosPu';

export const logList_API = (page: number) => axiosPri.get<ResLogList>(`/log/logList/${page}/${PAGE_LIMIT_2}`);