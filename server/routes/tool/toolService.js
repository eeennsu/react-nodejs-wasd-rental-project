const {
    Tool, Img, Department, Rental, User, Sequelize: {Op}
  } = require('../../models');
  const moment = require("moment");
  require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports = {
      addTool: (body, img) => {
        return new Promise((resolve) => {
          if (img == undefined) {
            console.log("이거동작하니?")
            resolve("img undefined");
          } else if (
            !body.tool_id ||
            !body.tool_division ||
            !body.tool_code ||
            !body.tool_name ||
            !body.tool_purchase_division ||
            !body.department_id
          ) {
            resolve("Value Null");
          } else {
            Tool.findOrCreate({
              where: {
                [Op.or]: [
                  { tool_id: body.tool_id }
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
              if (!result[1]) {
                // 이미 존재하는 레코드라면 "EXIST"를 반환
                resolve("EXIST");
              } else {
                let obj = { result: result[0] };
                let results = [];
      
                if (img != undefined) {
                  await Img.create({
                    img_url: img.location,
                    tool_id: body.tool_id,
                  })
                  .then((imgResult) => {
                    results.push(imgResult);
                    obj.image = results;
                    resolve(obj);
                  })
                  .catch((err) => {
                    console.log(err);
                    resolve(false); // 오류가 발생하면 false를 반환
                  });
                } else {
                  resolve(obj);
                }
              }
            })
            .catch((err) => {
              console.log(err);
              resolve(false); // 오류가 발생하면 false를 반환
            });
          }
        });
      }
}