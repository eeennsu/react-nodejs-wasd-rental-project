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
      User.findOne({
        where: {
          [Op.or]: [
            { user_email: body.user_email },
            { user_student_number: body.user_student_number },
          ],
        },
      })
        .then((existingUser) => {
          if (existingUser) {
            const duplicateFields = [];
            if (existingUser.user_email === body.user_email) {
              duplicateFields.push("user_email");
            }
            if (existingUser.user_student_number === body.user_student_number) {
              duplicateFields.push("user_student_number");
            }

            const errorMessage = `${duplicateFields.join(", ")}`;
            console.log(errorMessage);
            resolve(errorMessage);
          } else {
            User.create({
              user_id: body.user_id,
              user_pw: hash,
              user_name: body.user_name,
              user_email: body.user_email,
              user_student_number: body.user_student_number,
              user_created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
              user_license: 0,
              department_id: body.department_id,
              manager_approval: false,
            })
              .then((result) => {
                if (result) {
                  console.log(result);
                  resolve(result);
                } else {
                  console.log(false);
                  resolve(false);
                }
              })
              .catch((err) => {
                console.log(err);
                resolve(false);
              });
          }
        })
        .catch((err) => {
          console.log(err);
          resolve(false);
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
        if (result !== null) {
          if (result.manager_approval) {
            resolve(result); // 로그인 성공
          } else {
            resolve("approval false"); // 관리자 승인 필요
          }
        } else {
          resolve("false"); // 아이디 또는 비밀번호 불일치
        }
      })
      .catch((err) => {
        resolve('err');
        console.log(err);
      });
    });
  },

  approveUser: (body) => {
    return new Promise((resolve) => {
      User.update(
        { manager_approval: true },
        { where: { user_id: body.user_id } }
      )
      .then((result) => {
        resolve(result); // 승인 성공
      })
      .catch((err) => {
        console.log(err);
        resolve("err"); // 승인 실패
      });
    });
  },

  listPendingUsers: (page, pageLimit) => {
    page = parseInt(page);
    pageLimit = parseInt(pageLimit);
    const pageOffset = (page - 1) * pageLimit;

    return new Promise((resolve) => {
        User.findAll({
            where: {
                manager_approval: false
            },
            limit: pageLimit,
            offset: pageOffset,
            order: [['user_created_at', 'ASC']] // 가장 최근에 가입한 사용자부터 보여주기 위해
        })
        .then((result)=>{
        
          resolve(result)
        })
        .catch((error) => {
          console.log(error);
          resolve('err');
        });
    });
},


  checkId: (body) => {
    return new Promise((resolve) => {
      if (!body || !body.user_id) {
        resolve("Null");
      } else {
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
      }
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
            //user_id: body.user_id,
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

        let emailParam = {
          toEmail: email,
          subject: '****Verify your new Recess account****',
          code: code,
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

  UserTableAll:()=>{
    return new Promise((resolve)=>{ 
      User.findAll(

      )
      .then((result)=>{
        resolve(result)
      })
      .catch((err)=>{
        resolve("err")
      })

    })
  },
};
