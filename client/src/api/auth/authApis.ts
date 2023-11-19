import axiosPri from '../config/axiosPr';
import axiosPu, { PAGE_LIMIT } from '../config/axiosPu';

/* 
    1. 유저 토큰 필요, 마스터 토큰 필요 이런거는 무시
    2. page 매개변수에는 현재 페이지정보가 담긴 number값이 매개변수로 들어가면 됨 ex) 1, 2, 3 등등..
    3. 모든 함수에 들어가는 매개변수 형태는 컨트롤 + 우클릭해서 어떤 타입이 필요한지 확인 가능
*/

// 회원가입
export const signUp_API = (detailUser: SignUpUser) => axiosPu.post<ResSignUp>('/auth/signUp', detailUser);

// 로그인
export const login_API = (user: LoginUser) => axiosPu.post<ResLogin>('/auth/login', user);

// 아이디 검색
export const searchId_API = (userId: SearchId) => axiosPu.post<ResSearchId>('/auth/searchId', userId);

// 마스터 토큰 필요 / 회원가입 승인 
export const approveUser_API = (approveUser: ApproveUser) => axiosPri.post<ResApproveUser>('/auth/approveUser', approveUser); 

// 비밀번호 변경
export const changePw_API = (password: ChangePw) => axiosPu.post<ResChangePw>('/auth/changePW', password);

// 마스터 토큰 필요 / 회원가입 신청 목록,  page 매개변수에는 현재 페이지정보가 담긴 number값이 매개변수로 들어가면 됨 ex) 1, 2, 3 등등..
export const listPendingUsers_API = (page: number) => axiosPri.post<ResListPendingUsers>(`/auth/listPendingUsers/${page}/${PAGE_LIMIT}`);

// 이메일 인증
export const sendMail = (email: SendMail) => axiosPu.post<ResSendMail>('/auth/sendMail', email);

// 마스터 토큰 필요 / userDB에 있는 모든 정보 불러오기
export const userTableAll_API = () => axiosPri.get<ResUserTableAll>('/auth/UserTableAll');

// 아이디 중복 확인
export const checkId_API = (userId: CheckId) => axiosPu.post<ResCheckId>('/auth/checkId', userId);