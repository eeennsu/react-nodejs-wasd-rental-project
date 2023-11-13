const errorCode = require('../../config/errorCode')
const repairService = require('./repairService')
module.exports={

    repairTool:(req,res)=>{
        const body = req.body
        repairService.repairTool(body)
        .then((result)=>{
           
            let obj = {}

            if(result=="Null"){
                obj["200"] = "OK"
                obj['err'] = errorCode.E07.message;
                res.send(obj);
            }

            else if(result=="err"){
                obj["200"] = "OK"
                obj['err'] = errorCode.E00.message;
                res.send(obj);
            }
            else{
                obj["200"] = "OK"
                obj["suc"] = "수리 요청이 완료되었습니다"
                obj['result'] = result;
                res.send(obj);
            }
        })
    },

    checkRepair:(req,res)=>{
        const body = req.body
        repairService.checkRepair(body)
        .then((result)=>{

            let obj = {};

            if(result=="Not Update"){
                obj["200"] = "OK"
                obj['err'] = "수리요청 건이 없거나 같은 값으로 수정이 요청되고 있습니다.";
                res.send(obj);
            }
            else if (result === "err") {
            
                obj["200"] = "OK"
                obj["message"] = errorCode.E00.message;
                res.send(obj);
            }
            else {
                
                obj["200"] = "OK"
                obj["result"] = result; 
                res.send(obj);
            }
        })
        .catch((error) => {
            console.error("Error in checkRepair controller:", error);
            res.status(500).send({ suc: "Error", message: "서버 내부 오류 발생" });
        });
    },

    myRepairList:(req,res)=>{
        const userId = req.params.user_id
       
        repairService.myRepairList(userId)
        .then((result)=>{
            let obj = {};
            if(result.length==0){
                obj["200"] = "OK"
                obj["result"] = "수리요청한 기자재가 없습니다."; 
                res.send(obj);
            }
            else if(result=="err"){
                obj["200"] = "OK"
                obj["err"] = errorCode.E00.message; 
                res.send(obj);
            }
           
            else{
                obj["200"] = "OK"
                obj["result"] = result; 
                res.send(obj);
            }
        })
    },

    myRepairView:(req,res)=>{
        const userId = req.params.user_id
        const repairId = req.params.repair_id

        console.log(userId)
        console.log(repairId)
        repairService.myRepairView(userId,repairId)
        .then((result)=>{
            let obj = {};
            if(result==null){
                obj["200"] = "OK"
                obj["err"] = "user_id 혹은 repair_id값에 맞는 수리요청이 없거나 값이 입력되지 않았습니다."; 
                res.send(obj);
            }
            else if (result=="err"){
                obj["200"] = "OK"
                obj["err"] = errorCode.E00.message;
                res.send(obj)
            }

            else{
                obj["200"] = "OK"
                obj["result"] = result;
                res.send(obj)
            }
            
        })

    },

    RepairList: (req,res) =>{

        repairService.RepairList()
        .then((result)=>{
            let obj = {};

            if(result.length==0){
                obj["200"] = "OK"
                obj["result"] = '수리요청 건이 없습니다.';
                res.send(obj)
            }
            
            else if (result=="err"){
                obj["200"] = "OK"
                obj["result"] = errorCode.E00.message;
                res.send(obj)
            }

            else{
                obj["200"] = "OK"
                obj["result"] = result;
                res.send(obj)
            }
        })
    },

    notRepairList:(req,res)=>{

        repairService.notRepairList()
        .then((result)=>{

            let obj = {};

            if(result.length==0){
                obj["200"] = "OK"
                obj["result"] = '미확인인 수리요청 건이 존재하지 않습니다.';
                res.send(obj)
            }
            
            else if (result=="err"){
                obj["200"] = "OK"
                obj["result"] = errorCode.E00.message;
                res.send(obj)
            }

            else{
                obj["200"] = "OK"
                obj["result"] = result;
                res.send(obj)
            }
            
            
        
        })
    },
    


}