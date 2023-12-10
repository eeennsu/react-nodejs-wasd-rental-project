const toolService = require('./toolService');
const errorCode = require('../../config/errorCode');

module.exports = {

    addTool: async (req, res) => {
        const body = req.body;
        //console.log(body)
        const img = req.file;
        
        toolService.addTool(body, img)
          .then(result => {
          //console.log(result)
        
            let obj = {};
            if (result == "EXIST") { 
              obj["200"]= "OK";
              obj["err"] = errorCode.E06.message;
              res.send(obj);
            } else if (result == "Value Null") {
              obj["200"]= "OK";
              obj["err"] = errorCode.E07.message;
              res.send(obj);
            } 
            else if(result=="img undefined"){
              obj["200"]= "OK";
              obj['err'] = errorCode.E08.message;
              res.send(obj);
            }
            else if(result===false){
              obj["200"]= "OK";
              obj['err'] = errorCode.E00.message;
              res.send(obj);
            }
            else {
              obj["200"]= "OK";
              obj['result'] = result;
              res.send(obj);
              
            }
          })
      },

      updateTool: (req,res) =>{
        const body = req.body 
        const img = req.file;
        toolService.updateTool(body,img)
        .then((result)=>{
          //console.log(result)
          let obj = {}
          if(result>0){
            obj["200"]= "OK";
            obj["result"] = result;
            res.send(obj)
          }
          else if(result=="Null"){
            obj["200"] = "OK"
            obj["err"] = errorCode.E07.message;
            res.send(obj);
          }

          else if(result=="Tool not found"){
            obj["200"]= "OK";
            obj["err"] = errorCode.E12.message;
            res.send(obj);
          }
          else if(result=="Image not found"){
            obj["200"]= "OK";
            obj["result"] = "선택된 이미지가 그대로 입니다.";
            res.send(obj);
          }
          
        })
        
      },

      viewTool: (req,res)=>{
        const toolId = req.params.tool_id

        toolService.viewTool(toolId)
        .then((result)=>{
          console.log(result)
          let obj = {}
          if(result){
            obj["200"]= "OK";
            obj["result"] = result;
            res.send(obj)
          }
          else if(result==false){
            obj["200"] ="OK";
            obj["err"] = errorCode.E13.message;
            res.send(obj)
          }
          else{
            obj["200"] ="OK";
            obj["err"] = errorCode.E00.message;
            res.send(obj)
          }
        })
      },

      viewTools: (req,res) =>{
        const page = req.params.page 
        const toolId = req.params.tool_id
        const pageLimit = req.params.pageLimit 
        console.log(pageLimit)
        

        toolService.viewTools(page,pageLimit)
        .then((result)=>{
           
            let obj = {}

            if(result){
              obj["200"] = "OK";
              obj["total"] = result.obj
              obj["result"] = result.result;
              res.send(obj)
            }
            else if (result==false){
              obj["200"] = "OK";
              obj["err"] = "데이터 조회 중 오류 발생";
              res.send(obj)
            }
            else{
              obj["200"] = "OK";
              obj["err"] = errorCode.E00.message;
              res.send(obj)
            }
        })
      },

      deleteTool: (req, res) => {
        const body = req.body;
        console.log(!body)
        console.log(Object.keys(body).length===0)
        toolService.deleteTool(body)
            .then((results) => {
                let obj = {};
                const toolSuccessCount = results.filter((result) => result.tool > 0).length;
                const imgSuccessCount = results.filter((result) => result.img > 0).length;
    
                if (toolSuccessCount > 0 || imgSuccessCount > 0) {
                    obj["200"] = "OK";
                    obj["suc"] = "삭제되었습니다."
                    obj["result"] = results;
                    res.send(obj);
                } 
                else if (results=="err"){
                  obj["200"] = "OK"
                  obj["err"] = errorCode.E00.message;
                  res.send(obj)
                }
                else if(results=="Null"){
                  obj["200"] = "OK"
                  obj["err"] ="빈값이다"
                  res.send(obj)
                }
                else {
                    obj["200"] = "OK";
                    obj["err"] = errorCode.E00.message;
                    res.send(obj);
                }
            })
            .catch((error) => {
              console.error(error);
              res.status(500).send("빈값이다");
          });
      },
    
      searchTool: (req,res)=>{
        const toolSearch = req.params.toolSearch
        const page = req.params.page 
        const pageLimit = req.params.pageLimit 
      
        toolService.searchTool(page,pageLimit,toolSearch)
        .then((result)=>{
       
          console.log(result)
          let obj = {};

          if(result.result.length==0){
            obj["200"] ="OK";
            obj["result"]= result.result
            res.send(obj);
          }
          else if(result.length!==0){
            obj["200"] ="OK";
            obj["total"] = result.obj
            obj["result"] = result.result
            res.send(obj);
          }
          else{
            obj["200"] ="OK";
            obj["err"] = errorCode.E00.message;
            res.send(obj);
          }
        })
      },

      rangeTool: (req,res)=>{
        const toolName = req.params.tool_name 
        const page = req.params.page                                   
        const pageLimit = req.params.pageLimit 
        toolService.rangeTool(toolName,page,pageLimit)
        .then((result)=>{
        
          let obj = {};

          if(result.sortedResult.length==0){
            obj["200"] ="OK";
            obj["err"]= errorCode.E18.message;
            res.send(obj);
          }
          else if (result.length !==0){
            obj["200"] ="OK";
            obj["total"] = result.obj;
            obj["result"]= result.sortedResult;
            res.send(obj);
          }

          else if (result=="err"){
            obj["200"] ="OK";
            obj["err"]= errorCode.E00.message;
            res.send(obj);
          }

          else{
            obj["200"] ="OK";
            obj["err"]= errorCode.E00.message;
            res.send(obj);
          }
        })
      },

      rentalToolCount: (req,res)=>{
        
        const toolName = req.params.tool_name
        console.log(toolName)

        toolService.rentalToolCount(toolName)
        .then((result)=>{
          console.log(result)
          let obj = {};

          if(result=="err"){
            obj["200"] ="OK";
            obj["err"]= errorCode.E00.message;
            res.send(obj);
          }
          else if (result=="Null"){
            obj["200"] ="OK";
            obj["err"]= `tool_name의 입력값이 잘못되었습니다.`;
            res.send(obj);
          }
          else {
            obj["200"] ="OK";
            obj["result"]= `${result.length}개`;
            res.send(obj);
            
          }
          

        })
      },

      notRentalToolCount: (req,res)=>{
  
        const toolName = req.params.tool_name

        toolService.notRentalToolCount(toolName)
        .then((result)=>{
          
          let obj = {};

          if(result=="err"){
            obj["200"] ="OK";
            obj["err"]= errorCode.E00.message;
            res.send(obj);
          }
          else if (result=="Null"){
            obj["200"] ="OK";
            obj["err"]= `tool_name의 입력값이 잘못되었습니다.`;
            res.send(obj);
          }
          else {
            obj["200"] ="OK";
            obj["result"]= `${result.length}개`;
            res.send(obj);
            
          }
          

        })
      },

      cannotRental: (req, res) => {
        const toolId = req.params.tool_id;
        
        toolService.cannotRental(toolId)
        .then((result) => {
          let obj = {};
          console.log(result)
          if (result=="err") {
            obj["200"] ="OK";
            obj["err"]= errorCode.E00.message;
            res.send(obj);
          } 
          else if (result==false) {
            obj["200"] ="OK";
            obj["err"]= errorCode.E19.message;
            res.send(obj);
          }
          else{
            obj["200"] ="OK";
            obj["result"]= `${result.tool_content}가 ${result.tool_state} 처리 되었습니다. `;
            res.send(obj);
          }
        })
      },

      canRental: (req, res) => {
        const toolId = req.params.tool_id;
        
        toolService.canRental(toolId)
        .then((result) => {

          let obj = {};

          if (result=="err") {
            obj["200"] ="OK";
            obj["err"]= errorCode.E00.message;
            res.send(obj);
          } 
          else if (result==false) {
            obj["200"] ="OK";
            obj["err"]= errorCode.E20.message;
            res.send(obj);
          }
          else{
            obj["200"] ="OK";
            obj["result"]= `${result.tool_content}가 ${result.tool_state} 처리 되었습니다.`
            res.send(obj);
          }
        })
      },

      toolList: (req,res)=>{
        toolService.toolList()
        .then((result)=>{

          console.log(result)
          let obj = {};
          if(result=="err"){
            obj["200"] = "OK";
            obj["err"] = errorCode.E00.message;
            res.send(obj)
          }
          else{
            obj["200"] = "OK"
            obj["result"] =result;
            res.send(obj)
          }
        })
      },

      /* deleteTool:(req,res)=>{
        const body =req.body
        console.log(body)
      
        toolService.deleteTool(body)
        .then((result)=>{
          let obj = {};
          if(result.tool > 0 || result.img > 0){
            obj["200"] ="OK";
            obj["result"] = result;
            res.send(obj)
          }

          else {
            obj["200"] ="OK";
            obj["err"] = errorCode.E00.message;
            res.send(obj)
          }
        })
      },*/

      
}

