const rentalService = require("./rentalService")

module.exports={

    rentalTool:(req,res)=>{
    const body = req.body

    rentalService.rentalTool(body)
    .then((result)=>{
        console.log(result)
    })

    }
}