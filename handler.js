'use strict';
require('dotenv').config();
const {Client } = require('pg')
module.exports.hello = async event => {
  const QUERY = 'SELECT name from public."city"';
  
  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {

    await client.connect();
    let result = await client.query(QUERY);
    if (result) {
      console.log("RESULT::>", result.rows);
      await client.end();
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Query executed successfully!'
        })
      };
    }
  }
  catch(e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'ERROR: unable to execute query!'+ e.message
      })
    };
  }
}
