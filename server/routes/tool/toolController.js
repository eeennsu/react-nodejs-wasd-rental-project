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
              obj["suc"] = false;
              obj["error"] = errorCode.E06.message;
              res.send(obj);
            } else if (result == "Value Null") {
              obj["suc"] = false;
              obj["error"] = errorCode.E07.message;
              res.send(obj);
            } 
            else if(result=="img undefined"){
              obj['suc'] = false;
              obj['result'] = errorCode.E08.message;
              res.send(obj);
            }
            else if(result===false){
              obj['suc'] = false;
              obj['result'] = errorCode.E00.message;
              res.send(obj);
            }
            else {
              obj['suc'] = true;
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
            obj["200"] = "OK"
            obj["result"] = result;
            res.send(obj)
          }
          else if(result=="Null"){
            obj["200"] = "OK"
            obj["result"] = errorCode.E07.message;
            res.send(obj);
          }

          else if(result=="Tool not found"){
            obj["200"] = "O2K"
            obj["result"] = errorCode.E12.message;
            res.send(obj);
          }
          else if(result=="Image not found"){
            obj["200"] = "OK"
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
            obj["200"] ="OK";
            obj["result"] = result;
            res.send(obj)
          }
          else if(result==false){
            obj["200"] ="OK";
            obj["result"] = errorCode.E13.message;
            res.send(obj)
          }
          else{
            obj["200"] ="OK";
            obj["result"] = errorCode.E00.message;
            res.send(obj)
          }
        })
      },

      viewTools: (req,res) =>{
        const page = req.params.page 
        const toolName = req.params.tool_name
        const pageLimit = req.params.pageLimit 
        console.log(pageLimit)
        

        toolService.viewTools(page,pageLimit,toolName)
        .then((result)=>{
           
            let obj = {}

            if(result){
              obj["200"] = "OK";
              obj["result"] = result;
              res.send(obj)
            }
            else if (result==false){
              res.send("실패")
            }
            else{
              obj["200"] = "OK";
              obj["result"] = errorCode.E00.message;
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
            obj["result"] = errorCode.E00.message;
            res.send(obj)
          }
           
          
        })
      },

      searchTool:(req,res)=>{
        const page = req.params.page 
        const toolSearch = req.params.search
        const pageLimit = req.params.pageLimit 

        toolService.searchTool(page,pageLimit,toolSearch)
        .then((result)=>{
          res.send(result)
        })
      },

      rangeTool:(req,res)=>{
        const page = req.params.page 
        const toolName = req.params.tool_name                                   
        const pageLimit = req.params.pageLimit 
        .then((result)=>{
          res.send(result)
        })
      },

      
}

