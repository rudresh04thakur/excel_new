/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../../config/config.json`)[env];
const db = {};
const mongoose = require("mongoose");
if (config.username != '' && config.password != '') {
  mongoose.connect(`${config.dialect}://${config.username}:${config.password}@${config.host}/${config.database}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
} else {
  mongoose.connect(`${config.dialect}://${config.host}/${config.database}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
}

module.exports = db;
