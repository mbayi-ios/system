const express = require("express")
const app = express() 
const cors = require("cors")
const pool = require("../config/db")

// get all users
const getAllPopulationsDb = async () => {
    const {rows: populations} = await pool.query("SELECT * from population")
    return [populations]
}

// create user
const createPopulationDb = async ({population_name }) => {
    const { rows: population} = await pool.query(
        "INSERT INTO population (population_name) VALUES($1) RETURNING *",
        [ population_name ]
    );
    return population[0];
}


module.exports = {
    getAllPopulationsDb,
    createPopulationDb
}