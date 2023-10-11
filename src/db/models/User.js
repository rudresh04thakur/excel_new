/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');


// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/]
  },
  role: {
    type: String,
    default: 'user'
  },
  password: {
    type: String,
    index: true
  },
  fname: {
    type: String,
    match: [/^[a-zA-Z ]+$/, 'is invalid'],
    index: true
  },
  lname: {
    type: String,
    match: [/^[a-zA-Z ]+$/, 'is invalid'],
    index: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: [true, "can't be blank"],
    match: [/^[0-9]+$/, 'is invalid'],
    index: true
  },
  employeeCode: {
    type: String,
    index: true
  },
  employer: {
    type: String,
    index: true
  }
}, { timestamps: true });

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

module.exports = mongoose.model('users', UserSchema);