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
                    obj["err"] = errorCode.E06.message;
                    res.send(obj);
                } else if (result == errorCode.E05.message) {
                    obj["200"] = "OK"
                    obj["err"] = result;
                    res.send(obj);
                } else {
                    obj["200"] = "OK"
                    obj['result'] = result;
                    res.send(obj);
                }
            })
        //}
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
                obj["result"] = "대여중인 기자재 / 강의실이 없습니다";
                res.send(obj);
            } else if (result == "err") {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"]= "OK";
                obj["result"] = result;
                res.send(result);
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
                obj['result'] = "대여한 기자재 및 강의실이 없습니다.";
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
                obj["result"] = "연체중인 기자재 / 강의실이 없습니다";
                res.send(obj);
            } else if (result == "err") {
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            } else {
                obj["200"]= "OK";
                obj["result"] = result;
                res.send(result);
            }
        })
    },

    LateRentalList:(req,res)=>{
        rentalService.LateRentalList()
        .then((result)=>{
            let obj = {};

            if (result == false) {
                obj["200"]= "OK";
                obj["result"] = "연체중인 사용자가 없습니다.";
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
                res.send(result);
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
                obj["result"] = "대여 데이터베이스의 값에 등록된 값이 없습니다"
                res.send(obj);
            }

            else{
                obj["200"]= "OK";
                obj["err"] = errorCode.E00.message;
                res.send(obj);
            }
            
        })
    },

}



