//const { element } = require("protractor");


var upload = () => {

    var clickuploadContent = element(by.xpath("//span[contains(text(),'Upload Content')]"));
    var browseButton = element(by.xpath("//input[@type='file']"));
    var savebutton = element(by.xpath("//span[@class='label-icon-box-text save-button-text']"));
    var closebutton = element(by.xpath("//button[contains(text(),'Close')]"));
    var closebuttonupload = element(by.id('closeButton'));
    var allmycontent = element(by.xpath("//a[@href='/workspace/content/allcontent/1']"));
    var allmycont1 = element(by.xpath("//div[@class='UpReviewSubHeader']"));
    var uploadcontIcon = element(by.xpath("//div[@data-content='Upload Content']"));
    var sendforRev = element(by.xpath("//div[@class='ui button text-part popup-item']//i[@class='send icon']"));
    var enterUrl = element(by.model("contentURL"));
    var uploadButton = element(by.xpath("//button[contains(text(),'Upload')]"));
    var clkEditDetails = element(by.xpath("//*[contains(text(),'Edit Details')]"));
    var selectOne = element(by.id("_selectPrimaryCategory"));
    var learningResource = element(by.xpath("(//select[@id='_selectPrimaryCategory']//following::option)[2]"));
    var saveupload = element(by.xpath("//div[@data-content='Save content']"));
    var close = element(by.xpath("//button[text()='Close']"));
    var closeEditor = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var sndForRevInUpload = element(by.xpath("//div[@id='reviewButton']"));
    var contentCard = element(by.xpath("//th[contains(text(),'Content ')]//following::div[@class='UpReviewHeader']"));
    var allUploads = element(by.xpath("//a[@mattooltip='View all your uploads']"));
    var allUploadsContentCard = element(by.xpath("//a[@mattooltip='View all your uploads']//following::span[@class='sliderCardHeading text-cencapitalize']"));
    var sharedViaLinkBucket = element(by.xpath("//a[@mattooltip='View content shared via link. This is not searchable until published by submitting for review']"));
    var editDetails = element(by.xpath("//label[contains(text(),'Untitled Content')]//following::span[@ng-if='showEditMeta']"));
    var limitSharingDrpdwn = element(by.xpath("//label[contains(text(),'Untitled Content')]//following::div[@ng-show='hideLimitedSharingBtn']//following::i[@class='dropdown icon']"));
    var limmitSharingDrpdwnValue = element(by.xpath("//label[contains(text(),'Untitled Content')]//following::div[@ng-show='hideLimitedSharingBtn']//following::i[@class='dropdown icon']/following::div[@class='item']"));
    var closebuton = element(by.xpath("//button[contains(text(),'Close')]"));
    var assertLiscenceCCBY = element(by.xpath("//label[text()='LICENSE']//following::div[contains(text(),'CC BY 4.0')]"));


    return {
        clickuploadContent,
        close,
        browseButton,
        savebutton,
        closebutton,
        closebuttonupload,
        allmycontent,
        allmycont1,
        uploadcontIcon,
        sendforRev,
        enterUrl,
        uploadButton,
        clkEditDetails,
        selectOne,
        learningResource,
        saveupload,
        closeEditor,
        sndForRevInUpload,
        contentCard,
        allUploads,
        allUploadsContentCard,
        sharedViaLinkBucket,
        editDetails,
        limitSharingDrpdwn,
        limmitSharingDrpdwnValue,
        closebuton,
        assertLiscenceCCBY,
    };

};
module.exports = {
    upload
}