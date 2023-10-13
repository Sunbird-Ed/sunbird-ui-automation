const { element, by } = require("protractor");

var VDNReg = () => {

    var select100TextBook = element(by.xpath("(//td[@class='collapsing'])"));

   var projectsavedraft = element(by.xpath("//button[contains(text(),'Save as Draft')]"));
   var assertStatusDraft = element(by.xpath("//div[text()='Draft']"));
   var editDraft = element(by.xpath("//span[text()='Edit Draft'][1]"));
   var assertStatusLive = element(by.xpath("//div[text()='Live']"));
   var countTextbook = element(by.xpath("//div[text()='1 Digital Textbook']"));
   var assertcontentTypeshdr = element(by.xpath("//th[text()='Content Type(s)']"));
   var assertmgs = element(by.xpath("//th[text()='Medium, Class, Subject']"));
   var assertProjectdates = element(by.xpath("//th[text()='Project Dates']"));
   var assertOpen = element(by.xpath("//button[text()='Open ']"));
   var assertModify = element(by.xpath("//i[@data-tooltip='Modify']"))



    return {

        select100TextBook,
        projectsavedraft,
        assertStatusDraft,
        editDraft,
        assertStatusLive,
        countTextbook,
        assertcontentTypeshdr,
        assertmgs,
        assertProjectdates,
        assertOpen,
        assertModify


}

}
module.exports = {
    VDNReg
}