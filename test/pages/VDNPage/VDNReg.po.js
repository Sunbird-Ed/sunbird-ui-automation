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
   var assertModify = element(by.xpath("//i[@data-tooltip='Modify']"));
   var filterBoard = element(by.xpath("//option[contains(text(),'Select Board/Syllabus')]"));
   var filterCBSE = element(by.xpath("//option[contains(text(),'CBSE')]"));
   var filterMedium = element(by.xpath("//li[contains(text(),'Select Medium' )]"));
   var filterEnglish = element(by.xpath("//label[contains(text(),'English')]"));
   var filterClass = element(by.xpath("//li[contains(text(),'Select Class')]"));
   var filterClass4 = element(by.xpath("//label[contains(text(),'Class 4')]"));
   var filterSubject = element(by.xpath("//li[contains(text(),'Select Subject')]"));
   var filterSubEvs = element(by.xpath("//label[contains(text(),'Environmental Studies')]")); 
   var filterApply = element(by.xpath("//button[contains(text(),' Apply ')]"));
   var editTextbookunit = element(by.xpath("//div[contains(text(),'Edit Textbook Unit(s)')]"));
   var unselectUnit1 = element(by.xpath("//input[@class='ng-pristine ng-valid ng-touched']"));
   var done = element(by.xpath("//button[contains(text(),' Done ')]"));
   var selecttxtbookunits = element(by.xpath("//div[contains(text(),' Select Textbook Unit(s) ')]"));
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
        assertModify,
        filterBoard,
        filterCBSE,
        filterMedium,
        filterEnglish,
        filterClass,
        filterClass4,
        filterSubject,
        filterSubEvs,
        filterApply,
        editTextbookunit,
        unselectUnit1,
        done,
        selecttxtbookunits
}

}
module.exports = {
    VDNReg
}