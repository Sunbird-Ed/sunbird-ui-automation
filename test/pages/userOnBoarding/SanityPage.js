const { element } = require("protractor");

let SanityElement = () => {
  
  //let dropdownProfile=element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
  let dropdownProfile = element(by.xpath("//div[@class='avatar-content']"));
  let profileDropdown = element(by.xpath("//app-header/div/div/div/div[1]/div[2]/div/a[2]/div/ngx-avatar/div/div"));
  let verifyClassSec = element(by.xpath("//div[@id='class1']"));
  let clkManage = element(by.xpath("//a[contains(text(),'Manage')]"));
  let ClickSelectFile = element(by.xpath("//div[contains(text(),'Select file')]"));
  let clkSltFile = element(by.xpath("//input[@class='sb-btn-upload']"));
  let clkDownloadFile = element(by.xpath("//a[@href='/assets/SampleUserCsv.csv']"));
  //let clkDownloadFile=element(by.xpath("//a[@href='/assets/SampleUserCsv.csv']"));
  var headerCourse = element(by.xpath("//a[contains(.,' Trainings ')]"));
  let clkFirstContent = element(by.xpath("//div[@class='sb--card__main-area']"));
  let assertTOC = element(by.xpath("//h3[@class='sb-collectionTree-title']"));
  let assertTenantLogo = element(by.xpath("//img[@alt='APeKX']"));
  let enterQrcode = element(by.xpath("//input[@placeholder='e.g. 45']"));
  let submitQrcode = element(by.xpath("//button[text()='Search']"));
  let clkLinkedContent = element(by.xpath("//h4[contains(@class,'sb--card')]"));
  let clkExploreContentAP = element(by.xpath("//a[contains(text(),'EXPLORE CONTENT')]"));
  let clkWorkSpace = element(by.xpath("//*[contains(text(),'Workspace')]"));
  let verifyBookOption = element(by.xpath("//div[@class='content']/..//span[.='Book']"));
  let clkCourse = element(by.xpath("//div[@class='content']/..//span[.='Book']"));
  let startCreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
  let useEditor = element(by.xpath("//button[contains(text(),'Use Editor')]"));
  let clkNewChild = element(by.xpath("//a[@class='blueColor'][2]"));
  let UnitName = element(by.xpath("//input[@placeholder='Enter title for Book']"));
  let qrCodeYes = element(by.xpath("//input[@value='Yes']"));
  let saveButton = element(by.id("saveButton"));
  let clickSibling = element(by.xpath("//a[contains(text(),'New Sibling')]"));
  let clkDropDownQrcode = element(by.xpath("//*[contains(text(),'QR Code ')]//following::i[1]"));
  let clkGenerateQrCode = element(by.xpath("//span[contains(text(),'Generate')]"));
  //let enterQrCode = element(by.xpath("//i[@class='close icon float-right margin-right-0 cursor-pointer']/following::input"));
  let clkReqestQrCode = element(by.xpath("//button[contains(text(),'Request')]"));
  let QRcodeTostrMsg = element(by.xpath("//*[contains(text(),'QR code generated')]"));
  let clkAllMyContent = element(by.xpath("//a[contains(text(),'All My Content')]"));
  let clkFirstCntAllMyCon = element(by.xpath("//*[@class='ui image header']"));
  let closeEditor = element(by.xpath("//*[@id='closeButton']"));
  let clkEditDetails = element(by.xpath("//*[contains(text(),'Edit Details')]"));
  let clkAppIcon = element(by.xpath("//div[@id='field-app-icon ']"));
  let chkAppIcon = element(by.xpath("//div[@class='ui image']//img"));
  let sltButton = element(by.xpath("//button[contains(text(),'Select')]"));
  let clkPublisher = element(by.xpath("//input[@id='publisher']"));
  let clkBoard = element(by.xpath("//label[contains(text(),'BOARD/SYLLABUS')]//following::input[1]"));
  let sltBoard = element(by.xpath("//label[contains(text(),'BOARD/SYLLABUS')]//following::div[4]"));
  let sltMedium = element(by.xpath("//label[contains(text(),'MEDIUM')]//following::div[4]"));
  let clkMedium = element(by.xpath("//label[contains(text(),'MEDIUM')]//following::div[1]"));
  let clkClass = element(by.xpath("//label[contains(text(),'CLASS')]//following::div[1]"));
  let SltClass = element(by.xpath("//label[contains(text(),'CLASS')]//following::div[4]"));
  let clkSubject = element(by.xpath("//label[contains(text(),'SUBJECT')]//following::div[1]"));
  let SltSubject = element(by.xpath("//label[contains(text(),'SUBJECT')]//following::div[4]"));
  let yearEnter = element(by.xpath("//input[@id='copyrightYear']"));
  let clkSaveEdit = element(by.xpath("//button[contains(text(),'Save')]"));
  let clkCloseButton = element(by.xpath("//button[contains(.,'Close')]"));
  let clkDownloadQr = element(by.xpath("//*[contains(text(),'Download 1 +1 QR codes')]"));
  let tocDropDown = element(by.xpath("//span[contains(text(),'TOC')]"));
  let downloadTOCMetaData = element(by.xpath("//span[contains(text(),'TOC')]/following::i[@class='download icon']"));
  let closePage = element(by.xpath("//i[@class='remove icon custom-cursor']"));
  let clkClassToFocuse = element(by.xpath("//label[contains(text(),'CLASS')]"));
  let tocTostrMsg = element(by.xpath("//strong[contains(text(),'Table of Content downloaded!')]"));
  let assertDraftField = element(by.xpath("//a[contains(text(),'Drafts')]"));
  let clkFirstBookDraft = element(by.xpath("//div[@class='ui image']"));
  let entrDialCode = element(by.xpath("//input[@name='search']"));
  let searchCode = element(by.xpath("(//button[contains(text(),'Search')])[2]"));
  let searchConLib = element(by.xpath("(//input[@id='keyword'])[1]"));
  let clkSearchLib = element(by.xpath("//button[contains(@title,'Search')]"));
  let clkFirConLib = element(by.xpath("//h4[contains(@class,'sb--card__title sb__ellipsis')]//bdi[1]"));
  let clkCopyButton = element(by.xpath("//*[text()=' Copy ']"));
  let vefifyContentCopied = element(by.xpath("//div[@class='practical-header__title font-weight-bold pl-20 fs-0-92']"));
  let clkLibraray = element(by.xpath("//a[contains(text(),'textbooks')]"));
  let clkTraining = element(by.xpath("//a[contains(text(),' Courses ')]"));
  let clkTrainSearInp = element(by.xpath("//input[@title='Search in Courses']"));
  let clkTrainingSrchbutton = element(by.xpath("//button[@title='Search in Courses']"));
  let clkCoursFirst = element(by.xpath("(//div[@class='sb-card-meta course'])[1]"));
  let clkTocFold = element(by.xpath("//*[@class='sb-collectionTree-title']"));
  let clkTocSubUnits = element(by.xpath("//*[@role='tree']"));
  let clkBorwse = element(by.xpath("//div[@class='qq-upload-button-selector qq-upload-button custom-qq-upload-button']"));
  let clkUplodBtn = element(by.xpath("//button[contains(text(),'Upload')]"));
  let assertCsvContent = element(by.xpath("//span[contains(text(),'unit1')]"));
  let uploadTocButton = element(by.xpath("//span[contains(text(),'TOC')]/following::i[@class='upload icon']"));
  let GeneratQr = element(by.xpath("//span[contains(text(),'Download  QR codes')]/preceding::span[1]"));
  let sendForReview = element(by.xpath("//i[@class='send icon']"));
  let closeEditor1 = element(by.xpath("//i[@class='remove icon custom-cursor']"));
  let clkLinkedContents = element(by.xpath("//div[contains(@class,'sb--card__meta')]"));
  let verfiyTNlogo = element(by.xpath("//img[@src='logo.png']"));
  let clickTNLogin = element(by.xpath("//a[contains(text(),'Login')]"));
  let verifyTNlogoInLoginPage = element(by.xpath("//img[@alt='tnlogo']"));
  let clickExploreCourse = element(by.xpath("//a[contains(text(),' Courses ')]"));
  let clkFeaturedViewAll = element(by.xpath("//span[contains(text(),'Student courses')]//following::button[1]"));
  let clkLatestViewAll = element(by.xpath("//span[contains(text(),'Teacher courses')]//following::button[1]"));
  let verifyFeaturedCount = element(by.xpath("//span[contains(text(),'Featured courses')]//following::span[1]"));
  let verifyLatestCount = element(by.xpath("//span[contains(text(),'Latest courses')]//following::span[1]"));
  let clkSignInWithGoogle = element(by.xpath("//img[@class='signInWithGoogle']"));
  let enterGooUsrName = element(by.xpath("//input[@name='identifier']"));
  let clkGooNext = element(by.xpath("//div[@id='identifierNext']"));
  let enterGooPassword = element(by.xpath("//input[@name='password']"));
  let clkGooPassNext = element(by.xpath("//div[@id='passwordNext']"));
  let clkGoogelAccAfterlogout = element(by.xpath("//div[contains(text(),'automation')]"));
  //var labelLibrary = element(by.xpath("//*[contains(@class,'textbooks')]"));
  //var labelDefaultBoard = element(by.xpath("(//sui-select[contains(@class,'selection ')])[2]"));
  //var labelDefaultMedium = element(by.xpath("(//sui-select[contains(@class,'selection ')])[3]"));
  //var labelDefaultMedium =element(by.xpath("//label[text()='Medium ']"))
  // var labelDefaultClass = element(by.xpath("//div[contains(text(),' Class 10')]"));
  var labelClassOne = element(by.xpath("//div[contains(text(),' Class 1')]"));
  var firstContent = element(by.xpath("//div[contains(@class,'sb--card ng-star-inserted')]"));
  let clkEnterQRCode = element(by.xpath("//button[@title='Enter QR code']"));
  let enterQrCodeInGet = element(by.xpath("//input[@placeholder='Enter QR code']"));
  let ClkCopyAsCourse = element(by.xpath("//button[contains(text(),'Copy as course')]"));
  let clkCheckBox = element(by.xpath("//label[@for='checkbox']"));
  let clkCreateBtn = element(by.xpath("//button[contains(text(),' Create ')]"));
  var manageLink = element(by.xpath("//li[@routerlink='manage']"));
  var downloadBtn = element(by.xpath("//button[@class='sb-btn sb-btn-secondary sb-btn-normal ml-16']"));
  //var downloadBtn = element(by.xpath("//button[@class='sb-btn sb-btn-normal ml-24 sb-btn-secondary']"));
  var digitalTextBooksLink = element(by.xpath("//a[contains(text(),' Digital textbooks ')]"));
  var searchBtn = element(by.xpath("//button[@class='sb-btn sb-btn-md']"));
  var bookImg = element(by.xpath("(//img[contains(@src,'assets/common-consumption/images')])[1]"));
  var copyBtn = element(by.xpath("(//button[@class='sb-btn sb-btn-normal sb-btn-outline-primary mr-8 ng-star-inserted'])[2]"));
  var copyPopup = element(by.xpath("//*[contains(text(),'Content successfully copied')]"));
  var searchBoxForBook = element(by.xpath("//input[@placeholder='Search or enter QR code']"));
  var clickSeaarchButton = element(by.xpath("//button[text()='Search']"));
  var searchedBook = element(by.xpath("//div[@class='sb--card__meta']//h4[1]"));
  var profileIcon = element(by.xpath("(//div[@class='avatar-content'])[2]"));
  var workspaceButton = element(by.xpath("//li[text()=' Workspace ']"));
  var draftButton = element(by.xpath("//a[contains(text(),'Drafts')]"));
  var bookSeaarchBox = element(by.xpath("//input[@placeholder='Search content']"));
  var searchedFirstBook = element(by.xpath("(//a[text()='Digital Textbook']/following-sibling::div)[1]"));
  var addCollaboratorIcon = element(by.xpath("//i[contains(@class,'add user')]"));
  var addcollaborator = element(by.xpath("(//strong[text()='+ADD'])[3]"));
  var doneButton = element(by.xpath("//button[text()='Done']"));
  var closeIcon = element(by.xpath("//div[contains(@class,'close icon-box')]//i[1]"));
  var publishedBookIcon = element(by.xpath("//a[@popuptext='View all your published content']"));
  var searchedBookForBestScore = element(by.xpath("//div[@class='sb--card__svg-area']//img[1]"));
  var clickOnUnit = element(by.xpath("(//h4[contains(text(),'Unit 3')]/following-sibling::i)[1]"));
  var clickOnassesment = element(by.xpath("//div[text()=' Course assessment 1 - 0721 ']"));
  var firststquestion = element(by.xpath("(//div[@class='option-text-container text-only']//p)[1]"));
  var nextButton = element(by.xpath("//img[@ng-src='coreplugins/org.ekstep.overlay-1.0/renderer/assets/icons/next.png']"));
  var firstBlanks = element(by.xpath("(//input[@class='ans-field'])[1]"));
  var secondBlanks = element(by.xpath("(//input[@class='ans-field'])[2]"));
  var submitButtonAfterAssessment = element(By.xpath("//button[@type='submit']"));
  var firsstStar = element(by.xpath("//sui-rating[contains(@class,'sb-rating ui')]//i[1]"));
  var submitButtonAfterRating = element(by.xpath("//button[text()=' Submit ']"));
  var baackButton = element(by.xpath("(//button[contains(text(),'Back')]//..)[2]"));
  var bestScore = element(by.xpath("//div[contains(@class,'sbchapter__item__score pr-8')]"));
  var searchButton = element(by.xpath("//button[text()='Search']"));
  var discussionForumFirstBook = element(by.xpath("//div[@class='sb--card__main-area']/following-sibling::div[1]"));
  var forum = element(by.xpath("//button[@title='Forum']"));
  var categories = element(by.xpath("//a[contains(text(),'Categories')]"));
  var myDiscussions = element(by.xpath("//a[contains(text(),'My discussion')]"));
  var categoryCard = element(by.xpath("(//div[@class='category-card-header']//div)[2]"));
  var announcement = element(by.xpath("//div[text()='Announcements']"));
  var generalDiscussion = element(by.xpath("//div[contains(text(),'General Discussion')]"));
  var recentPost = element(by.xpath("//*[@id='recent-post']"));
  var bestPost = element(by.xpath("//*[@id='best-post']"));
  var savedPost = element(by.xpath("//*[@id='saved-post']"));
  var upvoted = element(by.xpath("//*[@id='upvoted-post']"));
  var downVoted = element(by.xpath("//a[@id='downvoted-post']"));
  var announcementLink = element(by.xpath("//span[text()=' Announcements ']"));
  var textareaForComment = element(by.xpath("//textarea[contains(@class,'text-content fnormal')]"));
  var postReply = element(by.xpath("//span[text()='Post Reply']"));
  var startDiscussion = element(by.xpath("//*[contains(@id,'start-discussion')]"));
  // var askQuestion = element(by.xpath("//input[@placeholder='Ask a question or post an idea']"));
  var askQuestion = element(by.xpath("//input[@formcontrolname='question']"));
  var description = element(by.xpath("//textarea[@formcontrolname='description']"));
  var submitButton = element(by.xpath("//span[text()='Submit']"));
  var firstGroup = element(by.xpath("//div[@class='sb--card__info']"));
  var groupActions = element(by.xpath("//div[@id='group-actions']"));
  var enableDiscussionIcon = element(by.xpath("//div[text()=' Enable discussions ']"));
  var enablediscussionSuccessful = element(by.xpath("//strong[text()='Enabled discussion forum successfully']"));
  var discussionIcon = element(by.xpath("//button[@title='Forum']//img[1]"));
  var disableDiscussionIcon = element(by.xpath("//div[text()=' Disable discussions ']"));
  var disablediscussionButton = element(by.xpath("//button[text()='Disable discussions']"));
  var disableDiscussionSuccessful = element(by.xpath("//strong[text()='Disabled discussion forum successfully']"));
  var labelLibrary = element(by.xpath("//a[.=' Digital textbooks ']"));
  var labelDefaultBoard = element(by.xpath("(//sui-select[contains(@class,'selection sbt-dropdown')])[2]"));
  //var labelDefaultBoard = element(by.xpath("//sui-select-option[@class='item ng-star-inserted active']//span[contains(text(),'State (Assam)')]"));
  //var labelDefaultMedium = element(by.xpath("(//sui-select[contains(@class,'selection ')])[3]"));
  var labelDefaultMedium = element(by.xpath("//div[.=' English']"));
  //var labelDefaultClass = element(by.xpath("//div[contains(text(),' Class 10')]"));
  var labelDefaultClass = element(by.xpath("//div[.=' Class 10']"));
  var DefaultTextbook = element(by.xpath(" //span[.=' Economics '] "));
  var ConsumeCourse = element(by.xpath("//h4[.=' Globalisation And The Indian Economy '] "));
  var CourseArrow1 = element(by.xpath("(//button[@class='navigation-arrows player-nextIcon paginate right ml-4'])[1]"));
  var RatingClose = element(by.xpath("//i[contains(@class,'close icon')]"));
  var BackButton = element(by.xpath("//button[normalize-space()='Back']"));
  var labelslctBoard = element(by.xpath("(//sui-select[contains(@class,'selection sbt-dropdown')])[2]"));
  var SelectAPboard = element(by.xpath("//span[.='State (Andhra Pradesh)']"));
  //var SelectCBSEBoard=element(by.xpath("//sui-select/div[1]/span[.='CBSE/NCERT']"));
  var SelectTelguMedium = element(by.xpath("//div[.=' Telugu']"));
  var Select8Class = element(by.xpath("//div[.=' Class 8']"));
  var selct1Class = element(by.xpath("//div[.=' Class 1']"));
  var SelectBiologybook = element(by.xpath("(//span[.=' Biology '])[1]"));
  var selectEnglishBook = element(by.xpath("//sui-multi-select/div[2]/div/sui-select-option/span[text()='english']"));
  var SelectVonBook = element(by.xpath("(//div[@class='arrange-card-items certificate-course-contentt pl-8']/h4)[2]"));
  var SelectCourseArrow1 = element(by.xpath("(//button[@class='navigation-arrows player-nextIcon paginate right ml-4'])[1]"));
  var SelectRCButton = element(by.xpath("//i[@class='close icon']"));
  var SelectBkButton = element(by.xpath("//button[normalize-space()='Back']"));
  var coursePagebackButton = element(by.xpath("//button[text()=' Back ']"));
  var MyCourseOption = element(by.xpath("//span[text()='My courses']"));
  var viewAllButton = element(by.xpath("//button[text()=' View all ']"));
  var closeButton = element(by.xpath("//button[text()='Close ']"));
  var addCourseTitle = element(by.xpath("//input[@placeholder='Title']"));
  var addCourseName = element(by.xpath("//input[@placeholder='Name']"));
  var courseadditionalCategory = element(by.xpath("(//div[@class='list-border'])[1]//following::li[text()='Select Additional Category']"));
  var courseType = element(by.xpath("(//select[@id='sb-dropdown'])[2]"));
  // var subjectCovered=element(by.xpath("(//div[@class='list-border'])[2]"));
  var subjectCovered = element(by.xpath("//label[contains(text(),'Subjects covered in the course')]//following::select[1]"));
  var selectBoardForcourse = element(by.xpath("(//select[@id='sb-dropdown'])[3]"));
  var selectMediumForCourse = element(by.xpath("//li[contains(text(),'Select Medium')]"));
  var selectClassForCourse = element(by.xpath("//li[contains(text(),'Select Class')]"));
  var selectSubjectForCourse = element(by.xpath("//li[contains(text(),'Select Subject')]"));
  var selectCopyRightYear = element(by.xpath("//input[@placeholder='Copyright Year']"));
  var selectAdditionalCategory = element(by.xpath("//label[contains(text(),'Textbook')]"));
  var selectcourseTypeForNcert = element(by.xpath("//option[text()='NCERT']"));
  var selectcourseTypeForK12 = element(by.xpath("//option[text()='K-12 curriculum framework']"));
  var selectcourseType = element(by.xpath("//option[text()='Continuous Professional Development']"));
  var selectcourseTypeCBSE = element(by.xpath("//option[text()='CBSE']"));
  var selectSubject = element(by.xpath("//option[contains(text(),'English') or contains(text(),'EVS')]"));
  var selectBoard = element(by.xpath("(//label[contains(@data-title,'Board')])//following::option[2]"));
  var selectMedium = element(by.xpath("//label[contains(text(),'Medium(s) of the audience')]//following::label[contains(text(),'English')]"));
  var selectclass = element(by.xpath("//label[contains(text(),'Class(es) of the audience')]//following::label[2]"));
  var selectSubject2 = element(by.xpath("//label[contains(text(),'Subject(s) of the audience')]//following::label[2]"));
  var saveAsDraft = element(by.xpath("//button[text()=' Save as Draft ']"));
  var addChild = element(by.xpath("//button[contains(text(),'Add Child')]"));
  var NewCoursesubmitButton = element(by.xpath("//button[text()=' Submit ']"));
  var addFromLibraryButton = element(by.xpath("//button[contains(text(),' Add from library ')]"))
  var selectButton = element(by.xpath("(//button[contains(text(),'Select content')])[1]"));
  var addContent = element(by.xpath("//button[text()=' Add content ']"));
  var contentFromLibrayBackButton = element(by.xpath("//button[contains(@class,'sb-btn sb-btn-primary sb-btn-xs back-btn px-0')]"));
  var termsAndConditionCheckbox = element(by.xpath("//span[contains(text(),'I agree that by submitting / publishing this Content,')]"));
  var submitForreviewButton = element(by.xpath("//button[contains(text(),' Send for Review ')]"));
  var Author = element(by.xpath("//input[@placeholder='Author']"));
  var courseIcon = element(by.xpath("//i[contains(@class,'icon image')]"));
  var allImages = element(by.xpath("(//a[@class='sb-item item'])"));
  var firststIconImage = element(by.xpath("(//div[@class='sb-image-section']//img)[1]"));
  var firstCourseForTOC = element(by.xpath("(//div[@class='sb--card__meta'])[1]"));
  var subjectFilter = element(by.xpath("(//label[@class='w-100']//sui-multi-select)[1]"));
  var ContinusProfList = element(by.xpath(("(//option[text()='Continuous Professional Development'])[1]")));
  var clkTags = element(by.xpath("//*[contains(text(),'Tags')]"));
  var clkMyDiscussion = element(by.xpath("//*[contains(text(),'My discussion')]"));
  var clkCloseIconDF = element(by.xpath("//button[contains(text(),' Close ')]"));
  var clkGeneDiscDF = element(by.xpath("//div[contains(text(),'General Discussion') or contains(text(),'Discussion Forum for Groups')]"));
  var clkGenericCreatedTopics = element(by.xpath("//*[contains(text(),'General Discussion') or contains(text(),'Discussion Forum for Groups')]"));
  var clkHamburgerMenuTopic = element(by.xpath("//div[@id='group-actions']"));
  var clkHamburgerMenuTopicEdit = element(by.xpath("//div[contains(text(),'Edit')]"));
  var clkHamburgerMenuTopicDelete = element(by.xpath("//div[contains(text(),'Delete')]"));
  var clkUpdateBtnTopcis = element(by.xpath("//button[@id='update-topic-popup']"));
  var assertUpdatedTopicName = element(by.xpath("//h3[contains(text(),'UpdateTopic')]"));
  var assertUpdateDesName = element(by.xpath("//*[contains(text(),'UpdatedDescription')]"));
  var assertAddedTopicName = element(by.xpath("//*[contains(text(),'This is my 1st idea to be shared')]"));
  var assertaddedDesName = element(by.xpath("//*[contains(text(),'DescriptionIdeaShared')]"));
  var assertNoData = element(by.xpath("//div[contains(text(),'No Data')]"));
  var assert0Disccsuion = element(by.xpath("//span[contains(text(),'0 Discussions')]"));
  var asserr0Post = element(by.xpath("//span[contains(text(),'0 Posts')]"));
  var firstGroupInMentor = element(by.xpath("(//*[contains(@class,'sb--card__info')])[6]"));
  var myDiscussioninMentor = element(by.xpath("(//li[@id='d.route']//a)[3]"));
  var closeDiscussion = element(by.xpath("//*[contains(@id,'close-discussion-forum')]"));
  var childDesc = element(by.xpath("//textarea[contains(@placeholder,'Description')]"));
  var tags = element(by.xpath("//input[contains(@placeholder,'Add a tag and press Enter')]"));
  var discussCard = element(by.xpath("(//h3[@class='discuss-card-title ng-star-inserted'])[1]"));
  var SelectCourseByGroup = element(by.xpath("//h4[contains(text(),'Course')]"));
  var SelectCourse = element(by.xpath("(//div[contains(@class,'sb--card__main-area')])[1]"));
  var viewActivity = element(by.xpath("//span[contains(text(),'View activity')]"));
  var ConsumeCourseforGroups = element(by.xpath("(//img[contains(@src,'common-consumption')])"));
  var coursewithoutAddedToGrpPopUp = element(by.xpath("//div[contains(@class,'ui center aligned segment')]"));
  var AssertAdmin = element(by.xpath("//label[contains(@class,'sb__ellipsis')]"));
  var AdminInDashboard = element(by.xpath("(//tr[@role='row']//following::tr)[1]"));
  var ActivityDashboard = element(by.xpath("//button[contains(@title,'Activity Dashboard')]"));
  var clkKeyworkCollection = element(by.xpath("//input[@placeholder='Input the keyword and PRESS enter']"));
  var selectBoardForcollection = element(by.xpath("//label[contains(text(),'Audience Type')]//following::select[1]"));
  var selectBoardValueForcollection = element(by.xpath("(//label[contains(@data-title,'Board')])//following::option[2]"));
  var selectMediumForcollection = element(by.xpath("//label[contains(text(),'Audience Type')]//following::select[1]//following::ul[1]"));
  var selectMediumValueForcollection = element(by.xpath("//label[contains(text(),'English')]"));
  var selectClassValueForcollection = element(by.xpath("//li[contains(text(),'Select Class')]//following::label[2]"));
  var selectSubjectValueForcollection = element(by.xpath("//li[contains(text(),'Select Subject')]//following::label[2]"));
  var selectAdditionalForcollection = element(by.xpath("//label[contains(text(),'Lesson Plan')]"));
  var SelectCPD = element(by.xpath("(//option[text()='Continuous Professional Development'])"));
  var k12 = element(by.xpath("//option[contains(text(),'State (Tamil Nadu)') or contains(text(),'Z_Test_Framework')]"));
  var tncSubmit = element(by.xpath("//*[@class='sb-color-gray-300']"));
  var selectBoardCPD = element(by.xpath("(//label[contains(@data-title,'Board')])//following::option[2]"));
  var MultipleSelect = element(by.xpath("//label[contains(text(),'of the audience')]//following::label[contains(text(),'Select All')]"));
  var errorPopUp = element(by.xpath("//strong[contains(text(),'Please fill the required metadata')]"));
  var SubjectMultipleSelect = element(by.xpath("(//label[contains(text(),'of the audience')]//following::label[contains(text(),'Select All')])[2]"));
  var Coursetopic = element(by.xpath("//div[@id='treePicker_topicsIds']"));
  var SelectCourseTopic = element(by.xpath("(//i[@class='square outline icon'])"));
  var TopicSubmit = element(by.xpath("//button[contains(text(),'Done')]"));
  var SelectSubject4 = element(by.xpath("//option[contains(text(),' Accounting And Auditing ')]"));
  var SelectSubject5 = element(by.xpath("//option[contains(text(),' Accountancy ')]"));
  var EnterBookTag = element(by.xpath("//input[@placeholder='Enter Keywords']"));
  var QrCodeValueEnter = element(by.xpath("//input[@placeholder='e.g. 45']"));
  var assertDownloadQrCodeToastrMsg = element(by.xpath("//*[contains(text(),'QR codes downloaded')]"));
  var assertContentPublishedMsg = element(by.xpath("//*[contains(text(),'Content published successfully...')]"));
  var UnSelectTamil = element(by.xpath("(//label[.='Tamil'])[1]"));
  var addcourseTag = element(by.xpath("//input[@placeholder='Enter Keywords']"));
  var clkContent = element(by.xpath("(//input[contains(@id,'searchInputField')]//following::span[@class='ng-star-inserted'])[5]"));
  var coursevalidateWithBMC = element(by.xpath("(//span[contains(@class,'cfe-multiselect')])[6]"));
  var attribution = element(by.xpath("//input[contains(@placeholder,'Attributions')]"));
  var attributionInbook = element(by.xpath("//*[text()=' CREDITS ']//following::div[text()='ATTRIBUTIONS']//following::div[text()='aAttribution2, bAttribution1, dAttribution3, fAttribution4']"));
  var clkObservations = element(by.xpath("//input[contains(@id,'keyword')]//following::*[contains(text(),' Observation ')]"));
  var filterSearch = element(by.xpath("//input[@name='filter_search']"));
  var searchIcon = element(by.xpath("//button[contains(.,'Search')]"));
  var firstTvLessonContent = element(by.xpath("//div[@class='sb--card__info']"));
  var clkDarkMode = element(by.xpath("//button[@id='dark-mode-toggle']"));
  var obervationDetails = element(by.xpath("//*[contains(text(),'Observation Details ')]"));
  var obervationForm = element(by.xpath("//*[contains(text(),' Observation Form ')]"));
  var clkProfileDropdown = element(by.xpath("//*[@routerlink='profile']"));
  var clkEditProfileBtn = element(by.xpath("//button[contains(text(),'Edit')]"));
  var clkRoleDropDown = element(by.xpath("//span[contains(text(),'Role')]//following::div[1]"));
  var sltTeacherRole = element(by.xpath("//span[contains(text(),'Teacher')]"));
  var clkSubmitRolePopup = element(by.xpath("//button[contains(text(),'Submit ')]"));
  var publisher = element(by.xpath("//input[@placeholder='Publisher']"));
  var year = element(by.xpath("//sui-select[@id='year']"));
  var sltYear = element(by.xpath("//span[text()='2008']"));
  var SelectTargetBoard = element(by.xpath("(//div[contains(@class,'multi-select-container')]//following::ul)[5]"));
  let clkGenerateQrCode2 = element(by.xpath("//i[contains(@class,'icon qrcode')]//following::span[text()=' Generate 2 + 1 QR Codes ']"));
  let clkDownloadQrcode = element(by.xpath("//*[contains(text(),' Download 1 +1 QR codes ')]"));
  var kebabMenuInCourse = element(by.xpath("(//div[@id='dropdown-menu-list-header'])[2]"));
  var downloadCSVfile = element(by.xpath("//*[text()='Download sample csv file']"));
  var createFolders = element(by.xpath("//button[contains(@class,'item fs-0-785 bg-none')]//following::span[text()='Create folders using csv file']"));
  var addCourseTagForCourse = element(by.xpath("//input[contains(@placeholder,'nter')]"));
  var contenttoasterMsg = element(by.xpath("//div[@class='iziToast-body']//following::div[@class='iziToast-texts']"));
  var addsibling = element(by.xpath("//button[contains(text(),'Add Sibling')]"));
  var childKebabMenu = element(by.xpath("//span[@id='contextMenu']"));
  var dltUnitnode = element(by.xpath("(//span[@id='removeNodeIcon'])"));
  var childTitle = element(by.xpath("//label[@data-title='Name of the content']"));
  var assertDescription = element(by.xpath("//label[@data-title='Description of the content']"))
  var assertKeywords = element(by.xpath("//label[@data-title='Keywords for the content']"));
  var assertTopics = element(by.xpath("//label[@data-title='Choose a Topics']"));
  var courseAppIcon = element(by.xpath("//i[@id='icon_appIcon']"));
  var assertcategory = element(by.xpath("(//label[contains(text(),'Category')])[1]"));
  var assertAddCategory = element(by.xpath("(//label[contains(@data-title,'Additonal Category of the Content')])"));
  var assretCourseType = element(by.xpath("(//label[contains(text(),'Course Type')])"));
  var assertSubjectsCovered = element(by.xpath("(//label[contains(text(),'Subjects covered in the course')])"));
  var assertAudience = element(by.xpath("(//label[contains(@data-title,'Audience')])"));
  var assertBoard = element(by.xpath("(//label[contains(@data-title,'Board')])"));
  var assertMedium = element(by.xpath("(//label[text()='Medium(s) of the audience'])"));
  var assertClass = element(by.xpath("(//label[text()='Class(es) of the audience'])"));
  var assertSubject = element(by.xpath("(//label[text()='Subject(s) of the audience'])"));
  var assertAuthor = element(by.xpath("(//label[contains(@data-title,'Author of the content')])"));
  var assertAttribution = element(by.xpath("(//label[contains(@data-title,'Attributions')])"));
  var assertCopyright = element(by.xpath("(//label[contains(@data-title,'Copyright')])"));
  var assertyear = element(by.xpath("(//label[contains(@data-title,'Year')])"));
  var assertlicense = element(by.xpath("(//label[text()='License  '])"));
  var exploreTab = element(by.xpath("//a[contains(text(),'Explore')]"));
  var assertTabs = element(by.xpath("//a[contains(@aria-selected,'true')]"));
  var MedDropDown = element(by.xpath("(//sb-caret-down[@class='caret-down'])[3]"));
  var classDropDown = element(by.xpath("(//sb-caret-down[@class='caret-down'])[4]"));
  var subDropDown = element(by.xpath("(//sb-caret-down[@class='caret-down'])[5]"));
  var multiSelect2 = element(by.xpath("(//label[contains(text(),'of the audience')]//following::label[contains(text(),'Select All')])[2]"));
  var sndForRev = element(by.xpath("(//div[@class='d-flex flex-ai-center ng-star-inserted']//following::button)[2]"));
  var deactivateGroup = element(by.xpath("//div[text()=' Deactivate group ']"));
  var deactivateGroupPopUp = element(by.xpath("//button[text()='Deactivate group']"));
  var activateGroup = element(by.xpath("//button[text()='Activate group']"));
  var activateGroupPopUp = element(by.xpath("(//button[text()='Activate group'])[2]"));
  var childTopic = element(by.xpath("//div[@id='treePicker_topic']"));
  var selectchildTopic = element(by.xpath("(//i[@class='square outline icon'])[1]"));
  var childTitleName = element(by.xpath("//input[@placeholder='Name']"));
  var searchContentFromLibrary = element(by.xpath("//input[@id='searchInputField']"));
  var assertFAQPage = element(by.xpath("//h4[text()='Help']"));
  var LoginFAQ = element(by.xpath("//div[normalize-space()='Login']"));
  var ProfileFAQ = element(by.xpath("//div[@class='listView-compt']"));
  var CourseAndCertificateFAQ = element(by.xpath("//div[normalize-space()='Course & certificates']"));
  var assertLoginQuestion = element(by.xpath("//div[text()=' I want to register on DIKSHA ']"));
  var assertProfileQuestion = element(by.xpath("//div[text()=' I forgot my password ']"));
  var assertCCQuestion1 = element(by.xpath("//div[text()=' I want to join a course ']"));
  var assertCCQuestion2 = element(by.xpath("//div[text()=' I want to contribute content to DIKSHA ']"));
  var clkSearhInAllMyContent = element(by.xpath("//input[@title='Search']"));
  var clkSearchIconAllMyContent = element(by.xpath("//i[@class='circular search link icon']"));
  var assertUploadContentMenuBar = element(by.xpath("//*[contains(text(),'Edit Details')]"));
  var pdfArrowButton = element(by.xpath("(//div[@class='d-flex player-slides ml-8']//following::button[@aria-label='navigation-arrows-nextIcon'])[1]"));
  var unitClick2 = element(by.xpath("//span[text()='Chapter']"));
  var EnterQR = element(by.xpath("//button[@class='ui button qr-code-btn d-flex flex-ai-center']"));
  var ClickProfileIcn = element(by.xpath("//div[@class='ui grid padded width-100']"));
  var ClickJoyfulIcn = element(by.xpath("//*[@id='overlaySidebarID']/div[2]/div/ul/li[5]/span"));
  var ClickQRYes = element(by.xpath("//input[@id='dialcode-required_yes']"));
  var EnterQRCode = element(by.xpath("//input[@placeholder='Enter code here']"));
  var selectQRCode = element(by.xpath("//i[@class='large blue check circle icon']"));
  var QRValid = element(by.xpath("//i[@class='green check icon ng-star-inserted']"));
  var QRInvalid = element(by.xpath("//span[text()='Invalid QR code']"));
  var editQR = element(by.xpath("//a[text()='EDIT']"));
  var assertContent = element(by.xpath("//span[text()='Content']"));
  var assertSubContent = element(by.xpath("//span[text()='Content Quality']"));
  var assertSubContent12 = element(by.xpath("//span[text()='Content not playing/downloading']"));
  var assertSubContent13 = element(by.xpath("//span[text()='Content availability']"));
  var assertSubContent14 = element(by.xpath("//*[@id='subcategory']/div[2]/ul/li[4]/div"));
  var assertLoginReg = element(by.xpath("//span[text()='Login/Registration']"));
  var assertSubCert = element(by.xpath("//span[text()='Certificate related']"));
  //var publishSubject = element(by.xpath("//label[text()='Subject(s)']//following::span[text()=' English ']"));
  var audienceType = element(by.xpath("//ul[contains(@class,'disabled')]//following::span[text()=' Student ']"));
  var collMedium = element(by.xpath("(//ul[contains(@class,'disabled')]//following::span[text()=' English '])[1]"));
  var collClass = element(by.xpath("//ul[contains(@class,'disabled')]//following::span[contains(text(),'Class')]"));
  var collSubj = element(by.xpath("(//ul[contains(@class,'disabled')]//following::span[text()=' English '])[1]"));
  var viewCollab = element(by.xpath("//div[@class='sb-card ng-star-inserted']"));
  var addSibling = element(by.xpath("//button[text()=' Add Sibling ']"));
  var addCategoryInBook = element(by.xpath("//label[@data-title='Additional Category of the Content']//following::span[text()=' Textbook ']"));
  var sltLessonPlan = element(by.xpath("//input[@type='checkbox']//following::label[text()='Lesson Plan']"));
  var assertAdditionalCategory = element(by.xpath("//label[@data-title='Additional Category of the Content']"));
  var questionNextSlide = element(by.xpath("(//*[contains(text(),'i')]//preceding::div[@aria-label='next slide'])[1]"));
  var questionOption1 = element(by.xpath("(//div[contains(@aria-labelledby,'option-checkbox')]//following::span[contains(@class,'checkmark')])[1]"));
  var questionOption2 = element(by.xpath("(//div[contains(@aria-labelledby,'option-checkbox')]//following::span[contains(@class,'checkmark')])[2]"));
  var questionOption3 = element(by.xpath("(//input[@aria-checked='mcqOption.selected'])[3]"));
  var questionOption4 = element(by.xpath("(//input[@aria-checked='mcqOption.selected'])[4]"));
  var questionOption5 = element(by.xpath("(//input[@aria-checked='mcqOption.selected'])[4]"));
  var questionOption6 = element(by.xpath("(//input[@aria-checked='mcqOption.selected'])[4]"));
  var assertTryAgainFeedback = element(by.xpath("//div[@class='quml-alert__body']//span[@aria-label='Try again']"));
  var assertFeedbackAllert = element(by.xpath("//div[@class='quml-alert']//following::div[@class='quml-alert__body']"));
  var showAnswerButton = element(by.xpath("//button[text()='Show Answer']"));
  var assertSolution = element(by.xpath("//div[@class='option-container-blurred option-container-blurred-out']//following::div[text()='Solution']"));
  var assertSubmitConfirmation = element(by.xpath("(//button[@type='submit'])[3]"));
  var assert3 = element(by.xpath("//div[@class='scoreboard__points']//following::div[@aria-label='3']"));
  var questionSections = element(by.xpath("//div[contains(text(),'Instructions')]//following::div[text()='Section Question set']"));
  var imageLayout1 = element(by.xpath("(//figure[@class='image image-style-align-left resize-25'])"));
  var imageLayout2 = element(by.xpath("(//figure[@class='image resize-50 image-style-align-center'])"));
  var imageLayout3 = element(by.xpath("(//figure[@class='image resize-25 image-style-align-right'])"));
  var contentFeedback = element(by.xpath("//button[text()=' Submit ']//preceding::i[2]"))
  var submitcontentFeedback = element(by.xpath("//button[text()='Submit']"))
  var optionText = element(by.xpath("//p[contains(text(),'Dharwad')]"));
  var qrCodeRequestButton = element(by.xpath("//i[@role='button']//following::button[text()='Request']"));
  var clkGenerateQrCode3 = element(by.xpath("//i[contains(@class,'icon qrcode')]//following::span[text()=' Generate 2 + 1 QR Codes ']"));
  let clkGenerateQrCode4 = element(by.xpath("//i[contains(@class,'icon qrcode')]//following::span[text()=' Generate 1 + 1 QR Codes ']"));
  var clkDownloadQrcode2 = element(by.xpath("//*[contains(text(),'1 QR codes ')]"));
  var submittedForReview = element(by.xpath("//a[contains(@mattooltip,'View all content you have submitted for review')]"));
  var assertQrCodeRequiredField = element(by.xpath("(//label[contains(@data-title,'QR CODE REQUIRED')])"));
  var assertQrCode = element(by.xpath("(//label[contains(text(),' QR code ')])"));
  var dikshaId= element(by.xpath("//div[@id='copyUser']"));
  var switchUser = element(by.xpath("(//div[contains(@id,'overlaySidebarID')]//following::span)[3]"));
  var footer = element(by.xpath("//footer[contains(@class,'new-layout-footer')]"));
  var assertBook= element(by.xpath("//div[@class='content']/..//span[.='Book']"));
  var assertCourse = element(by.xpath("//div[@class='content']/..//span[.='Course']"));
  var assertResource = element(by.xpath("//div[@class='content']/..//span[.='Resource']"));
  var assertCollection = element(by.xpath("//div[@class='content']/..//span[.='Collection']"));
  var assertLessonPlan = element(by.xpath("//div[@class='content']/..//span[.='Lesson Plan']"));
  var assertUpload = element(by.xpath("//div[@class='content']/..//span[.='Upload Content']"));
  var adminDashBoard = element(by.xpath("//div[@id='overlaySidebarID']//following::li[contains(text(),' Admin dashboard ')]"));
  var clkDownloadQrcode4 = element(by.xpath("//*[contains(text(),' Download 2 +1 QR codes ')]"));
  var childDesc1 = element(by.xpath("//label[text()='Description']//following::textarea"));
  var childDesc2 = element(by.xpath("//textarea[@placeholder='Description']"));
  var clkSection = element(by.xpath("//span[contains(text(),'Section')]"));
  var tagsInDF = element(by.xpath("//a[text()='Categories']//following::*[text()='Tags']"));
  var liscenceFilter = element(by.xpath("//label[contains(text(),'License')]//following::*[@id='sb-dropdown']"));
  var allMyContent = element(by.xpath("//a[text()=' All My Content ']"));
  var noCertificateMsg = element(by.xpath("//*[contains(text(),' Course modules')]//following::span[@class='fnormal sb-color-primary ml-16 font-weight-bold']"));
  var assertCopyContent = element(by.xpath("//div[contains(text(),'Copy')]"));
  var assertCopyContentSendForReview = element(by.xpath("//button[contains(text(),' Send for Review ')]"));
  var browseByCategories = element(by.xpath("//div[contains(text(),'Browse by Categories')]//following::label[contains(text(),'Course')]"));
  var explorelabel = element(by.xpath("//h4[contains(text(),'Explore')]"));
  var backButton = element(by.xpath("//div[contains(@id,'search-input-container')]//following::button[contains(@aria-label,'Back')]"));
  var browseBySubjects = element(by.xpath("//div[contains(text(),'Browse by Subjects')]//following::div[3]"));
  var clkMenuBook = element(by.xpath("//i[@class='icon ellipsis vertical h-1']"));
  var clkMenuBookDownloadCSV = element(by.xpath("//span[contains(text(),' Download folders as csv file')]"));
  var resetButton = element(by.xpath("//div[@id='search-input-container']//following::button[contains(text(),'Reset')]"));
  var searchedUseredit = element(by.xpath("//div[@id='search-input-container']//following::i[contains(@class,'edit large icon')][1]"));
  var closeicon = element(by.xpath("//*[contains(@aria-label,'close')]"));
  var nextbutton = element(by.xpath("//div[@id='search-input-container']//following::a[contains(text(),'Next')]"));
  var previousButton = element(by.xpath("//div[@id='search-input-container']//following::a[contains(text(),'Previous')]"));
  var firstButton = element(by.xpath("//div[@id='search-input-container']//following::a[contains(text(),'First')]"));
  var oldBatchResume = element(by.xpath("//button[contains(text(),'Resume')]"));
  var myDiscusCard = element(by.xpath("//*[contains(@id,'discuss-card')][1]"));
  var nameForPersonalDetails = element(by.xpath("//input[contains(@id,'name')]"));
  var editpersonaldetails = element(by.xpath("(//*[contains(@class,'sb-btn sb-btn-primary')])[1]"));
  var assertProfileIcon = element(by.xpath("//*[contains(@id,'keyword')]//following::div[@class='profile-user-label font-w-bold d-flex text-center relative position']"));
  var submitPersonalDetils = element(by.xpath("//button[contains(text(),'Submit ')]"));
  var startDiscussionSubmitButoon = element(by.xpath("//span[text()='Submit']//parent::button"));
  var roleDropDown = element(by.xpath("(//*[@id='persona']//following::div)[1]"));
  var sho = element(by.xpath("//*[@id='persona']//following::span[contains(text(),'School head OR Officials')]"));
  var studentRole = element(by.xpath("//*[@id='persona']//following::span[contains(text(),'Student')]"));
  var observationTab = element(by.xpath("//input[contains(@id,'keyword')]//following::*[contains(text(),' Observation ')]"));
  var profileRole = element(by.xpath("//input[contains(@id,'keyword')]//following::div[contains(text(),'Role')]//following::div[1]"));
  var backArrowButton = element(by.xpath("//input[@id='keyword']//following::*[contains(@class,'icon icon-svg--primary')]//parent::i//parent::button"));
  var previousButton = element(by.xpath("(//div[@class='d-flex player-slides ml-8']//following::button[contains(@aria-label,'navigation-arrows-previousIcon')])[1]"));
  var searchLibrary = element(by.xpath("//input[contains(@placeholder,'Search Library')]"));
  var contentHierarchyRadbutton = element(by.xpath("//div[contains(text(),' Where do you want to add this content? ')]//following::label[contains(text(),'Collection Unit')]//following::input[contains(@type,'radio')]"));
  var firstOptionInquestion = element(by.xpath("(//input[contains(@id,'option-checkbox')])[5]"));
  var closeIconInQuestionSolution = element(by.xpath("(//span[contains(text(),'I')])[1]"));
  var decreaseResolution =  element(by.xpath("//button[contains(@aria-label,'Decrease font size')]"));
  var increaseResolution = element(by.xpath("//button[contains(@aria-label,'Increase font size')]"));
  var resetResolution = element(by.xpath("//button[contains(@aria-label,'Reset to default')]"));
  var liveTitle = element(by.xpath("//td[text()='2']//following::*[@aria-label='file-icon'][1]"));
  var clkFirstParameter = element(by.xpath("//th[text()='Parameter']//following::tr[@class='odd']"));
  var assertLastUpdatedDate = element(by.xpath("//*[text()='Status of Project, No. of users']//preceding::span[contains(text(),'Last updated on')]//.."));
  var assertGraph = element(by.xpath("//span[text()='Graphs']//following::div[contains(@class,'dashboard-graph-statistics')]"));
  var createdDate = element(by.xpath("//*[contains(text(),'Created On')]//following::p[1]"));
  var arrowBackButton = element(by.xpath("(//span[contains(text(),'Back')]//..)[1]"));
  var courseInBrowseByCategories = element(by.xpath("//div[contains(text(),'Browse by Categories')]//following::label[text()='Course']"));
  var clickCourseUnit = element(by.xpath("//*[contains(text(),'Course Unit')]//following::*[contains(@title,'neel_maxattepts')]"));
  var answerOne = element(by.xpath("//*[contains(text(),'Blue')]"));
  var redoButton = element(by.xpath("//button[contains(text(),'Redo')]"));
  var enterName = element(by.xpath("//input[@placeholder='Enter your name']"));
  var addUserButton = element(by.xpath("//button[text()=' Add user ']"));
  var messageToast = element(by.xpath("//div[@class='iziToast-body']"));
  var messageToastCloseButton = element(by.xpath("//button[@class='iziToast-close']"));
  var assertUpdatedOn = element(by.xpath("//div[contains(text(),' Updated on')]//parent::div"));
  var assertUserName = element(by.xpath("//div[contains(text(),'User name')]"));
  var assertUserDistrict = element(by.xpath("//div[contains(text(),'User district')]"));
  var assertCriteriaMet = element(by.xpath("//div[contains(text(),'Criteria met')]"));
  var certificateTab = element(by.xpath("//*[contains(@class,'sidebar')]//following::*[contains(text(),'Certificates')]"));
  var searchCertficateID = element(by.xpath("//input[contains(@placeholder,'Search user')]"));
  var searchCertficateIDbutton = element(by.xpath("(//button[contains(text(),'Search')])[2]"));
  var selectBatchDropdwn = element(by.xpath("//*[contains(text(),'Select batch')]"));
  var asserRigthProgress = element(by.xpath("//li[@class='showFeedBack-progressBar hover-effect ng-star-inserted correct']"));
  var assertWrongProgress = element(by.xpath("//li[@class='showFeedBack-progressBar hover-effect ng-star-inserted progressBar-border wrong']"));
  var assertBorderColorOfTheOpt = element(by.xpath("//div[@aria-checked='true']"));
  //var btnSubmit = element(by.xpath("//button[contains(text(),'Submit')]"));
  var assertReplayBtn = element(by.xpath("//div[contains(text(),'Replay')]"));
  var assertTitleEndPage = element(by.xpath("//div[contains(text(),'You just completed')]//following::span[1]"));
  var assertTitleSubmitPage = element(by.xpath("//div[contains(text(),'Are you ready to submit?')]//following::div[1]"));
  var clkPreviewBtn = element(by.xpath("//button[contains(text(),'Review')]"));
  var navigateSubmitPageBtn = element(by.xpath("//li[@class='requiresSubmit cursor-pointer showFeedBack-progressBar hover-effect ng-star-inserted']"));
  var clkProgressBar1 = element(by.xpath("//div[@aria-label='question number 1']"));
  var clkProgressBar2 = element(by.xpath("//div[@aria-label='question number 2']"));
  var clkProgressBar3 = element(by.xpath("//div[@aria-label='question number 3']"));
  var assertTitle1 = element(by.xpath("(//div[@class='mcq-title'])[1]"));
  var assertTitle2 = element(by.xpath("(//div[@class='mcq-title'])[2]"));
  var assertTitle4 = element(by.xpath("(//div[@class='mcq-title'])[3]"));
  var assertQNo1 = element(by.xpath("(//div[contains(text(),'1/4')])[2]"));
  var assertQNo2 = element(by.xpath("(//div[contains(text(),'2/4')])[2]"));
  var assertQNo3 = element(by.xpath("(//div[contains(text(),'3/4')])[2]"));
  var assertQNo4 = element(by.xpath("(//div[contains(text(),'4/4')])[2]"));
  var selectContentInLibraryContent = element(by.xpath("//div[contains(text(),'Showing (2) most relevant content')]//following::div[@class='ng-star-inserted'][1]")); 
  var asserLHSheairarchy = element(by.xpath("//div[contains(text(),' Folders ')]//following::*[contains(@role,'tree')]"));
  var downloadFolderAsCsv = element(by.xpath("//span[contains(text(),'Download folders as csv file')]"));
  var nextButtonOnUploadpopUp = element(by.xpath("//button[contains(text(),'Next')]"));
  var closeButtonOnUploadpopUp = element(by.xpath("//span[contains(text(),' Create folders using csv file ')]//following::button[contains(text(),'Close')]"));
  var ncertk_12 = element(by.xpath("//option[text()='NCERT']"));
  var copyContentButton = element(by.xpath("//button[contains(text(),'Copy')]"));
  var assertCopyOfContent = element(by.xpath("//span[@class='sliderCardHeading text-cencapitalize']"));
  var assertGroupGuidelinesPopUp = element(by.xpath("//div[contains(text(),'Terms and conditions')]"));
  var boardForCourse = element(by.xpath("(//option[text()='Select Board/Syllabus '])//.."));
  var selectMediumforTextBook = element(by.xpath("//label[contains(text(),'Medium(s)')]//following::label[contains(text(),'English')]"));
  var selectClassForTextBook = element(by.xpath("//label[contains(text(),'Class(es)')]//following::label[contains(text(),'Class 1')]"));
  var selectsubjectForTextbook = element(by.xpath("//label[contains(text(),'Subject(s)')]//following::label[contains(text(),'Select All')]//..//following::input[contains(@type,'checkbox')]"));
  var changeFiltersInLibraryPageOfEditor = element(by.xpath("//div[contains(text(),'Change Filters')]"));
  var contentTypeDropDown = element(by.xpath("//label[contains(text(),'Content Type(s)')]//following::div[1]"));
  var contentUnselectAll = element(by.xpath("//label[contains(text(),'Unselect All')]"));
  var courseContentcheckbox = element(by.xpath("//label[contains(text(),'Course')]"));
  var digitalTextbookCheckBox = element(by.xpath("//label[contains(text(),'Digital Textbook')]"));
  var questionPaperCheckBox = element(by.xpath("//label[contains(text(),'Question Paper')]"));
  var filterApplyButton = element(by.xpath("//button[contains(text(),'Apply')]"));
  var contentPlaylistCheckBox = element(by.xpath("//label[contains(text(),'Content Playlist')]"));
  var childDropDown1 = element(by.xpath("(//span[contains(text(),'Unit')])[1]"));
  var childDropDown2 = element(by.xpath("(//span[contains(text(),'Unit')])[2]"));
  var childDropDown3 = element(by.xpath("(//span[contains(text(),'Unit')])[3]"));
  var childDropDown4 = element(by.xpath("(//span[contains(text(),'Unit')])[4]"));
  var contentsOfChildFolder1 = element(by.xpath("(//span[@title='AutomationResource'])[1]"));
  var contentsOfChildFolder2 = element(by.xpath("(//span[@title='AutomationResource'])[2]"));
  var contentsOfChildFolder3 = element(by.xpath("(//span[@title='AutomationResource'])[3]"));
  var contentsOfChildFolder4 = element(by.xpath("(//span[@title='AutomationResource'])[4]"));
  var alreadyPresentInFolderDialog = element(by.xpath("//button[contains(text(),'Already present in this folder')]"));
  var assertAddContent = element(by.xpath("//div[contains(text(),' Where do you want to add this content? ')]//following::button[contains(text(),'Add content')]"));
  var dialogBox = element(by.xpath("//div[contains(text(),'Where do you want to add this content?')]"));
  var closeButtonForDialogBox = element(by.xpath("//*[contains(@aria-label,'close')]"));
  var clkRootNode = element(by.xpath("//*[contains(text(),' Folders ')]//following::span[@role='button'][1]//.."));
  var assertAddedToCollection = element(by.xpath("//*[contains(text(),'Added to collection')]"));
  var assertChaptersOrder = element(by.xpath("(//span[contains(text(),'Unit')])[2]//following::div[contains(@class,'sbchapter ng-star-inserted')][1]"));
  var assertOrderOfCourseModules = element(by.xpath("//h4[contains(text(),'Course modules')]//following::div[@role='button']"))
  var assertTagDiscussCard = element(by.xpath("//*[contains(text(),'This is my 1st idea')]//following::*[contains(@aria-label,'tags')]"));
  var assertAddedContent = element(by.xpath("//span[@title='AutomationCourseForDF']"));
  var clickRight = element(by.xpath("//input[@placeholder='Enter code here']//following::*[contains(@class,'large blue check circle icon')]"));
  var assertdialCodeStatus = element(by.xpath("//div[contains(@class,'dialcode-status')]"));
  var assertDoubleQuotes = element(by.xpath("//*[@placeholder='Description']"));
  var assertCollectionCategory = element(by.xpath("(//*[contains(@class,'sb-modal-dropdown-web')]//following::ul)[1]"));
  var clkAdditionalCategoryDrpDwn = element(by.xpath("(//div[@class='list-border'])[1]"));
  var clkLessonPlanInaddCategory = element(by.xpath("(//label[text()='Lesson Plan'])[1]//preceding::input[@type='checkbox'][1]"));
  var clkAddedContentInGroup = element(by.xpath("(//*[contains(@class,'sb--card__tags')]//following::span)[1]"));
  var activityDashBoard = element(by.xpath("//*[contains(text(),'Activity Dashboard')]"));
  var progressOfContentConsumption = element(by.xpath("//*[contains(@aria-label,'Progress%: activate to sort column ascending')]//following::tr"));
  var sortTheMemberName = element(by.xpath("//*[contains(@aria-label,'Name: activate to sort column descending')]"));
  var kebabMenuOfActivity = element(by.xpath("//*[contains(@aria-label,'View more actions menu')]"));
  var removeActivityButton = element(by.xpath("//span[contains(text(),'Remove activity')]"));
  var removeButton = element(by.xpath("//button[contains(text(),'Remove')]"));
  var clickActivity = element(by.xpath("//*[contains(@aria-label,'View more actions menu')]//.."));
  var assertk12 = element(by.xpath("(//option[text()='State (Tamil Nadu)'])[1]"));
  var assert3Dot7frame = element(by.xpath("(//option[text()='3.7 Framework'])[1]"));
  var assertTable = element(by.xpath("//*[contains(@role,'grid')]"));
  var downloadCsv = element(by.xpath("//*[contains(text(),'Download as CSV')]"));
  var assertZeroProgress = element(by.xpath("//td[contains(text(),'ABC')]//following::td[text()='0']"));
  var clkCollaborationSection = element(by.xpath("//*[contains(text(),'Collaborations')]"));
  var sortByDrpDwn = element(by.xpath("(//*[@class='dropdown icon'])[2]"));
  var contentsInsidesortByDrpDwn = element(by.xpath("//*[@class='menu transition visible']"));
  var addImageIcon = element(by.xpath("//*[@class='addImageText']"));
  var assertSearchBar = element(by.xpath("(//input[@placeholder='Search...'])[1]"));
  var allImageTab = element(by.xpath("(//*[text()='All Image'])"));
  var selectImage = element(by.xpath("(//*[@class='sb-grid-layout image']//following::div[@class='sb-video-content ng-star-inserted'])[1]"));
  var activateGroupInHamburgerMenu = element(by.xpath("//div[contains(text(),'Activate group')]"));
  var clickMemberGroup = element(by.xpath("//div[contains(text(),'Marcos')]"));
  var groupdeactivateBannerMsg = element(by.xpath("//div[contains(text(),' This group is temporarily inactive.')]"));
  var datasetTab = element(by.xpath("//*[contains(text(),'Datasets')]"));
  var reportsTab = element(by.xpath("(//*[contains(text(),'Reports')])[2]"));
  var searchReport = element(by.xpath("//input[contains(@type,'search')]"));
  var clickReports = element(by.xpath("//button[contains(@aria-label,'file-icon')]"));
  var assertSearchedResult = element(by.xpath("//*[contains(text(),'Improvement Projects Report Rollup')]//.."));
  var clickReportParameter = element(by.xpath("//*[contains(@aria-label,'Parameter: activate to sort column ascending')]//following::tr[contains(@class,'even')][1]"));
  var downloadDataCSV = element(by.xpath("//*[contains(text(),'Download data CSV')]"));
  var sixTabsCentraAlignMent = element(by.xpath("//div[contains(@aria-label,'Main menu')]"));
  var addTags = element(by.xpath("//*[contains(@aria-label,'Tag')]"));
  var selectOrg = element(by.xpath("//*[contains(@class,'mat-select-value')]//following::span[contains(text(),'Select Organisation')]"));
  var selectRole = element(by.xpath("//*[contains(@class,'mat-select-value')]//following::span[contains(text(),'Select Role')]"));
  var selectVerticals = element(by.xpath("//*[contains(@class,'mat-select-value')]//following::span[contains(text(),'Select Verticals')]"));
  var selectSections = element(by.xpath("//*[contains(@class,'mat-select-value')]//following::span[contains(text(),'Select Section')]"));
  var selectContentType = element(by.xpath("//*[contains(@class,'mat-select-value')]//following::span[contains(text(),'Select Content type')]"));
  var assertContentCard = element(by.xpath("(//*[contains(@class,'sb--card__main-area')]//..)[1]"));
  var assertNoResultsFound = element(by.xpath("//*[contains(text(),'Sorry there is no matching content')]"));
  var editorBackButton = element(by.xpath("//button[@aria-label='back']"));
  var allMycontentcard = element(by.xpath("(//*[contains(@class,'UpReviewHeader')])"));
  var publishedTab = element(by.xpath("(//*[contains(text(),'Published')])"));
  var assertCTAbtnRecentPost = element(by.xpath("//a[contains(text(),'Recent posts')]"));
  var assertCTAbtnBestPost = element(by.xpath("//a[contains(text(),'Best posts')]"));
  var assertCtAbtnSavedPost = element(by.xpath("//a[contains(text(),'Saved posts')]"));
  var assertCTAUpVoted = element(by.xpath("//a[contains(text(),'Upvoted')]"));
  var assertCTADownVoted = element(by.xpath("//a[contains(text(),'Downvoted')]"));
  var assertFirstPdfPage = element(by.xpath("//*[contains(text(),'A Simple PDF File')]"));
  var clickRotate = element(by.xpath("//*[@aria-label='rotate page']"));
  var selectSubrole = element(by.xpath("//div[@id='subPersona']"));
  var selectSubroleValue = element(by.xpath("//span[text()='HM']"));
  var childDropdwnChapter = element(by.xpath("(//span[contains(text(),'Chapter') or contains(text(),'Unit')])[1]"));
  var generalDiscussCard = element(by.xpath("(//div[@id='category-card'])"));
  var topicCard = element(by.xpath("(//div[@id='topic-card'])"));
  var bookNamecopy = element(by.xpath("//div[contains(text(),'Copy of')]"));
  var validateCategoryInEditor = element(by.xpath("(//label[contains(text(),'Category')]//following::option[text()='Course']//..)[1]"));
  var validateSubjectCovered = element(by.xpath("(//label[contains(text(),'Subjects covered in the course')]//following::option[contains(text(),'English')]//..)[1]"));
  var validateAudienceType = element(by.xpath("(//label[contains(text(),'Audience Type')]//following::span[contains(text(),'Student')]//..)[1]"));
  var validateBoardSyllabus = element(by.xpath("(//label[contains(text(),'Board/Syllabus of the audience')]//following::*[contains(text(),'State (Tamil Nadu)')]//..)[1]"));
  var validateCourseType = element(by.xpath("(//label[contains(text(),'Course Type')]//following::option[contains(text(),'State (Tamil Nadu)')]//..)[1]"));
  var validateMergePopUpMsg = element(by.xpath("//*[@class='sb-mat__modal__content']"));
  var validatePopUpMesgAfterMerge = element(by.xpath("//*[contains(text(),'Account merge initiated successfully. you will be notified once it is completed')]"));
  var okButtonToMerge = element(by.xpath("//button[contains(text(),'OK')]"));
  var assertMydetails = element(by.xpath("(//div[contains(text(),'My details')]//..)[1]"));
  var myDetailsSection = element(by.xpath("(//div[contains(text(),'My details')]//..)[2]"));
  var invalidMobieNumberMessage = element(by.xpath("//div[contains(text(),'Enter a valid mobile number')]"));
  var enterMobileNumber = element(by.xpath("//input[contains(@placeholder,'Enter Mobile Number')]"));
  var enterEmailAddress = element(by.xpath("//input[contains(@placeholder,'Enter email address')]//.."));
  var invalidEmailAddressMessage = element(by.xpath("//div[contains(text(),'Enter a valid email address')]"));
  var updateButton = element(by.xpath("//button[contains(text(),'Update')]"));
  var openBatchMessage = element(by.xpath("(//div[contains(@class,'iziToast-texts')]//..)[1]"));
  var assertSubmitButton = element(by.xpath("//button[contains(text(),'Update')]"));
  var selectBatchValueInCourseDashBoard = element(by.xpath("//span[@class='mat-option-text'][1]"));
  var chooseYourReport = element(by.xpath("//*[contains(@aria-label,'Choose your report')]"));
  var selectReportValue = element(by.xpath("//*[@aria-label='Choose your report']//following::mat-option[1]"));
  var requestButton = element(by.xpath("//button[contains(text(),'Request')]"));
  var assertSubmit = element(by.xpath("//span[contains(text(),'SUBMITTED')]"));
  var clickCertificate = element(by.xpath("//*[contains(text(),'Certificates')]"));
  var assertBatchName = element(by.xpath("//div[contains(text(),'Batch name')]"));
  var assertCourseProgress = element(by.xpath("//div[contains(text(),'Course progress')]"));
  var searchUserInReissueCertificate =  element(by.xpath("//*[contains(@placeholder,'Search user')]"));
  var searchButtonInCertificateTab = element(by.xpath("//button[contains(@id,'search-btn')]"));
  var reissueCertificate = element(by.xpath("(//*[contains(text(),'Reissue certificate')])[2]"));
  var selectOptionInQuestionSet = element(by.xpath("(//div[@class='quml-option'])[2]"));
  var rateQuestionset = element(by.xpath("(//div[contains(text(),'Enjoyed this content?')]//following::*[@class='icon ng-star-inserted'])[3]"));
  var submitRatingInQuestionSet = element(by.xpath("//button[contains(text(),'Submit')]"));
  var replayButtonInQuestioSet = element(by.xpath("(//div[contains(text(),'Replay')]//..)[1]"));
  var selectExistingTemplate = element(by.xpath("(//div[contains(@class,'overlay-container')])[1]"));
  var clickPreviewButton = element(by.xpath("(//span[contains(text(),'Preview')])[1]"));
  var selectTemplate = element(by.xpath("(//div[contains(text(),'Certificate preview')]//following::button[contains(text(),'Select template')]//.)[2]"));
  var elementVerifiedCheckBoxInCertificate = element(by.xpath("//label[contains(text(),'All the elements and attributes are thoroughly verified')]"));
  var addCertificateInAfterSelectExistingTemplate = element(by.xpath("//button[contains(text(),'Add certificate')]"));
  var certificateRulesDrpDwn = element(by.xpath("(//div[contains(text(),'Certificate rules')]//following::div[contains(@class,'mat-select-trigger')])"));
  var selectOption = element(by.xpath("//span[contains(text(),'My state teacher')]"));
  var uploadAndUseCertificate = element(by.xpath("(//*[contains(text(),'Upload and use')])[2]"));
  var progressRuleMeritCriteria = element(by.xpath("//input[@value='100%']"));
  var assertCourseCompletionWithCertificatepopUp = element(by.xpath("//*[text()='You will be informed about your certificate on your registered contact details within 7 days']"));
  var clickFirstOption = element(by.xpath("//*[contains(text(),'Virat kohli')]//.."));
  var copyrightInsideCourseEditor = element(by.xpath("//input[contains(@placeholder,'Copyright') and @type='text']"));
  var assertInputExceeded = element(by.xpath("//div[contains(text(),'Input is Exceeded')]"));
  var deselectAddtionalCategoryInBook = element(by.xpath("//label[contains(text(),'Textbook')]"));
  var assertSelectAdditionalCategory = element(by.xpath("//*[text()='Select Additional Category']"));
  var validateuploadedTocInReviewerSide = element(by.xpath("//span[contains(text(),'5. Human Body')]"));
  var searchboxForReportAdmin = element(by.xpath("//input[@aria-controls='DataTables_Table_24']"));
  var clickData = element(by.xpath("(//*[contains(@class,'details-control')])[2]"));
  var clickParameter = element(by.xpath("//*[contains(text(),'Parameter')]//following::td[2]"));
  var downloadDataAsCsv = element(by.xpath("//*[contains(text(),'Download data CSV')]"));
  var reportBackButton = element(by.xpath("//*[contains(@aria-label,'back-button')]"));
  var updateFolderMetadata = element(by.xpath("//*[contains(text(),'Update folder metadata using csv file')]"));
  var closeButtonPopUp = element(by.xpath("//button[contains(text(),'Close')]"));
  var createdOnForCourse = element(by.xpath("//*[contains(text(),'Created on')]//following::div[1]"));
  var selectContent1 = element(by.xpath("(//div[starts-with(@class,'sbcard__title ')])[72]"));
  var digitalTextBookTabInGroup = element(by.xpath("//*[contains(text(),'Digital textbooks')]"));
  var assertMoreThanLimit = element(by.xpath("//strong[contains(text(),'Cannot add content. reached limit of maximum number of contents allowed.')]"));
  var clkTxtBookUnit1 = element(by.xpath("//span[contains(text(),'Textbook Unit1')]"));
  var assertJoinCoursePopUp = element(by.xpath("//*[@id='enrollToCourse']"));
  var assertDikshaAdminGuidlines = element(by.xpath("//strong[contains(text(),'DIKSHA Administrator Guidelines')]"));
  var clkTcAndCheckBox = element(by.xpath("//input[@type='checkbox']"));
  var clkContinueInreportTnc = element(by.xpath("//button[contains(text(),'Continue')]"));
  var mediumDropDwn = element(by.xpath("(//*[contains(@class,'caret-down')])[4]"));
  var allmyContentBucket = element(by.xpath("//*[contains(text(),'All My Content')]"));
  var assertLiveContent = element(by.xpath("(//*[contains(@class,'UpForReviewListHover')]//child::td[1])[1]//following::td[text()='Live']"));
  var practiceQuestionSet = element(by.xpath("//h4[@title='Neelallcheckbox QuestionSet']"));
  var questionSix = element(by.xpath("//li[@aria-label='question number 6']"));
  var nextArrowIcon = element(by.xpath("//div[@title='next slide']"));
  var replayBtn = element(by.xpath("//div[text()='Replay']"));
  var assertAttemptsBeforeReplayClk = element(by.xpath("//span[text()='Attempt no 1/2 ']"));
  var assertAttemptsIncreasePostClkReplay = element(by.xpath("//div[text()=' Attempt no 2/2']"));
  var selectTeacherInRole = element(by.xpath("//span[contains(text(),'Teacher')]"));
  var districtDropDown = element(by.xpath("//*[contains(@id,'district')]//child::sb-caret-down"));
  var validateDisabledContinueButton = element(by.xpath("//*[contains(@class,'sb-btn-disabled') and contains(text(),'Continue')]"));
  var validateEnabledContinueButton = element(by.xpath("//*[contains(@class,'sb-btn-disabled') or contains(text(),'Continue')]"));
  var liscenceDropDown = element(by.xpath("//option[contains(text(),'Select License')]//parent::*[contains(@id,'sb-dropdown')]"));
  var selectLiscenceDropDown = element(by.xpath("//option[contains(text(),'CC BY 4.0')]"));
  var validateTermsAndconditionSendForReview = element(by.xpath("//*[contains(text(),'I confirm that this Content complies with prescribed guidelines, including the Terms of Use and Content Policy and that I consent to publish it under the')]//following::*[contains(text(),'Creative Commons Framework in')]"));
  var limitedQuestionSet = element(by.xpath("//*[text()='limited course']"));
  var questionNo4 = element(by.xpath("//li[text()=' 4 ']"));
  var nextSlide = element(by.xpath("//*[@title='next slide']"));
  var assertLastAttempt = element(by.xpath("//strong[text()='This is the last remaining attempt']"));
  var backButtonInContent = element(by.xpath("//button[contains(@aria-label,'Back')]"));
  var validateCourseProgress = element(by.xpath("//div[contains(text(),'Course progress')]"));
  var searchUserWithCertificateRecieved = element(by.xpath("//*[contains(@placeholder,'Search user')]"));
  var validateBatchName = element(by.xpath("//*[contains(text(),'Batch name')]"));
  var validateUserName = element(by.xpath("//*[contains(text(),'User name')]"));
  var validateUserDistrict = element(by.xpath("//*[contains(text(),'User district')]"));
  var validateCourseProgressLabel = element(by.xpath("//*[contains(text(),'Course progress')]"));
  var validateCertificateMet = element(by.xpath("//*[contains(text(),'Criteria met')]"));
  var validateReissueCertificate = element(by.xpath("//a[contains(text(),'Reissue certificate')]"));
  var validateFourContentInFromNcertSection = element(by.xpath("//*[contains(text(),'From NCERT')]//following::div[@class='cards-container ng-star-inserted'][1]"));
  var clkCreditsLink = element(by.xpath("//*[@title='Credits']"));
  var clkTopic = element(by.xpath("(//*[@class='add icon'])[1]"));
  var replayButton = element(by.xpath("//div[contains(text(),'Replay')]"));
  var clkFirstContentInAllMyContent = element(by.xpath("//div[@class='UpReviewHeader']"));
  var assertNameStructure = element(by.xpath("//span[starts-with(@title,'Copy of PlayTextbook')]"));
  var assertUnitStructure = element(by.xpath("//span[starts-with(@title,'Textbook Unit')]"));
  var assertCategoryStructure = element(by.xpath("//label[contains(text(),'Category')]//following::select[@id='sb-dropdown']"));
  var inputAuthorName = element(by.xpath("//input[@placeholder='Author']"));
  var enterQrCode = element(by.xpath("//input[@placeholder='Enter code here']"));
  var clickRightButton = element(by.xpath("//*[@class='large blue check circle icon']"));
  var assertInvalidQrCode = element(by.xpath("//*[text()='Invalid QR code']"));
  var assertExhaustReportSecondTimeRequestMsg = element(by.xpath("//strong[contains(text(),'Request for report failed')]"));
  var reviewButton = element(by.xpath("//button[contains(text(),'Review')]"));
  var licenseAndInformation =  element(by.xpath("//*[contains(text(),' Credits and Licence information ')]"));
  var assertLicenseTerms = element(by.xpath("//p[text()='CC BY 4.0']"));
  var assertLicesneTermsPostCopy = element(by.xpath("//option[text()='CC BY 4.0']"));
  var assert100mostRel = element(by.xpath("//div[text()=' Showing (100) most relevant content ']"));
  var clkOnRootNode = element(by.xpath("(//span[@class='fancytree-title'])[1]"));
  var clkOnChildNode = element(by.xpath("(//span[@class='fancytree-title'])[2]"));
  var clkOnResource = element(by.xpath("(//span[@class='fancytree-title'])[3]"));
  var clkDeleteResource = element(by.xpath("(//i[@class='fa fa-trash-o'])[2]"));
  var clkYesBtn = element(by.xpath("//button[contains(text(),'Yes')]"));
  var copyRightYearWhileConsuming = element(by.xpath("//span[contains(text(),'2019')]"));
  var assert100Contents = element.all(by.xpath("//div[@popupdelay='1000']"));
  var clkChangeFilter = element(by.xpath("//div[contains(text(),' Change Filters ')]"));
  var clkBoardValue = element(by.xpath("//sb-icon-dropdown[@class='dropdown-icon']"));
  var selectBoardValue = element(by.xpath("//option[contains(text(),'State (Tamil Nadu)')]"));
  var clkMediumdropdown = element(by.xpath("(//sb-caret-down[@class='caret-down'])[2]"));
  var selectMediumValue = element(by.xpath("//label[text()='English']")); 
  var clkClassdropdow = element(by.xpath("(//sb-caret-down[@class='caret-down'])[3]"));
  var selectClassValue = element(by.xpath("//label[text()='Class 1']"));
  var clkBtnApply = element(by.xpath("//button[text()='Apply']"));
  var asserSelectedState = element(by.xpath("//div[contains(text(),'State (Tamil Nadu)')]"));
  var assertSelectedMed = element(by.xpath("//label[contains(text(),'Grade')]//preceding::div[contains(text(),'English')]"));
  var assertSelectedClass = element(by.xpath("//label[contains(text(),'Grade')]//following::div[contains(text(),'Class 1')]"));
  var clkAboutTheContent = element(by.xpath("//*[text()=' About the content ']"));
  //var clkOnResource = element(by.xpath("//div[text()='Explanation Content']"));
  var clkOnResource = element(by.xpath("//div[text()='Explanation Content']|//div[text()='Practice Question Set']|//div[text()='Textbook Unit']"));
  let clkDownload250Qr = element(by.xpath("//*[contains(text(),'Download 249 +1 QR codes')]"));
  var sltETextbook = element(by.xpath("//label[contains(text(),'eTextbook')]"));



  return {
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
    firstCourseForTOC,
    subjectFilter,
    ContinusProfList,
    clkTags,
    clkMyDiscussion,
    clkCloseIconDF,
    clkGeneDiscDF,
    clkGenericCreatedTopics,
    clkHamburgerMenuTopic,
    clkHamburgerMenuTopicEdit,
    clkHamburgerMenuTopicDelete,
    clkUpdateBtnTopcis,
    assertUpdatedTopicName,
    assertUpdateDesName,
    assertAddedTopicName,
    assertaddedDesName,
    assertNoData,
    assert0Disccsuion,
    asserr0Post,
    firstGroupInMentor,
    myDiscussioninMentor,
    closeDiscussion,
    childDesc,
    discussCard,
    SelectCourse,
    SelectCourseByGroup,
    viewActivity,
    ConsumeCourseforGroups,
    coursewithoutAddedToGrpPopUp,
    AssertAdmin,
    AdminInDashboard,
    ActivityDashboard,
    clkKeyworkCollection,
    selectBoardValueForcollection,
    selectBoardForcollection,
    selectMediumForcollection,
    selectMediumValueForcollection,
    selectClassValueForcollection,
    selectSubjectValueForcollection,
    selectAdditionalForcollection,
    SelectCPD,
    selectBoardCPD,
    k12,
    tncSubmit,
    MultipleSelect,
    errorPopUp,
    SubjectMultipleSelect,
    Coursetopic,
    SelectCourseTopic,
    TopicSubmit,
    SelectSubject4,
    SelectSubject5,
    EnterBookTag,
    QrCodeValueEnter,
    assertDownloadQrCodeToastrMsg,
    assertContentPublishedMsg,
    UnSelectTamil,
    clkContent,
    coursevalidateWithBMC,
    attribution,
    attributionInbook,
    clkObservations,
    filterSearch,
    searchIcon,
    firstTvLessonContent,
    clkDarkMode,
    obervationDetails,
    obervationForm,
    clkProfileDropdown,
    clkEditProfileBtn,
    clkRoleDropDown,
    sltTeacherRole,
    clkSubmitRolePopup,
    publisher,
    year,
    sltYear,
    SelectTargetBoard,
    clkGenerateQrCode2,
    clkDownloadQrcode,
    kebabMenuInCourse,
    downloadCSVfile,
    createFolders,
    addCourseTagForCourse,
    contenttoasterMsg,
    addsibling,
    childKebabMenu,
    dltUnitnode,
    childTitle,
    assertDescription,
    assertKeywords,
    assertTopics,
    courseAppIcon,
    assertcategory,
    assertAddCategory,
    assretCourseType,
    assertSubjectsCovered,
    assertAudience,
    assertBoard,
    assertMedium,
    assertClass,
    assertSubject,
    assertAuthor,
    assertAttribution,
    assertCopyright,
    assertyear,
    assertlicense,
    exploreTab,
    assertTabs,
    MedDropDown,
    classDropDown,
    subDropDown,
    multiSelect2,
    sndForRev,
    deactivateGroup,
    deactivateGroupPopUp,
    activateGroup,
    activateGroupPopUp,
    childTopic,
    selectchildTopic,
    childTitleName,
    searchContentFromLibrary,
    assertFAQPage,
    LoginFAQ,
    ProfileFAQ,
    CourseAndCertificateFAQ,
    assertLoginQuestion,
    assertProfileQuestion,
    assertCCQuestion1,
    assertCCQuestion2,
    pdfArrowButton,
    clkSearhInAllMyContent,
    clkSearchIconAllMyContent,
    assertUploadContentMenuBar,
    unitClick2,
    EnterQR,
    ClickProfileIcn,
    ClickJoyfulIcn,
    ClickQRYes,
    EnterQRCode,
    selectQRCode,
    QRValid,
    QRInvalid,
    editQR,
    assertContent,
    assertSubContent,
    assertSubContent12,
    assertSubContent13,
    assertSubContent14,
    assertLoginReg,
    assertSubCert,
    audienceType,
    collMedium,
    collClass,
    collSubj,
    viewCollab,
    addCategoryInBook,
    sltLessonPlan,
    assertAdditionalCategory,
    questionNextSlide,
    questionOption1,
    questionOption2,
    assertTryAgainFeedback,
    assertFeedbackAllert,
    showAnswerButton,
    assertSolution,
    assertSubmitConfirmation,
    questionOption3,
    questionOption4,
    questionOption5,
    questionOption6,
    imageLayout1,
    imageLayout2,
    imageLayout3,
    assert3,
    questionSections,
    contentFeedback,
    submitcontentFeedback,
    optionText,
    addSibling,
    qrCodeRequestButton,
    clkGenerateQrCode3,
    clkGenerateQrCode4,
    clkDownloadQrcode2,
    submittedForReview,
    assertQrCodeRequiredField,
    assertQrCode,
    dikshaId,
    switchUser,
    footer,
    assertBook,
    assertCourse,
    assertResource,
    assertCollection,
    assertLessonPlan,
    assertUpload,
    adminDashBoard,
    clkDownloadQrcode4,
    childDesc1,
    childDesc2,
    clkSection,
    tagsInDF,
    liscenceFilter,
    noCertificateMsg,
    allMyContent,
    assertCopyContentSendForReview,
    assertCopyContent,
    browseByCategories,
    explorelabel,
    backButton,
    browseBySubjects,
    clkMenuBook,
    clkMenuBookDownloadCSV,
    resetButton,
    searchedUseredit,
    closeicon,
    nextbutton,
    previousButton,
    firstButton,
    oldBatchResume,
    myDiscusCard,
    nameForPersonalDetails,
    editpersonaldetails,
    assertProfileIcon,
    submitPersonalDetils,
    startDiscussionSubmitButoon,
    roleDropDown,
    sho,
    observationTab,
    studentRole,
    profileRole,
    backArrowButton,
    previousButton,
    searchLibrary,
    contentHierarchyRadbutton,
    firstOptionInquestion,
    closeIconInQuestionSolution,
    decreaseResolution,
    increaseResolution,
    resetResolution,
    liveTitle,
    clkFirstParameter,
    assertLastUpdatedDate,
    assertGraph,
    createdDate,
    arrowBackButton,
    courseInBrowseByCategories,
    clickCourseUnit,
    answerOne,
    redoButton,
    enterName,
    addUserButton,
    messageToast,
    messageToastCloseButton,
    assertUpdatedOn,
    assertUserName,
    assertUserDistrict,
    assertCriteriaMet,
    certificateTab,
    searchCertficateID,
    searchCertficateIDbutton,
    selectBatchDropdwn,
    asserRigthProgress,
    assertWrongProgress,
    assertBorderColorOfTheOpt,
    assertReplayBtn,
    assertTitleEndPage,
    assertTitleSubmitPage,
    clkPreviewBtn,
    navigateSubmitPageBtn,
    clkProgressBar1,
    clkProgressBar2,
    clkProgressBar3,
    assertTitle1,
    assertTitle2,
    assertTitle4,
    assertQNo1,
    assertQNo2,
    assertQNo3,
    assertQNo4,
    selectContentInLibraryContent,
    asserLHSheairarchy,
    downloadFolderAsCsv,
    nextButtonOnUploadpopUp,
    closeButtonOnUploadpopUp,
    selectcourseTypeForNcert,
    ncertk_12,
    selectcourseTypeForK12,
    copyContentButton,
    selectcourseTypeCBSE,
    assertCopyOfContent,
    assertGroupGuidelinesPopUp,
    boardForCourse,
    selectMediumforTextBook,
    selectClassForTextBook,
    selectsubjectForTextbook,
    addCourseName,
    changeFiltersInLibraryPageOfEditor,
    contentTypeDropDown,
    contentUnselectAll,
    courseContentcheckbox,
    digitalTextbookCheckBox,
    questionPaperCheckBox,
    filterApplyButton,
    contentPlaylistCheckBox,
    childDropDown1,
    childDropDown2,
    childDropDown3,
    childDropDown4,
    contentsOfChildFolder1,
    contentsOfChildFolder2,
    contentsOfChildFolder3,
    contentsOfChildFolder4,
    dialogBox,
    alreadyPresentInFolderDialog,
    assertAddContent,
    closeButtonForDialogBox,
    clkRootNode,
    assertAddedToCollection,
    assertChaptersOrder,
    assertOrderOfCourseModules,
    assertTagDiscussCard,
    assertAddedContent,
    clickRight,
    assertdialCodeStatus,
    assertDoubleQuotes,
    assertCollectionCategory,
    clkAdditionalCategoryDrpDwn,
    clkLessonPlanInaddCategory,
    clkAddedContentInGroup,
    activityDashBoard,
    progressOfContentConsumption,
    sortTheMemberName,
    kebabMenuOfActivity,
    removeActivityButton,
    removeButton,
    clickActivity,
    assertk12,
    assert3Dot7frame,
    assertTable,
    downloadCsv,
    assertZeroProgress,
    clkCollaborationSection,
    sortByDrpDwn,
    contentsInsidesortByDrpDwn,
    addImageIcon,
    assertSearchBar,
    allImageTab,
    selectImage,
    activateGroupInHamburgerMenu,
    clickMemberGroup,
    groupdeactivateBannerMsg,
    datasetTab,
    reportsTab,
    searchReport,
    clickReports,
    assertSearchedResult,
    clickReportParameter,
    downloadDataCSV,
    sixTabsCentraAlignMent,
    addTags,
    selectOrg,
    selectRole,
    selectVerticals,
    selectSections,
    selectContentType,
    assertContentCard,
    assertNoResultsFound,
    editorBackButton,
    allMycontentcard,
    publishedTab,
    assertCTAbtnRecentPost,
    assertCTAbtnBestPost,
    assertCtAbtnSavedPost,
    assertCTAUpVoted,
    assertCTADownVoted,
    assertFirstPdfPage,
    clickRotate,
    selectSubrole,
    selectSubroleValue,
    childDropdwnChapter,
    generalDiscussCard,
    topicCard,
    bookNamecopy,
    validateCategoryInEditor,
    validateSubjectCovered,
    validateAudienceType,
    validateBoardSyllabus,
    validateCourseType,
    validateMergePopUpMsg,
    validatePopUpMesgAfterMerge,
    okButtonToMerge,
    assertMydetails,
    myDetailsSection,
    invalidMobieNumberMessage,
    enterMobileNumber,
    enterEmailAddress,
    invalidEmailAddressMessage,
    updateButton,
    openBatchMessage,
    assertSubmitButton,
    selectBatchValueInCourseDashBoard,
    chooseYourReport,
    selectReportValue,
    requestButton,
    assertSubmit,
    clickCertificate,
    assertBatchName,
    assertCourseProgress,
    searchUserInReissueCertificate,
    searchButtonInCertificateTab,
    reissueCertificate,
    selectOptionInQuestionSet,
    rateQuestionset,
    submitRatingInQuestionSet,
    replayButtonInQuestioSet,
    selectExistingTemplate,
    clickPreviewButton,
    selectTemplate,
    elementVerifiedCheckBoxInCertificate,
    addCertificateInAfterSelectExistingTemplate,
    certificateRulesDrpDwn,
    selectOption,
    uploadAndUseCertificate,
    progressRuleMeritCriteria,
    assertCourseCompletionWithCertificatepopUp,
    clickFirstOption,
    copyrightInsideCourseEditor,
    assertInputExceeded,
    deselectAddtionalCategoryInBook,
    assertSelectAdditionalCategory,
    validateuploadedTocInReviewerSide,
    searchboxForReportAdmin,
    clickData,
    clickParameter,
    downloadDataAsCsv,
    reportBackButton,
    updateFolderMetadata,
    closeButtonPopUp,
    createdOnForCourse,
    selectContent1,
    digitalTextBookTabInGroup,
    assertMoreThanLimit,
    clkTxtBookUnit1,
    assertJoinCoursePopUp,
    assertDikshaAdminGuidlines,
    clkTcAndCheckBox,
    clkContinueInreportTnc,
    mediumDropDwn,
    allmyContentBucket,
    assertLiveContent,
    practiceQuestionSet,
    questionSix,
    nextArrowIcon,
    replayBtn,
    assertAttemptsBeforeReplayClk,
    assertAttemptsIncreasePostClkReplay,
    selectTeacherInRole,
    districtDropDown,
    validateDisabledContinueButton,
    validateEnabledContinueButton,
    liscenceDropDown,
    selectLiscenceDropDown,
    validateTermsAndconditionSendForReview,
    limitedQuestionSet,
    questionNo4,
    nextSlide,
    assertLastAttempt,
    backButtonInContent,
    validateCourseProgress,
    searchUserWithCertificateRecieved,
    validateBatchName,
    validateReissueCertificate,
    validateCertificateMet,
    validateCourseProgressLabel,
    validateUserDistrict,
    validateUserName,
    validateFourContentInFromNcertSection,
    clkCreditsLink,
    clkTopic,
    replayButton,
    clkFirstContentInAllMyContent,
    assertNameStructure,
    assertUnitStructure,
    assertCategoryStructure,
    inputAuthorName,
    enterQrCode,
    clickRightButton,
    assertInvalidQrCode,
    assertExhaustReportSecondTimeRequestMsg,
    reviewButton,
    licenseAndInformation,
    assertLicenseTerms,
    assertLicesneTermsPostCopy,
    assert100mostRel,
    clkOnRootNode,
    clkOnChildNode,
    clkOnResource,
    clkDeleteResource,
    clkYesBtn,
    copyRightYearWhileConsuming,
    assert100Contents,
    clkChangeFilter,
    clkBoardValue,
    selectBoardValue,
    clkMediumdropdown,
    selectMediumValue,
    clkClassdropdow,
    selectClassValue,
    clkBtnApply,
    asserSelectedState,
    assertSelectedMed,
    assertSelectedClass,
    clkAboutTheContent,
    clkOnResource,
    clkDownload250Qr,
    sltETextbook,
  }
}
module.exports = {
  SanityElement
}