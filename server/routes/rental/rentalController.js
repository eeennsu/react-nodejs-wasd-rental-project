const rentalService = require("./rentalService")
const errorCode = require('../../config/errorCode')
module.exports={

    rentalTool: (req, res) => {
        const body = req.body;

        rentalService.rentalTool(body)
            .then(result => {
                let obj = {};
                if (result == false) {
                    obj["200"] = "OK"
                    obj["err"] = errorCode.E07.message;
                    res.send(obj);
                }
                else if(result=="대여불가"){

                    obj["200"] = "OK"
                    obj["err"] = "대여불가능한 기자재 입니다.";
                    res.send(obj);
                } 
                else if (result == "err") {
                    obj["200"] = "OK"
                    obj["err"] = "이미 대여된 기자재 입니다.";
                    res.send(obj);
                } else {
                    obj["200"] = "OK"
                    obj['result'] = result;
                    res.send(obj);
                }
            })
        //}
    },

    rentalClassRoom: (req,res)=>{
        const body = req.body
        
       rentalService.rentalClassRoom(body)
       .then((result)=>{
        let obj ={};

        if(result=="tool_id"){
            obj["200"] = "OK"
            obj["err"] = `${result}값이 비어있습니다.`
            res.send(obj)
        }

        else if(result=="user_id"){
            obj["200"] = "OK"
            obj["err"] = `${result}값이 비어있습니다.`
            res.send(obj)
        }
        else if(result=="rental_date"){
            obj["200"] = "OK"
            obj["err"] = `${result}값이 비어있습니다.`
            res.send(obj)
        }
        else if(result=="rental_due_date"){
            obj["200"] = "OK"
            obj["err"] = `${result}값이 비어있습니다.`
            res.send(obj)
        }
        else if(result=="department_id"){
            obj["200"] = "OK"
            obj["err"] = `${result}값이 비어있습니다.`
            res.send(obj)
        }
        else if (result=="대여 생성 오류"){
            obj["200"] = "OK"
            obj["err"] = `대여 생성 오류`
            res.send(obj)
        }
        else if (result=="로그 생성 오류"){
            obj["200"] = "OK"
            obj["err"] = `로그 생성 오류`
            res.send(obj)
        }
        else{
            obj["200"] = "OK"
            obj["result"] = result
            res.send(obj)
        }

       })
        
    },

    returnClassRoom:(req,res)=>{
        const body = req.body
        rentalService.returnClassRoom(body)
        .then((result)=>{
            console.log(result)
            let obj={}
            if(result=="err"){
                obj["200"] = "OK"
                obj["msg"] = errorCode.E00.message;
                res.send(obj)
            }
            else{
                obj["200"] = "OK"
                obj["result"] = result
                res.send(obj)
            }
        })
    },

    NotClassCount:(req,res)=>{
         const toolId = req.params.tool_id
         console.log(toolId)
        rentalService.NotClassCount(toolId)
        .then((result)=>{
            let obj={};
            if(result==false){
                obj["200"] = "OK"
                obj["msg"] = "대여중인 강의실이 없습니다";
                res.send(obj)
            }
            else if(result=="err"){
                obj["200"] = "OK"
                obj["msg"] = errorCode.E00.message;
                res.send(obj)
            }
            else{
                obj["200"] = "OK"
                obj["result"] = result;
                res.send(obj)
            }
        })
    },

   

    returnTool: (req, res) => {
        const body = req.body;
            rentalService.returnTool(body)
           
                .then(result => {
                    let obj = {};

                    if (result == "null") {
                        obj["200"] = "OK"
                        obj["err"] = errorCode.E15.message;
                        res.send(obj);
                    } else if (result == "extension") {
                        obj["200"] = "OK"
                        obj["err"] = errorCode.E16.message;
                        res.send(obj);
                    } else if (result == "err") {
                        obj["200"] = "OK"
                        obj["err"] = errorCode.E00.message;
                        res.send(obj);
                    } else {
                        obj["200"] = "OK"
                        obj['result'] = result;
                        res.send(obj);
                    }
                })
        
    },

    extensionTool: (req, res) => {
        const body = req.body;

            rentalService.extensionTool(body)
                .then(result => {
                    let obj = {};
                    if (result == false) {
                        obj["200"] = "OK";
                        obj["err"] = errorCode.E00.message;
                        res.send(obj);
                    }
                    else if (result=="extension"){
                        obj["200"]= "OK"
                        obj["err"] = errorCode.E14.message;
                        res.send(obj)
                    } 
                    else if (result == "err") {
                        obj["200"] = "OK";
                        obj["err"] = errorCode.E00.message;
                        res.send(obj);
                    } else {
                        obj['200'] = "OK";
                        obj['result'] = result;
                        res.send(obj);
                    }
                })
        
    },

    myRentalList:(req,res)=>{
        const userId = req.params.user_id
        rentalService.myRentalList(userId)
        .then(result => {
            let obj = {};
            if (result == false) {
                obj["200"]= "OK";
                obj["msg"] = "대여중인 기자재 / 강의실이 없습니다";
                res.send(obj);
            } else if (result == "err") {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"]= "OK";
                obj["result"] = result;
                res.status(200).json({ "200": "OK", result });
            }
            
        })
    },

    myAllRentalList:(req,res)=>{
        const userId = req.params.user_id
        rentalService.myAllRentalList(userId)
        .then((result)=>{
            let obj = {}

            if(result.length==0){
                obj['200'] = "OK";
                obj['msg'] = "대여한 기자재 및 강의실이 없습니다.";
                res.send(obj);
            }
            
            else if (result.length!==0){
                obj['200'] = "OK";
                obj['result'] = result;
                res.send(obj);
            }

            else{
                obj['200'] = "OK";
                obj['err'] = errorCode.E00.message;
                res.send(obj);
            }
            
        })
    },

    myLateRentalList:(req,res)=>{
        const userId = req.params.user_id
        rentalService.myLateRentalList(userId)
        .then((result)=>{
            let obj = {};
            if (result == false) {
                obj["200"]= "OK";
                obj["msg"] = "연체중인 기자재 / 강의실이 없습니다";
                res.send(obj);
            } else if (result == "err") {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"]= "OK";
                obj["result"] = result;
                res.status(200).json({ "200": "OK", result });
            }
        })
    },

    LateRentalList:(req,res)=>{
        rentalService.LateRentalList()
        .then((result)=>{
            let obj = {};

            if (result == false) {
                obj["200"]= "OK";
                obj["msg"] = "연체중인 사용자가 없습니다.";
                res.send(obj);
            } 
            else if (result == "err") {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            } 
            else {
                obj["200"]= "OK";
                obj["result"] = result;
                res.status(200).json({ "200": "OK", result });
            }
        })
    },

    rentalTableAll:(req,res)=>{
        rentalService.rentalTableAll()
        .then((result)=>{
            let obj = {}

            if(result.length!==0){
                obj["200"]= "OK";
                obj["result"] = result
                res.send(obj);
            }

            else if(result.length==0){
                obj["200"]= "OK";
                obj["msg"] = "대여 데이터베이스의 값에 등록된 값이 없습니다"
                res.send(obj);
            }

            else{
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            }
            
        })
    },

    rentalToolList:(req,res)=>{

        rentalService.rentalToolList()
        .then((result)=>{
           
            let obj = {};

            if(result.length==0){
                obj["200"] = "Ok"
                obj["msg"] = "대여중인 기자재가 없습니다"
                res.send(obj);
            }
            else if(result=="err"){
                obj["200"] = "Ok"
                obj["msg"] = errorCode.E00.message
                res.send(obj);
            }
            else{
                obj["200"] = "Ok"
                obj["result"] = result
                res.send(obj);
            }
        })
    },

    
    ViewRental:(req,res)=>{
        departmentId=req.params.department_id
        rentalService.ViewRental(departmentId)
        .then((result)=>{
            let obj ={}
            if(result.length==0){
                obj["200"] = "OK"
                obj["msg"] = "대여중인 기자재가 없습니다."
                res.send(obj)
            }

            else if (result=='err') {
                obj["200"] = "OK"
                obj["err"] = errorCode.E00.message
                res.send(obj)
            }

            else{
                obj["200"] = "OK"
                obj["result"] = result
                res.send(obj) 
            }
        })
    },

    ViewClassRoom:(req,res)=>{
        const toolId=req.params.tool_id

        rentalService.ViewClassRoom(toolId)
        .then((result)=>{

            let obj = {};

            if(result.length==0){
                obj["200"] = "OK"
                obj['msg'] = '대여중인 강의실이 없습니다'
                res.send(obj)
            }

            else if (result=="err"){
                obj["200"] = "OK"
                obj['err'] = errorCode.E00.message;
                res.send(obj)
            }

            else{
                obj["200"] = "OK"
                obj['result'] = result
                res.send(obj)
            }
        })
    },


}



