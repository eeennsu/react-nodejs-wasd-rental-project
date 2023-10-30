const { escape } = require('querystring');
const {Img}=require('../../models');

module.exports = {
    
    testUpload: (body,img) =>{
        return new Promise((resolve)=>{
            Img.create({
                img_id: body.img_id,
                img_url: img.location,
                tool_id: 1,
            })
            .then((result)=>{
                if(result!==null){
                    resolve(result)
                }
                else{
                    resolve(false)
                }
            })
            .catch((err)=>{
                console.log(err)
                resolve("err")
            })
        })
    }
}