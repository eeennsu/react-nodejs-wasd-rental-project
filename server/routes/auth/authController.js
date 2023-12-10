const authService = require('./authService');
const hashing = require('../../config/hashing');
const salt = require("../../config/config.json").salt;
const jwt = require("../../jwt/jwt");
const errorCode = require('../../config/errorCode');

module.exports = {
    signUp: (req, res) => {
        const body = req.body;
        const hash = hashing.enc(body.user_pw, salt);

        authService.signUp(body, hash)
        .then(result => {
            console.log(result);
            let obj = {};

            if(result=="user_email"){
                obj["200"]= "OK";
                obj["err"] = errorCode.E09.message;
                res.send(obj);
            } else if(result=="user_student_number") {
                obj["200"]= "OK";
                obj["err"] = errorCode.E10.message;
                res.send(obj);
            } else if(result=="user_email, user_student_number"){
                obj["200"]= "OK";
                obj["msg"] = "학번,이메일이 모두 중복된 값 입니다.";
                res.send(obj);
            } else if (result == "err" || result == false) {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"]= "OK";
                obj['msg'] = "회원가입에 성공하였습니다. 관리자 승인 후 로그인 가능합니다";
                obj['result'] = result;
                res.send(obj);
            }
        });
    },

    login: (req, res) => {
        const body = req.body;
        const hash = hashing.enc(body.user_pw, salt);
        authService.login(body, hash)
        .then(result => {
            let obj = {};
            console.log(result);

            if (result == "err") {
                obj["200"]= "OK";
                obj['err'] = errorCode.E00.message;
                res.send(obj);
            } else if (result == "false") {
                obj["200"]= "OK";
                obj['err'] = errorCode.E02.message;
                res.send(obj);
            } 
            else if (result=="approval false") {
                obj["200"]= "OK";
                obj['err'] = errorCode.E17.message;
                res.send(obj);
            }
            else {
                console.log(result);
                obj["200"]= "OK";
                obj['login'] = result;
                const token = jwt.sign(result);
                obj['token'] = token;
                res.send(obj);
            }
        })
        .catch((error) => {
            console.error("Error in checkRepair controller:", error);
            res.status(500).send({ suc: "Error", message: "서버 내부 오류 발생" });
        });
    },

    approveUser:(req,res)=>{
        const body = req.body
        authService.approveUser(body)
        .then((result)=>{

            let obj = {};

            if(result=="err"){
                obj["200"]= "OK";
                obj['err'] = errorCode.E00.message;
                res.send(obj);
            }
            else if(result){
                obj["200"]= "OK";
                obj['result'] = "회원가입이 승인되었습니다";
                res.send(obj);
            }
        })
    },

    listPendingUsers: (req,res)=>{
       
        console.log(typeof(page))
        
        authService.listPendingUsers()
        .then((result)=>{
            let obj = {};
            console.log(result.length)
            
            if(result.length !==0){
                obj["200"]= "OK";
                obj["result"] = result;
                res.send(obj)
            }
            else if(result.length===0){
                obj["200"]= "OK";
                obj["msg"] = "회원가입을 요청한 사용자가 없습니다.";
                res.send(obj)
            }

            else{
                obj["200"]= "OK";
                obj["err"] =errorCode.E00.message;
                res.send(obj)
            }
            
        })
    },

    checkId: (req, res) => {
        const body = req.body;
        authService.checkId(body)
        .then(result => {
            let obj = {};
            if(result == "Null"){
                obj["200"]= "OK";
                obj["err"] = errorCode.E11.message;
                res.send(obj);
            } else if (result) { //아이디가 중복되는 코드
                obj["200"]= "OK";
                obj["err"] = errorCode.E03.message;
                res.send(obj);
            } else {
                obj["200"]= "OK";
                obj["msg"] = "아이디가 중복되지 않습니다.";
                res.send(obj);
            }
        });
    },

    searchId: (req, res) => {
        const body = req.body;
        console.log(body);
        authService.searchId(body)
        .then(result => {
            console.log(result);
            let obj = {};
            if (result != false) {
                obj["200"]= "OK";
                obj["result"] = `${result.user_name}님의 아이디는 ${result.user_id}입니다`;
                res.send(obj);
            } else if (result === false) {
                obj["200"]= "OK";
                obj["err"] = errorCode.E04.message;
                res.send(obj);
            } else {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            }
        });
    },

    searchPw: (req, res) => {
        const body = req.body;
        authService.searchPw(body)
        .then(result => {
            console.log(result);
            let obj = {};
            if (result != false) {
                obj["200"]= "OK";
                obj["result"] = "인증 성공 비밀번호를 변경하여 주세요";
                res.send(obj);
            } else if (result === false) {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            }
        });
    },

    changePw: (req, res) => {
        const body = req.body;
        const hash = hashing.enc(body.user_pw, salt);
        authService.changePw(body, hash)
        .then(result => {
            console.log(result);
            let obj = {};

            if (result != false) {
                obj["200"]= "OK";
                obj["result"] = `비밀번호가 성공적으로 변경되었습니다.`;
                res.send(obj);
            } else if (result === false) {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            }
        });
    },

    sendMail: (req, res) => {
        const email = req.body.user_email;
        authService.sendMail(email)
        .then(result => {
            console.log(result);
            let obj = {};
            if (result == false) {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"]= "OK";
                obj["result"] = result;
                res.send(obj);
            }
        });
    },

    UserTableAll:(req,res)=>{
        authService.UserTableAll()
        .then((result)=>{
            let obj = {}

            if(result.length!==0){
                obj["200"]= "OK";
                obj["result"] = result
                res.send(obj);
            }

            else if(result.length==0){
                obj["200"]= "OK";
                obj["msg"] = "회원정보 데이터베이스의 값에 등록된 값이 없습니다"
                res.send(obj);
            }

            else{
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            }
            
        })
    }
};
