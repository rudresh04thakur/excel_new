const DashboardService = require('./dashboard.service');
const helper = require('../../utils/helper');

const DashboardController = {
  /**
   * Handle logging in user.
   * @async
   * @function
   * @param {ExpressRequest} httpRequest incoming http request
   * @returns {Promise.<ControllerResponse> }
   */
  list: async (httpRequest) => {
    const analytics = await DashboardService.getAnalytics({
      ...httpRequest
    });
    return { returnType: 'render', path: 'dashboard-list', options : {data : analytics.groupedArray,totalInvoice:analytics.sumOfCount}}
  },
};

module.exports = DashboardController;
