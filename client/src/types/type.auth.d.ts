type UserLicense = 1 | 4;

interface Department {
    department_id: number;
    department_name: string;
}

// signUp API의 매개변수 회원가입할 때 필요한 유저 정보를 담고 있음
interface SignUpUser {
    user_id: string;
    user_pw: string;
    user_name: string;
    user_email: string;
    user_student_number: string;
    department_id: string;
}

// 서버에서 응답받는 모든 유저에 대한 속성이 담겨 있음
interface DetailUser {
    user_id: string;
    user_pw: string;
    user_email: string;
    user_name: string;
    user_student_number: string;
    user_created_at: string;
    user_license: UserLicense;
    department_id: number;
    manager_approval: boolean;
}

// signUp API의 response           200, suc 타입 조정 필요
interface ResSignUp {
    "200"?: OK;
    suc: string | boolean;
    result?: DetailUser;
    error?: string;
}

// login API의 매개변수
interface LoginUser {
    user_id: string;
    user_pw: string;
}

// login API의 response
interface ResLogin {
    "200"?: OK;
    login?: {
        user_id: string;
        user_pw: string;
        user_email: string;
        user_student_number: string;
        user_name: string;
        user_created_at: string;
        user_license: UserLicense;
        department_id: string;
    }, 
    token?: {
        token: string
    }
    err?: string;
}

// searchId API의 매개변수
interface SearchId {
    user_name: string;
    user_email: string;
    user_student_number: string;
}

// searchID API의 response
interface ResSearchId {
    '200': OK;
    result?: string;
    err?: string;
}

// checkId API의 response
interface ResCheckId {
    '200': OK;
    result: string;
}

// changePW API의 매개변수
interface ChangePw {
    user_pw: string;
}

// changePW API의 response
interface ResChangePw {
    '200': OK;
    result: string;
}

// 회원가입 신청 목록 API의 response, result 타입 조정 필요
interface ResListPendingUsers {
    '200': OK;
    result?: DetailUser[];           // DetailUser의 배열
    msg?: string;
}

// sendMail API의 매개변수
interface SendMail {
    user_email: string;
}

// sendMail API의 response
interface ResSendMail {
    '200': OK,
    result: {
        toEmail: string;
        code: number;
    }
}

// 유저 디비에 있는 모든 정보 불러오기 api의 response,   result 타입 조정 필요
interface ResUserTableAll {
    '200': OK;
    result?: DetailUser[];           // DetailUser의 배열
    msg?: string;
}

interface ApproveUser {
    user_id: string;
}

interface ResApproveUser {
    '200': OK;
    result: string;
}

// checkId API의 매개변수
interface CheckId {
    user_id: string;
}
