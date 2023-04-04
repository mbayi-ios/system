const { createPopulationDb, getAllPopulationsDb } = require("../db/population.db")


class PopulationService {
    getAllPopulations = async () => {
        try {
            return await getAllPopulationsDb()
        } catch (error) {
            console.log(error.message)
        }
    }

    createPopulation = async (population) => {
        try {
            return await createPopulationDb(population);

        } catch (error){
            console.error(error.message)
        }
    }
}

module.exports = new PopulationService()