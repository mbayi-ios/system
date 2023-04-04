const prayercellsService = require("../services/prayercells.service");


const getAllPrayercells = async (req, res) => {
    //const results = await userService.getAllUsers()
    const results = await prayercellsService.getAllPrayercells()
    res.status(200).json(results);
}

const createPrayercell = async (req, res) => {
    const { prayercell_name} = req.body 
    
    const prayercell = await prayercellsService.createPrayercell({
        prayercell_name
    });

    res.status(201).json({
        status: "success",
        prayercell,
    })
}



module.exports = {
    getAllPrayercells,
    createPrayercell
    
}