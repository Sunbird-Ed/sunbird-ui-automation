const { element, by } = require("protractor");

let SanityElement=()=>{
    //let dropdownProfile=element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
       let dropdownProfile=element(by.xpath("//div[@class='avatar-content']"));
    let verifyClassSec=element(by.xpath("//div[@id='class1']"));
    let clkManage=element(by.xpath("//a[contains(text(),'Manage')]"));
    let ClickSelectFile=element(by.xpath("//div[contains(text(),'Select file')]"));
    let clkSltFile=element(by.xpath("//input[@class='sb-btn-upload']"));
    let clkDownloadFile=element(by.xpath("//a[@href='/assets/SampleUserCsv.csv']"));
    //let clkDownloadFile=element(by.xpath("//a[@href='/assets/SampleUserCsv.csv']"));
var  headerCourse  = element(by.xpath( "//a[contains(.,' Trainings ')]"));
let clkFirstContent=element(by.xpath("//div[@class='sb--card__main-area']"));
let assertTOC=element(by.xpath("//h3[@class='sb-collectionTree-title']"));
let assertTenantLogo=element(by.xpath("//img[@alt='APeKX']"));

let enterQrcode=element(by.xpath("//input[@placeholder='Enter QR code']"));
let submitQrcode=element(by.xpath("//button[text()='Search']"));
let clkLinkedContent=element(by.xpath("//h4[contains(@class,'sb--card')]"));
let clkExploreContentAP=element(by.xpath("//a[contains(text(),'EXPLORE CONTENT')]"));
let clkWorkSpace=element(by.xpath("//*[contains(text(),'Workspace')]"));
let verifyBookOption=element(by.xpath("//div[@class='content']/..//span[.='Book']"));
let clkCourse=element(by.xpath("//div[@class='content']/..//span[.='Book']"));
let startCreating=element(by.xpath("//button[contains(text(),'Start creating')]"));
let useEditor=element(by.xpath("//button[contains(text(),'Use Editor')]"));
let clkNewChild=element(by.xpath("//a[@class='blueColor'][2]"));
let UnitName=element(by.xpath("//input[@placeholder='Enter title for Book']"));
let qrCodeYes=element(by.xpath("//input[@value='Yes']"));
let saveButton=element(by.id("saveButton"));
let clickSibling=element(by.xpath("//a[contains(text(),'New Sibling')]"));
let clkDropDownQrcode=element(by.xpath("//div[@class='ui dropdown qrCodeStyler']"));
let clkGenerateQrCode=element(by.xpath("//span[contains(text(),'Download  QR codes')]/preceding::span[1]"));
let enterQrCode=element(by.xpath("//i[@class='close icon float-right margin-right-0 cursor-pointer']/following::input"));
let clkReqestQrCode=element(by.xpath("//button[@value='Request']"));
let QRcodeTostrMsg=element(by.xpath("//p[contains(text(),'QR code generated')]"));
let clkAllMyContent=element(by.xpath("//a[@href='/workspace/content/allcontent/1']"));
let clkFirstCntAllMyCon=element(by.xpath("//*[@class='ui image header']"));
let closeEditor=element(by.xpath("//*[@id='closeButton']"));
let clkEditDetails=element(by.xpath("//*[contains(text(),'Edit Details')]"));
let clkAppIcon=element(by.xpath("//div[@id='field-app-icon ']"));
let chkAppIcon=element(by.xpath("//div[@class='ui image']//img"));
let sltButton=element(by.xpath("//button[contains(text(),'Select')]"));
let clkPublisher=element(by.xpath("//input[@id='publisher']"));
let clkBoard=element(by.xpath("//label[contains(text(),'BOARD/SYLLABUS')]//following::input[1]"));
let sltBoard=element(by.xpath("//label[contains(text(),'BOARD/SYLLABUS')]//following::div[4]"));
let sltMedium=element(by.xpath("//label[contains(text(),'MEDIUM')]//following::div[4]"));
let clkMedium=element(by.xpath("//label[contains(text(),'MEDIUM')]//following::div[1]"));
let clkClass=element(by.xpath("//label[contains(text(),'CLASS')]//following::div[1]"));
let SltClass=element(by.xpath("//label[contains(text(),'CLASS')]//following::div[4]"));
let clkSubject=element(by.xpath("//label[contains(text(),'SUBJECT')]//following::div[1]"));
let SltSubject=element(by.xpath("//label[contains(text(),'SUBJECT')]//following::div[4]"));
let yearEnter=element(by.xpath("//input[@id='copyrightYear']"));
let clkSaveEdit=element(by.xpath("//button[contains(text(),'Save')]"));
let clkCloseButton=element(by.xpath("//button[contains(.,'Close')]"));
let clkDownloadQr=element(by.xpath("//span[contains(text(),'Download 1 +1 QR codes')]"));
let tocDropDown=element(by.xpath("//span[contains(text(),'TOC')]"));
let downloadTOCMetaData=element(by.xpath("//span[contains(text(),'TOC')]/following::i[@class='download icon']"));
let closePage=element(by.xpath("//i[@class='remove icon custom-cursor']"));
let clkClassToFocuse=element(by.xpath("//label[contains(text(),'CLASS')]"));
let tocTostrMsg=element(by.xpath("//strong[contains(text(),'Table of Content downloaded!')]"));
let assertDraftField=element(by.xpath("//a[contains(text(),'Drafts')]"));
let clkFirstBookDraft=element(by.xpath("//div[@class='ui image']"));
let entrDialCode=element(by.xpath("//input[@name='search']"));
let searchCode=element(by.xpath("(//button[contains(text(),'Search')])[2]"));
let searchConLib=element(by.xpath("(//input[@id='keyword'])[1]"));
let clkSearchLib=element(by.xpath("//button[contains(@title,'Search')]"));
let clkFirConLib=element(by.xpath("//h4[contains(@class,'sb--card__title sb__ellipsis')]//bdi[1]"));
let clkCopyButton=element(by.xpath("//*[text()=' Copy ']"));
let vefifyContentCopied=element(by.xpath("//span[@class='ui tiny header']"));
let clkLibraray=element(by.xpath("//a[contains(text(),'textbooks')]"));

let clkTraining=element(by.xpath("//a[contains(text(),' Courses ')]"));
let clkTrainSearInp=element(by.xpath("//input[@title='Search in Courses']"));
let clkTrainingSrchbutton=element(by.xpath("//button[@title='Search in Courses']"));
let clkCoursFirst=element(by.xpath("(//div[@class='sb-card-meta course'])[1]"));
let clkTocFold=element(by.xpath("//*[@class='sb-collectionTree-title']"));
let clkTocSubUnits=element(by.xpath("//*[@role='tree']"));
let clkBorwse=element(by.xpath("//div[@class='qq-upload-button-selector qq-upload-button custom-qq-upload-button']"));
let clkUplodBtn=element(by.xpath("//button[contains(text(),'Upload')]"));

let assertCsvContent=element(by.xpath("//span[contains(text(),'unit1')]"));
let uploadTocButton=element(by.xpath("//span[contains(text(),'TOC')]/following::i[@class='upload icon']"));
let GeneratQr=element(by.xpath("//span[contains(text(),'Download  QR codes')]/preceding::span[1]"));


let sendForReview = element(by.xpath("//i[@class='send icon']"));
let closeEditor1 = element(by.xpath("//i[@class='remove icon custom-cursor']"));
let clkLinkedContents=element(by.xpath("//div[contains(@class,'sb--card__meta')]"));

let verfiyTNlogo= element(by.xpath("//img[@src='logo.png']"));
let clickTNLogin= element(by.xpath("//a[contains(text(),'Login')]"));
let verifyTNlogoInLoginPage= element(by.xpath("//img[@alt='tn']"));
let clickExploreCourse= element(by.xpath("//a[contains(text(),' Courses ')]"));
let clkFeaturedViewAll= element(by.xpath("//span[contains(text(),'Student courses')]//following::button[1]"));
let clkLatestViewAll= element(by.xpath("//span[contains(text(),'Teacher courses')]//following::button[1]"));
let verifyFeaturedCount= element(by.xpath("//span[contains(text(),'Featured courses')]//following::span[1]"));
let verifyLatestCount= element(by.xpath("//span[contains(text(),'Latest courses')]//following::span[1]"));
let clkSignInWithGoogle= element(by.xpath("//img[@class='signInWithGoogle']"));
let enterGooUsrName= element(by.xpath("//input[@name='identifier']"));
let clkGooNext= element(by.xpath("//div[@id='identifierNext']"));
let enterGooPassword= element(by.xpath("//input[@name='password']"));
let clkGooPassNext= element(by.xpath("//div[@id='passwordNext']"));
let clkGoogelAccAfterlogout= element(by.xpath("//div[contains(text(),'automation')]"));

//var labelLibrary = element(by.xpath("//*[contains(@class,'textbooks')]"));
//var labelDefaultBoard = element(by.xpath("(//sui-select[contains(@class,'selection ')])[2]"));
//var labelDefaultMedium = element(by.xpath("(//sui-select[contains(@class,'selection ')])[3]"));
  //var labelDefaultMedium =element(by.xpath("//label[text()='Medium ']"))
   // var labelDefaultClass = element(by.xpath("//div[contains(text(),' Class 10')]"));
    var labelClassOne = element(by.xpath("//div[contains(text(),' Class 1')]"));
 var firstContent = element(by.xpath("//h4[contains(@class,'sb--card__title')]"));
 let clkEnterQRCode = element(by.xpath("//button[@title='Enter QR code']"));
let enterQrCodeInGet = element(by.xpath("(//input[@placeholder='Enter QR code'])[1]"));


let ClkCopyAsCourse= element(by.xpath("//button[contains(text(),'Copy as course')]"));
let clkCheckBox= element(by.xpath("//label[@for='checkbox']"));
let clkCreateBtn= element(by.xpath("//button[contains(text(),' Create ')]"));
var manageLink = element(by.xpath("//li[@routerlink='manage']"));
var downloadBtn = element(by.xpath("//button[@class='sb-btn sb-btn-normal ml-24 sb-btn-secondary']"));
var digitalTextBooksLink = element(by.xpath("//a[@class='item item--textbooks active']"));
var searchBtn = element(by.xpath("//button[@class='sb-btn sb-btn-md']"));
var bookImg = element(by.xpath("(//img[contains(@src,'assets/common-consumption/images')])[1]"));
var copyBtn = element(by.xpath("(//button[@class='sb-btn sb-btn-normal sb-btn-outline-primary mr-8 ng-star-inserted'])[2]"));
var copyPopup = element(by.xpath("//*[contains(text(),'Content successfully copied')]"));
var searchBoxForBook=element(by.xpath("//input[@placeholder='Search or enter QR code']"));
var clickSeaarchButton=element(by.xpath("//button[text()='Search']"));
var searchedBook=element(by.xpath("//bdi[text()='umesh sanity16']"));
var profileIcon=element(by.xpath("(//div[@class='avatar-content'])[2]"));
var workspaceButton=element(by.xpath("//li[text()=' Workspace ']"));
var draftButton=element(by.xpath("//a[@popuptext='View drafts you are working on. Submit them for review when completed']"));
var bookSeaarchBox=element(by.xpath("//input[@placeholder='Search content']"));
var searchedFirstBook=element(by.xpath("(//a[text()='Digital Textbook']/following-sibling::div)[1]"));
var addCollaboratorIcon=element(by.xpath("//i[contains(@class,'add user')]"));
var addcollaborator=element(by.xpath("(//strong[text()='+ADD'])[3]"));
var doneButton=element(by.xpath("//button[text()='Done']"));
var closeIcon=element(by.xpath("//div[contains(@class,'close icon-box')]//i[1]"));
var publishedBookIcon=element(by.xpath("//a[@popuptext='View all your published content']"));
var searchedBookForBestScore=element(by.xpath("//div[@class='sb--card__svg-area']//img[1]"));
var clickOnUnit=element(by.xpath("(//h4[text()=' Unit 3 - Self assess ']/following-sibling::i)[1]"));
var clickOnassesment=element(by.xpath("//div[text()=' Course assessment 1 - 0721 ']"));
var firststquestion=element(by.xpath("(//div[@class='option-text-container text-only']//p)[1]"));
var nextButton=element(by.xpath("//img[@ng-src='coreplugins/org.ekstep.overlay-1.0/renderer/assets/icons/next.png']"));
var firstBlanks=element(by.xpath("(//input[@class='ans-field'])[1]"));
var secondBlanks=element(by.xpath("(//input[@class='ans-field'])[2]"));
var submitButtonAfterAssessment=element(By.xpath("//button[@type='submit']"));
var firsstStar=element(by.xpath("//sui-rating[contains(@class,'sb-rating ui')]//i[1]"));
var submitButtonAfterRating=element(by.xpath("//button[text()=' Submit ']"));
var baackButton=element(by.xpath("//button[text()=' Back ']"));
var bestScore=element(by.xpath("//div[contains(@class,'sbchapter__item__score pr-8')]"));
var searchButton=element(by.xpath("//button[text()='Search']"));
var discussionForumFirstBook=element(by.xpath("//div[@class='sb--card__main-area']/following-sibling::div[1]"));
var forum=element(by.xpath("//button[text()=' Forum ']"));
var categories=element(by.xpath("//li[contains(@class,'df-sidebar-menu-list menu-active')]//a[1]"));
var tags=element(by.xpath("//li[contains(@class,'df-sidebar-menu-list menu-active')]/following-sibling::li[1]"));
var myDiscussions=element(by.xpath("(//li[@class='df-sidebar-menu-list ng-star-inserted']//a)[2]"));
var categoryCard=element(by.xpath("(//div[@class='category-card-header']//div)[3]"));
var announcement=element(by.xpath("//div[text()='Announcements']"));
var generalDiscussion=element(by.xpath("//div[text()='General Discussions']"));
var recentPost=element(by.xpath("(//a[contains(@class,'filter-option df-filter-option')])[1]"));
var bestPost=element(by.xpath("(//a[contains(@class,'filter-option df-filter-option')])[2]"));
var savedPost=element(by.xpath("(//a[contains(@class,'filter-option df-filter-option')])[3]"));
var upvoted=element(by.xpath("(//a[contains(@class,'filter-option df-filter-option')]/following-sibling::a)[3]"));
var downVoted=element(by.xpath("//a[@id='downvoted-post']"));
var announcementLink=element(by.xpath("//span[text()=' Announcements ']"));
var textareaForComment=element(by.xpath("//textarea[contains(@class,'text-content fnormal')]"));
var postReply=element(by.xpath("//span[text()='Post Reply']"));
var startDiscussion=element(by.xpath("//button[text()='Start Discussion']"));
var askQuestion=element(by.xpath("//input[@placeholder='Ask a question or post an idea']"));
var description=element(by.xpath("//textarea[@formcontrolname='description']"));
var submitButton=element(by.xpath("//span[text()='Submit']"));
var firstGroup=element(by.xpath("//h4[text()='my_group']"));
var groupActions=element(by.xpath("//div[@id='group-actions']"));
var enableDiscussionIcon=element(by.xpath("//div[text()=' Enable discussions ']"));
var enablediscussionSuccessful=element(by.xpath("//strong[text()='Enabled discussion forum successfully']"));
var discussionIcon=element(by.xpath("//button[@title='Forum']//img[1]"));
var disableDiscussionIcon=element(by.xpath("//div[text()=' Disable discussions ']"));
var disablediscussionButton=element(by.xpath("//button[text()='Disable discussions']"));
var disableDiscussionSuccessful=element(by.xpath("//i[contains(@class,'iziToast-icon ico-success')]/following-sibling::div[1]"));
var labelLibrary = element(by.xpath("//a[.=' Digital textbooks ']"));
var labelDefaultBoard = element(by.xpath("(//sui-select[contains(@class,'selection sbt-dropdown')])[2]"));
//var labelDefaultBoard = element(by.xpath("//sui-select-option[@class='item ng-star-inserted active']//span[contains(text(),'State (Assam)')]"));
//var labelDefaultMedium = element(by.xpath("(//sui-select[contains(@class,'selection ')])[3]"));
  var labelDefaultMedium =element(by.xpath("//div[.=' English']"));
    //var labelDefaultClass = element(by.xpath("//div[contains(text(),' Class 10')]"));
    var labelDefaultClass = element(by.xpath("//div[.=' Class 10']"));
    var DefaultTextbook = element(by.xpath(" //span[.=' Economics '] "));
    var ConsumeCourse = element(by.xpath("//h4[.=' Globalisation And The Indian Economy '] "));
    var CourseArrow1 = element(by.xpath("(//button[@class='navigation-arrows player-nextIcon paginate right ml-4'])[1]"));
    var RatingClose = element(by.xpath("//i[@class='close icon']"));
    var BackButton = element(by.xpath("//button[normalize-space()='Back']"));
    var labelslctBoard = element(by.xpath("(//sui-select[contains(@class,'selection sbt-dropdown')])[2]"));
    var SelectAPboard = element(by.xpath("//span[.='State (Andhra Pradesh)']"));
    var SelectTelguMedium = element(by.xpath("//div[.=' Telugu']"));
    var Select8Class = element(by.xpath("//div[.=' Class 8']"));
    var SelectBiologybook = element(by.xpath("(//span[.=' Biology '])[1]"));
    var SelectVonBook = element(by.xpath("(//div[@class='arrange-card-items certificate-course-contentt pl-8']/h4)[2]"));
    var SelectCourseArrow1 = element(by.xpath("(//button[@class='navigation-arrows player-nextIcon paginate right ml-4'])[1]"));
    var SelectRCButton = element(by.xpath("//i[@class='close icon']"));
    var SelectBkButton = element(by.xpath("//button[normalize-space()='Back']"));
    var coursePagebackButton=element(by.xpath("//button[text()=' Back ']")); 
    var MyCourseOption=element(by.xpath("//span[text()='My courses']"));
    var viewAllButton=element(by.xpath("//button[text()=' View all ']"));
    var closeButton=element(by.xpath("//button[text()='Close ']"));
    var addCourseTitle=element(by.xpath("//input[@placeholder='Title']"));
    var addcourseTag=element(by.xpath("//input[@aria-label='Enter a new tag']"));
    var courseadditionalCategory=element(by.xpath("(//div[@class='list-border'])[1]"));
    var courseType=element(by.xpath("(//select[@id='sb-dropdown'])[2]"));
    var subjectCovered=element(by.xpath("(//div[@class='list-border'])[2]"));
    var selectBoardForcourse=element(by.xpath("(//select[@id='sb-dropdown'])[3]"));
    var selectMediumForCourse=element(by.xpath("//sb-dynamic-form[@class='ng-star-inserted']/div/div[4]/sb-dynamic-multiple-dropdown[2]//div[@class='list-border']"));
    var selectClassForCourse=element(by.xpath("//sb-dynamic-form[@class='ng-star-inserted']/div/div[4]/sb-dynamic-multiple-dropdown[3]//div[@class='list-border']"));
    var selectSubjectForCourse=element(by.xpath("/html/body/app-root/div[1]/div/app-new-collection-editor/lib-editor/div/div/div/div/div[2]/lib-meta-form/sb-dynamic-form/div/div[4]/sb-dynamic-multiple-dropdown[4]/div/div/div[1]"));
    var selectCopyRightYear=element(by.xpath("//sb-dynamic-form[@class='ng-star-inserted']/div/div[5]/sb-dynamic-textbox[4]//input[@placeholder='Copyright Year']"));
    var selectAdditionalCategory=element(by.xpath("//span[text()='Textbook']"));
    var selectcourseType=element(by.xpath(("(//option[text()='CBSE'])[1]")));
    var selectSubject=element(by.xpath("(//span[text()='English'])[1]"));
    var selectBoard=element(by.xpath("(//option[text()='CBSE'])[2]"));
    var selectMedium=element(by.xpath("(//span[text()='English'])[2]"));
    var selectclass=element(by.xpath("//span[text()='Class 1']"));
    var selectSubject2=element(by.xpath("(//span[text()='English'])[3]"));
    var saveAsDraft=element(by.xpath("//button[text()=' Save as Draft ']"));
    var addChild=element(by.xpath("//button[text()=' Add Child']"));
    var NewCoursesubmitButton=element(by.xpath("//button[text()=' Submit ']"));
    var addFromLibraryButton=element(by.xpath("//button[text()=' Add from library ']"));
    var selectButton=element(by.xpath("//button[text()='Select content']"));
    var addContent=element(by.xpath("//button[text()=' Add content ']"));
    var contentFromLibrayBackButton=element(by.xpath("//i[contains(@class,'arrow left')]"));
    var termsAndConditionCheckbox=element(by.xpath("//input[@type='checkbox']"));
    var submitForreviewButton=element(by.xpath("(//button[text()=' Submit '])[2]"));
    var Author=element(by.xpath("//input[@placeholder='Author']"));
    var courseIcon=element(by.xpath("//i[contains(@class,'icon image')]"));
    var allImages=element(by.xpath("(//a[@class='sb-item item'])[2]"));
    var firststIconImage=element(by.xpath("(//div[@class='sb-image-section']//img)[1]"));
return{
        firstGroup,
        NewCoursesubmitButton,
        firststIconImage,
        submitForreviewButton,
        Author,
        allImages,
        courseIcon,
        termsAndConditionCheckbox,
        contentFromLibrayBackButton,
        selectButton,
        addContent,
        addFromLibraryButton,
        addChild,
        addCourseTitle,
        selectclass,
        selectSubject2,
        saveAsDraft,
        selectMedium,
        selectBoard,
        selectSubject,
        selectcourseType,
        selectAdditionalCategory,
        selectCopyRightYear,
        selectSubjectForCourse,
        selectClassForCourse,
        selectMediumForCourse,
        selectBoardForcourse,
        subjectCovered,
        courseType,
        courseadditionalCategory,
        addcourseTag,
        MyCourseOption,
        viewAllButton,
        closeButton,
        coursePagebackButton,
        DefaultTextbook,
        SelectAPboard,
        SelectCourseArrow1,
        SelectRCButton,
        SelectBkButton,
        SelectVonBook,
        SelectBiologybook,
        Select8Class,
        SelectTelguMedium,
        labelslctBoard,
        BackButton,
        ConsumeCourse,
        RatingClose,
        CourseArrow1,
        groupActions, 
        enableDiscussionIcon,  
        enablediscussionSuccessful,
        discussionIcon,
        disableDiscussionIcon,
        disablediscussionButton,
        disableDiscussionSuccessful,
        clkCheckBox,
        startDiscussion,
        askQuestion,
        description,
        submitButton,
        announcementLink,
        textareaForComment,
        postReply, 
        recentPost,
        bestPost,
        savedPost,
        upvoted,
        downVoted,
        announcement,
        generalDiscussion,

        categoryCard,
        categories,
        tags,
        myDiscussions,
        forum,
        discussionForumFirstBook,
        searchButton,
        firststquestion,
        nextButton,
        firstBlanks,
        secondBlanks,
        submitButtonAfterAssessment,
        firsstStar,
        submitButtonAfterRating,
        baackButton,
        bestScore,
        clickOnassesment,
        clickOnUnit,
        searchedBookForBestScore,
        profileIcon,
        workspaceButton,
        draftButton,
        bookSeaarchBox,
        searchedFirstBook,
        addCollaboratorIcon,
        addcollaborator,
        publishedBookIcon,
        doneButton,
        closeIcon,
        searchedBook,
        clickSeaarchButton,
        searchBoxForBook,
        clkCreateBtn,
        ClkCopyAsCourse,
        dropdownProfile,
        uploadTocButton,
        verifyClassSec,
        clkManage,
        GeneratQr,
        ClickSelectFile,
        clkSltFile,
        clkDownloadFile,
        clkFirstContent,
        assertTOC,
        assertTenantLogo,
        clkEnterQRCode,
        enterQrcode,
        submitQrcode,
        clkLinkedContent,
        clkExploreContentAP,
        clkWorkSpace,
        verifyBookOption,
        clkCourse,
        startCreating,
        useEditor,
        clkNewChild,
        UnitName,
        qrCodeYes,
        saveButton,
        clickSibling,
        clkDropDownQrcode,
        clkGenerateQrCode,
        enterQrCode,
        clkReqestQrCode,
        QRcodeTostrMsg,
        clkAllMyContent,
        clkFirstCntAllMyCon,
        closeEditor,
        clkEditDetails,
        clkAppIcon,
        chkAppIcon,
        sltButton,
        clkPublisher,
        clkBoard,
        sltBoard,
        sltMedium,
        clkMedium,
        clkClass,
        SltClass,
        clkSubject,
        SltSubject,
        yearEnter,
        clkSaveEdit,
        clkCloseButton,
        clkDownloadQr,
        clkClassToFocuse,
        tocDropDown,
        downloadTOCMetaData,
        tocTostrMsg,
        closePage,
        clkFirstBookDraft,
        assertDraftField,
        entrDialCode,
        searchCode,
        searchConLib,
        clkSearchLib,
        clkFirConLib,
        clkCopyButton,
        vefifyContentCopied,
        clkLibraray,
        clkTraining,
        clkTrainSearInp,
        clkTrainingSrchbutton,
        clkCoursFirst,
        clkTocFold,
        clkTocSubUnits,
        clkBorwse,
        clkUplodBtn,
        assertCsvContent,
        headerCourse,
        sendForReview,
        closeEditor1,
        clkLinkedContents,
        verfiyTNlogo,
        clickTNLogin,
        verifyTNlogoInLoginPage,
        clickExploreCourse,
        clkFeaturedViewAll,
        clkLatestViewAll,
        verifyFeaturedCount,
        verifyLatestCount,
        clkSignInWithGoogle,
        enterGooUsrName,
        clkGooNext,
        enterGooPassword,
        clkGooPassNext,
        clkGoogelAccAfterlogout,
        labelLibrary,
        labelClassOne,
        firstContent,
        enterQrCodeInGet,
        manageLink,
        downloadBtn,
        digitalTextBooksLink,
        searchBtn,
        bookImg,
        copyBtn,
        copyPopup,
        labelDefaultBoard,
        labelDefaultMedium,
        labelDefaultClass,
        












    }
};
module.exports={
    SanityElement
 }