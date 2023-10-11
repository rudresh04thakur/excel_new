const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');
const Role = require('../../db/models/Role');

const ExcelService = {
  /**
   * Logs in a user and generates a token.
   * @async
   * @function
   * @param {ExcelDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} If the user is not found.
   */
  readExcel: async (requestBody) => {
    const workbook = xlsx.readFile('src/public/uploads/data.xlsx');
    let workbook_sheet = workbook.SheetNames;
    let workbook_response = xlsx.utils.sheet_to_json(
      workbook.Sheets[workbook_sheet[0]]
    );
    var filteredData = []
    if(requestBody.session.profile.roleLabel.toLowerCase() == 'admin'){
      filteredData = workbook_response
    }else{
      filteredData = workbook_response.filter(row => row['Contract'].toLowerCase() == requestBody.session.profile.roleLabel.toLowerCase());
    }
    return filteredData;
  },
};

module.exports = ExcelService;
