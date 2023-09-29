const { element, by } = require("protractor");

var VDNReg = () => {

    var select100TextBook = element(by.xpath("//input[@name='checkitem']"));





    return {

        select100TextBook

}

}
module.exports = {
    VDNReg
}