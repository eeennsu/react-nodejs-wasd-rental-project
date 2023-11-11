const userService = require('./userService');
const errorCode = require('../../config/errorCode');

module.exports = {

    viewInfo:(req,res) =>{

        const userId=req.params.user_id

        userService.viewInfo(userId)
        .then((result)=>{

            let obj = {};

            if(result==false){
                obj["200"] = 'OK';
                obj['err'] = "회원정보가 올바르지 않습니다"
                res.send(obj)
            }
            else if (result=="err"){
                obj["200"] = 'OK';
                obj['err'] = errorCode.E00.message;
                res.send(obj)
            }
            else{
                obj["200"] = 'OK';
                obj['err'] = result;
                res.send(obj)
            }

        })
    },

    changeInfo:(req,res)=>{
        const body = req.body
        userService.changeInfo(body)
        .then((result)=>{
            let obj = {};
           if(result=="No Update"){
            obj["200"] = 'OK';
            obj['err'] = "회원정보가 수정되지 않았습니다.";
            res.send(obj)
           }
           else if (result=='err'){
            obj["200"] = 'OK';
            obj['err'] = `${errorCode.E00.message} 혹은 id값이 입력되지 않았습니다.`;
            res.send(obj)
           }
           else if (result=="No Update"){
            obj["200"] = 'OK';
            obj['err'] = "업데이트가 진행되지 않았습니다";
            res.send(obj)
           }
           else if (result=="Null"){
            obj["200"] = 'OK';
            obj['err'] = "값이 입력되지 않았습니다.";
            res.send(obj)
           }

           else{
            obj["200"] = 'OK';
            obj["suc"] = '회원정보가 수정되었습니다.';
            obj['result'] = result;
            res.send(obj)
           }
        })
    },
}