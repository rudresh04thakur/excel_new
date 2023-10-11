const { uploadFile } = require("../../middlewares");

/**
 *
 * @param {object} UserRouter
 * @param {ExpressRouter} UserRouter.router
 * @param {UserController} UserRouter.UserController
 * @param {UserValidator} UserRouter.UserValidator
 * @param {makeExpressCallback} UserRouter.makeExpressCallback
 * @param {makeValidatorCallback} UserRouter.makeValidatorCallback
 * @param {sessionChecker} UserRouter.sessionChecker
 * @param {uploadFile} UserRouter.uploadFile
 * @returns {ExpressRouter}
 */
module.exports = ({
  router,
  UserController,
  UserValidator,
  makeValidatorCallback,
  makeExpressCallback,
  sessionChecker
}) => {
  router.get(
    '/',
    sessionChecker,
    makeValidatorCallback(UserValidator.validateListUser),
    makeExpressCallback(UserController.list),
  );
  router.get(
    '/add',
    sessionChecker,
    makeValidatorCallback(UserValidator.addDummy),
    makeExpressCallback(UserController.add)
  );
  router.post(
    '/add',
    sessionChecker,
    makeValidatorCallback(UserValidator.validateAddUser),
    makeExpressCallback(UserController.addPost)
  );
  router.get(
    '/edit/:id',
    sessionChecker,
    makeExpressCallback(UserController.edit)
  );
  router.post(
    '/update',
    sessionChecker,
    makeValidatorCallback(UserValidator.validateUpdateUser),
    makeExpressCallback(UserController.update)
  );
  router.get(
    '/list',
    sessionChecker,
    makeValidatorCallback(UserValidator.validateListUser),
    makeExpressCallback(UserController.list)
  );
  router.get(
    '/view/:id',
    sessionChecker,
    makeValidatorCallback(UserValidator.validateViewUser),
    makeExpressCallback(UserController.view),
  );
  router.get(
    '/delete/:id',
    sessionChecker,
    makeValidatorCallback(UserValidator.validateDeleteUser),
    makeExpressCallback(UserController.delete),
  );
  router.post(
    '/uploadUser',
    uploadFile.single('file'),  
    makeExpressCallback(UserController.addUserByYaml),
  )
  return router;
};
