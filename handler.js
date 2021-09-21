'use strict';
require('dotenv').config();
const { Pool, Client } = require('pg')
module.exports.hello = async event => {
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
};