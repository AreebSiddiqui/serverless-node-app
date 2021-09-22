'use strict';
require('dotenv').config();
const { Pool, Client } = require('pg')
module.exports.hello = async event => {
  console.log('FIRST CONSOLE')
  const QUERY = 'SELECT name from public."city"';
  
  console.log('FIRST CONSOLE');
  
  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  console.log('SECOND CONSOLE');
  
  await client.connect();
  console.log('THIRD CONSOLE');
  let result = await client.query(QUERY);
  if (result) {
        console.log('FOUR CONSOLE');
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
  console.log('FIVE CONSOLE');
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
