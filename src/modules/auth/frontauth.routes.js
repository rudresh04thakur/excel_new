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
  // AuthController,
  // AuthValidator,
  // makeValidatorCallback,
  // makeExpressCallback,
}) => {
  router.get('/',function(req, res, next){
    res.render('login');
  });
  router.get('/login',function(req, res, next){
    res.render('login');
  });
  router.get('/registration',function(req, res, next){
    res.render('registration');
  });
  router.get('/reset',function(req, res, next){
    res.render('reset');
  })
  return router;
};
//    // mongodb://root:root@localhost:27017/?authMechanism=DEFAULT