var ConfigurePath = () => {

  //var excelSheetPath ='C:/Jenkinspath/testdatafiles/testDataSheetPreprod.xls';
  //var excelSheetPath ='C:/Jenkinspath/testdatafiles';
  //var excelSheetPath ='./test/testdatafiles/testDataSheetProd.xls';
  //var excelSheetPath = './test/testdatafiles/testDataSheetPreprod.xls';
//  var excelSheetPath = './test/testdatafiles/VDNStaging.xls';
//  var OrgName= 'Sunrise';
    var excelSheetPath = './test/testdatafiles/VDNPreprod.xls';
    var OrgName= 'Cherry';
  //var excelSheetPath = './test/testdatafiles/VDNProd.xls';
  //var OrgName= 'EKSTEP';
  var downloadLocalPath = 'C:\\Users\\Qualitrix\\Downloads\\';
  




  // var AppURL = 'https://dockstaging.sunbirded.org';
   var AppURL = 'https://dock.preprod.ntp.net.in';
  //var AppURL = 'https://vdn.diksha.gov.in/';




  

  //var AppURL='https://staging.diksha.gov.in';
  //var AppURL='https://dev.diksha.gov.in/';

  return {
    excelSheetPath,
    AppURL,
    downloadLocalPath,
    OrgName,
  };
};
module.exports = {
  ConfigurePath,
}
