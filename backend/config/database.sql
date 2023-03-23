CREATE DATABASE system;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    email character varying(100) UNIQUE NOT NULL,
    password character varying(200) 
)