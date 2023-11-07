// signUp API의 매개변수
interface SignUpUser extends LoginUser {
    user_name: string;
    user_email: string;
    user_student_number: string;
    department_id: string;
}

// signUp API의 response
interface ISignUpRes {
    suc: boolean;
    login: {
        user_id: string;
        user_pw: string;
        user_email: string;
        user_student_number: string;
        user_name: string;
        user_created_at: string;
        user_license: number;
        department_id: number;
    };
    token: {
        token: string;
    };
    error?: string;
}

// login API의 매개변수
interface LoginUser {
    user_id: string;
    user_pw: string;
}

// login API의 response
interface ILoginRes {
    suc: boolean;
    login:{
        user_id: stringl
        user_pw: string;
        user_email: string;
        user_student_number: number;
        user_name: string;
        user_created_at: string;
        user_license: number;
        department_id: number;
    },
    token:{
        token: string
    }
    err?: string;
}

// checkId API의 매개변수
interface CheckId {
    user_id: string;
}

// checkId API의 response
interface ICheckIdRes {
    '200': string;
    result: string;
}

// searchId API의 매개변수
interface SearchId {
    user_name: string;
    user_email: string;
    user_student_number: string;
}

// searchID API의 response
interface ISearchIdRes {
    '200': string;
    result: string;
}

// changePW API의 매개변수
interface ChangePw {
    user_pw: string;
}

// changePW API의 response
interface IChangePwRes {
    '200': string;
    result: string;
}

// sendMail API의 매개변수
interface SendMail {
    user_email: string;
}

// sendMail API의 response
interface ISendMailRes {
    '200': string,
    result: {
        toEmail: string;
        code: number;
    }
}