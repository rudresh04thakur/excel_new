const ExcelService = require('./excel.service');

const ExcelController = {
  /**
   * Handle logging in user.
   * @async
   * @function
   * @param {ExpressRequest} httpRequest incoming http request
   * @param {ExpressResponse} httpResponse incoming http response
   * @returns {Promise.<ControllerResponse> }
   */
  readExcel: async (httpRequest) => {
    const excelData = await ExcelService.readExcel({
      ...httpRequest
    });
    return { returnType: 'render', path: 'excel', options: { tableHeader: Object.keys(excelData[0]), data: excelData } }
  },
};

module.exports = ExcelController;
