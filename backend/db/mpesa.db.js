const express = require("express")
const app = express() 
const cors = require("cors")
const pool = require("../config/db")

const getAllMpesaDb = async () => {
    const {rows: mpesaTransaction} = await pool.query("SELECT * from mpesa")
    return mpesaTransaction
}

const createMpesaDb = async ({
    Order_ID, MerchantRequestID, CheckoutRequestID, ResultCode, 
        ResultDesc, PhoneNumber, Amount, MpesaReceiptNumber, TransactionDate
}) => {
    const { rows: mpesaTransaction} = await pool.query(
        `INSERT INTO mpesa( Order_ID, MerchantRequestID, CheckoutRequestID, ResultCode, 
            ResultDesc, PhoneNumber, Amount, MpesaReceiptNumber, TransactionDate) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [   Order_ID, MerchantRequestID, CheckoutRequestID, ResultCode, 
            ResultDesc, PhoneNumber, Amount, MpesaReceiptNumber, TransactionDate ]
    );
    return  mpesaTransaction[0];
}

module.exports = {
    getAllMpesaDb,
    createMpesaDb
}