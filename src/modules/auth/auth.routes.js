/**
 *
 * @param {object} AuthRouter
 * @param {ExpressRouter} AuthRouter.router
 * @param {AuthController} AuthRouter.AuthController
 * @param {AuthValidator} AuthRouter.AuthValidator
 * @param {makeExpressCallback} AuthRouter.makeExpressCallback
 * @param {makeValidatorCallback} AuthRouter.makeValidatorCallback
 * @returns {ExpressRouter}
 */
module.exports = ({
  router,
  AuthController,
  AuthValidator,
  makeValidatorCallback,
  makeExpressCallback,
}) => {
  router.post(
    '/login',
    makeValidatorCallback(AuthValidator.validateLogin),
    makeExpressCallback(AuthController.login)
  );
  router.post(
    '/register',
    makeValidatorCallback(AuthValidator.validateRegister),
    makeExpressCallback(AuthController.register)
  );
  router.post(
    '/reset',
    makeValidatorCallback(AuthValidator.validateReset),
    makeExpressCallback(AuthController.resetPassword)
  );
  router.get(
    '/logout',
    makeExpressCallback(AuthController.logout)
  );
  return router;
};
