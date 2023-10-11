const httpStatus = require('./httpStatus');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

/**
 * Get the ID parameter from a request object.
 * @param {object} req - The request object.
 * @returns {number} - The ID parameter as a number.
 * @throws {TypeError} - If the ID parameter is not a valid number.
 */
function getIdParam(req) {
  const { id } = req.params;
  if (/^\d+$/.test(id)) {
    return Number.parseInt(id, 10);
  }
  throw new TypeError(`Invalid ':id' param: "${id}"`);
}

/**
 * Generates a response object with the provided data and status code.
 *
 * @param {*} data - The data to include in the response.
 * @param {number} [statusCode=200] - The status code for the response (default: 200).
 * @returns {Object} The response object containing the data and status code.
 */
function generateResponse(data, statusCode = httpStatus.OK,returnType = 'json') {
  return {
    statusCode,
    data,
    returnType
  };
}

function generatePassword(
  length = 8,
  wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$') {
  return Array.from(crypto.randomFillSync(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('');
}
function hashingPassword(password, saltRounds = 10) {
  console.log("password : ", password);
  bcrypt.genSalt(saltRounds, function (error, salt) {
    if (error) {
      throw new Error('BROKEN')
    }
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) {
        throw new Error('BROKEN')
      }
      console.log("Hashed password",hash)
      return hash
    });
  });
}
function getUserRoleLabel(){
  return {
    0 :'User',
    1:'HR',
    2:'Accountant',
    3:'Manager',
    4:'Admin',
  }
}
function getUserRoleNumber(){
  return {
    'User':0,
    'HR':1,
    'Accountant':2,
    'Manager':3,
    'Admin':4,
  }
}
module.exports = { getIdParam, generateResponse, generatePassword, hashingPassword,getUserRoleLabel,getUserRoleNumber };
