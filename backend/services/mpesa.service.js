const { createMpesaDb, getAllMpesaDb } = require("../db/mpesa.db");

class MpesaService {

    createMpesaTransaction = async(mpesaTransaction) => {
        try {
            return await createMpesaDb(mpesaTransaction)
        } catch (error) {
            console.error(error.message)
        }
    }

    getAllMpesaTransactions = async () => {
        try {
            return await getAllMpesaDb()
            
        } catch(error) {
            console.log(error.message)
        }
    }
}

module.exports = new MpesaService()