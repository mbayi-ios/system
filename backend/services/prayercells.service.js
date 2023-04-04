const { getAllPrayercellsDb, createPrayercellDb } = require("../db/prayercell.db")


class PrayecellService {
    getAllPrayercells = async () => {
        try {
            return await getAllPrayercellsDb()
        } catch (error) {
            console.log(error.message)
        }
    }

    createPrayercell = async (prayercell) => {
        try {
            return await createPrayercellDb(prayercell);

        } catch (error){
            console.error(error.message)
        }
    }
}

module.exports = new PrayecellService()