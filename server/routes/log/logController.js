const logService = require('./logService');
const errorCode = require('../../config/errorCode');

module.exports = {

  logList: (req, res) => {
    const page = req.params.page;
    const pageLimit = req.params.pageLimit;

    logService.logList(page, pageLimit)
    .then((result) => {
      console.log(result);
      let obj = {};

      if (result === "Null") {
        obj["200"] = "OK";
        obj["result"] = "로그가 없습니다.";
        res.send(obj);
      } else if (result === "err") {
        obj["200"] = "OK";
        obj["err"] = errorCode.E00.message;
        res.send(obj);
      } else {
        obj["200"] = "OK";
        obj["result"] = result;
        res.send(obj);
      }
    });
  },
};
