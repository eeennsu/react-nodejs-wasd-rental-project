const toolService = require('./toolService');
const errorCode = require('../../config/errorCode');

module.exports = {

    addTool: async (req, res) => {
        const body = req.body;
        console.log(body)
        const img = req.file;
        
        toolService.addTool(body, img)
          .then(result => {
          console.log(result)
          
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
            }
            else {
              obj['suc'] = true;
              obj['result'] = result;
              res.send(obj);
              
            }
          })
      },

      updateTool: (req,res) =>{
        let body = req.body 
        
      }

}

