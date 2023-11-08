const {Rental,Log,Tool} = require('../../models')
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports={

    rentalTool:(body)=>{
        return new Promise((resolve)=>{
            Tool.findOne({
                where:{tool}
            })
        })
    }

}