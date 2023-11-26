const { resolve } = require('path');
const {
  Tool, Img, Department, Rental, User, Sequelize: { Op }
} = require('../../models');

const e = require('express');
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports = {
  addTool: (body, img) => {
    return new Promise((resolve) => {
      if (img == undefined) {
        console.log("이미지없음")
        resolve("img undefined");
      } else if (
        !body.tool_id ||
        !body.tool_division ||
        !body.tool_code ||
        !body.tool_name ||
        !body.tool_standard ||
        !body.tool_purchase_division ||
        !body.department_id ||
        !body.tool_content ||
        !body.tool_spec
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
            tool_purchase_date: body.tool_purchase_date,
            tool_standard: body.tool_standard,
            tool_update_at: moment().format("YYYY-MM-DD"),
            tool_state: "대여가능",
            department_id: body.department_id,
            tool_content: body.tool_content,
            tool_spec: body.tool_spec

          }
        })
          .then(async (result) => {
            if (!result[1]) {
              // 이미 존재하는 레코드라면 "EXIST"를 반환
              resolve("EXIST");
            } else {
              let obj = { result: result[0] };
              let results = [];
              console.log(obj.result.tool_id)
              if (img != undefined) {
                const imgUrl = decodeURIComponent(img.path)
                await Img.create({
                  img_id: obj.result.tool_id,
                  img_url: imgUrl,
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
  },

  

  updateTool: async (body, img) => {
  return new Promise(async (resolve) => {
    try {
      const toolId = body.tool_id;
      const updateFields = {};
      
      if (img && Object.keys(body).length === 1) {
        // 1. 이미지만 수정
        console.log("1번이찍힘");
        const imgResult = await Img.update(
          { img_url: img.path },
          { where: { tool_id: toolId } }
        );
        resolve(imgResult);
      } else if (!img && body) {
       
        // 2. 내용만 수정
        const keys = Object.keys(body);
        const values = Object.values(body);

        if (keys.length === 0) {
          resolve("Null");
        }

        for (let i = 0; i < keys.length; i++) {
          updateFields[keys[i]] = values[i];
        }
        console.log("2번이찍힘");
        console.log(updateFields)

        const toolResult = await Tool.update(updateFields, {
          where: { tool_id: toolId }
        });

        if (toolResult[0] === 0) {
          resolve("Tool not found");
        } else {
          resolve(toolResult);
        }
      } else if (img && body) {
        // 3. 이미지와 내용 모두 수정
        const keys = Object.keys(body);
        const values = Object.values(body);

        for (let i = 0; i < keys.length; i++) {
          updateFields[keys[i]] = values[i];
        }

        if (keys.length === 0) {
          resolve("Null");
        }

        const toolResult = await Tool.update(updateFields, {
          where: { tool_id: toolId }
        });

        if (toolResult[0] === 0) {
          resolve("Tool not found");
        } else {
          const imgResult = await Img.update(
            { img_url: img.path },
            { where: { tool_id: toolId } }
          );

          if (imgResult[0] === 0) {
            resolve("Image not found");
          } else {
            resolve(imgResult);
          }
        }
      }
    } catch (err) {
      console.error(err);
      resolve("Error updating tool or image");
    }
  });
},

  viewTool: (toolId) => {
    return new Promise(async (resolve) => {
      try {
        const [toolResult, imgResult] = await Promise.all([
          Tool.findOne({ where: { tool_id: toolId } }),
          Img.findOne({ where: { tool_id: toolId } })
        ]);
  
        if (toolResult && imgResult) {
          const combinedResult = {
            tool: toolResult,
            img: imgResult
          };
          resolve(combinedResult);
        } else {
          resolve(false);
        }
      } catch (error) {
        console.error(error);
        resolve("err");
      }
    });
  },

  viewTools: (page, pageLimit) => {
    page = parseInt(page);
    pageLimit = parseInt(pageLimit);
    const pageOffset = (page - 1) * pageLimit; // 페이지 번호를 기반으로 오프셋 계산
  
    return new Promise((resolve) => {
      Tool.findAll({

      })
      .then((result)=>{
        let obj = result.length

        Tool.findAll({
    
          limit: pageLimit,
          offset: pageOffset,
          order: [['tool_id', 'ASC']], // tool_content 기준으로 내림차순 정렬
        })
          .then((result) => {
            console.log(result)
            resolve({obj,result});
          })
          .catch((error) => {
            console.error('데이터 조회 중 오류 발생:', error);
            resolve(false);
          });
      })
      
    });
  },
  
  

 /* deleteTool: (toolId) => {
    return new Promise(async (resolve) => {
      try {
        const [toolResult, imgResult] = await Promise.all([
          Tool.destroy({ where: { tool_id: toolId } }),
          Img.destroy({ where: { img_id: toolId } })
        ]);
  
        if (toolResult !== null && imgResult !== null) {
          const combinedResult = {
            tool: toolResult,
            img: imgResult
          };
          console.log(combinedResult)
          resolve(combinedResult);
        } else {
          resolve(false);
        }
      } catch (error) {
        console.error(error);
        resolve("err");
      }
    });
  }, */
  deleteTool: (body) => {
    return new Promise(async (resolve) => {
      if(console.log(Object.keys(body).length===0)){
        resolve("Null")
        return;
      }
        try {
            const results = [];
            const toolIds = Array.isArray(body.tool_id) ? body.tool_id : [body.tool_id]; // 배열로 변환

            for (const toolId of toolIds) {
                // 먼저 Tool.destroy 실행
                const toolResult = await Tool.destroy({ where: { tool_id: toolId } });

                // 그 다음 Img.destroy 실행
                const imgResult = await Img.destroy({ where: { img_id: toolId } });

                if (toolResult !== null && imgResult !== null) {
                    const combinedResult = {
                        tool: toolResult,
                        img: imgResult
                    };
                    results.push(combinedResult);
                } else {
                    results.push(false);
                }
            }
            resolve(results);
        } catch (error) {
            console.error(error);
            resolve("err");
        }
    });
},

  


  

  searchTool:(page,pageLimit,toolSearch)=>{
    page = parseInt(page);
    pageLimit = parseInt(pageLimit);
    console.log("검색어",toolSearch)
    const pageOffset = (page - 1) * pageLimit;

    return new Promise((resolve)=>{
      Tool.findAll({
        where: {tool_content: {
          [Op.like]: `%${toolSearch}%`
        }}
      })
      .then((result)=>{
        
        let obj = result.length
   
         Tool.findAll({
          where: {tool_content: {
          [Op.like]: `%${toolSearch}%`, // toolName에 해당하는 항목 검색 (부분 일치)
        }},
        // where: { [Op.or]: searchConditions },
        limit: pageLimit,
        offset: pageOffset,
        order: [['tool_content', 'DESC']],
      })
      .then((result)=>{
        //result.push(obj)
        resolve({obj,result})
      })
      .catch((err)=>{
        resolve("err")
      })
      
      })

     
    })
  },
  rangeTool: (toolName,page,pageLimit) => {
    page = parseInt(page); //2
    pageLimit = parseInt(pageLimit); //10
    const pageOffset = (page - 1) * pageLimit;
    console.log(pageOffset)

    return new Promise((resolve) => {
    Tool.findAll({
      where: { tool_name: {  [Op.like]: `%${toolName}%`} },
    })
    .then((result)=>{
     
      let obj = result.length

      Tool.findAll({
        where: { tool_name: {  [Op.like]: `%${toolName}%`} }, // tool_name을 사용하여 조건을 설정
        limit: pageLimit,
        offset: pageOffset,   
      })

      .then((result) => {
        const sortedResult = result.sort((a, b) => {
            const numberA = parseInt(a.tool_content.match(/\d+/)[0]);
            const numberB = parseInt(b.tool_content.match(/\d+/)[0]);
            return numberA - numberB;
        });
       
        resolve({obj,sortedResult});
    })
        .catch((error) => {
          console.error('데이터 조회 중 오류 발생:', error);
          resolve("err");
        });
    })
      

      
    });
  },

  rentalToolCount: (toolName) => {
    return new Promise((resolve) => {
        if (!toolName) {
            resolve("Null");
           
        }

        Tool.findAll({
            where: {
                tool_name: toolName,
                tool_state: "대여가능",
            }
        })
        .then((result) => {
            if (result.length === 0) {
                resolve("Null");
            } else {
                resolve(result);
            }
        })
        .catch((err) => {
            console.error(err);
            resolve("err");
        });
    });
},

notRentalToolCount: (toolName) => {
  return new Promise((resolve) => {
      if (!toolName) {
          resolve("Null");
      }
      console.log(toolName)
      Tool.findAll({
          where: {
              tool_name: toolName,
              tool_state: "대여중",
          }
      })
      .then((result) => {
        console.log(result)
          if (result.length === 0) {
              resolve("Null");
          } else {
              resolve(result);
          }
      })
      .catch((err) => {
          //console.error(err);
          resolve("err");
      });
  });
},



  cannotRental: (toolId) => {
    return new Promise((resolve) => {
      Tool.update({
        tool_state: "대여불가"
      },
        {
          where: { tool_id: toolId }
        }
      )
        .then((result) => {
          if(result[0] > 0){
            return Tool.findByPk(toolId);
          }
          else if(result[0]==0){
            resolve(false)
          }
          else{
            resolve("err")
          }
        })
        .then((updatedTool) => {
          if (updatedTool) {
              // 업데이트된 레코드의 정보를 반환
              resolve(updatedTool);
          }
      })
        .catch((err) => {
          console.log(err);
          resolve("err");
        })
    })
  },

  canRental: (toolId) => {
    return new Promise((resolve) => {
      Tool.update({
        tool_state: "대여가능"
      },
        {
          where: { tool_id: toolId }
        }
      )
        .then((result) => {
          if(result[0] > 0){
            return Tool.findByPk(toolId);
          }
          else if(result[0]==0){
            resolve(false)
          }
          else{
            resolve("err")
          }
        })
        .then((updatedTool) => {
          if (updatedTool) {
              // 업데이트된 레코드의 정보를 반환
              resolve(updatedTool);
          }
      })
        .catch((err) => {
          console.log(err);
          resolve("err");
        })
    })
  },

  toolList:()=>{
   return new Promise((resolve)=>{
    Tool.findAll(
      )
      .then((result)=>{
        console.log(result)
        resolve(result)
      })
      .catch((err)=>{
        console.log(err)
        resolve("err")
      })
   })
  },

 
  
}