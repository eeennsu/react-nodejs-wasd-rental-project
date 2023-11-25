const { escape } = require('querystring');
const { Img, User,Tool, Rental,Sequelize,OP } = require('../../models');

module.exports = {

    testUpload: (body, img) => {
        return new Promise((resolve) => {
            Img.create({
                img_id: body.img_id,
                img_url: img.location,
                tool_id: 1,
            })
                .then((result) => {
                    if (result !== null) {
                        resolve(result)
                    }
                    else {
                        resolve(false)
                    }
                })
                .catch((err) => {
                    console.log(err)
                    resolve("err")
                })
        })
    },

    getTest: (userId) => {

        return new Promise((resolve) => {
            User.findAll({
                where: {
                    user_id: userId,
                }
            })
                .then((result) => {
                    /* console.log(result) */
                    result !== null ? resolve(result) : resolve(false)
                })

                .catch((error) => {
                    console.log(error)
                    resolve("err")
                })
        })

    },
    ViewRental:(departmentId)=>{
        return new Promise((resolve)=>{
            Tool.findAll({
                tool_state:"대여중"
            },
            {
                where:{department_id:departmentId},
                [Sequelize.Op.and]: [
                    { department_id: { [Sequelize.Op.eq]: departmentId } }
                  ],
                include: [
                    {
                        model: Rental,
                        attributes: ['user_id'] // 'Tool' 테이블에서 불러올 컬럼 지정
                    },
                ]
            },
            
            )
            .then((result)=>{
                resolve(result)
            })
            .catch((err)=>{
                resolve('err')
            })
        })
    },
}