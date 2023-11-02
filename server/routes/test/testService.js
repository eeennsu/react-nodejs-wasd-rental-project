const { escape } = require('querystring');
const { Img, User } = require('../../models');

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
}