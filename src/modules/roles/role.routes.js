/**
 *
 * @param {object} RoleRouter
 * @param {ExpressRouter} RoleRouter.router
 * @param {RoleController} RoleRouter.RoleController
 * @param {RoleValidator} RoleRouter.RoleValidator
 * @param {makeExpressCallback} RoleRouter.makeExpressCallback
 * @param {makeValidatorCallback} RoleRouter.makeValidatorCallback
*  @param {sessionChecker} RoleRouter.sessionChecker
 * @returns {ExpressRouter}
 */
module.exports = ({
  router,
  RoleController,
  RoleValidator,
  makeValidatorCallback,
  makeExpressCallback,
  sessionChecker
}) => {
  router.get(
    '/',
    sessionChecker,
    makeValidatorCallback(RoleValidator.validateListRole),
    makeExpressCallback(RoleController.list)
  );
  router.get(
    '/add',
    sessionChecker,
    makeExpressCallback(RoleController.add)
  );
  router.post(
    '/add',
    sessionChecker,
    makeValidatorCallback(RoleValidator.validateAddRole),
    makeExpressCallback(RoleController.postAdd)
  );
  router.get(
    '/edit/:id',
    sessionChecker,
    makeExpressCallback(RoleController.edit)
  );
  router.post(
    '/update',
    sessionChecker,
    makeValidatorCallback(RoleValidator.validateUpdateRole),
    makeExpressCallback(RoleController.update)
  );
  router.get(
    '/list',
    sessionChecker,
    makeValidatorCallback(RoleValidator.validateListRole),
    makeExpressCallback(RoleController.list)
  );
  router.get(
    '/view/:id',
    sessionChecker,
    makeValidatorCallback(RoleValidator.validateViewRole),
    makeExpressCallback(RoleController.view)
  );
  router.post(
    '/delete',
    sessionChecker,
    makeValidatorCallback(RoleValidator.validateDeleteRole),
    makeExpressCallback(RoleController.delete)
  );
  return router;
};
