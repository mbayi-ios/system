CREATE DATABASE system;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    email character varying(100) UNIQUE NOT NULL,
    password character varying(200) 
)

CREATE TABLE mpesa(
     Order_ID character varying(255) NOT NULL,  
    MerchantRequestID character varying(255) NOT NULL, 
    CheckoutRequestID character varying(255) NOT NULL, 
    ResultCode character varying(255) NOT NULL, 
   ResultDesc character varying(255) NOT NULL, 
    PhoneNumber character varying(255) NOT NULL, 
    Amount character varying(255) NOT NULL, 
    MpesaReceiptNumber character varying(255) NOT NULL, 
    TransactionDate character varying(255) NOT NULL,
    PRIMARY KEY(Order_ID)
)