const { User, Sequelize: { Op } } = require('../../models');
const ejs = require('ejs');
const path = require('path');
const mailer = require('../../middleware/mail');
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

module.exports = {
  signUp: (body, hash) => {
    return new Promise((resolve) => {
      User.create({
        user_id: body.user_id,
        user_pw: hash,
        user_name: body.user_name,
        user_email: body.user_email,
        user_student_number: body.user_student_number,
        user_created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        user_license: 0,
        department_id: body.department_id,
      })
        .then((result) => {
          if (result) {
            resolve(result);
            console.log(result);
          } else {
            console.log(false);
            resolve(false);
          }
        })
        .catch((err) => {
          resolve(false);
          console.log(err);
        });
    });
  },

  login: (body, hash) => {
    return new Promise((resolve) => {
      User.findOne({
        where: {
          user_id: body.user_id,
          user_pw: hash,
        },
      })
        .then((result) => {
          result !== null ? resolve(result) : resolve(false);
        })
        .catch((err) => {
          resolve('err');
          console.log(err);
        });
    });
  },

  checkId: (body) => {
    return new Promise((resolve) => {
      User.findOne({
        where: {
          user_id: body.user_id,
        },
      })
        .then((result) => {
          result !== null ? resolve(result) : resolve(false);
        })
        .catch((error) => {
          console.log(error);
          resolve('err');
        });
    });
  },

  searchId: (body) => {
    return new Promise((resolve) => {
      User.findOne({
        where: {
          user_name: body.user_name,
          user_email: body.user_email,
          user_student_number: body.user_student_number,
        },
      })
        .then((result) => {
          if (result !== null && result.user_name === body.user_name && result.user_student_number === body.user_student_number) {
            resolve(result);
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          console.log(error);
          resolve('err');
        });
    });
  },

  searchPw: (body) => {
    return new Promise((resolve) => {
      User.findOne({
        where: {
          user_id: body.user_id,
          user_name: body.user_name,
          user_student_number: body.user_student_number,
        },
      })
        .then((result) => {
          if (result !== null && result.user_id === body.user_id && result.user_name === body.user_name && result.user_student_number === body.user_student_number) {
            resolve(result);
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          console.log(error);
          resolve('err');
        });
    });
  },

  changePw: (body, hash) => {
    return new Promise((resolve) => {
      User.update(
        {
          user_pw: hash,
        },
        {
          where: {
            user_id: body.user_id,
            user_pw: {
              [Op.ne]: hash,
            },
          },
        }
      ).then((result) => {
        console.log(result);
        result == 1 ? resolve(true) : resolve(false);
      });
    });
  },

  sendMail: (email) => {
    return new Promise((resolve) => {
      if (email == undefined) {
        resolve(false);
      } else {
        var generateRandom = function (min, max) {
          var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
          return ranNum;
        };

        const code = generateRandom(111111, 999999);
        console.log(code);

         /*   let emailTemplate;
        
        const templatePath  = path.resolve(__dirname, "../views/register.ejs");
        console.log(templatePath)
        ejs.renderFile(
         // path.join(__dirname, "../../views/register.ejs"), //ejs파일 위치
         templatePath,
          { email: email, code: code },
          (err, data) => {
            //ejs mapping
            if (err) {
              //console.log(err)
              resolve(false);
            } else {
              emailTemplate = data;
            }
          }
        ); */

        let emailParam = {
          toEmail: email,
          subject: '****Verify your new Recess account****',
          text: code,
        };

        mailer.sendGmail(emailParam);
        delete emailParam.html;
        delete emailParam.subject;

        if (emailParam !== undefined) {
          resolve(emailParam);
        } else {
          resolve(false);
        }
      }
    });
  },
};


 
    