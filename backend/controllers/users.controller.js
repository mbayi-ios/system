const { hashPassword } = require("../helpers/hashPassword");
const userService = require("../services/users.service")

const getAllUsers = async (req, res) => {
    const results = await userService.getAllUsers()
    res.status(200).json(results);
}

const createUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body 
    const hashedPassword = await hashPassword(password)
    
    

    const user = await userService.createUser({
        first_name, last_name, email, password: hashedPassword
    });


    res.status(201).json({
        status: "success",
        user,
    })

    
}

module.exports = {
    getAllUsers,
    createUser
}