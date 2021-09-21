'use strict';
require('dotenv').config();
const { Pool, Client } = require('pg')
const query = async (event) => {
  
  const QUERY = 'SELECT name from public."city"';


  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

    client.connect();
    let result = await client.query(QUERY);
    result && client.end(); 
    return result;
};

module.exports = {query};