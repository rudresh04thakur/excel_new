/**
 *
 * @param {object} ExcelRouter
 * @param {ExpressRouter} ExcelRouter.router
 * @param {ExcelController} ExcelRouter.ExcelController
 * @param {ExcelValidator} ExcelRouter.ExcelValidator
 * @param {makeExpressCallback} ExcelRouter.makeExpressCallback
 * @param {makeValidatorCallback} ExcelRouter.makeValidatorCallback
 * @param {sessionChecker} ExcelRouter.sessionChecker
 * @returns {ExpressRouter}
 */
module.exports = ({
  router,
  ExcelController,
  ExcelValidator,
  makeValidatorCallback,
  makeExpressCallback,
  sessionChecker
}) => {
  router.get(
    '/',
    sessionChecker,
    makeExpressCallback(ExcelController.readExcel),
  );
  return router;
};
