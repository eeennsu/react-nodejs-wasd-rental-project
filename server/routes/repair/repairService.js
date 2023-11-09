const {Repair,Log} = require("../../models")
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports={

    repairTool: (body) => {
        return new Promise(async (resolve) => {
            // Tool.create 메서드 실행
            Repair.create({
                repair_part:body.repair_part,
                repair_reason: body.repair_reason,
                repair_create_at: moment().format("YYYY-MM-DD"),
                repair_state: "미확인",
                user_id: body.user_id,
                tool_id: body.tool_id
            })
            .then(async (result) => {
                await Log.create({
                    log_type:3,
                    log_title:"수리",
                    log_content:result.repair_reason,
                    log_create_at:moment().format("YYYY-MM-DD"),
                });
    
                // 작업이 완료된 후 resolve 호출
                resolve(result);
            })
            .catch((error) => {
                console.error("Error creating repair and log:", error);
                resolve(false); // 또는 오류 처리 로직을 추가할 수 있습니다.
            });
        });
    },
    
}