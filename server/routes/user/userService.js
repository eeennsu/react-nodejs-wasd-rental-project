const { User, Department, University } = require('../../models');
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

module.exports = {
  viewInfo: (userId) => {
    return new Promise((resolve) => {
      User.findOne({
        where: { user_id: userId },
        attributes: { exclude: ['user_pw', 'user_created_at', 'user_license', 'manager_approval', 'department_id'] },
        include: {
          model: Department,
          attributes: ['department_name'],
          include: {
            model: University,
            attributes: ['university_name']
          }
        }
      })
        .then((result) => {
          result !== null ? resolve(result) : resolve(false);
        })
        .catch((err) => {
          console.error(err);
          resolve("err");
        });
    });
  },

  changeInfo: async (body) => {
    return new Promise(async (resolve) => {
      const updateFields = {};

      if (body.user_email) updateFields.user_email = body.user_email;
      if (body.user_student_number) updateFields.user_student_number = body.user_student_number;
      if (body.user_name) updateFields.user_name = body.user_name;

      if (Object.keys(updateFields).length === 0) {
        resolve("Null");
      } else {
        try {
          const changeInfoResult = await User.update(updateFields, {
            where: { user_id: body.user_id }
          });

          if (changeInfoResult[0] === 0) {
            resolve("No Update");
          } else {
            resolve(changeInfoResult);
          }
        } catch (err) {
          console.error("Error in changeInfo:", err);
          resolve("err");
        }
      }
    });
  },

  checkEmail: (body) => {
    return new Promise((resolve) => {
      if (!body.user_email) {
        resolve("Null");
        return;
      }

      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

      if (!emailRegex.test(body.user_email)) {
        resolve("이메일 형식 틀림");
        return; // 함수 종료
      }
      User.findAll({
        where: { user_email: body.user_email }
      })
        .then((result) => {
          if (result && result.length > 0) {
            resolve(true); // 중복된 이메일이 존재
          } else {
            resolve(false); // 중복된 이메일이 존재하지 않음
          }
        })
        .catch((err) => {
          console.log(err);
          resolve("err");
        });
    });
  },

  checkStudentNum: (body) => {
    return new Promise((resolve) => {
      if (!body.user_student_number) {
        resolve("Null");
        return;
      }
      User.findAll({
        where: { user_student_number: body.user_student_number }
      })
        .then((result) => {
          if (result && result.length > 0) {
            resolve(true); // 중복된 학번이 존재
          } else {
            resolve(false); // 중복된 학번이 존재하지 않음
          }
        })
        .catch((err) => {
          console.log(err);
          resolve("err");
        });
    });
  }
};
