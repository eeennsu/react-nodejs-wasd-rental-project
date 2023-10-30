const {
    Tool, Img, Department, Rental, User, Sequelize: {Op}
  } = require('../../models');
  const moment = require("moment");
  require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports = {
    addTool: (body, img) => {
        return new Promise((resolve) => {
          Tool.findOrCreate({
            where: {
              [Op.or]: [
                { tool_id: body.tool_id },
                //{ tool_code: body.tool_code }
              ]
            },
            defaults: {
              tool_id: body.tool_id,
              tool_division: body.tool_division,
              tool_code: body.tool_code,
              tool_name: body.tool_name,
              tool_purchase_division: body.tool_purchase_division,
              tool_purchase_date: moment().format("YYYY-MM-DD"),
              tool_update_at: moment().format("YYYY-MM-DD"),
              tool_state: "대여가능",
              department_id: body.department_id
            }
          })
            .then(async (result) => {
              let obj = {};
              let results = [];
              obj["result"] = result[0];
              if (result[1]) {
                if (img != null) {
                  await Img.create({
                    img_url: img.location,
                    tool_id: body.tool_id,
                  })
                    .then((imageResult) => {
                      results.push(imageResult);
                     // console.log(imageResult);
                      obj["image"] = results;
                    })
                    .catch((err) => {
                      resolve("err");
                     // console.log(err);
                    })
                } 
                else {
                  obj["image"] = "Not exist";
                }
                resolve(obj);
              } 

              else if (img==null){
                resolve("Img Miss")
              }
              else if(!result[1]){

                resolve("EXIST");
              } 
              else {
                resolve(false);
              }
    
            })
    
          .catch((err) => {
           // console.log(err);
           console.log("이게동작하니")
            resolve("err")
          })
        })
      },


  
}