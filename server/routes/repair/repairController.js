const repairService = require('./repairService')
module.exports={

    repairTool:(req,res)=>{
        const body = req.body
        repairService.repairTool(body)
        .then((result)=>{
            console.log(result)
            res.send(result)
        })
    }
}