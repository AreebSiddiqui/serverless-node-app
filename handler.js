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
       await client.end();
        return {
          statusCode: 200,
          body: JSON.stringify(
            {
              message: 'Query executed successfully!'
            }),
            headers: { 'Content-Type': 'application/json' },

        };
         
      } 
    }
    catch(e){ 
      return {
        statusCode: 400,
        body: JSON.stringify(
          {
            message: 'Not executed successfully'
          }
        ),
        headers: { 'Content-Type': 'application/json' },
      };
  };
}

module.exports = {hello};