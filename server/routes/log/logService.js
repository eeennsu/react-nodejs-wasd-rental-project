const { Log } = require('../../models');
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

module.exports = {

  logList: (page, pageLimit) => {
    page = parseInt(page);
    pageLimit = parseInt(pageLimit);
    const pageOffset = (page - 1) * pageLimit;
    
    return new Promise((resolve) => {
      Log.findAll({
        limit: pageLimit,
        offset: pageOffset,
      })
      .then((result) => {
        if (result.length === 0) {
          resolve("Null");
        } else {
          let total = result.length
          const logContents = result.map((log) => log.log_content);
          resolve({logContents,total});
        }
      })
      .catch((err) => {
        console.log(err);
        resolve("err");
      });
    });
  },
};
