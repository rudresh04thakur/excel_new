const router = require('express').Router();

const {
  makeExpressCallback,
  makeValidatorCallback,
  sessionChecker
} = require('../../middlewares');

// validator
const ExcelValidator = require('./excel.validator');

// service
const ExcelService = require('./excel.service');

// controller
const ExcelController = require('./excel.controller');

// routes
const routes = require('./excel.routes')({
  router,
  ExcelController,
  ExcelValidator,
  makeValidatorCallback,
  makeExpressCallback,
  sessionChecker
});


module.exports = {
  ExcelController,
  ExcelService,
  ExcelRoutes: routes
};
