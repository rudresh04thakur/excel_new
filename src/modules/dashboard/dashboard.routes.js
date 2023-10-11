/**
 *
 * @param {object} DashboardRouter
 * @param {ExpressRouter} DashboardRouter.router
 * @param {DashboardController} DashboardRouter.DashboardController
 * @param {DashboardValidator} DashboardRouter.DashboardValidator
 * @param {makeExpressCallback} DashboardRouter.makeExpressCallback
 * @param {makeValidatorCallback} DashboardRouter.makeValidatorCallback
 * @param {sessionChecker} ExcelRouter.sessionChecker
 * @returns {ExpressRouter}
 */
module.exports = ({
  router,
  DashboardController,
  DashboardValidator,
  makeValidatorCallback,
  makeExpressCallback,
  sessionChecker
}) => {
  router.get(
    '/',
    sessionChecker,
    makeExpressCallback(DashboardController.list)
  );
  return router;
};
