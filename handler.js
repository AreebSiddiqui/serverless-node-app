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
    try {
      let result = await client.query(QUERY);
      if (result) {
        client.end();
        return 'Query executed successfully';
      } 
    }
    catch(e){ 
      return 'Error executing query' + e;
    }
};

module.exports = {query};