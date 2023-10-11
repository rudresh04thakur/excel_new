const fs = require('fs');
const yaml = require('js-yaml');
const Role = require('../../db/models/Role');
const { ObjectId } = require('mongodb');
const { NotFoundError } = require('../../utils/api-errors');
const RoleService = {
  /**
   * Logs in a user and generates a token.
   * @async
   * @function
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} If the user is not found.
   */
  doPostAddRole: async (requestBody) => {
    const { label, number } = requestBody;
    const role = await new Role();
    role.label = label;
    role.number = number;
    role.save().then(function(data){
      return data;
    }).catch(function(err){
      throw new NotFoundError('Error while save role : ' + err);
    });

  },
  doUpdateRole: async (requestBody) => {
    const { id, label, number } = requestBody;
    Role.updateOne({ _id: id }, {
      label: label,
      number: number
    }).then(function (data) {
      return data;
    }).catch(function (err) {
      throw new NotFoundError('Error while update : ' + err);
    });
  },
  doListRole: async (requestBody) => {
    const role = await Role.find().exec();
    if (!role) {
      throw new NotFoundError('User not found in list');
    }
    // fs.readdir('D:/sevenmentor/travelportal_final/src/public/database/user', async (error, files) => {
    //   filearray =[]
    //   if (error) {
    //     console.log("error in read folder",error);
    //   } else {
    //     for(i=0;i<files.length;i++){
    //       fileContents =  yaml.load(await fs.readFileSync('D:/sevenmentor/travelportal_final/src/public/database/user/'+files[i], 'utf8'));
    //       filearray.push(fileContents);
    //     }
    //     console.log("Length of files ",files.length); 
    //     let yamlStr = yaml.dump(filearray);
    //     fs.writeFileSync('D:/sevenmentor/travelportal_final/src/public/database/users.yaml', yamlStr, 'utf8');
    //   }
    //   // let fileContents = fs.readFileSync('/database/user/*.yaml', 'utf8');
    //   // let data = yaml.safeLoad(fileContents);
    // });



    return role;
  },
  doViewRole: async (requestBody) => {
    const { id } = requestBody;
    const role = await Role.findOne({ _id: id }).exec();
    if (!role) {
      throw new NotFoundError('User not found in view');
    }
    return role;
  },
  doEditRole: async (requestParam) => {
    const { id } = requestParam;
    const role = await Role.findOne({ _id: id }).exec();
    if (!role) {
      throw new NotFoundError('User not found in view');
    }
    return role;
  },
  doDeleteRole: async (requestBody) => {
    const { id } = requestBody;
    const role = await Role.deleteOne({_id: id});
    if (!role) {
      throw new NotFoundError('User not found in view');
    }
    return role;
  },
};

module.exports = RoleService;
