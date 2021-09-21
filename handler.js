'use strict';
require('dotenv').config();
const { Pool, Client } = require('pg')
const hello = async (event) => {
  
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
        return {
          "statusCode": 200,
          "body": json.dumps('Query executed successfully')
        }
         
      } 
    }
    catch(e){ 
      return {
        "statusCode": 500,
        "body": json.dumps(e)
      }
    }
};

module.exports = {hello};