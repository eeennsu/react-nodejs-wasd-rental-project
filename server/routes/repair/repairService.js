const {Repair,Log,Tool,User} = require("../../models")
const { Op } = require('sequelize');
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports={

    repairTool: (body) => {
        return new Promise((resolve) => {
           console.log(body)
            if (!body.repair_part || !body.repair_reason || !body.user_id || !body.tool_id) {
                resolve("Null");
               
            } 
            else {
                const repairPromise = Repair.create({
                    repair_part: body.repair_part,
                    repair_reason: body.repair_reason,
                    repair_create_at: moment().format("YYYY-MM-DD"),
                    repair_state: "미확인",
                    user_id: body.user_id,
                    tool_id: body.tool_id
                });
        
                repairPromise.then((repairResult) => {
                  
                    Tool.findOne({
                        where: { tool_id: body.tool_id },
                        attributes: ['tool_content']
                    }
                    ).then((toolResult) => {
                       
                        const toolContent = toolResult ? toolResult.tool_content : "도구 정보 없음";

                        const logPromise = Log.create({
                            log_type: 3,
                            log_title: "수리",
                            log_content: `${repairResult.user_id}님께서 ${toolContent}의 ${repairResult.repair_part} 수리요청하였습니다. `,
                            log_create_at: moment().format("YYYY-MM-DD"),
                        });
    
                        
                        Promise.all([repairPromise, logPromise])
                            .then(([repairResult, logResult]) => {
                                resolve({ repairResult, logResult });
                            })
                            .catch((err) => {
                                console.log(err)
                                resolve("err");
                            });
                    }).catch((err) => {
                        console.error("Tool 조회 중 오류 발생:", err);
                        resolve("err");
                    });
                });
            }
            
        });
    },
    
    checkRepair: (body) => {
        return new Promise((resolve) => {
            Repair.update(
                { repair_state: body.repair_state },
                { where: { repair_id: body.repair_id } }
            )
            .then((updateResult) => {
                if (updateResult[0] > 0) {
                    // 업데이트 성공, 해당 레코드 다시 조회
                    Repair.findByPk(body.repair_id)
                        .then((updatedRecord) => {
                            if (updatedRecord) {
                                // 성공적으로 레코드 조회
                                const result = `repair_id: ${body.repair_id}의 repair_state 값이 '${updatedRecord.repair_state}'(으)로 변경되었습니다.`;
                                resolve(result);
                            } else {
                                // 레코드 조회 실패
                                resolve("err");
                            }
                        })
                        .catch((findError) => {
                            console.error("Error in finding updated record:", findError);
                            resolve("err");
                        });
                } else {
                    // 업데이트할 레코드가 없음
                    resolve("Not Update");
                }
            })
            .catch((updateError) => {
                console.error("Error in updating repair_state:", updateError);
                resolve("업데이트 중 오류 발생");
            });
        });
    },

    myRepairList: (userId)=>{
        return new Promise((resolve)=>{
            Repair.findAll({
                where: {
                    user_id: userId 
                },
                include: [
                    {
                        model:User,
                        attributes: ['user_name'],
                    },
                    {
                        model:Tool,
                        attributes: ['tool_content'],
                    }
                ]
            })
            .then((result)=>{
                resolve(result)
            })
            .catch((err)=>{
                console.log(err)
                resolve("err")
            })

        })
    },

    myRepairView: (userId,repairId)=>{
       return new Promise((resolve)=>{
        Repair.findOne({
            where: {
                user_id: userId, 
                repair_id:repairId,
            },
            include: [
                {
                    model:User,
                    attributes: ['user_name'],
                },
                {
                    model:Tool,
                    attributes: ['tool_content'],
                }
            ]
        })
        .then((result)=>{
            resolve(result)
        })
        .catch((err)=>{
            console.log(err)
            resolve("err")
        })
       })
        
    },

    RepairList: () =>{
        return new Promise((resolve)=>{
            Repair.findAll({
                where: {
                    repair_state: {
                        [Op.ne]: null // repair_state가 null이 아닌 레코드 조회
                    }
                }
            })
            .then((result)=>{
                resolve(result)
            })
            .catch((err)=>{
                console.log(err)
                resolve("err")
            })
        })
    },

    notRepairList: (page,pageLimit)=>{
        page = parseInt(page);
    pageLimit = parseInt(pageLimit);
    const pageOffset = (page - 1) * pageLimit;
        return new Promise((resolve)=>{
            Repair.findAll({
                where: {
                    repair_state: "미확인"
                },
                limit: pageLimit,
                offset: pageOffset,
                include: [
                    {
                        model:User,
                        attributes: ['user_name'],
                    },
                    {
                        model:Tool,
                        attributes: ['tool_content'],
                    }
                ]
            })
            .then((result)=>{
                let total = result.length
                resolve({result,total})
            })
            .catch((err)=>{
                console.log(err)
                resolve("err")
            })
        })
    },
    

         
    
    
}