const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');
const Role = require('../../db/models/Role');

const { BadRequestError, NotFoundError } = require('../../utils/api-errors');

const DashboardService = {
  /**
   * Logs in a user and generates a token.
   * @async
   * @function
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} If the user is not found.
   */
  getAnalytics: async (requestBody) => {

    /* 10-10-2023
    const workbook = xlsx.readFile('src/public/uploads/data.xlsx');
    let workbook_sheet = workbook.SheetNames;
    let workbook_response = xlsx.utils.sheet_to_json(
      workbook.Sheets[workbook_sheet[0]]
    );
    //var filteredData = []
    var pieData = {}
    // if(requestBody.session.profile.roleLabel.toLowerCase() == 'admin'){
    //   //filteredData = workbook_response
    // }else{
      workbook_response.filter((row)=>{
        if(pieData.hasOwnProperty(row['invoiceprocessstatus'])!=false){
          pieData[row['invoiceprocessstatus']]=pieData[row['invoiceprocessstatus']]+1
        }else{
          piData = {
            [row['invoiceprocessstatus']]:0,
            ...pieData
          }
          // console.log("ttt ",{
          //   [row['invoiceprocessstatus']]:0
          // });
        }
      });
    // }
    
    
    return
    10-10-23*/

    const workbook = xlsx.readFile('src/public/uploads/data.xlsx');
    
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    
    const jsonData = xlsx.utils.sheet_to_json(sheet);
    
    const column3Data = jsonData.map((row) => row['Contract']);
    
    const groupedData = column3Data.reduce((result, value) => {
      result[value] = (result[value] || 0) + 1;
      return result;
    }, {});
  
    const groupedArray = Object.keys(groupedData).map((key) => ({
      contract_name: key,
      count: groupedData[key],
    }));
    const sumOfCount = groupedArray.reduce((total, item) => total + item.count, 0);
    const groupedArrayWithPercentage = groupedArray.map((item) => ({
      ...item,
      percentage: (item.count / sumOfCount) * 100,
    }));

    return {groupedArray:groupedArrayWithPercentage,sumOfCount};
    //console.log(groupedArray);
    

  },
  

};

module.exports = DashboardService;
