const jwt = require('jsonwebtoken')
const secretKey = require("../config/jwt").secretKey
const options = require("../config/jwt").option

const TOKEN_EXPIRED = -3; //토큰의 유효기간 만료
const TOKEN_INVALID = -2; //토큰의 유효성 검사 실패, 유효하지 않은 토큰

module.exports = {
    sign: (user) => { //sign메소드는 토큰을 만들어주어 클라이언트에게 발급

        const payload = { 
            idx: user.user_id,
            license:user.user_license,
            //exp: Math.floor(Date.now() / 1000) + 10  //3초 (테스트용)
            //exp: Math.floor(Date.now() / 1000) + (60 * 1) // 1분
            exp: Math.floor(Date.now() / 1000) + 900 // 15분
            //exp: Math.floor(Date.now() / 1000) + 600 // 10분
        };

        const result = {
            token: jwt.sign(payload, secretKey, options),
        }
        console.log(result)
        return result;
    },

    verify : async (token) => { //verity 메소드는 발급받은 토큰이 제대로 만들어진 토큰인지 검증함
        let decode;
        try {
            decode = jwt.verify(token, secretKey,{ignoreExpiration : false})
            console.log("decode값:",decode)
            
        }
        catch(err){
            if(err.message === 'jwt expired'){
                console.log('expired token')
                return TOKEN_EXPIRED;
            } else if (err.message === 'invalid token'){
                console.log('invalid token');
                console.log(TOKEN_INVALID);
                return TOKEN_INVALID;
            } else {
                console.log("invalid token")
                return TOKEN_INVALID;
            }
        }
        return decode;
    }
}