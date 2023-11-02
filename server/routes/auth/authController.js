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
                obj["suc"] = false;
                obj["error"] = errorCode.E09.message;
                res.send(obj);
            } else if(result=="user_student_number") {
                obj["suc"] = false;
                obj["error"] = errorCode.E10.message;
                res.send(obj);
            } else if(result=="user_email, user_student_number"){
                obj["suc"] = false;
                obj["error"] = "학번,이메일이 모두 중복된 값 입니다.";
                res.send(obj);
            } else if (result == "err" || result == false) {
                obj["suc"] = false;
                obj["error"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj['suc'] = "회원가입에 성공하였습니다.";
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
                obj['suc'] = false;
                obj['err'] = errorCode.E00.message;
                res.send(obj);
            } else if (result == false) {
                obj['suc'] = false;
                obj['err'] = errorCode.E02.message;
                res.send(obj);
            } else {
                console.log(result);
                obj['suc'] = true;
                obj['login'] = result;
                const token = jwt.sign(result);
                obj['token'] = token;
                res.send(obj);
            }
        });
    },

    checkId: (req, res) => {
        const body = req.body;
        authService.checkId(body)
        .then(result => {
            let obj = {};
            if(result == "Null"){
                obj["200"] = "OK";
                obj["result"] = errorCode.E11.message;
                res.send(obj);
            } else if (result) { //아이디가 중복되는 코드
                obj["200"] = "OK";
                obj["result"] = errorCode.E03.message;
                res.send(obj);
            } else {
                obj["200"] = "OK";
                obj["result"] = "아이디가 중복되지 않습니다.";
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
                obj["200"] = "OK";
                obj["result"] = `${result.user_name}님의 아이디는 ${result.user_id}입니다`;
                res.send(obj);
            } else if (result === false) {
                obj["200"] = "OK";
                obj["result"] = errorCode.E04.message;
                res.send(obj);
            } else {
                obj["200"] = "OK";
                obj["result"] = errorCode.E00.message;
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
                obj["200"] = "OK";
                obj["result"] = "인증 성공 비밀번호를 변경하여 주세요";
                res.send(obj);
            } else if (result === false) {
                obj["200"] = "OK";
                obj["result"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"] = "OK";
                obj["result"] = errorCode.E00.message;
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
                obj["200"] = "OK";
                obj["result"] = `비밀번호가 성공적으로 변경되었습니다.`;
                res.send(obj);
            } else if (result === false) {
                obj["200"] = "OK";
                obj["result"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"] = "OK";
                obj["result"] = errorCode.E00.message;
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
                obj["200"] = "OK";
                obj["result"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"] = "OK";
                obj["result"] = result;
                res.send(obj);
            }
        });
    },
};
