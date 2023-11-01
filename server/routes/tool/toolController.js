const toolService = require('./toolService');
const errorCode = require('../../config/errorCode');

module.exports = {

    addTool: async (req, res) => {
        const body = req.body;
       // console.log(req)
        const img = req.file;
        
        toolService.addTool(body, img)
          .then(result => {
            console.log(result)
          
            
            let obj = {};
            if (result == "err") {
              obj["suc"] = false;
              obj["error"] = errorCode.E05.message;
              //res.send(obj);
            } else if (result == false) {
              obj["suc"] = false;
              obj["error"] = errorCode.E00.message;;
              //res.send(obj);
            } 
            else if(result=="Value Null"){
              obj['suc'] = false;
              obj['result'] = "Value Null";
             res.send(obj);
            }
            else {
              obj['suc'] = true;
              obj['result'] = result;
             // res.send(obj);
            }
          })
      },

}

//테스트2