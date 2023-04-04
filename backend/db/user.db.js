const express = require("express")
const app = express() 
const cors = require("cors")
const pool = require("../config/db")

// get all users
const getAllUsersDb = async () => {
    const {rows: users} = await pool.query("SELECT * from users")
    return users
}

// create user
const createUserDb = async ({first_name, last_name, email, password }) => {
    const { rows: user} = await pool.query(
        "INSERT INTO users (first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *",
        [ first_name, last_name, email, password ]
    );
    return user[0];
}

// delete user 
const deleteUserDb = async(id) => {
    const { row: user } = await pool.query(
        "DELETE FROM users where user_id = $1 returning *",
        [id]
    )
    return user[0]
};

// update user 
const updateUserDb = async({ first_name, last_name, email }) => {
    const { rows: user} = await pool.query(
        `UPDATE uses set first_name = $1, last_name = $2, email = $3`,
        [first_name, last_name, email]
    )
}

module.exports = {
    getAllUsersDb,
    createUserDb,
    updateUserDb,
    deleteUserDb
}