const router = require('express').Router();

const {
  makeExpressCallback,
  makeValidatorCallback,
  sessionChecker
} = require('../../middlewares');

// validator
const DashboardValidator = require('./dashboard.validator');

// service
const DashboardService = require('./dashboard.service');

// controller
const DashboardController = require('./dashboard.controller');

// routes
const routes = require('./dashboard.routes')({
  router,
  DashboardController,
  DashboardValidator,
  makeValidatorCallback,
  makeExpressCallback,
  sessionChecker
});


module.exports = {
  DashboardController,
  DashboardService,
  DashboardRoutes: routes
};
