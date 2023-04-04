const express = require("express")
const app = express() 
const cors = require("cors")
const pool = require("../config/db")

// get all users
const getAllPrayercellsDb = async () => {
    const {rows: prayercells} = await pool.query("SELECT * from prayercells")
    return [prayercells]
}

// create user
const createPrayercellDb = async ({prayercell_name }) => {
    const { rows: prayercell} = await pool.query(
        "INSERT INTO prayercells (prayercell_name) VALUES($1) RETURNING *",
        [ prayercell_name ]
    );
    return prayercell[0];
}


module.exports = {
    getAllPrayercellsDb,
    createPrayercellDb
}