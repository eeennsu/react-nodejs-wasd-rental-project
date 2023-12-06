import axiosPri from '../config/axiosPr';
import { PAGE_LIMIT } from '../config/axiosPu';

export const logList_API = (page: number) => axiosPri.get<ResLogList>(`/log/logList/${page}/${PAGE_LIMIT}`);