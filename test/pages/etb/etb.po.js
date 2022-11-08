//const { element } = require("protractor");

var etb = () => {

    var book = element(by.xpath("//div[@class='content']/..//span[.='Book']"));
    var bookName = element(by.xpath("//input[@placeholder='Name']"));
    var startcreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
    var clickNewChild = element(by.xpath("//a[@class='blueColor'][2]"));
    var untitleName = element(by.xpath("//input[@placeholder='Enter title for Book']"));
    var qrCodeRequired = element(by.xpath("//input[@value='Yes']"));
    var dialcodeEnter = element(by.model('dialcodes'));
    var validateDialCode = element(by.xpath("//i[@class='large check circle icon']"));
    var savebutton = element(by.xpath("//div[@id='saveButton']//i"));
    var sendForReview = element(by.xpath("//div[@class='ui button text-part popup-item']//i[@class='send icon']"));
    var continuewButton = element(by.xpath("//button[.='Continue anyway']"));
    var clickAppIcon = element(by.id("field-app-icon "));
    var checkAppIcon = element(by.xpath("//div[@class='ui image']//img"));
    var selectAppIcon = element(by.buttonText('Select'));
    var clickBoard = element(by.xpath("//div[contains(text(),'Select Board')]"));
    var selectBoard = element(by.xpath("//div[contains(text(),'Select Board')]//following::div[2]"));
    var clickMedium = element(by.xpath("//div[contains(text(),'Select Medium')]"));
    var selectMedium = element(by.xpath("//div[contains(text(),'Select Medium')]//following::div[2]"));
    var clickclass = element(by.xpath("//div[contains(text(),'Select Class')]"));
    var SelectClass = element(by.xpath("//div[contains(text(),'Select Class')]//following::div[2]"));
    var clicksubject = element(by.xpath("//div[contains(text(),'Select Subject')]"));
    var selectSubject = element(by.xpath("//div[contains(text(),'Select Subject')]//following::div[2]"));
    var submitIconsendForReview = element(by.buttonText('Select'));
    var clickWorkSpace = element(by.xpath("(//*[contains(.,'Workspace')])"));
    var clickUpforReview = element(by.xpath("//a[contains(text(),'Up For Review')]"));
    var searchtext = element(by.xpath("//input[@placeholder='Search content']"));
    var clicksearchicon = element(by.xpath("//input[@placeholder='Search content']/following::i"));
    var clicksearchedContent = element(by.xpath("//tbody/tr/td[1]"));
    var clickpublishbutton = element(by.xpath("//span[contains(text(),'Publish')]"));
    var clickCheckBox = element(by.xpath("//input[@class='listItem']"));
    var clickPublishbut = element(by.buttonText('Publish'));
    var clickDeleteFirst = element(by.xpath("(//i[@class='trash large icon'])[1]"));
    var clickYesDelete = element(by.xpath("//button[contains(.,'Yes')]"));
    var clickCheckBox = element(by.xpath("//input[@class='listItem']"));
    var clickCheckBox = element(by.xpath("//input[@class='listItem']"));
    var clickUseEditor = element(by.xpath("//button[contains(text(),'Use Editor')]"));
    var untitledName = element(by.xpath("//input[@placeholder='Enter title for Book']"));
    var yearOfCreation = element(by.xpath("//input[@id='copyrightYear']"));
    var titleName = element(by.xpath("//input[@id='name']"));
    var editDetails = element(by.xpath("//span[@ng-if='showEditMeta'][contains(.,'Edit Details')]"));
    var close = element(by.xpath("//button[@class='ui orange button']"));
    var downloadQRCodeCsv = element(by.xpath("//button[.=' Download Course QR Code ']"));
    var clickCurriculum = element(by.xpath("//div[contains(text(),'Select Curriculum')]"));
    var selectCurriculum = element(by.xpath("//div[contains(text(),'Select Curriculum')]//following::div[2]"));
    var untitledCourse = element(by.xpath("(//input[@id='name'])[2]"));
    var consentCheckBox = element(by.xpath("//input[@type='checkbox']"));
    var closeSendForReviewBox = element(by.xpath("//span[contains(text(),'Edit Details')]//following::i[@class='close link icon']"));
    var clickContentType = element(by.xpath("//select[@id='_selectcontentType']/following::i"));
    var selectTVLesson = element(by.xpath("//span[contains(text(),'Explanation Content')]"));
    var practiceResource = element(by.xpath("//*[contains(text(),'Practice')]"));
    var contentType = element(by.xpath("//*[contains(text(),'Content Type')]/following::sui-select"));
    var practiceResource2 = element(by.xpath("(//*[contains(text(),'Practice')])[2]"));
    var clkBoardInBook = element(by.xpath("//label[contains(text(),'Board')]//following::sui-select"));
    var SltBoardInBook = element(by.xpath("//*[contains(text(),'Board')]/following::sui-select-option"));
    var clkMediumInBook = element(by.xpath("//label[contains(text(),'Medium')]//following::sui-multi-select"));
    var sltMediumInBook = element(by.xpath("//label[contains(text(),'Medium')]//following::sui-select-option"));
    var clkClassInBook = element(by.xpath("//label[contains(text(),'Class')]//following::sui-multi-select"));
    var sltClassInBook = element(by.xpath("//label[contains(text(),'Class')]//following::sui-select-option"));
    var clkSubjectInBook = element(by.xpath("//label[contains(text(),'Subject')]//following::sui-multi-select"));
    var sltSubjectInBook = element(by.xpath("//label[contains(text(),'Subject')]//following::sui-select-option"));
    var clkPublisher = element(by.xpath("//label[contains(text(),'Publisher')]/following::input"));
    var untitledCourse1 = element(by.xpath("(//input[@id='name'])[1]"));
    var collectionType = element(by.xpath("//*[contains(text(),'Collection Type')]/following::sui-select"));
    var contentResource = element(by.xpath("//*[contains(text(),'Collection Type')]/following::sui-select-option[2]/span[2]"));
    var allImage = element(by.id("allImagesTab"));
    var myImage = element(by.id("myAssetsTab"));
    var allTextBook = element(by.xpath("//*[contains(text(),'All Textbooks')]"));
    var firstContentWithDraftstatus = element(by.xpath("(//div[@class='content ']//div)[1]"));
    var addResource = element(by.xpath("//div[text()='RESOURCES']/following-sibling::button"));
    var firstResource = element(by.xpath("//div[text()[normalize-space()='Adarsh Course']]"));
    var proceedButton = element(by.xpath("//button[text()=' PROCEED ']"));
    var searchBoxForSearchingBook = element(by.xpath("//input[@placeholder='Search content']"));
    var classFilter = element(by.xpath("(//div[@class='pill rounded'])[3]"));
    var mediumFilter = element(by.xpath("//div[text()=' Sanskrit']"));
    var mediumResult = element(by.xpath("(//span[text()='Medium: English'])[1]"));
    var classResult = element(by.xpath("(//span[@title='Class 1'])[1]"));
    var digitalTextBook = element(by.xpath("//a[contains(.,'Digital textbooks')]"));
    var bookForPlayingContent = element(by.xpath("//h4[@title='bks']"));
    var h5pContent = element(by.xpath("//div[@title='Sanity h5p-AN']"));
    var nextButton = element(by.xpath("//button[@title='Next']"));
    var answerBox = element(by.xpath("/html/body/div//div[@role='list']/div[5]//div[@class='h5p-input']/input[@placeholder='Your answer']"));
    var checkBox = element(by.xpath("/html/body/div//div[@role='list']/div[5]//div[@class='h5p-input']/button[1]"));
    var videoButton = element(by.xpath("//span[text()='Video']"));
    var interactiveButton = element(by.xpath("//span[text()='Interactive']"));
    var docsButton = element(by.xpath("//span[text()='Docs']"));
    var videoConetentPlaying = element(by.xpath("//h4[@title='Sanity Mp4-AN']"));
    var dashBoardButton = element(by.xpath("//li[text()=' Admin dashboard ']"));
    var reports = element(by.xpath("//a[contains(.,'Reports')]"));
    var datasets = element(by.xpath("//a[text()=' Reports']/following-sibling::a"));
    var dashboardSearchox = element(by.xpath("(//input[@type='search'])[1]"));
    var lastPublishedDate = element(by.xpath(("//th[text()='Last Published Date'])[1]")));
    var courseConsumptionReport = element(by.xpath("//p[text()=' Course consumption Report']"));
    var lastUpdatedOn = element(by.xpath("(//span[text()='Last updated on : '])[2]"));
    var districtWiseETBReport = element(by.xpath("//p[text()=' District wise performance on ETB content plays']"));
    var distwiseETBconsumptionReport = element(by.xpath("//div[text()=' District Wise Etb Consumption ']"));
    var clkAdditionalCategdropDown = element(by.xpath("//div[contains(text(),'Select Additional Category')]"));
    var sltTVLessonInAddCatogry = element(by.xpath("//div[contains(text(),'TV Lesson')]"));
    var clkTvClassHeader = element(by.xpath("//a[contains(text(),' TV classes ')]"));
    var firstTvLessonContent = element(by.xpath("//div[@class='sb--card__info']"));
    var liscenceTerms = element(by.xpath("//*[contains(text(),'Credits')]"));
    var searchContentInGroup = element(by.xpath("//input[contains(@placeholder,'Type to search for content')]"));
    var searchButtonForGroup = element(by.xpath("//input[contains(@placeholder,'Type to search for content')]//following::button[1]"));
    var groupFilterBoard = element(by.xpath("//li[contains(text(),'Select Board')]"));
    var selectGroupFilterBoard = element(by.xpath("//span[contains(text(),'state (tamil nadu)')]"));
    var groupFilterMedium = element(by.xpath("//li[contains(text(),'Select Medium')]"));
    var selectFilterMedium = element(by.xpath("//span[contains(text(),'english')]"));
    //var selectFilterMedium = element(by.xpath("//span[contains(text(),'english')]"));
    var groupFilterClass = element(by.xpath("//li[contains(text(),'Select Class')]"));
    var selectFilterClass = element(by.xpath("//span[contains(text(),'class 11')]"));
    var groupFilterSubject = element(by.xpath("//li[contains(text(),'Select Subject')]"));
    var selectFilterSubject = element(by.xpath("//span[contains(text(),'accountancy')]"));
    var groupFilterContentType = element(by.xpath("//li[contains(text(),'Select Content type')]"));
    var selectFilterContentType = element(by.xpath("//span[contains(text(),'course')]"));

    var questionCollType = element(by.xpath("//*[contains(text(),'Collection Type')]/following::sui-select-option[3]/span[2]"));
    var contentCollType = element(by.xpath("//*[contains(text(),'Collection Type')]/following::sui-select-option[1]/span[2]"));
    var collectionAppIcon = element(by.id("icon_appIcon"));
    var collAllImage = element(by.xpath("//a[text()='All Image']"));
    var collMyImage = element(by.xpath("//a[contains(text(),'My Images')]"));
    var collAppIcon = element(by.xpath("//div[@class='sb-image-section relative position']//following::img"));


    return {
        bookName,
        distwiseETBconsumptionReport,
        dashBoardButton,
        districtWiseETBReport,
        reports,
        datasets,
        dashboardSearchox,
        lastPublishedDate,
        courseConsumptionReport,
        lastUpdatedOn,
        videoButton,
        interactiveButton,
        docsButton,
        videoConetentPlaying,
        answerBox,
        checkBox,
        nextButton,
        digitalTextBook,
        h5pContent,
        bookForPlayingContent,
        mediumResult,
        classResult,
        classFilter,
        mediumFilter,
        searchBoxForSearchingBook,
        addResource,
        proceedButton,
        firstResource,
        startcreating,
        clickNewChild,
        untitleName,
        qrCodeRequired,
        dialcodeEnter,
        validateDialCode,
        savebutton,
        sendForReview,
        continuewButton,
        clickAppIcon,
        checkAppIcon,
        selectAppIcon,
        clickBoard,
        selectBoard,
        clickMedium,
        selectMedium,
        clickclass,
        SelectClass,
        clicksubject,
        selectSubject,
        submitIconsendForReview,
        clickWorkSpace,
        clickUpforReview,
        searchtext,
        clicksearchicon,
        clicksearchedContent,
        clickpublishbutton,
        clickCheckBox,
        clickPublishbut,
        clickDeleteFirst,
        clickYesDelete,
        clickUseEditor,
        book,
        untitledName,
        yearOfCreation,
        titleName,
        editDetails,
        close,
        downloadQRCodeCsv,
        clickCurriculum,
        selectCurriculum,
        untitledCourse,
        consentCheckBox,
        closeSendForReviewBox,
        clickContentType,
        selectTVLesson,
        practiceResource,
        contentType,
        practiceResource2,
        clkBoardInBook,
        SltBoardInBook,
        clkMediumInBook,
        sltMediumInBook,
        clkClassInBook,
        sltClassInBook,
        clkSubjectInBook,
        sltSubjectInBook,
        untitledCourse1,
        collectionType,
        contentResource,
        allImage,
        myImage,
        clkPublisher,
        allTextBook,
        firstContentWithDraftstatus,
        clkAdditionalCategdropDown,
        sltTVLessonInAddCatogry,
        clkTvClassHeader,
        firstTvLessonContent,
        liscenceTerms,
        searchContentInGroup,
        searchButtonForGroup,
        groupFilterBoard,
        selectGroupFilterBoard,
        groupFilterMedium,
        selectFilterMedium,
        groupFilterClass,
        selectFilterClass,
        groupFilterSubject,
        selectFilterSubject,
        groupFilterContentType,
        selectFilterContentType,
        questionCollType,
        contentCollType,
        collectionAppIcon,
        collAllImage,
        collMyImage,
        collAppIcon,

    };

};
module.exports = {
    etb
}