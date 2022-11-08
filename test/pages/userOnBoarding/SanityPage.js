//const { element, by } = require("protractor");

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
  let clkGenerateQrCode = element(by.xpath("//span[contains(text(),' Generate  QR Codes')]"));
  //let enterQrCode = element(by.xpath("//i[@class='close icon float-right margin-right-0 cursor-pointer']/following::input"));
  let clkReqestQrCode = element(by.xpath("//button[contains(text(),'Request')]"));
  let QRcodeTostrMsg = element(by.xpath("//*[contains(text(),'QR code generated')]"));
  let clkAllMyContent = element(by.xpath("//a[@href='/workspace/content/allcontent/1']"));
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
  var firstContent = element(by.xpath("//h4[contains(@class,'sb--card__title')]"));
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
  var draftButton = element(by.xpath("//a[@popuptext='View drafts you are working on. Submit them for review when completed']"));
  var bookSeaarchBox = element(by.xpath("//input[@placeholder='Search content']"));
  var searchedFirstBook = element(by.xpath("(//a[text()='Digital Textbook']/following-sibling::div)[1]"));
  var addCollaboratorIcon = element(by.xpath("//i[contains(@class,'add user')]"));
  var addcollaborator = element(by.xpath("(//strong[text()='+ADD'])[3]"));
  var doneButton = element(by.xpath("//button[text()='Done']"));
  var closeIcon = element(by.xpath("//div[contains(@class,'close icon-box')]//i[1]"));
  var publishedBookIcon = element(by.xpath("//a[@popuptext='View all your published content']"));
  var searchedBookForBestScore = element(by.xpath("//div[@class='sb--card__svg-area']//img[1]"));
  var clickOnUnit = element(by.xpath("(//h4[text()=' Unit 3 - Self assess ']/following-sibling::i)[1]"));
  var clickOnassesment = element(by.xpath("//div[text()=' Course assessment 1 - 0721 ']"));
  var firststquestion = element(by.xpath("(//div[@class='option-text-container text-only']//p)[1]"));
  var nextButton = element(by.xpath("//img[@ng-src='coreplugins/org.ekstep.overlay-1.0/renderer/assets/icons/next.png']"));
  var firstBlanks = element(by.xpath("(//input[@class='ans-field'])[1]"));
  var secondBlanks = element(by.xpath("(//input[@class='ans-field'])[2]"));
  var submitButtonAfterAssessment = element(By.xpath("//button[@type='submit']"));
  var firsstStar = element(by.xpath("//sui-rating[contains(@class,'sb-rating ui')]//i[1]"));
  var submitButtonAfterRating = element(by.xpath("//button[text()=' Submit ']"));
  var baackButton = element(by.xpath("//button[text()=' Back ']"));
  var bestScore = element(by.xpath("//div[contains(@class,'sbchapter__item__score pr-8')]"));
  var searchButton = element(by.xpath("//button[text()='Search']"));
  var discussionForumFirstBook = element(by.xpath("//div[@class='sb--card__main-area']/following-sibling::div[1]"));
  var forum = element(by.xpath("//button[@title='Forum']"));
  var categories = element(by.xpath("//a[contains(text(),'Categories')]"));
  var myDiscussions = element(by.xpath("//a[contains(text(),'My discussion')]"));
  var categoryCard = element(by.xpath("(//div[@class='category-card-header']//div)[2]"));
  var announcement = element(by.xpath("//div[text()='Announcements']"));
  var generalDiscussion = element(by.xpath("//div[text()='General Discussions']"));
  var recentPost = element(by.xpath("//*[@id='recent-post']"));
  var bestPost = element(by.xpath("//*[@id='best-post']"));
  var savedPost = element(by.xpath("//*[@id='saved-post']"));
  var upvoted = element(by.xpath("//*[@id='upvoted-post']"));
  var downVoted = element(by.xpath("//a[@id='downvoted-post']"));
  var announcementLink = element(by.xpath("//span[text()=' Announcements ']"));
  var textareaForComment = element(by.xpath("//textarea[contains(@class,'text-content fnormal')]"));
  var postReply = element(by.xpath("//span[text()='Post Reply']"));
  var startDiscussion = element(by.xpath("//button[text()='Start Discussion']"));
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
  var selectcourseType = element(by.xpath(("(//option[text()='CBSE'])[1]")));
  var selectSubject = element(by.xpath("//option[contains(text(),'English')]"));
  var selectBoard = element(by.xpath("(//label[contains(@data-title,'Board')])//following::option[2]"));
  var selectMedium = element(by.xpath("//label[contains(text(),'Medium(s) of the audience')]//following::label[contains(text(),'English')]"));
  var selectclass = element(by.xpath("//label[contains(text(),'Class(es) of the audience')]//following::label[2]"));
  var selectSubject2 = element(by.xpath("//label[contains(text(),'Subject(s) of the audience')]//following::label[2]"));
  var saveAsDraft = element(by.xpath("//button[text()=' Save as Draft ']"));
  var addChild = element(by.xpath("//button[contains(text(),'Add Child')]"));
  var NewCoursesubmitButton = element(by.xpath("//button[text()=' Submit ']"));
  var addFromLibraryButton = element(by.xpath("//button[contains(text(),' Add from library ')]"))
  var selectButton = element(by.xpath("//button[contains(text(),'Select content')]"));
  var addContent = element(by.xpath("//button[text()=' Add content ']"));
  var contentFromLibrayBackButton = element(by.xpath("//i[contains(@class,'arrow left')]"));
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
  var clkGeneDiscDF = element(by.xpath("//div[contains(text(),'General Discussion')]"));
  var clkGenericCreatedTopics = element(by.xpath("//*[contains(text(),'General Discussion')]"));
  var clkHamburgerMenuTopic = element(by.xpath("//div[@class='kabab-menu']"));
  var clkHamburgerMenuTopicEdit = element(by.xpath("//div[contains(text(),'Edit')]"));
  var clkHamburgerMenuTopicDelete = element(by.xpath("//div[contains(text(),'Delete')]"));
  var clkUpdateBtnTopcis = element(by.xpath("//button[@id='update-topic-popup']"));
  var assertUpdatedTopicName = element(by.xpath("//div[contains(text(),'UpdateTopic')]"));
  var assertUpdateDesName = element(by.xpath("//*[contains(text(),'UpdatedDescription')]"));
  var assertAddedTopicName = element(by.xpath("//*[contains(text(),'This is my 1st idea to be shared')]"));
  var assertaddedDesName = element(by.xpath("//*[contains(text(),'DescriptionIdeaShared')]"));
  var assertNoData = element(by.xpath("//div[contains(text(),'No Data')]"));
  var assert0Disccsuion = element(by.xpath("//span[contains(text(),'0 Discussions')]"));
  var asserr0Post = element(by.xpath("//span[contains(text(),'0 Posts')]"));
  var firstGroupInMentor = element(by.xpath("(//*[contains(@class,'sb--card__info')])[6]"));
  var myDiscussioninMentor = element(by.xpath("(//li[@id='d.route']//a)[3]"));
  var closeDiscussion = element(by.xpath("//*[contains(@id,'close-discussion-forum')]"));
  var childDesc = element(by.xpath("//textarea[@placeholder='Description']"));
  var tags = element(by.xpath("//input[contains(@placeholder,'Add a tag and press Enter')]"));
  var discussCard = element(by.xpath("(//h3[@class='discuss-card-title ng-star-inserted'])[1]"));
  var SelectCourseByGroup = element(by.xpath("//h4[contains(text(),'Course')]"));
  var SelectCourse = element(by.xpath("(//div[contains(@class,'sb--card__main-area')])[1]"));
  var viewActivity = element(by.xpath("//span[contains(text(),'View activity')]"));
  var ConsumeCourseforGroups = element(by.xpath("(//img[contains(@src,'common-consumption')])"));
  var coursewithoutAddedToGrpPopUp = element(by.xpath("//div[contains(@class,'ui center aligned segment')]"));
  var AssertAdmin = element(by.xpath("(//label[contains(@class,'sb__ellipsis')])[1]"));
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
  var k12 = element(by.xpath("(//option[text()='State (Tamil Nadu)'])"));
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
  var clkContent = element(by.xpath("(//div[contains(@class,'sb-library-scroll')]//following::div[@class='ng-star-inserted'])[6]//following::div[@class='sbchapter__item mb-0 d-flex flex-dc']"));
  var coursevalidateWithBMC = element(by.xpath("(//span[contains(@class,'cfe-multiselect')])[6]"));
  var attribution = element(by.xpath("//input[contains(@placeholder,'Attributions')]"));
  var attributionInbook = element(by.xpath("(//div[@class='credits-section']//following::h4[text()='Attributions ']//following::p)[1]"));
  var clkObservations = element(by.xpath("//a[contains(text(),' Observations ')]"));
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
  var sltYear = element(by.xpath("//span[text()='2006']"));
  var SelectTargetBoard = element(by.xpath("(//div[contains(@class,'multi-select-container')]//following::ul)[5]"));

  let clkGenerateQrCode2 = element(by.xpath("//i[contains(@class,'icon qrcode')]//following::span[text()=' Generate 2 + 1 QR Codes ']"));
  let clkDownloadQrcode = element(by.xpath("//*[contains(text(),' Download 2 +1 QR codes ')]"));
  let kebabMenuInCourse = element(by.xpath("(//div[@id='dropdown-menu-list-header'])[2]"));
  var downloadCSVfile = element(by.xpath("//*[text()='Download sample csv file']"));
  var createFolders = element(by.xpath("//button[contains(@class,'item fs-0-785 bg-none')]//following::span[text()='Create folders using csv file']"));
  var addCourseTagForCourse = element(by.xpath("//input[@placeholder='Input text & PRESS enter']"));
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


  }
}
module.exports = {
  SanityElement
}