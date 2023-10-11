const bcrypt = require('bcryptjs');
const User = require('../../db/models/User');
const Role = require('../../db/models/Role');
const JwtService = require('./jwt.service');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');
const AuthService = {
  /**
   * Logs in a user and generates a token.
   * @async
   * @function
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} If the user is not found.
   */
  doLogin: async (requestBody) => {
    const { email, password } = requestBody;
    const user = await User.findOne({ email: email, password: password }).exec();
    if (!user) {
      throw new NotFoundError('User not found');
    }
    var roleData = { label: "admin", number: 0 }
    if (user.role != 0) {
      roleData = await Role.findOne({ number: user.role }).exec();
      if (!roleData) {
        throw new NotFoundError('roleData not found');
      }
    }

    const payload = {
    employeeCode: user.employeeCode,
    role: user.role,
    roleLabel: roleData.label.toLowerCase(),
    email: user.email,
    fname: user.fname,
    lname: user.lname,
    phone: user.phone
  };

  const accessToken = await JwtService.generateJWT({
    payload,
  });
  return {
    accessToken,
    ...payload,
  };
},
  doRegistration: async (requestBody) => {
    const { fname, lname, email, phone, employeeCode, password } = requestBody;
    const user = await new User();
    user.fname = fname;
    user.lname = lname;
    user.email = email;
    user.phone = phone;
    user.employeeCode = employeeCode;
    user.password = password
    user.save().then(function (data) {
      return data;
    }).catch(function (err) {
      throw new NotFoundError('Error while register : ' + err);
    });
  },
    resetPassword: async (requestBody) => {
      const { email, password } = requestBody;
      User.updateOne({ email: email }, { password: password }).then(function (data) {
        return data;
      }).catch(function (err) {
        throw new NotFoundError('Error while reset : ' + err);
      })
    },
      doLogout: async (requestBody) => {
        requestBody.session.destroy();
        return true;
      }
};

module.exports = AuthService;
