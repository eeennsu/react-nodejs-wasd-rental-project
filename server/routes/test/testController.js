const {Img}=require('../../models');
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
    }
}