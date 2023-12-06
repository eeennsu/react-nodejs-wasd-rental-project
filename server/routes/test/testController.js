const errorCode = require('../../config/errorCode');
const {Img,User}=require('../../models');
const testService = require("./testService")

module.exports = {

    testUpload: (req,res) =>{
        const body = req.body
        const img = req.file
        console.log(img.location)
        console.log(body)

        testService.testUpload(body,img)
        .then((result) => {
            let obj = {} 
            if (result != false) {
                obj["suc"] = true;
                obj["result"] = result
                res.send(obj);
            } else {
                obj["suc"] = false;
                res.send(obj)
            }
        })
    },

    getTest: (req,res)=>{

        const userId = req.params.user_id

        const enCode = encodeURI("이윤태")

      

        const deCode = decodeURI(enCode)
        console.log("인코딩된값",enCode)
        console.log("디코딩 된 값",deCode)

        testService.getTest(userId)
        .then((result)=>{
            let obj = {};

            if(result !=false){
                obj["200"] = true;
                obj["result"] = result;
                res.send(obj);
            }
            else {
                obj["err"] 
                res.send(obj);
            }
        })

    },

    ViewRental:(req,res)=>{
        departmentId=req.params.department_id
        testService.ViewRental(departmentId)
        .then((result)=>{
            let obj ={}
            if(result.length==0){
                obj["200"] = "OK"
                obj["msg"] = "대여중인 기자재가 없습니다."
                res.send(obj)
            }

            else if (result=='err') {
                obj["200"] = "OK"
                obj["msg"] = errorCode.E00.message
                res.send(obj)
            }

            else{
                obj["200"] = "OK"
                obj["result"] = result
                res.send(obj) 
            }
        })
    },
}