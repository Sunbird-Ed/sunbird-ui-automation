//const { element } = require("protractor");

const tpdPage = () => {

    var headerCourse = element(by.xpath("//a[contains(text(),'Courses')]"));
    var latestCourseViewAllSection = element(by.xpath("//*[contains(text(),'Latest ')]/following::button[1]"));
    var getCourseName = element(by.xpath("//div[contains(@class,'sb-card')]/h4"));
    //var  addIcon = element(by.xpath("//*[contains(text(),'Edit')]"));
    var addIcon = element(by.xpath("//button[text()='Create Batch']"));
    var nameOfBatch = element(by.xpath("//input[@formcontrolname='name']"));
    var aboutBatch = element(by.xpath("//*[@formcontrolname='description']"));
    var startDate = element(by.xpath("//input[@formcontrolname='startDate']"));
    var startDateCalendar = element(by.xpath("//input[@formcontrolname='startDate']"));
    var endDate = element(by.xpath("//input[@formcontrolname='endDate']"));
    var endDateCalendar = element(by.xpath("//input[@formcontrolname='startDate']/../../../../../../../../../../../../sui-popup/div/sui-datepicker/sui-calendar-date-view/table/tbody/tr/td[@class='link ng-star-inserted']"));
    var mentorsInBatch = element(by.xpath("//div[@id='mentors']"));
    var firstMentorInBatch = element(by.xpath("//input[@id='mentorSelList']/following::div/div"));
    var mentorDropdown = element(by.xpath("//input[@id='mentorSelList']/following-sibling::i"));
    var membersInBatch = element(by.xpath("//div[contains(text(),'Select batch members')]"));
    var firstMemberInBatch = element(by.xpath("//input[@id='mentorSelList']/following::div/div/div/div[5]"));
    var memberDropdown = element(by.xpath("//input[@id='userSelList']/following-sibling::i"));
    var buttonCreate = element(by.xpath("//button[@id='submitbutton']"));
    var searchInput = element(by.xpath("(//input[@id='keyword'])[1]"));
    var searchIcon = element(by.xpath("//button[contains(.,'Search')]"));
    var searchPublishedCourses = element(by.xpath("//div[contains(@class,'sb-card')]"));
    var batchForm = element(by.xpath("//label[contains(text(),'NAME OF BATCH')]"));
    var createCourse = element(by.xpath("//span[.='Course']"));
    var workSpace = element(by.xpath("(//*[contains(.,'Workspace')])"));
    var courseName = element(by.xpath("//input[@placeholder='Name']"));
    var startCreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
    var collaboratorIcon = element(by.xpath("//div[@data-title='Add collaborator']//child::i[@class='icon user plus mr-0']"));
    var iframe = element(by.tagName("iframe"));
    var newChild = element(by.xpath("//a[@class='blueColor'][2]"));
    var collaboratorSearch = element(by.id("user-search"));
    var suggestedCollaborator = element(by.xpath("//input[@placeholder='Search...']//following::p[1]"));
    var noResultFound = element(by.xpath("//input[@placeholder='Search...']//following::strong[1]"));
    var closeCollaborator = element(by.id("close-button"));
    var closeEditor1 = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var donebutton1 = element(by.xpath("//button[text()=' Done ']"));
    var searchCollaboratorField = element(by.xpath("//input[@placeholder='Search...']"));
    var lessonPlan = element(by.xpath("//div[@class='content']/..//span[.='Lesson Plan']"));
    var newChild = element(by.xpath("//i[@class='level up icon clockwise rotated table-of-contents-child-icon ']"));
    var titleNameForCourse = element(by.model('contentMeta[dynamicField.code] '));
    var titleDescriptionForCourse = element(by.xpath("//textarea[@id='description']"));
    var addResource = element(by.xpath("//button[@class='ui blueBackGround whiteColor button list-addResource']"));
    var resourceSearch = element(by.id("resourceSearch"));
    var selectResourceN = element(by.xpath("//div[@class='header contentMetaTitle ng-binding'][1]"));
    var selectResourceType2 = element(by.xpath("//input[@id='resourceSearch']/following::li[1]"));
    var clickAddbutton = element(by.xpath("//button[@class='ui small button blueBackGround whiteColor']"));
    var proceedButton = element(by.xpath("//div[@class=' ui clearing segment']/..//button[contains(text(),'PROCEED')]"));
    var save = element(by.xpath("//span[contains(text(),'Save')]"));
    var collaboratorTostrMsg = element(by.xpath("//div[@class='iziToast-body']"));
    var collaborationSection = element(by.xpath("//a[@popuptext='View content you are collaborating on']"));
    var searchForReview = element(by.xpath("//input[@placeholder='Search content']"));
    var searchIconUpForReview = element(by.xpath("//input[@placeholder='Search content']/following::i"));
    var courseNameInCollaboration = element(by.xpath("//div[@class='UpReviewHeader']"));
    var editIcon1 = element(by.xpath("(//i[@class='edit icon cursor-pointer'])[1]"));
    var titleKeywordForCourse = element(by.xpath("//input[@placeholder='Add a tag']"));
    var sendForReview = element(by.xpath("//div[@class='ui button text-part popup-item']//i[@class='send icon']"));
    var clickAppIcon = element(by.id("field-app-icon "));
    var checkAppIcon = element(by.xpath("//div[@class='ui image']//img"));
    var selectAppIcon = element(by.buttonText('Select'));
    var yearOfCreation = element(by.xpath("//input[@id='copyrightYear']"));
    var saveButton = element(by.xpath("//button[@class='ui blue button ']"));
    var author = element(by.xpath("//input[@id='author']"));
    var topic = element(by.xpath("//input[@id='defaultTemplate-topic']"));
    var select = element(by.xpath("(//a[@class='name'])[1]"));
    var done = element(by.xpath("(//a[@class='ui blue button accept'])[2]"));
    var submittedForReview = element(by.xpath("//a[@popuptext='View all content you have submitted for review'] "));
    var courseNameInReviewSubmission = element(by.xpath(" //span[@class='sliderCardHeading text-cencapitalize']"));
    var saveCourse = element(by.xpath("//span[.='Save']"));
    var sendForReviewDropDown = element(by.xpath("//div[@class='ui pointing dropdown icon button']"));
    var clickLimitedSharing = element(by.xpath("//div[.=' Limited sharing']"));
    var sharedViaLink = element(by.xpath("//a[contains(text(),'Shared via link')]"));
    var clickFirstCourseInShareVialink = element(by.xpath("(//div[@class='cardImageText center aligned '])[1]"));
    var allMyContent = element(by.xpath("//a[contains(text(),'All My Content')]"));
    var showFilter1 = element(by.xpath("(//i[@class='dropdown icon'])[1]"));
    var status = element(by.xpath("(//div[contains(.,' Select Status ')])[10]"));
    var status1 = element(by.xpath("(//div[contains(.,' 1 Status ')])[10]"));
    var draft = element(by.xpath("//*[@id='status']//*[text()='Draft']"));
    var applyButton1 = element(by.xpath("//button[contains(text(),'Apply')]"));
    var contentName = element(by.xpath("(//div[@class='UpReviewHeader'])[1]"));
    var searchInActivity = element(by.xpath("(//input[@name='filter_search'])[2]"));
    var searchIcon2 = element(by.xpath("//i[@class='circular search link icon']"));
    var statusReview = element(by.xpath("//*[@id='status']//*[text()='Review']"));
    var statusLive = element(by.xpath("//*[@id='status']//*[text()='Live']"));
    var selectMediumfilter = element(by.xpath("(//i[@class='dropdown icon'])[4]"));
    var selectEnglish = element(by.xpath("//*[@id='medium']//*[text()='English']"));
    var resetButton = element(by.xpath("//button[contains(text(),'Reset')]"));
    var gradeLevel = element(by.xpath("(//i[@class='dropdown icon'])[5]"));
    var gradeLevel1 = element(by.xpath("//div[contains(text(),' Select Grade')]//following::span[2]"));
    var subject = element(by.xpath("(//i[@class='dropdown icon'])[6]"));
    var accountancy = element(by.xpath("//*[@id='subject']//following::span[2]"));
    var clickBoardAllMyContent = element(by.xpath("//div[contains(text(),'Select Board')]"));
    var selectBoardAllMyContent = element(by.xpath("//div[contains(text(),'Select Board')]//following::span[2]"));
    var page1 = element(by.xpath("//div[contains(@class,'ui pagination menu')]//following::a[contains(text(),'1')]"));
    var page2 = element(by.xpath("//div[contains(@class,'ui pagination menu')]//following::a[contains(text(),'2')]"));
    var pageNext = element(by.xpath("//div[contains(@class,'ui pagination menu')]//following::a[contains(text(),'Next')]"));
    var pageLast = element(by.xpath("//div[contains(@class,'ui pagination menu')]//following::a[contains(text(),'Last')]"));
    var pagePrevious = element(by.xpath("//div[contains(@class,'ui pagination menu')]//following::a[contains(text(),'Previous')]"));
    var pageFirst = element(by.xpath("//div[contains(@class,'ui pagination menu')]//following::a[contains(text(),'Previous')]//preceding::a[contains(text(),'First')]"));
    var validatecourseCardListInAllMyContent = element(by.xpath("(//div[@class='content '])[1]"));
    var selectMentorsInBatch = element(by.xpath("(//div[@class='item'])[1]"));
    var selectMembersInBatch = element(by.xpath("(//div[@id='participants']//following::div)[3]"));
    var courseBatches = element(by.xpath("(//*[@href='/workspace/content/batches/created'])[1]"));
    var createdByMe = element(by.xpath("//a[contains(text(),' Created by me')]"));
    var courseOnGoingBatch = element(by.xpath("(//span[contains(text(),'Ongoing Batches')]//following::span[contains(@class,'batch-content-description batch-card-ellipsis w-162')])[1]"));
    var purposeOfCourse = element(by.xpath("//label[text()='PURPOSE OF THE COURSE']/../div/i"));
    var purposeOfFirstCourse = element(by.xpath("//label[text()='PURPOSE OF THE COURSE']/../div/div[2]/div"));
    var mediumOfInstruction = element(by.xpath("//label[contains(text(),'MEDIUM OF INSTRUCTION')]//following::div[1]"));
    var firstmediumOfInstruction = element(by.xpath("//label[contains(text(),'MEDIUM OF INSTRUCTION')]//following::div[7]"));
    var audienceType = element(by.xpath("//label[text()='AUDIENCE TYPE']/../div/i"));
    var firstAudienceType = element(by.xpath("//label[text()='AUDIENCE TYPE']/../div/div[2]/div"));
    var classesTaught = element(by.xpath("//label[contains(text(),'CLASSES TAUGHT ')]//following::div[1]"));
    var firstclassTaught = element(by.xpath("//label[contains(text(),'CLASSES TAUGHT ')]//following::div[4]"));
    var subjectsTaught = element(by.xpath("//label[contains(text(),'SUBJECTS TAUGHT')]//following::div[1]"));
    var firstSubjectTaught = element(by.xpath("//label[contains(text(),'SUBJECTS TAUGHT')]//following::div[5]"));
    var clickFilterSubject = element(by.xpath("//*[contains(text(),'Select Subject')]"));
    var selectFilterSubject = element(by.xpath("//*[contains(text(),'Select Subject')]//following::span[1]"));
    var clickFilterClass = element(by.xpath("//*[contains(text(),'Select Class')]"));
    var selectFilterClass = element(by.xpath("//*[contains(text(),'Select Class')]//following::span[1]"));
    var clickFilterMedium = element(by.xpath("//*[contains(text(),'Select Medium')]"));
    var selectFilterMedium = element(by.xpath("//*[contains(text(),'Select Medium')]//following::span[2]"));
    var clickSubmit = element(by.xpath("//button[contains(.,'Apply')]"));
    var ResetSubmit = element(by.xpath("//button[contains(text(),'Reset')]"));
    var courseToBeClicked = element(by.xpath("//*[@class='sb--card__meta']"));
    var clickLangDropdown = element(by.xpath("//*[contains(text(),'English')]/following::i"));
    var sltHindiLang = element(by.xpath("//span[contains(text(),'हिंदी')]"));
    var assertLangContent = element(by.xpath("//*[@class='sb--card__meta']"));
    var clickHindiLangDropdown = element(by.xpath("//*[contains(text(),'भाषा चुनिये')]/following::sui-select"));
    var sltUrduLang = element(by.xpath("//span[contains(text(),'اردو')]"));
    var clickUrduLangDropdown = element(by.xpath("//*[contains(@class,'computer only')]/following::sui-select"));
    var sltEnglishLang = element(by.xpath("//span[contains(text(),'English')]"));
    var clickLangDropdownEnglish = element(by.xpath("//i[@class='dropdown icon']"));
    var sltLangDropdownEnglish = element(by.xpath("//span[contains(text(),'English')]"));
    var filterSearch = element(by.xpath("//*[@name='filter_search']"));
    var clickSearch = element(by.xpath("//*[contains(text(),'Search')]"));
    var viewAll = element(by.xpath("//button[@class='sb-btn sb-btn-xs sb-btn-secondary ml-auto']"));
    var paginationTwo = element(by.xpath("//a[@class='sb-item']"));
    var qrCode = element(by.xpath("//span[text()='Enter QR code']"));
    var enterQRCode = element(by.xpath("//input[@placeholder='Enter QR code']"));
    var submitButton = element(by.xpath("//button[contains(text(),' Submit ')]"));
    var latestCourseCard = element(by.xpath("//div[@class='sb--card__meta']"));
    var resumeCourse = element(by.xpath("//button[contains(text(),'Resume')]"));
    var closeResumeWindow = element(by.xpath("(//i[@class='close icon'])[1]"));
    var filterIcon = element(by.xpath("//div[@class='sb-data-driven-filter-header']"));
    var courseCard = element(by.xpath("//div[@class='sb--card__meta']"));
    var nameOfTheBatch = element(by.xpath("//label[@class='required' and text()='NAME OF BATCH']"));
    var closeBatchPopup = element(by.xpath("//i[@class='close icon'] "));
    var openBatch = element(by.xpath("(//input[@formcontrolname='enrollmentType'])[2] "));
    var startdate = element(by.xpath("//input[@formcontrolname='startDate'] "));
    var clickEnrolmentDate = element(by.xpath("//input[@formcontrolname='enrollmentEndDate']"));
    var selectEnrolmentDate = element(by.xpath("//input[@formcontrolname='enrollmentEndDate']/../../../../../../../../../../../../sui-popup/div/sui-datepicker/sui-calendar-date-view/table/tbody/tr/td[@class='link today focus ng-star-inserted']"));
    var batchCreateTostrMsg = element(by.xpath("//strong[contains(text(),'Batch created successfully...')] "));
    var clickEnrollmentEditButton = element(by.xpath("(//*[contains(text(),'Edit')])[1]"));
    var updateEnrollmentDate = element(by.xpath("//input[@formcontrolname='enrollmentEndDate']/../../../../../../../../../../../../sui-popup/div/sui-datepicker/sui-calendar-date-view/table/tbody/tr/td[@class='link ng-star-inserted']"));
    //var  updateBatch = element(by.xpath("//button[contains(text(),'Update')] "));
    var updateBatch = element(by.xpath("//button[text()=' Create ']"));
    var batchUpdateTostrMsg = element(by.xpath("//strong[contains(text(),'Batch updated successfully...')] "));
    var viewCourseDashBoard = element(by.xpath("//button[contains(text(),'View training dashboard')]"));
    var batchCourseName = element(by.xpath("//h5[contains(@class,'textbook__title')]"));
    var enrollForCourse = element(by.xpath("//button[text()='Resume']"));
    var joinTraining = element(by.xpath("//button[contains(@class,'sb-btn sb-btn-outline-secondary')]"));
    var courses = element(by.xpath("//a[contains(.,'Courses')]"));
    var myLatestCousreCount = element(by.xpath("//span[contains(text(),'My courses')]/following::span"));
    var myLatestCoursNextButton = element(by.xpath("//span[contains(text(),'My courses')]//following::button[@class='slick-next slick-arrow'] "));
    var firstCourseCardContentName = element(by.xpath("//div[@class='sb--card__meta']"));
    var deleteButton = element(by.xpath("(//i[@class='trash large icon'])[1]"));
    var yesButtonPopup = element(by.xpath("//button[contains(.,'Yes')] "));
    var messageBox = element(by.xpath("//strong[@class='iziToast-title slideIn'] "));
    var published = element(by.xpath("//a[contains(text(),'Published')]"));
    var clickTopticDropdown = element(by.xpath("//input[@id='treePicker']"));
    var selectFirstContent = element(by.xpath("//input[contains(@placeholder,'Search')]/following::i[contains(@class,'add icon')]"));
    var selectFirstSubject = element(by.xpath("//input[contains(@placeholder,'Search')]/following::span[contains(@class,'name')][2]"));
    var clickDonebutton = element(by.xpath("//button[text()=' Done ']"));
    var clickSubmitButton = element(by.xpath("//button[contains(@class,'sb-btn-primary ml-8')]"));
    var validateCourseResult = element(by.xpath("//*[contains(@class,'title')][1]"));
    var clikResettButton = element(by.xpath("//button[contains(text(),'Reset')]"));
    var clickPurposeDropDown = element(by.xpath("//label[contains(text(),'Purpose')]/following::div[1]"));
    var selectPurposeDropdown = element(by.xpath("//label[contains(text(),'Purpose')]/following::*[@class='item'][1]"));
    var clickLatestCourseViewAllLink = element(by.xpath("(//button[contains(@class,'sb-btn sb-btn-xs ')])[1]"));
    var clickFilters = element(by.xpath("//*[contains(text(),'Filters')]"));
    var checkAppliedFilters = element(by.xpath("//i[@class='icon filter']"));
    var showResults = element(by.xpath("//h4[contains(text(),'Showing results ')]"));
    var resultCourseCard = element(by.xpath("//div[contains(@class,'sb-card')][1]"));
    var verifyShareIconInCourseCard = element(by.xpath("//*[text()=' Share ']"));
    var enterQRcodeButton = element(by.xpath("//button[@title='Enter QR code']"));
    var enterQRcodeInSearchField = element(by.xpath("//input[@placeholder='Enter 6 digit QR code']"));
    var submitQRcode = element(by.xpath("//div[@class='ui modal scroll transition active visible normal']/div[3]/button"));
    var linkedQRcodeContent = element(by.xpath("(//h4[contains(@class,'title')])[1]"));
    var linkedQRcodeContents = element(by.xpath("//h4[contains(@class,'title')]"));
    var QrcontentClk = element(by.xpath("//h4[@class='sb-card-title']"));
    var clickSecondCourseInOpenForEnrollment = element(by.xpath("(//h4[contains(@class,'sb-card-title')])[2]"));
    var enrollButton = element(by.xpath("//button[contains(text(),'Join ')]"));
    var assertSignInPopup = element(by.xpath("(//a[contains(text(),'Login')])[3]"));
    var validateTOCForOpenBatchCourse = element(by.xpath("//*[contains(@class,'sb-collectionTree')]/following::i"));
    var openForEnrolmentSection = element(by.xpath("//*[contains(text(),'Open for enrol')]"));
    var validateLatestCourse = element(by.xpath("(//*[contains(text(),'Latest Trainings')]/following::div[@class='sb-card-meta course'])[1]"));
    var clickOnFirstTextBookTOC = element(by.xpath("//i[contains(@class,'expansion')]"));
    var clickOnFirstCourseTOCUnits = element(by.xpath("//div[contains(@class,'sbchapter__item')]"));
    var clickOnFirstTextBookTOCUnits = element(by.xpath("//div[contains(@class,'sbchapter__item')]"));
    var unEnrollButton = element(by.xpath("//button[contains(text(),'Leave Training')]"));
    var leaveTraining = element(by.xpath("//button[@id='unenrollFromCourse']"));
    var createCourse = element(by.xpath("//span[.='Course']"));
    var coursename = element(by.xpath("//input[@placeholder='Name']"));
    var startCreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
    var workSpace = element(by.xpath("//*[contains(text(),'Workspace')]"));

    var suggestionCollaboratorList1 = element(by.xpath("//li[@class='searchResult ng-star-inserted']"));
    var suggestionCollaboratorList2 = element(by.xpath("//li[@class='searchResult ng-star-inserted'][2]')]"));
    var draftSection = element(by.xpath("//a[@popuptext='View drafts you are working on. Submit them for review when completed']"));
    var editCollaborator = element(by.xpath("//i[@class='edit icon cursor-pointer']"));
    var deleteIcon1 = element(by.xpath("//i[@class='trash large icon']"));
    var courseOnCollaborationSection = element(by.xpath(" //div[@class='UpReviewSubHeader']"));
    var createBatchButton = element(by.id("submitbutton"));
    var ongoingBatch = element(by.xpath("//span[contains(text(),'Ongoing')]"));
    var upcomingBatch = element(by.xpath("//span[contains(text(),'Upcoming')]"));
    var calenderIcon = element(by.xpath("(//i[@class='calendar outline icon'])[1]"));
    var courseName1 = element(by.xpath("(//h4[@class='sb-card-title'])[1]"));
    var assignedToMe = element(by.xpath("//a[contains(text(),'Assigned to me')]"));
    var courseOnGoingBatch1 = element(by.xpath("(//span[contains(text(),'Ongoing Courses')]//following::span[contains(@class,'batch-content-description batch-card')])"));
    var clickCreateByMeSection = element(by.xpath("(//*[@href='/workspace/content/batches/created']//following::a[1])[1]"));
    var courseNameInOnGoingBatches = element(by.xpath("(//span[contains(@class,'batch-card-ellipsis batch-course-name w-100 fs-0-92')])[1]"));
    var lockicon = element(by.xpath("(//h4[contains(text(),'Ongoing Courses')]//following::i[contains(@class,'right floated unlock alternate icon')])[1]"));
    var courseUpcomingBatch = element(by.xpath("(//span[contains(text(),'Upcoming Batches')]//following::span[contains(@class,'batch-content-description batch-card-ellipsis w-162')])[1]"));
    var courseExpiredBatch = element(by.xpath("(//span[contains(text(),'Expired Courses')]//following::span[contains(@class,'batch-content-description batch-card')])[1]"));
    var expiredCoursesCourse = element(by.xpath("(//h4[contains(.,'Expired Courses')]/following::div[contains(@class,'ui link cards')]//div[@class='image'])[1]"));
    var mentorsInBatch1 = element(by.xpath("(//div[@class='createbatchdropdown ui fluid multiple search selection dropdown disabled'])[1]"));
    var closePopUp = element(by.xpath("//i[contains(@class,'close icon')]"));
    var onGoingViewAll = element(by.xpath("//h4[contains(text(),'Ongoing Courses')]//following::button[1]"));
    var validatecourseCardList = element(by.xpath("(//div[@class='batch-content'])[1]"));
    var closeCourse = element(by.xpath("//button[contains(text(),'Close')]"));
    var Validate100MemberValidationMsgFetch = element(by.xpath("//div[contains(text(),'Please contact your state admin to add more participants to this batch')]"));
    var loginButton = element(by.xpath("//a[contains(text(),'Login')]"));
    var dropDownIcon = element(by.xpath("(//i[@class='dropdown icon'])[1]"));
    var hindiInLanguageDropdown = element(by.xpath("//sui-select-option//following-sibling::span[contains(text(),'हिंदी')]"));
    var libraryInHindi = element(by.xpath("//*[contains(text(),' पाठ्यपुस्तकें')]"));
    var trainingsInHindi = element(by.xpath("//*[contains(text(),' कोर्स ')]"));
    var enterQRcodeInHindi = element(by.xpath("//*[contains(text(),'QR कोड दर्ज करें')] "));
    var enter6DigitQRcodeInHindi = element(by.xpath("//*[@placeholder='QR कोड दर्ज करें']"));
    var submitInQRcodeInHindi = element(by.xpath("//button[contains(text(),' दाख़िल करें ')]"));
    var contentNotAddedYetInHindi = element(by.xpath("//*[contains(text(),'कंटेंट जोड़ा नहीं गया')]"));
    var stateMessageInHindi = element(by.xpath("//*[contains(text(),'यह कंटेंट बनाया जा रहा है')]"));
    var searchFieldInHindi = element(by.xpath("//*[@name='filter_search']"));
    var searchButtonInHindi = element(by.xpath("//*[contains(text(),'ख़ोज')]"));
    var subjectInCourseCardInHindi = element(by.xpath("//*[contains(text(),'विषय :')]"));
    var selectLanguageInHindi = element(by.xpath("//*[contains(text(),'भाषा चुनिये :')]"));
    var selectBoardInHindi = element(by.xpath("//label[contains(text(),'संस्था का नाम ')]"));
    var selectClassInHindi = element(by.xpath("//label[contains(text(),'कक्षा')]"));
    var selectSubjectInHindi = element(by.xpath("//label[contains(text(),'विषय')]"));
    var exploreContentInHindi = element(by.xpath("//*[contains(text(),'कंटेंट का अन्वेषण कीजिये')]"));
    var resetInHindi = element(by.xpath("//*[contains(text(),'रीसेट')]"));
    var submitInHindi = element(by.xpath("//*[contains(text(),' लागू करें ')]"));
    var viewAllInHindi = element(by.xpath("//*[contains(text(),' सभी देखें ')]"));
    var helpCenterInHindi = element(by.xpath("//*[contains(text(),' सहायता केंद्र ')]"));
    var contactForQueriesInHindi = element(by.xpath("//*[contains(text(),'पूछताछ के लिए सम्पर्क करें')]"));
    var termsOfUseInHindi = element(by.xpath("//*[contains(text(),'शर्तें और गोपनीयता')]"));
    var selectTrainingInHindi = element(by.xpath("(//*[contains(text(),' कोर्स ')])[1]"));
    var kannadaInLanguageDropdown = element(by.xpath("//sui-select-option//following-sibling::span[contains(text(),'ಕನ್ನಡ')]"));
    var libraryInKannada = element(by.xpath("//*[contains(text(),' ಗ್ರ೦ಥಾಲಯ ')]"));
    var trainingsInKannada = element(by.xpath("//*[contains(text(),' ಕೋರ್ಸ್ ಗಳು ']"));
    var loginInKannada = element(by.xpath("//*[contains(text(),' ಲಾಗಿನ್ ')]"));
    var enterQRcodeInKannada = element(by.xpath("//*[contains(text(),'QR  ಸಂಕೇತ ನಮೂದಿಸಿ')]"));
    var enter6DigitQRcodeInKannada = element(by.xpath("//*[@placeholder='6  ಅಂಕಿಗಳ QR  ಸಂಕೇತ ಹಾಕಿರಿ']"));
    var submitInQRcodeInKannada = element(by.xpath("//*[@class='sb-btn sb-btn-normal sb-btn-primary']"));
    var contentNotAddedYetInKannada = element(by.xpath("//*[contains(text(),'ಕಂಟೆಂಟ್ ಇನ್ನೂ ಸೇರಿಸಿಲ್ಲ')]"));
    var stateMessageInKannada = element(by.xpath("//*[contains(text(),'ನಿಮ್ಮ ರಾಜ್ಯವು ಶೀಘ್ರದಲ್ಲಿಯೇ ಈ ಕ್ಯುಆರ್ ಸಂಕೇತಕ್ಕೆ ಕಂಟೆಂಟ್ ಸೇರಿಸುತ್ತದೆ. ಅದು ಶೀಘ್ರದಲ್ಲಿಯೇ ನಿಮಗೆ ದೊರೆಯಲಿದೆ. ')]"));
    var searchFieldInKannada = element(by.xpath("//*[@placeholder='ಹುಡುಕು']"));
    var searchButtonInKannada = element(by.xpath("//*[contains(text(),'ಹುಡುಕು')]"));
    var subjectInCourseCardInKannada = element(by.xpath("//*[contains(text(),'ವಿಷಯ :')]"));
    var selectLanguageInKannada = element(by.xpath("//*[contains(text(),'ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ :')]"));
    var exploreContentInKannada = element(by.xpath("//*[contains(text(),' ಇದರಿಂದ ವಿಷಯವನ್ನು ಎಕ್ಸ್ಪ್ಲೋರ್ ಮಾಡಿ ')]"));
    var selectBoardInKannada = element(by.xpath("//*[contains(text(),' ಆಯ್ಕೆ ಮಾಡಿ.  Board')]"));
    var selectMediumInKannada = element(by.xpath("//*[contains(text(),' ಆಯ್ಕೆ ಮಾಡಿ.  Medium')]"));
    var selectClassInKannada = element(by.xpath("//*[contains(text(),' ಆಯ್ಕೆ ಮಾಡಿ.  Class')]"));
    var selectSubjectInKannada = element(by.xpath("//*[contains(text(),' ಆಯ್ಕೆ ಮಾಡಿ.  Subject')]"));
    var resetInKannada = element(by.xpath("//*[contains(text(),' ಮರುಹೊಂದಿಸಿ ')]"));
    var submitInKannada = element(by.xpath("//*[contains(text(),'ಸಲ್ಲಿಸು')]"));
    var viewAllInKannada = element(by.xpath("//*[contains(text(),'ಎಲ್ಲವನ್ನು ವೀಕ್ಷಿಸಿ')]"));
    var helpCenterInKannada = element(by.xpath("//*[contains(text(),' ಸಹಾಯ ಕೇಂದ್ರ ')]"));
    var contactForQueriesInKannada = element(by.xpath("//*[contains(text(),' ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಂಪರ್ಕಿಸಿ: ')]"));
    var termsOfUseInKannada = element(by.xpath("//*[contains(text(),'ಬಳಕೆಯ ನಿಯಮಗಳು')]"));
    var selectTrainingInKannada = element(by.xpath(" (//*[contains(text(),'ಕೋರ್ಸ್ ಗಳು ')])[1]"));
    var clickKannadaLangDropdown = element(by.xpath("//*[contains(text(),'ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ')]/following::sui-select"));
    var clkExpandAll = element(by.xpath("//*[contains(text(),'Expand all')]"));

    var clickTamilLangDropdown = element(by.xpath("//*[contains(text(),'மொழியை தேர்ந்தேடுக்கவும்')]/following::sui-select"));
    var tamilInLanguageDropdown = element(by.xpath("//sui-select-option//following-sibling::span[contains(text(),'தமிழ்')]"));
    var libraryInTamil = element(by.xpath("//*[contains(text(),'நூலகம்')]"));
    var trainingsInTamil = element(by.xpath("//*[contains(text(),'பாடநெறிகள்')]"));
    var enterQRcodeInTamil = element(by.xpath("//*[contains(text(),'விரைவு குறியீட்டை உள்ளிடவும்')]"));
    var enter6DigitQRcodeInTamil = element(by.xpath("//*[@placeholder='6 இலக்கிய விரைவு குறியீட்டை  உள்ளிடவும்']"));
    var submitInQRcodeInTamil = element(by.xpath("//*[@class='sb-btn sb-btn-normal sb-btn-primary']"));
    var contentNotAddedYetInTamil = element(by.xpath("//*[contains(text(),'விரைவில் வரும்!')]"));
    var stateMessageInTamil = element(by.xpath("//*[contains(text(),'தங்கள் மாநிலம் விரைவில் பாடத்தை QR குறியீட்டுடன் இன்னைப்பாரகள். குறுகிய காலத்தில் பாடம் கிடைக்கும்.')]"));
    var searchFieldInTamil = element(by.xpath("//*[@placeholder='தேட ']"));
    var searchButtonInTamil = element(by.xpath("//*[contains(text(),'தேடு')]"));
    var subjectInCourseCardInTamil = element(by.xpath("//*[contains(text(),'பாடம்  :')] "));
    var selectLanguageInTamil = element(by.xpath("//*[contains(text(),'மொழியை தேர்ந்தேடுக்கவும் :')]"));
    var selectBoardInTamil = element(by.xpath("//*[contains(text(),'தேர்ந்தெடு  Board')]"));
    var selectMediumInTamil = element(by.xpath("//*[contains(text(),'தேர்ந்தெடு  Medium')]"));
    var selectClassInTamil = element(by.xpath("//*[contains(text(),'தேர்ந்தெடு  Class')]"));
    var selectSubjectInTamil = element(by.xpath("//*[contains(text(),'தேர்ந்தெடு  Subject')]"));
    var exploreContentInTamil = element(by.xpath("//*[contains(text(),'பாடத்தை ஆராய')]"));
    var resetInTamil = element(by.xpath("//*[contains(text(),'மீட்டமைக்க')]"));
    var submitInTamil = element(by.xpath("//*[contains(text(),'சமர்ப்பிக்கவும்')] "));
    var viewAllInTamil = element(by.xpath("//*[contains(text(),'அணைக்கிதையும் பார்')]"));
    var helpCenterInTamil = element(by.xpath("//*[contains(text(),'உதவி மையம்')]"));
    var contactForQueriesInTamil = element(by.xpath("//*[contains(text(),'கேள்விகளுக்கு தொடர்பு கொள்ளவும்')]"));
    var termsOfUseInTamil = element(by.xpath("//*[contains(text(),'பயன்பாட்டு   விதிமுறைகள்')]"));
    var selectTrainingInTamil = element(by.xpath(" (//*[contains(text(),' பாடநெறிகள் ')])[1]"));
    var loginInUrdu = element(by.xpath("//*[contains(text(),'لاگ ان کریں')]"));
    var urduInLanguageDropdown = element(by.xpath("//sui-select-option//following-sibling::span[contains(text(),'اردو')]"));
    var libraryInUrdu = element(by.xpath("//*[contains(text(),'دار الکتب')]"));
    var trainingsInUrdu = element(by.xpath("//*[contains(text(),'نصاب')]"));
    var enterQRcodeInUrdu = element(by.xpath("//*[contains(text(),'کیو آ ر  کوڈ درج کریں')]"));
    var enter6DigitQRcodeInUrdu = element(by.xpath("//*[@placeholder='6 عددی QR کوڈ درج کریں']"));
    var submitInQRcodeInUrdu = element(by.xpath("//*[@class='sb-btn sb-btn-normal sb-btn-primary']"));
    var contentNotAddedYetInUrdu = element(by.xpath("//*[contains(text(),'مواد ابھی تک شامل نہیں ہے')]"));
    var stateMessageInUrdu = element(by.xpath("//*[contains(text(),'آپکا ریاست جلد ہی اس QR کوڈ کیلئےموادشامل کریگا- یہ جلد ہی دستیاب ہوگا-')]"));
    var searchFieldInUrdu = element(by.xpath("//*[@placeholder='تلاش کریں']"));
    var searchButtonInUrdu = element(by.xpath("//*[contains(text(),'تلاش کریں')]"));
    var subjectInCourseCardInUrdu = element(by.xpath("//*[contains(text(),'مضمون :')]"));
    var selectLanguageInUrdu = element(by.xpath("//*[contains(text(),'زبان منتخب کریں :')]"));
    var selectBoardInUrdu = element(by.xpath("//*[contains(text(),'منتخب کریں Board')]"));
    var selectMediumInUrdu = element(by.xpath("//*[contains(text(),'منتخب کریں Medium')]"));
    var selectClassInUrdu = element(by.xpath("//*[contains(text(),'منتخب کریں Class')]"));
    var selectSubjectInUrdu = element(by.xpath("//*[contains(text(),'منتخب کریں Subject')]"));
    var exploreContentInUrdu = element(by.xpath("//*[contains(text(),'مواد میں سے تلاش کریں')]"));
    var resetInUrdu = element(by.xpath("//*[contains(text(),'ری سیٹ کریں')]"));
    var submitInUrdu = element(by.xpath("//*[contains(text(),'جمع کریں')]"));
    var viewAllInUrdu = element(by.xpath("//*[contains(text(),'سب ملاحظہ کریں')]"));
    var helpCenterInUrdu = element(by.xpath("//*[contains(text(),'مدد سنٹر')]"));
    var contactForQueriesInUrdu = element(by.xpath("//*[contains(text(),'سوالات کے لئے رابطہ کیجئے:')]"));
    var termsOfUseInUrdu = element(by.xpath("//*[contains(text(),'استعمال کے شرائط')]"));
    var selectTrainingInUrdu = element(by.xpath("(//*[contains(text(),' نصاب ')])"));
    var nextArrowInContents = element(by.xpath("//*[contains(@class,'sb-btn-arrows next')]"));
    var EnjoyedTheContent = element(by.xpath("//div[@class='sb-modal-header']"));
    var starRating = element(by.xpath("//sui-rating[contains(@class,'sb-rating ui huge star rating')]//following::i[5]"));
    var submitRating = element(by.xpath("//*[contains(text(),'Submit')]"));
    var firstLink = element(by.xpath("//a[contains(text(),'1') or contains(text(),'First')]"));
    var previousLink = element(by.xpath("//a[contains(text(),'<') or contains(text(),'Previous')]"));
    var closeCourseButton = element(by.xpath("//i[@class='close icon']"));
    var unenrolButton = element(by.xpath("//*[contains(text(),'Leave course')]"));
    var unenrolToCourse = element(by.id("unenrollFromCourse"));
    var searchPlace = element(by.xpath("//input[@title='Search in Trainings']"));
    var searchButton = element(by.xpath("//button[@title='Search in Trainings']"));
    var expiredBatchMessage = element(by.xpath("//div[contains(text(),' Batch has ended on 2019-06-09, therefore your progress will not be updated.')]"));
    var menuInContentPlayer = element(by.xpath("//img[@class='menu-icon icon']"));
    var progressBar = element(by.xpath("//sui-progress[@class='ui tiny progress blue status expired']"));
    var batchStatusMessage = element(by.xpath("//div[@class='header']"));
    var progressBarStatus = element(by.xpath("//div[@class='ui container']//following::p"));
    var courseProgress = element(by.xpath("//p[contains(.,'Your Progress')]"));
    var closeIcon2 = element(by.xpath("//i[@class='close icon']"));
    var unEnrollButton2 = element(by.xpath("//button[@id='unenrollFromCourse']"));
    var assertUnEnroll = element(by.xpath("//*[contains(text(),'Course')]"));
    var status100 = element(by.xpath("//p[text()=' Your Progress 100% ']"));
    var consumedcontentName = element(by.xpath("(//*[contains(@class,'sb-pageSection-title')])[2]"));
    var closeContentPlayer = element(by.xpath("//button[contains(.,'Close ')]"));
    var hundredProgressBar = element(by.xpath("//p[contains(text(), 'Your Progress 100%')]"));
    var courseNameInContentPlayer = element(by.xpath("//h1[@class='sb-pageSection-title']"));
    var dropdown = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
    var logout = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]/..//a[contains(.,'Logout')]"));
    var clickProfileIcon = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]/..//a[contains(.,'Profile')]"));
    var viewMoreButton = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn']"));
    var downloadCertificate = element(by.xpath("//i[@class='download icon']"));
    var nextButtonInCourseConsumption = element(by.xpath("//span[contains(.,'Next')]"));
    var progressBarInTOC = element(by.xpath("//div[@class='bar']"));
    var reviewSubmission = element(by.xpath("//*[@href='/workspace/content/review/1']"));
    var credit = element(by.xpath("//a[contains(text(),'Credits')]"));
    var msgDerivedFrom = element(by.xpath("//div[contains(text(),' This content is derived from ')]"));
    var originalContentName = element(by.xpath("//div[contains(text(),'CONTENT')]/following-sibling::div"));
    var authorName = element(by.xpath("//div[contains(text(),'AUTHOR OF SOURCE CONTENT')]/following-sibling::div"));
    var publishedDetails = element(by.xpath("//div[contains(text(),' PUBLISHED ON DIKSHA BY')]/following-sibling::div"));
    var attributionName = element(by.xpath("//div[contains(text(),'ATTRIBUTIONS')]/following-sibling::div"));
    var closeIcon = element(by.xpath("//i[@class='close icon']"));
    var courseCard1 = element(by.xpath("(//span[contains(text(),'Latest Courses')]/following::div[@class='sb-card-meta-item mb-15'])[2]"));
    var copyCourse = element(by.xpath("//i[@class='blue clone outline icon']"));
    var copyCourseContent = element(by.xpath("//div[@class='four wide column custom-6-wide']"));
    var editOrViewDetailslink = element(by.xpath("//span[@class='ng-scope']"));
    var close1 = element(by.xpath("//button[@class='ui orange button']"));
    var closeEditor2 = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-error ml-auto sb-cls-btn']"));
    var contributionName = element(by.xpath("//i[@data-content='Preview']/../span"));
    var verifyBatchCount = element(by.xpath("//span[contains(text(),'Ongoing ')]//following::div[@class='ui black right ribbon label']"));
    var asserSelfContentLibSec = element(by.xpath("//*[contains(text(),' Copy ')]"));
    var academic = element(by.xpath("//h4[contains(text(),'Curriculum ')]"));
    var nonAcademic = element(by.xpath("//h4[text()=' Generic courses ']"));
    var closeButton = element(by.xpath("//button[text()='Close']"));
    var searchContent = element(by.xpath("//input[@placeholder='Search content']"));
    var firstSearchContent = element(by.xpath("//div[@class='UpReviewHeader']"));
    var dropdownProfi = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
    var clkProfileIcon = element(by.xpath("//li[text()=' Profile ']"));
    var courseAttendeVerify = element(by.xpath("//div[@class='list-items__item']"));
    var batchDetailsExpand = element(by.xpath("//*[text()='Batch Details']/following::i"));
    var viewAllButton = element(by.xpath("(//button[text()=' View all '])[1]"));
    var latestEnrolledourse = element(by.xpath("(//div[@class='sb-card-body'])[1]"));
    // var myGroupButton=element(by.xpath("//li[@routerlink='profile']//following::i[2]"));
    var profileButton = element(by.xpath("(//div[@class='avatar-content'])[2]"));
    // var createGroupButton=element(by.xpath("//button[text()=' Create group ']"));
    var enterGroupName = element(by.xpath("//input[@placeholder='Enter group name']"));
    var enterGroupDescription = element(by.xpath("//textarea[contains(@class,'sb-form-control ng-untouched')]"));
    var GroupcheckBox = element(by.xpath("//input[@role='checkbox']"));
    // var createGroupSubmitButton=element(by.xpath("(//button[text()=' Create group '])[2]"));
    var groupAdminIcon = element(by.xpath("//div[text()='Admin']"));
    var addActivityButton = element(by.xpath("//button[contains(@class,'sb-btn sb-btn-primary')]"));
    var nextButton = element(by.xpath("//button[@type='submit']"));
    var selectFirstCourse = element(by.xpath("(//div[@class='sb--card__main-area'])[1]"));
    var addToGroupButton = element(by.xpath("//*[text()='Add to group']"));
    var addedSuccessfully = element(by.xpath("//div[@class='iziToast-wrapper iziToast-wrapper-topCenter']"));
    var addMember = element(by.xpath("//div[contains(text(),'Add member')]"));
    var crossButton = element(by.xpath("(//i[contains(@class,'icon-svg icon-svg--xs')])[2]"));
    var EnterUserId = element(by.xpath("//div[contains(text(),' Add member ')]//following::input"));
    var verifyUserId = element(by.xpath("//div[contains(text(),' Add member ')]//following::button"));
    var addingMembertoGroup = element(by.xpath("//button[contains(text(),' Add to group ')]"));
    var UserAddedSuccessfully = element(by.xpath("//div[contains(text(),' Members ')]//following::span[contains(text(),'Content reviewer‎')]"));
    var joinCourseButton = element(by.xpath("//button[text()='Join Course']"));
    var joinBatch = element(by.xpath("//button[text()='Join']"));
    var startlearningButton = element(by.xpath("//button[text()='Start learning']"));
    var nextModuleButton = element(by.xpath("//button[text()=' Next module']"));
    var CourseCompletionpercentage = element(by.xpath("(//div[contains(@class,'ml-8 progress-circle')])[2]"));
    var lastUpdatedTime = element(by.xpath("//div[contains(@class,'mr-8 py-16')]"));
    //var certificateNO = element(by.xpath("(//*[contains(text(),'No')])"));
    var certificateNO = element(by.xpath("(//input[@formcontrolname='issueCertificate'])[2]"));
    //var certificateYes = element(by.xpath("(//input[@formcontrolname='issueCertificate'])[1]"));
    var certificateYes = element(by.xpath("(//input[@id='yes'])"));
    var addCertificate = element(by.id("close-modal-btn"));
    var closeCertificate = element(by.id("add-certificate"));
    var kannadLanVerify = element(by.xpath("//div[contains(text(),' ಈ ಪಠ್ಯಾಂಶ ಖುಷಿ ನೀಡಿತೇ? ')]"));
    var myGroup = element(by.xpath("//li[contains(text(),'My Groups')]"));
    var groupName = element(by.xpath("//*[contains(text(),'my_group')]"));
    var nestedCourseName = element(by.xpath("//*[contains(@class,'sb--card__title')]"));
    var adminName = element(by.xpath("//*[contains(@class,'sb-member__name')]"));
    var userName = element(by.xpath("(//*[contains(@class,'sb-member__name')])[2]"));
    var adminProgress = element(by.xpath("//*[contains(@class,'sb-member__name')]/following::div/span"));
    var userProgress = element(by.xpath("(//*[contains(@class,'sb-member__name')])[2]/following::div/span"));
    var closeGroupPopup = element(by.xpath("//a[@class='close']"));
    var closeTpdEditor = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var editIconLinkInTpdEditor = element(by.xpath("//i[@class='edit icon link']"));
    var courseToAddInGroup = element(by.xpath("//div[contains(@class,'sb--card__')]"));
    var copyAsCourse = element(by.xpath("//button[contains(text(),'Copy as course')]"));
    var copyAsCourseCheckBox = element(by.xpath("//label[contains(text(),' Select All')]"));
    var copyAsCourseConfirm = element(by.xpath(" //button[contains(text(),'Cancel')]/following::button"));
    var editCertificate = element(by.xpath("//*[contains(text(),'Edit certificate')]"));
    var addCertificateOption = element(by.xpath("//button[contains(text(),'Add certificate')]"));
    var certificateType = element(by.xpath("//*[contains(text(),'Certificate type')]/following::sui-select[1]"));
    var certificateRule = element(by.xpath("//*[contains(text(),'Certificate rules')]/following::sui-select[1]"));
    var createCertificate = element(by.xpath("//*[contains(text(),'Create ')]"));
    var certificateTemplatePreview = element(by.xpath("//*[contains(text(),'Certificate template Preview')]"));
    var enrollmentDateOverMsg = element(by.xpath("//*[contains(@class,'batch-details__created ')]/span"));
    var batchmsg = element(by.xpath("//h6[contains(@class,'ui small')]"));
    var closemsg = element(by.xpath("//i[contains(@class,'close icon ')]"));
    var firstCourseModule = element(by.xpath("//h4[contains(text(),'Course modules')]/following::h4"));
    var viewCourseDashboard = element(by.xpath("//button[contains(text(),'View course dashboard')]"));
    var videoOption = element(by.xpath("//*[contains(text(),'Video')]"));
    var changeoptionNested = element(by.xpath("//*[text()='Change']"));
    var createBatch = element(by.xpath("//*[contains(text(),'Create Batch')]"))
    var checkBoxConsent = element(by.xpath("//input[@type='checkbox']"));
    var doNotShare = element(by.xpath("//button[contains(text(),'Do not share')]"));
    var share = element(by.xpath("//button[text()='Share']"));
    var userNameBatch = element(by.xpath("//*[text()='User Name']"));
    var stateBatch = element(by.xpath("//*[text()='State']"));
    var userIdBatch = element(by.xpath("//*[text()='User ID']"));
    var districtBatch = element(by.xpath("//*[text()='District']"));
    var blockBatch = element(by.xpath("//*[text()='Block']"));
    var schoolIdBatch = element(by.xpath("//*[text()='School ID']"));
    var nameBatch = element(by.xpath("//*[text()='School or Org name']"));
    var mobileNumberBatch = element(by.xpath("//*[text()='Mobile Number']"));
    var emailIdbatch = element(by.xpath("//*[text()='Email ID :']"));
    var viewMentorDashboard = element(by.xpath("//*[contains(text(),'View course dashboard')]"));
    var lastUpdatedMsg = element(by.xpath("//*[contains(text(),'Last updated ')]"));
    var clkBoard = element(by.xpath("//label[contains(text(),'BOARD/SYLLABUS')]//following::div[1]"));
    var sltBoardValue = element(by.xpath("//label[contains(text(),'BOARD/SYLLABUS')]//following::div[4]"));
    var batchTncCheck = element(by.xpath("//input[@formcontrolname='tncCheck']"));
    var addCollaboratorButton = element(by.xpath("(//*[text()=' Add '])"));
    var addCollaboratorDoneButton = element(by.xpath("//button[text()='Done']"));
    var publishTheCourse = element(by.xpath("//button[text()=' Publish ']"));
    var confirmForPublishBook = element(by.xpath("//button[text()=' Yes ']"));
    var rejectThecourse = element(by.xpath("//button[text()=' Reject ']"));
    var moduleProgress = element(by.xpath("//div[@class='certified-course__progress ng-star-inserted']//div[text()='Module progress']"));
    var clkCollapseAll = element(by.xpath("//*[contains(text(),'Collapse all')]"));
    var clkSwitchClassicTheme = element(by.xpath("//span[contains(text(),'Switch to classic theme')]"));
    var clkSwitchJoyFulTheme = element(by.xpath("//span[contains(text(),'Switch to joyful theme')]"));
    var dontShare = element(by.xpath("//button[text()='Do not share']"));
    var finalCourseTitle = element(by.xpath("//div[@class='sb--card sb--card--theme2 ng-star-inserted']"));
    var coursesTabActive = element(by.xpath("//a[@class='item item--courses active']"));
    var corsecardCoursesTab = element(by.xpath("//div[@class='sb--card sb--card--theme2']"));
    var expiredBatchPopup = element(by.xpath("//strong[text()='This course does not have any open batches']"));
    var notificationBellIcon = element(by.xpath("(//div[contains(@aria-label,'Notification')])[2]"));
    var coursesLink = element(by.xpath("//a[@class='item item--courses']"));
    var searchBar = element(by.xpath("//input[@id='keyword']"));
    var searchBtn = element(by.xpath("//button[@class='sb-btn sb-btn-md']"));
    var courseImg = element(by.xpath("(//img[contains(@src,'assets/common-consumption/images')])[1]"));
    var addCertificateLnk = element(by.xpath("//a[text()='Add certificate']"));
    var addCertificateplus = element(by.xpath("//button[@id='addNewCert']"));
    var createTemplateBtn = element(by.xpath("//button[@class='add-new-template-btn sb-btn sb-btn-normal sb-btn-outline-primary sb-left-icon-btn font-weight-bold']"));



    var addCommentForReject = element(by.xpath("//textarea[@placeholder='Add comment']"));
    var reviewSubmitForReject = element(by.xpath("//button[text()=' Submit Review ']"));
    var createCertificateTemplate = element(by.xpath("//button[text()='Create template']"));
    var certificateTitle = element(by.xpath("//input[@placeholder='Enter certificate title']"));
    var stateName = element(by.xpath("//input[@formcontrolname='stateName']"));
    var StateLogo = element(by.xpath("(//button[text()=' Browse '])[1]"));
    var signatureLogo = element(by.xpath("(//button[text()=' Browse '])[3]"));
    var designation = element(by.xpath("(//input[@placeholder='Enter designation'])[1]"));
    var declarationCheckBox = element(by.xpath("//label[@for='check2']"));
    var logo1stImage = element(by.xpath("(//div[@class='content']//img)[1]"));
    var selectStateLogoutton = element(by.xpath("//button[text()=' Select ']"));
    var chooseSigntaureFile = element(by.xpath("//input[@type='file']"));
    var enterAssetCaption = element(by.xpath("//input[@placeholder='Enter asset caption']"));
    var uploadAndUseButton = element(by.xpath("//button[text()=' Upload and use ']"));
    var refreshButton = element(by.xpath("//button[text()=' Refresh ']"));
    var saveTemplateButton = element(by.xpath("//button[text()='Save template']"));
    var browseButton = element(by.xpath("//input[@type='file']"));
    var stateLogo1 = element(by.xpath("(//button[@class='sb-btn sb-btn-normal sb-browse-btn'])[1]"));
    var signature1 = element(by.xpath("(//button[@class='sb-btn sb-btn-normal sb-browse-btn'])[3]"));
    var signatureErrorPopup = element(by.xpath("//*[text()='The image exceeds the maximum supported file size']"));
    var cancel = element(by.xpath("//button[text()=' Cancel ']"));
    var signatory1Designation = element(by.xpath("(//input[@placeholder='Enter designation'])[1]"));
    var checkbox = element(by.xpath("//label[@class='text-left fsmall']"));
    var saveTemplate = element(by.xpath("//button[text()='Save template']"));
    var refreshBtn = element(by.xpath("//button[text()=' Refresh ']"));
    var selectCertificate = element(by.xpath("//div[text()='Select certificate']"));
    var selectCompletionCourse = element(by.xpath("//span[text()='Completion certificate']"));
    var SelectIssueCertificate = element(by.xpath("//sui-select[@formcontrolname='issueTo']"));
    var selectAll = element(by.xpath("//span[text()='All']"));
    var statelogoImage = element(by.xpath("(//img[@rel='placeholder'])[1]"));
    var selectButton = element(by.xpath("//button[text()=' Select ']"));
    var choseFile = element(by.xpath("//input[@name='file']"));
    var uploadAndUse = element(by.xpath("//button[text()=' Upload and use ']"));
    var checkBox1 = element(by.xpath("//label[@class='text-left']"));
    var certificateImage = element(by.xpath("(//div[@class='d-flex flex-ai-center flex-jc-center flex-dc overlay-buttons'])[1]"));
    var previewButton = element(by.xpath("(//span[text()='Preview'])[1]"));
    var selectTemplate = element(by.xpath("//button[text()=' Select template ']"));
    var addCertificateButton = element(by.xpath("//button[text()='Add certificate']"));
    var selectTemplateButton = element(by.xpath("//button[text()=' Select template ']"));
    var addCertificatePopup = element(by.xpath("//*[contains(text(),'Certificate added successfully')]"));
    var courseTitle = element(by.xpath("//h4[contains(@class,'sb--card__title ')]"));
    var joinCourse = element(by.xpath("//button[text()='Join Course']"));
    var clkCloseIconPopup = element(by.xpath("//a[@class='close']"));
    var myGroupButton2 = element(by.xpath("//li[@routerlink='profile']//following::i[1]"));


    var createGroupButton = element(by.xpath("(//*[contains(@class,'flex-ai-jc-center')])[1]"));
    var createGroupSubmitButton = element(by.xpath("//*[contains(@class,'sb-modal-actions')]//child::button"));
    var CreatedGroup = element(by.xpath("(//*[contains(@class,'sb--card__title ')])[1]"));

    var filter = element(by.xpath("//*[contains(@class,'sb-btn sb-btn-outline-primary sb-btn-normal')]"));
    var subSelect = element(by.xpath("(//*[contains(@class,'cfe-multiselect-field-label-container list-border')])[1]"));
    var subSelectValue = element(by.xpath("//*[contains(text(),'CBSE/NCERT')]"));
    var MedSelect = element(by.xpath("(//*[contains(@class,'cfe-multiselect-field-label-container list-border')])[2]"))
    var MedSelectValue = element(by.xpath("(//*[contains(text(),'english')])[2]"));
    var clickclass = element(by.xpath("//div[contains(text(),'Select Class')]"));
    var SelectClass = element(by.xpath("//div[contains(text(),'Select Class')]//following::div[2]"));
    var clicksubject = element(by.xpath("//div[contains(text(),'Select Subject')]"));
    var selectSubject = element(by.xpath("//div[contains(text(),'Select Subject')]//following::div[2]"));
    var selectSubjectValue = element(by.xpath("//*[@id='subject']/div[2]/sui-select-option[1]/span[contains(text(),'Accountancy')]"));
    var contentType = element(by.xpath("//*[contains(text(),'Select Content type')]"));
    var contentTypeValue = element(by.xpath("//span[contains(text(),'course')]"));
    var clkCheckBoxBacth = element(by.xpath("//input[@role='checkbox']"));
    var clkNoCertficate = element(by.xpath("//label[contains(text(),'No')]"));
    var assertCreatedBatch = element(by.xpath("//button[contains(text(),' Edit ')]"));
    var clkExpandBatches = element(by.xpath("//i[@title='expand']"));
    var clkJoinCourse = element(by.xpath("//button[contains(text(),'Join Course')]"));
    var clkStartLearning = element(by.xpath("//button[contains(text(),'Start learning')]"));
    var clkFullScreen = element(by.xpath("//span[contains(text(),'Fullscreen')]"));
    var assertTimer = element(by.xpath("//span[contains(text(),'Batch expiring in:')]"));
    var assertTimeStamp = element(by.xpath("//span[contains(text(),'Batch expiring in:')]//following::h6[1]"));
    var myGroupButton3 = element(by.xpath("//li[@routerlink='profile']//following::i[5]"));

    var myGroupButton = element(by.xpath("//li[text()=' My Groups ']"));
    var GroupName = element(by.xpath("//input[contains(@id,'group-name-input')]"));
    var UpdateGroup = element(by.xpath("//*[contains(text(),'Update Group')]"));
    var ReplyMessage = element(by.xpath("//textarea[contains(@placeholder,'Type your message here (minimum 10 characters)')]"));
    var editReply = element(by.xpath("//img[@id='edit-post']"));
    var replyCommentButton = element(by.xpath("//button[@id='reply-comment']"));
    var CommentText = element(by.xpath("(//textarea[contains(@placeholder,'Type your message here (minimum 10 characters)')])[2]"));
    var CommentPostReplyButton = element(by.xpath("(//span[text()='Post Reply'])[2]"));
    var deleteComment = element(by.xpath("//img[@id='delete-post']"));
    var selectMediumInHindi = element(by.xpath("//label[contains(text(),'माध्यम')]"));
    var clkContinuLearing = element(by.xpath("//*[contains(text(),'Continue learning')]"));

    var clkMenugrps = element(by.xpath("//div[@id='group-actions']"));
    var clkEditBtnGrps = element(by.xpath("//div[contains(text(),'Edit group')]"));
    var editedGrpValidation = element(by.xpath("//*[contains(text(),'Group updated successfully')]"));
    var clkDeleteGrpsPopup = element(by.xpath("//button[contains(text(),'Delete')]"));
    var batchDropdown = element(by.xpath("//div[@aria-controls='batches']//span[contains(text(),'Batches')]"));
    var selectCourse = element(by.xpath("(//div[@class='sb--card__main-area'])[3]"))
    var submittedForReviewCard = element(by.xpath("//span[@class='sliderCardHeading text-cencapitalize']"));
    var tncCheck = element(by.xpath("//input[contains(@aria-label,'term and condition checkbox')]"));
    var continueLearning = element(by.xpath("//button[text()='Continue learning']"));
    
    var coursemodules = element(by.xpath("//h4[contains(@class,'sb-pageSection-title sb-pageSection-title-light')]"));
    var courseinformation = element(by.xpath("//h4[contains(text(),'Course details')]"));
    var credits = element(by.xpath("//span[contains(text(),'Credits & license info')]"));
    var batchDetails = element(by.xpath("//span[contains(text(),'Batch Details')]"));
    var coursesTab = element(by.xpath("(//div[@aria-label='Main menu']//following::a[contains(text(),' Courses ')])[1]"));
    var assertCourseIcon = element(by.xpath("(//img[@src='assets/images/book.png'])[1]"));
    var assertCourseName = element(by.xpath("(//div[@role='link']//following::h4[@class='sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1'])[1]"));
    var assertOrgname = element(by.xpath("(//div[@role='link']//following::div[@class='sb--card__meta2 text-left'])[1]"));
    var assertcoursecard = element(by.xpath("(//div[@class='sb--card sb--card--theme2 ng-star-inserted']//following::div[@class='sb--card__svg-area'])[1]"));
    var assertEnrollEndDate = element(by.xpath("//*[contains(text(),'Last date for enrolment:')]"));
    
    var assertStartAndEndDate = element(by.xpath("//*[@class='calendar outline icon']//following::*[contains(text(),'2021')]"));
    var clkBatchDropdown = element(by.xpath("//div[@class='title active']//following::span[2]"));
    var assertBatchDropdownOnGoing = element(by.xpath("//div[@class='title active']//following::span[2]//following::span[contains(text(),'Ongoing')]"));
    var assertBatchDropdownUpcoming = element(by.xpath("//div[@class='title active']//following::span[2]//following::span[contains(text(),'Upcoming')]"));
    var assertBatchDropdownExpired = element(by.xpath("//div[@class='title active']//following::span[2]//following::span[contains(text(),'Expired')]"));
    var assertEnrollEndDateWithYear = element(by.xpath("//*[contains(text(),'2021')]"));
    var assertEnrollEndDateWithInBatchSec = element(by.xpath("//div[contains(text(),' Created by content creator ')]//following::*[contains(text(),'Last date for enrolment:')]"));
    var clkCancelBtnPublishPopup = element(by.xpath("//button[contains(text(),'Cancel')]"));
    var clkNoBtnPublishPopup = element(by.xpath("//button[contains(text(),'No')]"));
    var assertNoBatchMessages = element(by.xpath("//strong[contains(text(),'This course does not have any open batches')]"));
    var assertCourseloginpopUp = element(by.xpath("//div[@class='sb-modal-content sb-join-modal-content']//child::div"));
    var createdBy = element(by.xpath("//div[@class='pb-24 ng-star-inserted']//following::div[text()=' Created by']"));
    var createdByname  = element(by.xpath("//div[@class='pb-24 ng-star-inserted']//following::div[text()=' Created by']//following::div[text()='content creator']"));
    var loginPopup = element(by.xpath("//a[contains(text(),' Login ')]"));
    var revSubmission = element(by.xpath("//a[@mattooltip='View drafts you are working on. Submit them for review when completed']//following::a[1]"));
    var assertJoinCourse = element(by.xpath("//button[contains(@class,'sb-btn-disabled')]"));
    var assertenrollmentDate = element(by.xpath("//div[@class='batch-details__created mt-8 fsmall ng-star-inserted']//following::span[@class='sb-label-12size ng-star-inserted']"));
    var clkSwitchToJoyFullTheme = element(by.xpath("//li[@routerlink='guest-profile']//following::span[contains(text(),'Switch to joyful theme')]"));
    var assertEnableDissInBatchpopUp = element(by.xpath("//div[@class='ng-star-inserted']//following::label[text()='Enable discussions']"));
    var yesRadbtnForBatchPopupdisc = element(by.xpath("//input[@formcontrolname='enableDiscussions']//following::label[text()='Yes']"));
    var clkSwithToClassicTheme = element(by.xpath("//span[contains(text(),'Switch to classic theme')]"));
    var selectGroup1 = element(by.xpath("//h2[text()='My Groups']//following::div[4]"));
    var explanationContent = element(by.xpath("//h4[contains(text(),'Explanation Content')]"));
    var learnngModule = element(by.xpath("//h4[contains(text(),'Learning module')]"));
    var practiceQuestionSet = element(by.xpath("//h4[contains(text(),'Practice question set')]"));
    var PDFTextBook = element(by.xpath("//h4[contains(text(),'PDF TextBook')]"));
    var teachingResource = element(by.xpath("//h4[contains(text(),'Teaching Resource')]"));
    var digitalTextBooks = element(by.xpath("//h4[contains(text(),'Digital textbooks')]"));
    var contentPlayList = element(by.xpath("//h4[contains(text(),'Content Playlist')]"));
    var tvClass = element(by.xpath("//h4[contains(text(),'TV Class')]"));
    var earlierYearPapers = element(by.xpath("//h4[contains(text(),'Earlier Year')]"));
    var FilterByOption = element(by.xpath("//button[text()='Filter by ']"));
    var FilterIconLeft = element(by.xpath("//button[text()='Reset ']//preceding::i[1]"));
    var selectBoard = element(by.xpath("//button[text()='Reset ']//following::sb-caret-down[1]"));
    var selectMedium = element(by.xpath("//button[text()='Reset ']//following::sb-caret-down[2]"));
    var selectClass = element(by.xpath("//button[text()='Reset ']//following::sb-caret-down[3]"));
    var ResetValue = element(by.xpath("//button[text()='Reset ']"));
    var CrossOption = element(by.xpath("//div[text()=' Add member ']//preceding::i[1]"));
    var searchWithinGroup = element(by.xpath("//input[@id='search-within-group']"));
    var communicationConsole = element(by.xpath("//li[text()=' Communication console ']"));
var createGroupSubmitButton1 = element(by.xpath("//input[@role='checkbox']//following::button"));
var selectCourse1 = element(by.xpath("//h4[contains(text(),'Course')]"));
var course1 = element(by.xpath("//div[text()=' Course ']//following::img[1]"));
var activityDashBoard = element(by.xpath("//button[text()=' Activity Dashboard']"));
var LastUpdate = element(by.xpath("//label[contains(text(),' Last update : ')]"));

    return {
        headerCourse,
        confirmForPublishBook,
        reviewSubmitForReject,
        addCommentForReject,
        rejectThecourse,
        batchTncCheck,
        addCollaboratorButton,
        addCollaboratorDoneButton,
        publishTheCourse,
        latestCourseViewAllSection,
        getCourseName,
        addIcon,
        nameOfBatch,
        aboutBatch,
        startDate,
        startDateCalendar,
        endDate,
        endDateCalendar,
        mentorsInBatch,
        firstMentorInBatch,
        mentorDropdown,
        membersInBatch,
        firstMemberInBatch,
        memberDropdown,
        buttonCreate,
        searchInput,
        searchIcon,
        searchPublishedCourses,
        batchForm,
        createCourse,

        workSpace,
        collaboratorSearch,
        suggestedCollaborator,
        noResultFound,
        closeCollaborator,
        closeEditor1,
        donebutton1,
        courseName,
        startCreating,
        collaboratorIcon,
        iframe,
        newChild,
        searchCollaboratorField,
        suggestionCollaboratorList1,
        suggestionCollaboratorList2,
        lessonPlan,
        newChild,
        titleNameForCourse,
        titleDescriptionForCourse,
        titleKeywordForCourse,
        addResource,
        resourceSearch,
        selectResourceN,
        clickAddbutton,
        proceedButton,
        save,
        collaboratorTostrMsg,
        collaborationSection,
        searchForReview,
        searchIconUpForReview,
        courseNameInCollaboration,
        editIcon1,
        sendForReview,
        clickAppIcon,
        checkAppIcon,
        selectAppIcon,
        yearOfCreation,
        saveButton,
        author,
        submittedForReview,
        courseNameInReviewSubmission,
        selectResourceType2,
        topic,
        select,
        done,
        saveCourse,
        sendForReviewDropDown,
        clickLimitedSharing,
        sharedViaLink,
        clickFirstCourseInShareVialink,

        allMyContent,
        showFilter1,
        status,
        status1,
        draft,
        applyButton1,
        contentName,
        searchInActivity,
        searchIcon2,
        statusReview,
        statusLive,
        selectMediumfilter,
        selectEnglish,
        resetButton,
        gradeLevel,
        gradeLevel1,
        subject,
        accountancy,
        clickBoardAllMyContent,
        selectBoardAllMyContent,
        page1,
        page2,
        pageNext,
        pageLast,
        pagePrevious,
        pageFirst,
        validatecourseCardListInAllMyContent,
        selectMentorsInBatch,
        selectMembersInBatch,
        courseBatches,
        createdByMe,
        courseOnGoingBatch,
        purposeOfCourse,
        purposeOfFirstCourse,
        mediumOfInstruction,
        firstmediumOfInstruction,
        audienceType,
        firstAudienceType,
        classesTaught,
        firstclassTaught,

        clickFilterSubject,
        selectFilterSubject,
        clickFilterClass,
        selectFilterClass,
        clickFilterMedium,
        selectFilterMedium,
        clickSubmit,
        ResetSubmit,
        courseToBeClicked,


        clickLangDropdown,
        sltHindiLang,
        assertLangContent,
        clickHindiLangDropdown,
        sltUrduLang,
        clickUrduLangDropdown,
        sltEnglishLang,

        clickLangDropdownEnglish,
        sltLangDropdownEnglish,

        filterSearch,
        clickSearch,


        viewAll,
        paginationTwo,

        qrCode,
        enterQRCode,
        submitButton,
        latestCourseCard,
        resumeCourse,
        closeResumeWindow,
        filterIcon,

        courseCard,
        nameOfTheBatch,
        startDate,
        closeBatchPopup,
        openBatch,
        startdate,
        clickEnrolmentDate,
        selectEnrolmentDate,
        batchCreateTostrMsg,
        clickEnrollmentEditButton,
        updateEnrollmentDate,
        updateBatch,
        batchUpdateTostrMsg,
        viewCourseDashBoard,
        batchCourseName,
        enrollForCourse,
        joinTraining,
        courses,
        myLatestCousreCount,
        myLatestCoursNextButton,
        firstCourseCardContentName,
        deleteButton,
        yesButtonPopup,
        messageBox,
        published,

        clickTopticDropdown,
        selectFirstContent,
        selectFirstSubject,
        clickDonebutton,
        clickSubmitButton,
        validateCourseResult,
        clikResettButton,
        clickPurposeDropDown,
        selectPurposeDropdown,
        clickLatestCourseViewAllLink,
        clickFilters,
        checkAppliedFilters,
        showResults,
        resultCourseCard,
        verifyShareIconInCourseCard,

        enterQRcodeButton,
        enterQRcodeInSearchField,
        submitQRcode,
        linkedQRcodeContent,
        linkedQRcodeContents,
        QrcontentClk,
        clickSecondCourseInOpenForEnrollment,
        enrollButton,
        assertSignInPopup,
        validateTOCForOpenBatchCourse,
        openForEnrolmentSection,
        validateLatestCourse,
        clickOnFirstTextBookTOC,
        clickOnFirstCourseTOCUnits,
        clickOnFirstTextBookTOCUnits,
        unEnrollButton,
        leaveTraining,
        draftSection,
        editCollaborator,
        deleteIcon1,
        courseOnCollaborationSection,

        createBatchButton,
        ongoingBatch,
        upcomingBatch,
        calenderIcon,
        courseName1,
        assignedToMe,
        courseOnGoingBatch1,
        clickCreateByMeSection,
        courseNameInOnGoingBatches,
        lockicon,
        courseUpcomingBatch,
        courseExpiredBatch,
        expiredCoursesCourse,
        mentorsInBatch1,
        closePopUp,
        onGoingViewAll,
        validatecourseCardList,
        closeCourse,
        Validate100MemberValidationMsgFetch,

        selectTrainingInUrdu,
        urduInLanguageDropdown,
        libraryInUrdu,
        trainingsInUrdu,
        loginInUrdu,
        enterQRcodeInUrdu,
        enter6DigitQRcodeInUrdu,
        submitInQRcodeInUrdu,
        contentNotAddedYetInUrdu,
        stateMessageInUrdu,
        searchFieldInUrdu,
        searchButtonInUrdu,
        subjectInCourseCardInUrdu,
        selectLanguageInUrdu,
        selectBoardInUrdu,
        selectMediumInUrdu,
        selectClassInUrdu,
        selectSubjectInUrdu,
        exploreContentInUrdu,
        resetInUrdu,
        submitInUrdu,
        viewAllInUrdu,
        helpCenterInUrdu,
        contactForQueriesInUrdu,
        termsOfUseInUrdu,
        clickLangDropdown,

        clickKannadaLangDropdown,
        clickTamilLangDropdown,
        selectTrainingInTamil,
        tamilInLanguageDropdown,
        libraryInTamil,
        trainingsInTamil,
        enterQRcodeInTamil,
        enter6DigitQRcodeInTamil,
        submitInQRcodeInTamil,
        contentNotAddedYetInTamil,
        stateMessageInTamil,
        searchFieldInTamil,
        searchButtonInTamil,
        subjectInCourseCardInTamil,
        helpCenterInTamil,
        contactForQueriesInTamil,
        termsOfUseInTamil,
        selectLanguageInTamil,
        selectBoardInTamil,
        selectMediumInTamil,
        selectClassInTamil,
        selectSubjectInTamil,
        exploreContentInTamil,
        resetInTamil,
        submitInTamil,
        viewAllInTamil,

        selectTrainingInKannada,
        kannadaInLanguageDropdown,
        libraryInKannada,
        trainingsInKannada,
        loginInKannada,
        enterQRcodeInKannada,
        enter6DigitQRcodeInKannada,
        submitInQRcodeInKannada,
        contentNotAddedYetInKannada,
        stateMessageInKannada,
        searchFieldInKannada,
        searchButtonInKannada,
        subjectInCourseCardInKannada,
        selectLanguageInKannada,
        exploreContentInKannada,
        selectBoardInKannada,
        selectMediumInKannada,
        selectClassInKannada,
        selectSubjectInKannada,
        resetInKannada,
        submitInKannada,
        viewAllInKannada,
        helpCenterInKannada,
        contactForQueriesInKannada,
        termsOfUseInKannada,

        loginButton,
        dropDownIcon,
        hindiInLanguageDropdown,
        libraryInHindi,
        trainingsInHindi,
        enterQRcodeInHindi,
        enter6DigitQRcodeInHindi,
        submitInQRcodeInHindi,
        contentNotAddedYetInHindi,
        stateMessageInHindi,
        searchFieldInHindi,
        searchButtonInHindi,
        subjectInCourseCardInHindi,
        selectLanguageInHindi,
        selectBoardInHindi,
        selectClassInHindi,
        selectMediumInHindi,
        selectSubjectInHindi,
        exploreContentInHindi,
        resetInHindi,
        submitInHindi,
        viewAllInHindi,
        helpCenterInHindi,
        contactForQueriesInHindi,
        termsOfUseInHindi,
        selectTrainingInHindi,
        coursename,
        subjectsTaught,
        firstSubjectTaught,
        nextArrowInContents,
        EnjoyedTheContent,
        starRating,
        submitRating,
        firstLink,
        previousLink,
        closeCourseButton,
        unenrolButton,
        unenrolToCourse,
        searchPlace,
        searchButton,
        expiredBatchMessage,
        menuInContentPlayer,
        progressBar,
        batchStatusMessage,
        progressBarStatus,

        courseProgress,
        closeIcon2,
        unEnrollButton2,
        assertUnEnroll,
        status100,
        consumedcontentName,
        closeContentPlayer,

        hundredProgressBar,
        courseNameInContentPlayer,
        dropdown,
        logout,
        clickProfileIcon,
        viewMoreButton,
        downloadCertificate,
        nextButtonInCourseConsumption,
        progressBarInTOC,
        reviewSubmission,
        credit,
        msgDerivedFrom,
        originalContentName,
        authorName,
        publishedDetails,
        attributionName,
        closeIcon,
        copyCourse,
        copyCourseContent,
        editOrViewDetailslink,
        courseCard1,
        close1,
        closeEditor2,
        contributionName,

        verifyBatchCount,
        asserSelfContentLibSec,
        academic,
        nonAcademic,
        closeButton,
        searchContent,
        firstSearchContent,
        dropdownProfi,
        clkProfileIcon,
        courseAttendeVerify,
        batchDetailsExpand,
        certificateNO,
        certificateYes,

        addCertificate,
        closeCertificate,
        kannadLanVerify,
        myGroup,
        groupName,
        nestedCourseName,
        adminName,
        userName,
        adminProgress,
        userProgress,
        closeGroupPopup,

        viewAllButton,
        latestEnrolledourse,
        myGroupButton,
        profileButton,
        createGroupButton,
        enterGroupName,
        enterGroupDescription,
        GroupcheckBox,
        createGroupSubmitButton,
        groupAdminIcon,
        CreatedGroup,
        addActivityButton,
        nextButton,
        selectFirstCourse,
        addToGroupButton,
        addedSuccessfully,
        addMember,
        crossButton,
        EnterUserId,
        verifyUserId,
        addingMembertoGroup,
        UserAddedSuccessfully,
        joinCourseButton,
        joinBatch,
        startlearningButton,
        nextModuleButton,
        CourseCompletionpercentage,
        lastUpdatedTime,
        addCertificate,
        closeCertificate,
        closeTpdEditor,
        editIconLinkInTpdEditor,
        courseToAddInGroup,
        copyAsCourse,
        copyAsCourseCheckBox,
        copyAsCourseConfirm,
        editCertificate,
        addCertificateOption,
        certificateType,
        certificateRule,
        createCertificate,
        certificateTemplatePreview,
        enrollmentDateOverMsg,
        batchmsg,
        closemsg,
        firstCourseModule,
        viewCourseDashboard,
        videoOption,
        changeoptionNested,
        createBatch,
        checkBoxConsent,
        doNotShare,
        share,
        userNameBatch,
        stateBatch,
        userIdBatch,
        districtBatch,
        blockBatch,
        schoolIdBatch,
        nameBatch,
        mobileNumberBatch,
        emailIdbatch,
        viewMentorDashboard,
        lastUpdatedMsg,
        clkBoard,
        sltBoardValue,
        coursesLink,
        searchBar,
        searchBtn,
        courseImg,
        addCertificateLnk,
        addCertificateplus,
        createTemplateBtn,
        certificateTitle,
        stateName,
        stateLogo1,
        signature1,
        signatureErrorPopup,
        cancel,
        signatory1Designation,
        checkbox,
        saveTemplate,
        refreshBtn,
        selectCertificate,
        selectCompletionCourse,
        SelectIssueCertificate,
        selectAll,
        statelogoImage,
        selectButton,
        choseFile,
        uploadAndUse,
        checkBox1,
        certificateImage,
        previewButton,
        selectTemplate,
        addCertificateButton,
        selectTemplateButton,
        addCertificatePopup,
        courseTitle,
        joinCourse,
        dontShare,
        finalCourseTitle,
        coursesTabActive,
        corsecardCoursesTab,
        expiredBatchPopup,
        notificationBellIcon,
        moduleProgress,
        clkCollapseAll,
        clkExpandAll,
        clkSwitchClassicTheme,
        clkSwitchJoyFulTheme,
        StateLogo,
        signatureLogo,
        designation,
        logo1stImage,
        declarationCheckBox,
        selectStateLogoutton,
        chooseSigntaureFile,
        enterAssetCaption,
        uploadAndUseButton,
        refreshButton,
        saveTemplateButton,
        browseButton,
        createCertificateTemplate,
        clkCloseIconPopup,
        myGroupButton2,
        filter,
        subSelect,
        subSelectValue,
        MedSelect,
        MedSelectValue,
        clickclass,
        SelectClass,
        clicksubject,
        selectSubject,
        selectSubjectValue,
        contentType,
        contentTypeValue,
        clkCheckBoxBacth,
        assertCreatedBatch,
        clkNoCertficate,
        clkExpandBatches,
        clkJoinCourse,
        clkStartLearning,
        clkFullScreen,
        assertTimer,
        assertTimeStamp,
        myGroupButton3,
        GroupName,
        UpdateGroup,
        ReplyMessage,
        editReply,
        replyCommentButton,
        CommentText,
        CommentPostReplyButton,
        deleteComment,
        clkContinuLearing,
        clkMenugrps,
        clkEditBtnGrps,
        editedGrpValidation,
        clkDeleteGrpsPopup,
        batchDropdown,
        selectCourse,
        submittedForReviewCard,
        tncCheck,
        continueLearning,
        coursemodules,
        courseinformation,
        credits,
        batchDetails,
        coursesTab,
        assertCourseIcon,
        assertCourseName,
        assertOrgname,
        assertcoursecard,
        assertEnrollEndDate,
        assertStartAndEndDate,
        clkBatchDropdown,
        assertBatchDropdownOnGoing,
        assertBatchDropdownUpcoming,
        assertBatchDropdownExpired,
        assertEnrollEndDateWithYear,
        assertEnrollEndDateWithInBatchSec,
        clkCancelBtnPublishPopup,
        clkNoBtnPublishPopup,
        assertNoBatchMessages,
        assertCourseloginpopUp,
        createdBy,
        createdByname,
        loginPopup,
        revSubmission,
        assertJoinCourse,
        assertenrollmentDate,
        clkSwitchToJoyFullTheme,
        assertEnableDissInBatchpopUp,
        yesRadbtnForBatchPopupdisc,
        clkSwithToClassicTheme,
        selectGroup1,
        contentPlayList,
        selectClass,
        explanationContent,
        searchWithinGroup,
        ResetValue,
        CrossOption,
        selectBoard,
        selectMedium,
        FilterIconLeft,
        FilterByOption,
        earlierYearPapers,
        tvClass,
        learnngModule,
        practiceQuestionSet,
        teachingResource,
        digitalTextBooks,
        PDFTextBook,
        communicationConsole,
        createGroupSubmitButton1,
        selectCourse1,
        course1,
        activityDashBoard,
        LastUpdate,
    

    }

}
module.exports = {
    tpdPage
}