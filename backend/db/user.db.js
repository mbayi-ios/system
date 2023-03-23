const express = require("express")
const app = express() 
const cors = require("cors")
const pool = require("../config/db")

const getAllUsersDb = async () => {
    const {rows: users} = await pool.query("SELECT * from users")
    return users
}

const createUserDb = async ({first_name, last_name, email, password }) => {
    const { rows: user} = await pool.query(
        "INSERT INTO users (first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *",
        [ first_name, last_name, email, password ]
    );
    return user[0];
}

module.exports = {
    getAllUsersDb,
    createUserDb
}