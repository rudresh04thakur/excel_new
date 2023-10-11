const UserService = require('./user.service');
const RoleService = require('../roles/role.service');
const helper = require('../../utils/helper');
const fs = require('fs');
const yaml = require('js-yaml');

const UserController = {
  /**
   * Handle logging in user.
   * @async
   * @function
   * @param {ExpressRequest} httpRequest incoming http request
   * @param {ExpressResponse} httpResponse incoming http response
   * @returns {Promise.<ControllerResponse> }
   */
  update: async (httpRequest) => {
    await UserService.doUpdateUser({
      ...httpRequest.body
    });
    return { returnType: 'redirect', path: 'list' }
  },
  list: async (httpRequest) => {
    const userList = await UserService.doListUser({
      ...httpRequest.body
    });
    return { returnType: 'render', path: 'list', options: { users: userList, roles: helper.getUserRoleLabel()  } }
  },
  view: async (httpRequest) => {
    const user = await UserService.doViewUser({
      ...httpRequest.params
    });
    return helper.generateResponse(user);
  },
  edit: async (httpRequest) => {
    const user = await UserService.doEditUser({
      ...httpRequest.params
    });
    const roles = await RoleService.doListRole({
      ...httpRequest.body
    });
    return { returnType: 'render', path: 'update', options: { user: user,roles: roles } }
  },
  delete: async (httpRequest) => {
    await UserService.doDeleteUser({
      ...httpRequest.params
    });
    return { returnType: 'redirect', path: 'list' }
  },
  addPost: async (httpRequest) => {
    await UserService.doAddUser({
      ...httpRequest.body
    });
    return { returnType: 'redirect', path: 'list' };
  },
  add: async (httpRequest) => {
    const roles = await RoleService.doListRole({
      ...httpRequest.body
    });
    return { returnType: 'render', path: 'add', options: {roles: roles}}
  },
  addUserByYaml: async (httpRequest) => {
    const userList = await UserService.doAddUserFromYaml({
      fileName: httpRequest.file.filename
    });
    return { returnType: 'redirect', path: 'list'}
  },
  exportUserToYaml: async (httpRequest) => {
    const userList = await UserService.doListUser({
      ...httpRequest.body
    });
    let yamlStr = yaml.dump(userList);
    fs.writeFileSync('D:/sevenmentor/travelportal_final/src/public/database/users.yaml', yamlStr, 'utf8');
    return { returnType: 'download', path: '', data: userList}
  }
};

module.exports = UserController;
