const User = require('../../db/models/User');
const { NotFoundError } = require('../../utils/api-errors');
const fs = require('fs');
const yaml = require('js-yaml');
const  path = require('path');
const UserService = {
  /**
   * Logs in a user and generates a token.
   * @async
   * @function
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} If the user is not found.
   */
  doUpdateUser: async (requestBody) => {
    const { id, fname, lname, email, phone, employeeCode, role } = requestBody;
    User.updateOne({ _id: id }, {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      employeeCode: employeeCode,
      role: role
    }).then(function (data) {
      return data;
    }).catch(function (err) {
      throw new NotFoundError('Error while update : ' + err);
    });
  },
  doAddUser: async (requestBody) => {
    const { fname,lname, email, phone, employeeCode, password, role, employer } = requestBody;
    const user = await new User();
    user.fname = fname;
    user.lname = lname;
    user.email = email;
    user.phone = phone;
    user.employeeCode = employeeCode;
    user.employer = employer;
    user.role = role;
    user.password = password
    user.save().then(function(data){
      return data;
    }).catch(function(err){
      throw new NotFoundError('Error while save user : ' + err);
    });
  },
  doListUser: async (requestBody) => {
    const user = await User.find().exec();
    if (!user) {
      throw new NotFoundError('User not found in list');
    }
    return user;
  },
  doViewUser: async (requestBody) => {
    const { employeeCode } = requestBody;
    const user = await User.findOne({ employeeCode: employeeCode }).exec();
    if (!user) {
      throw new NotFoundError('User not found in view');
    }
    return user;
  },
  doEditUser: async (requestParam) => {
    const { id } = requestParam;
    const user = await User.findOne({ _id: id }).exec();
    if (!user) {
      throw new NotFoundError('User not found in view');
    }
    return user;
  },
  doDeleteUser: async (requestBody) => {
    const { id } = requestBody;
    const user = await User.deleteOne({_id: id});
    if (!user) {
      throw new NotFoundError('User not found in view');
    }
    return user;
  },
  doAddUserFromYaml: async (requestBody) => {
    const { fileName } = requestBody;
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
    fileContents =  yaml.load(await fs.readFileSync('D:/sevenmentor/travelportal_final/src/public/uploads/'+fileName, 'utf8'));
    const user = await new User();
    user.fname = fileContents.fname || '';
    user.lname = fileContents.lname || '';
    user.email = fileContents.email || '';
    user.phone = fileContents.phone || '';
    user.employeeCode = fileContents.eid || '';
    user.employer = fileContents.employer || '';
    user.role = fileContents.role || '';
    user.password = fileContents.password || '';
    user.save().then(function(data){
      return data;
    }).catch(function(err){
      throw new NotFoundError('Error while save user : ' + err);
    });
    // });

  }
};

module.exports = UserService;
