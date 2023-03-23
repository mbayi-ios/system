const { getAllUsersDb, createUserDb } = require("../db/user.db")

class UserService {
    getAllUsers = async () => {
        try {
            return await getAllUsersDb()
        } catch (error) {
            console.log(error.message)
        }
    }

    createUser = async (user) => {
        try {
            return await createUserDb(user);

        } catch (error){
            console.error(error.message)
        }
    }
}

module.exports = new UserService()