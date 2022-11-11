var ConfigurePath = () => {

  //var excelSheetPath ='C:/Jenkinspath/testdatafiles/testDataSheetPreprod.xls';
  //var excelSheetPath ='C:/Jenkinspath/testdatafiles';
  //var excelSheetPath ='./test/testdatafiles/testDataSheetProd.xls';
  //var excelSheetPath = './test/testdatafiles/testDataSheetPreprod.xls';
  var excelSheetPath = './test/testdatafiles/testDataSheetStagingEnv.xls';
  var downloadLocalPath = 'C:\\Users\\Qualitrix\\Downloads\\';
  var mp4File = 'D:\\stag4.9_19_mar\\test\\testdata\\DraftVersion.mp4';
  //var excelSheetPath = './test/testdata/sample.xlsx';




  // var AppURL='https://diksha.gov.in';
  // var AppURL='https://preprod.ntp.net.in';
  // var AppURL='https://staging.ntp.net.in';
  var AppURL = 'https://staging.sunbirded.org';

  // var AppURL='https://staging.diksha.gov.in';
  // var AppURL='https://dev.diksha.gov.in/';

  return {
    excelSheetPath,
    AppURL,
    downloadLocalPath,
    mp4File,
  };
};
module.exports = {
  ConfigurePath,
}
