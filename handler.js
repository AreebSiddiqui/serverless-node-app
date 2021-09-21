'use strict';
require('dotenv').config();
const { Pool, Client } = require('pg')
module.exports.hello = async event => {
  
  const QUERY = 'SELECT name from public."city"';


  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

      await client.connect();
      let result = await client.query(QUERY);
      if (result) {
       await client.end();
       return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Go Serverless v3.0! Your function executed successfully!'
          },
          null,
          2
        ),
      };
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v3.0! Your function executed successfully2!'
        },
        null,
        2
      ),
    }
}
