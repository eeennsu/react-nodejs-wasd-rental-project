const jwt = require("../jwt/jwt")
const errorCode = require('../config/errorCode')
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const verifyToken = {
    checkToken: async (req, res, next) =>{
        let token = req.headers.token;
        console.log("token:",token)

        if (!token){ //토큰이 없을 경우
            return res.status(500).json({
                result: false,
                code: "ET1",
                message: errorCode.ET1.message
            });
        }
        const user = await jwt.verify(token);
        console.log("유저값:",user)
       /*  console.log(user.idx) */

        //토큰 유효기한 만료
        if (user === TOKEN_EXPIRED){ 
            return res.status(500).json({
                result: false,
                code: "ET2",
                message: errorCode.ET2.message
            });
        }
        
        //유효하지 않는 토큰
        if(user === TOKEN_INVALID){
            return res.status(500).json({
                result: false,
                code: "ET3",
                message: errorCode.ET3.message,
            })
        }

        if(user === undefined) {
            return res.status(500).json({
                result: false,
                code: "ET1",
                message: errorCode.ET1.message,
            });
        }

        req.idx = user.idx;
        next();
    },

    checkOne: async (req, res, next) => {
        let token = req.headers.token;
        console.log("token:",token);
        
        if(!token){
            return res.status(500).json({
                result: false,
                code: "ET1",
                message: errorCode.ET1.message,
            });
        }
        const user = await jwt.verify(token);
        

        if(user.license > 0){
            next();
        } else {
            
            return res.status(400).json({
                result: false,
                code: "ET4",
                message: errorCode.ET4.message,
            })
        }
    },

    checkMaster: async (req, res, next) => {
        let token = req.headers.token;
        console.log("token:",token);
        
        if(!token){
            return res.status(500).json({
                result: false,
                code: "ET1",
                message: errorCode.ET1.message,
            });
        }
        const user = await jwt.verify(token);

        if(user.license > 3){
            next();
        } else {
            return res.status(400).json({
                result: false,
                code: "ET4",
                message: errorCode.ET4.message,
            })
        }
    },
    
    // checkTwo: async (req, res, next) => {
    //     let token = req.headers.token;
    //     console.log("token:",token);
        
    //     if(!token){
    //         return res.status(500).json({
    //             result: false,
    //             code: "E11",
    //             message: errorCode.E11.message,
    //         });
    //     }
    //     const user = await jwt.verify(token);

    //     if(user.license > 1){
    //         next();
    //     } else {
    //         return res.status(400).json({
    //             result: false,
    //             code: "E11",
    //             message: errorCode.E12.message,
    //         })
    //     }
    // },

    // checkThree: async (req, res, next) => {
    //     let token = req.headers.token;
    //     console.log("token:",token);
        
    //     if(!token){
    //         return res.status(500).json({
    //             result: false,
    //             code: "E11",
    //             message: errorCode.E11.message,
    //         });
    //     }
    //     const user = await jwt.verify(token);

    //     if(user.license > 2){
    //         next();
    //     } else {
    //         return res.status(400).json({
    //             result: false,
    //             code: "E11",
    //             message: errorCode.E12.message,
    //         })
    //     }
    // },

   


    


}

module.exports = verifyToken;