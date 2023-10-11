const AuthService = require('./auth.service');
const helper = require('../../utils/helper');

const AuthController = {
  /**
   * Handle logging in user.
   * @async
   * @function
   * @param {ExpressRequest} httpRequest incoming http request
   * @param {ExpressResponse} httpResponse incoming http response
   * @returns {Promise.<ControllerResponse> }
   */
  login: async (httpRequest) => {
    const loginData = await AuthService.doLogin(httpRequest.body);
    if (loginData) {
      httpRequest.session.profile = loginData;
      return { returnType: 'redirect', path: '/dashboard' }
    } else {
      return { returnType: 'redirect', path: '/login' }
    }
    // return helper.generateResponse(loginData);
  },
  register: async (httpRequest) => {
    const registerData = await AuthService.doRegistration({
      password: helper.generatePassword(),
      ...httpRequest.body
    });
    return helper.generateResponse(registerData);
  },
  resetPassword: async (httpRequest) => {
    const passwordData = await AuthService.resetPassword({
      password: helper.generatePassword(),
      ...httpRequest.body
    });
    return helper.generateResponse(passwordData);
  },
  doLogout: async (requestBody) => {
    requestBody.session.destroy();
    return true;
  }
};

module.exports = AuthController;
