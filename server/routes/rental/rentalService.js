const {Rental,Log,Tool} = require('../../models')
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports={
    rentalTool: (body) => {
        return new Promise((resolve) => {
            // find the tool
            Tool.findOne({
                where: { tool_id: body.tool_id }
            })
                .then((result) => {
                    // if the tool could be rentaled
                    console.log(result.tool_state)
                    if (result.tool_state == "대여가능") {
                        const dueDate = moment().add(7, 'days');
                        // create rentalDB
                        Rental.create({
                            tool_id: body.tool_id,
                            user_id: body.user_id,
                            rental_date: moment().format("YYYY-MM-DD"), // now
                            rental_due_date: dueDate.format("YYYY-MM-DD"),
                            rental_state: "대여",
                            
                        })
                            .then((createResult) => {
                                console.log(createResult)
                                // LOG DB 생성
                                Log.create({
                                    log_type:"0",
                                    log_title: "대여",
                                    log_content: `${createResult.user_id}님께서 ${createResult.tool_id} 기자재를 대여했습니다. `,
                                    log_create_at: createResult.rental_date,
                                    department_id: body.department_id
                                })
                                    .then((logResult) => {
                                        // change tool_state "대여가능" to "대여중"
                                        Tool.update({
                                            tool_state: "대여중"
                                        },
                                            { where: { tool_id: createResult.tool_id }, }
                                        )
                                            .then((updateResult) => {
                                                console.log(createResult.rental_id)
                                                console.log("******update OK*******");
                                                updateResult !== null ? resolve(logResult.log_content) : resolve("err");

                                            })
                                            .catch((err) => {
                                                console.log(err);
                                                resolve("err");
                                            });
                                        console.log("create Log");
                                        console.log(logResult);
                                    })
                                    .catch((err) => {
                                        console.log("create Log failed");
                                        console.log(err);
                                        resolve("err");
                                    });
                            })
                            .catch((err) => {
                                console.log(err);
                                resolve("err");
                            });
                    } else { // the tool has already been rentaled
                        resolve("err");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    resolve(false);
                });
        })
    },

    returnTool: (body) => {

        return new Promise((resolve) => {
            Tool.findOne({
                include: [
                    {
                        model: Rental,
                        attributes: ['user_id']
                    },

                ],
                where: { tool_id: body.tool_id }
            },
            )
                .then((result) => {
                    // if the tool has been rentaled
                    if (result.tool_state == "대여중") {
                        // change rental_state "대여" to "반납"
                        Rental.update({
                            rental_state: "반납"
                        },
                            {
                                where: {
                                    tool_id: result.tool_id,
                                    rental_state: "대여"
                                }
                            })
                            .then(() => {
                                // LOG DB 생성
                                console.log(result);
                                Log.create({
                                    log_type:1,
                                    log_title: "반납",
                                    log_content: `${result.tool_id} 기자재가 반납되었습니다. `,
                                    log_create_at: moment().format("YYYY-MM-DD"),
                                    department_id: result.department_id
                                })
                                    .then((logResult) => {
                                        // change tool_state "대여중" to "대여가능"
                                        Tool.update({
                                            tool_state: "대여가능"
                                        },
                                            { where: { tool_id: result.tool_id }, }
                                        )
                                            .then((toolUpdateResult) => {
                                                toolUpdateResult !== null ? resolve(logResult.log_content) : resolve("err");

                                            })
                                            .catch((err) => {
                                                console.log(err);
                                                resolve("err");
                                            });

                                    })
                                    .catch((err) => {
                                        console.log("create Log failed");
                                        console.log(err);
                                        resolve("err");
                                    });

                            })
                            .catch((err) => {
                                console.log(err);
                                resolve("err");
                            });
                    } else {
                        resolve(errorCode.E05.message);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    resolve(false);
                });
        })
    },

}