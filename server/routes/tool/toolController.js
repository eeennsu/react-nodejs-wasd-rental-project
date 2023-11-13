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

      viewTool:(req,res)=>{
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
              obj["result"] = result;
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

      

      deleteTool:(req,res)=>{
        const toolId = req.params.tool_id
        console.log(toolId)
        
        toolService.deleteTool(toolId)
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
      },

      searchTool:(req,res)=>{
        const toolSearch = req.params.toolSearch
        const page = req.params.page 
        const pageLimit = req.params.pageLimit 
      
        toolService.searchTool(page,pageLimit,toolSearch)
        .then((result)=>{
          console.log(result)
          let obj = {};

          if(result.length==0){
            obj["200"] ="OK";
            obj["result"]= "검색어에 맞는 기기 혹은 강의실이 없습니다.";
            res.send(obj);
          }
          else if(result.length!==0){
            obj["200"] ="OK";
            obj["result"] = result;
            res.send(obj);
          }
          else{
            obj["200"] ="OK";
            obj["err"] = errorCode.E00.message;
            res.send(obj);
          }
        })
      },

      rangeTool:(req,res)=>{
        const toolName = req.params.tool_name 
        const page = req.params.page                                   
        const pageLimit = req.params.pageLimit 
        toolService.rangeTool(toolName,page,pageLimit)
        .then((result)=>{
          
          let obj = {};

          if(result.length==0){
            obj["200"] ="OK";
            obj["err"]= errorCode.E18.message;
            res.send(obj);
          }
          else if (result.length !==0){
            obj["200"] ="OK";
            obj["result"]= result;
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

      rentalToolCount:(req,res)=>{
        
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
            obj["result"]= `tool_name의 입력값이 잘못되었습니다.`;
            res.send(obj);
          }
          else {
            obj["200"] ="OK";
            obj["result"]= `${result.length}개`;
            res.send(obj);
            
          }
          

        })
      },

      notRentalToolCount:(req,res)=>{
  
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
            obj["result"]= `tool_name의 입력값이 잘못되었습니다.`;
            res.send(obj);
          }
          else {
            obj["200"] ="OK";
            obj["result"]= `${result.length}개`;
            res.send(obj);
            
          }
          

        })
      },

      cannotRental : (req, res) => {
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

      canRental : (req, res) => {
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
      
}

