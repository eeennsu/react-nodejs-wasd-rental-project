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
            console.log(result)
            let obj ={}
            res.send(result)
        })
    }
}