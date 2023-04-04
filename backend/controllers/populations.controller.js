const populationService = require("../services/populations.service");


const getAllPopulations = async (req, res) => {
  
    const results = await populationService.getAllPopulations()
    res.status(200).json(results);
}

const createPopulation = async (req, res) => {
    const { population_name} = req.body 
    
    const population = await populationService.createPopulation({
        population_name
    });

    res.status(201).json({
        status: "success",
        population,
    })
}



module.exports = {
    getAllPopulations,
    createPopulation
    
}