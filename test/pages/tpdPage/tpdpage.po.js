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
    var status = element(by.xpath("(//div[contains(text(),' Select Status ')])"));
    var status1 = element(by.xpath("(//div[contains(text(),' 1 Status ')])"));
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
    var clickLangDropdown = element(by.xpath("//*[contains(text(),'English')]/following::div[1]"));
    var sltHindiLang = element(by.xpath("//span[contains(text(),'हिंदी')]"));
    var assertLangContent = element(by.xpath("(//*[@class='sb--card__meta'])[1]"));
    var clickHindiLangDropdown = element(by.xpath("//*[contains(text(),'भाषा चुनिये')]/following::sui-select"));
    var sltUrduLang = element(by.xpath("(//span[contains(text(),'ಕನ್ನಡ')])[1]"));
    var clickUrduLangDropdown = element(by.xpath("//*[contains(@class,'computer only')]/following::sui-select"));
    var sltEnglishLang = element(by.xpath("(//span[contains(text(),'English')])[1]"));
    var clickLangDropdownEnglish = element(by.xpath("//div[contains(@class,'mat-select-arrow-wrapper')]"));
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
    var  batchUpdate = element(by.xpath("//button[contains(text(),'Update')]"));
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
    var assignedToMe = element(by.xpath("//div[@id='search-input-container']//following::a[contains(text(),'Assigned to me')]"));
    var courseOnGoingBatch1 = element(by.xpath("(//span[contains(text(),'Ongoing Courses')]//following::span[contains(@class,'batch-content-description batch-card')])"));
    var clickCreateByMeSection = element(by.xpath("(//*[@href='/workspace/content/batches/created']//following::a[1])[1]"));
    var courseNameInOnGoingBatches = element(by.xpath("(//span[contains(@class,'batch-card-ellipsis batch-course-name w-100 fs-0-92')])[1]"));
    var lockicon = element(by.xpath("(//span[contains(text(),'Ongoing Courses')]//following::i[contains(@class,'right floated unlock alternate icon')])[1]"));
    var courseUpcomingBatch = element(by.xpath("//span[contains(text(),'Upcoming Courses')]//following::div[7]"));
    var courseExpiredBatch = element(by.xpath("//span[contains(text(),'Expired Courses')]//following::div[7]"));
    var expiredCoursesCourse = element(by.xpath("(//h4[contains(.,'Expired Courses')]/following::div[contains(@class,'ui link cards')]//div[@class='image'])[1]"));
    var mentorsInBatch1 = element(by.xpath("(//div[@class='createbatchdropdown ui fluid multiple search selection dropdown disabled'])[1]"));
    var closePopUp = element(by.xpath("//i[contains(@class,'close icon')]"));
    var closeForum = element(by.xpath("//button[contains(@id,'close-discussion-forum')]"));
    var onGoingViewAll = element(by.xpath("//h4[contains(text(),'Ongoing Courses')]//following::button[1]"));
    var validatecourseCardList = element(by.xpath("(//div[@class='batch-content'])[1]"));
    var closeCourse = element(by.xpath("//button[contains(text(),'Close')]"));
    var Validate100MemberValidationMsgFetch = element(by.xpath("//div[contains(text(),'Please contact your state admin to add more participants to this batch')]"));
    var loginButton = element(by.xpath("//a[contains(text(),'Login')]"));
    var dropDownIcon = element(by.xpath("(//i[@class='dropdown icon'])[1]"));
    var hindiInLanguageDropdown = element(by.xpath("//span[contains(text(),'हिंदी')]"));
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
    var kannadaInLanguageDropdown = element(by.xpath("//span[contains(text(),'ಕನ್ನಡ')]"));
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
    var viewAllButton = element(by.xpath("(//button[contains(text(),'View all')])[1]"));
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
    var selectFirstCourse = element(by.xpath("//h4[contains(text(),'Course')]"));
    var addToGroupButton = element(by.xpath("//*[text()='Add to group']"));
    var addedSuccessfully = element(by.xpath("//div[@class='iziToast-wrapper iziToast-wrapper-topCenter']"));
    var addMember = element(by.xpath("//div[contains(text(),'Add member')]"));
    var crossButton = element(by.xpath("//h4[text()='Have you explored the potential of groups yet?']//preceding::i[1]"));
    var EnterUserId = element(by.xpath("//input[contains(@aria-label,'search user id')]"));
    var verifyUserId = element(by.xpath("//input[contains(@aria-label,'search user id')]//following::button[text()='Verify']"));
    var addingMembertoGroup = element(by.xpath("//button[contains(text(),' Add to group ')]"));
    var UserAddedSuccessfully = element(by.xpath("//*[@class='iziToast-title slideIn'])]"));
    var joinCourseButton = element(by.xpath("(//button[text()='Join Course']//..)[1]"));
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
    var copyAsCourse = element(by.xpath("//img[@alt='copy-clone']"));
    var copyAsCourseCheckBox = element(by.xpath("//label[contains(text(),' Select all')]"));
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
    var rejectThecourse = element(by.xpath("//button[contains(text(),'Reject')]"));
    var moduleProgress = element(by.xpath("//div[contains(text(),'Course progress')]//following::div[1]"));
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
    var cancel = element(by.xpath("(//span[contains(text(),'Cancel')])[1]"));
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
    var createGroupSubmitButton = element(by.xpath("//textarea[@id='group-description-input']//following::button[contains(text(),' Create group ')]"));
    var CreatedGroup = element(by.xpath("(//*[contains(@class,'sb--card sb--card--course--curiculum ng-star-inserted')])[1]"));

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
    var clkExpandBatches = element(by.xpath("//*[contains(text(),'Batches')]"));
    var clkJoinCourse = element(by.xpath("//button[contains(text(),'Join Course')]"));
    var clkStartLearning = element(by.xpath("//button[contains(text(),'Start learning')]"));
    var clkFullScreen = element(by.xpath("//span[contains(text(),'Fullscreen')]"));
    var assertTimer = element(by.xpath("//span[contains(text(),'Batch expiring in:')]"));
    var assertTimeStamp = element(by.xpath("//span[contains(text(),'Batch expiring in:')]//following::h6[1]"));
    var myGroupButton3 = element(by.xpath("//li[@routerlink='profile']//following::i[5]"));

    var myGroupButton = element(by.xpath("//li[text()=' My Groups ']"));
    var GroupName = element(by.xpath("//input[@id='group-name-input' and @placeholder='Enter group name']"));
    var UpdateGroup = element(by.xpath("//*[contains(text(),' Update group ')]"));
    var ReplyMessage = element(by.xpath("//textarea[contains(@placeholder,'Type here (minimum 10 characters)')]"));
    var editReply = element(by.xpath("//img[@id='edit-post']"));
    var replyCommentButton = element(by.xpath("//button[@id='reply-comment']"));
    var CommentText = element(by.xpath("(//textarea[contains(@placeholder,'Type here (minimum 10 characters)')])[2]"));
    var CommentPostReplyButton = element(by.xpath("(//span[text()='Post Reply'])[2]"));
    var deleteComment = element(by.xpath("//img[@id='delete-post']"));
    var selectMediumInHindi = element(by.xpath("//label[contains(text(),'माध्यम')]"));
    var clkContinuLearing = element(by.xpath("//*[contains(text(),'Continue learning')]"));

    var clkMenugrps = element(by.xpath("//div[@id='group-actions']"));
    var clkEditBtnGrps = element(by.xpath("//div[contains(text(),'Edit group')]"));
    var editedGrpValidation = element(by.xpath("//*[contains(text(),'Group updated successfully')]"));
    var clkDeleteGrpsPopup = element(by.xpath("//button[contains(text(),'Delete')]"));
    var batchDropdown = element(by.xpath("//*[contains(text(),'Batches')]//following::span[1]"));
    var selectCourse = element(by.xpath("(//div[@aria-label='Course'])"))
    var submittedForReviewCard = element(by.xpath("//span[@class='sliderCardHeading text-cencapitalize']"));
    var tncCheck = element(by.xpath("//input[contains(@aria-label,'term and condition checkbox')]"));
    var continueLearning = element(by.xpath("//button[text()='Continue learning']"));

    var coursemodules = element(by.xpath("//h4[contains(@class,'sb-pageSection-title sb-pageSection-title-light')]"));
    var courseinformation = element(by.xpath("//h4[contains(text(),'Course details')]"));
    var credits = element(by.xpath("//span[contains(text(),'Credits & license info')]"));
    var batchDetails = element(by.xpath("//*[contains(text(),'Batch Details')]"));
    var coursesTab = element(by.xpath("(//div[@aria-label='Main menu']//following::a[contains(text(),' Courses ')])[1]"));
    var assertCourseIcon = element(by.xpath("(//img[@src='assets/images/book.png'])[1]"));
    var assertCourseName = element(by.xpath("(//div[@role='link']//following::h4[@class='sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1'])[1]"));
    var assertOrgname = element(by.xpath("(//div[@role='link']//following::div[@class='sb--card__meta2 text-left'])[1]"));
    var assertcoursecard = element(by.xpath("(//div[@class='sb--card sb--card--theme2 ng-star-inserted']//following::div[@class='sb--card__svg-area'])[1]"));
    var assertEnrollEndDate = element(by.xpath("//*[contains(text(),'Last date for enrolment:')]"));

    var assertStartAndEndDate = element(by.xpath("//*[@class='calendar outline icon']//following::*[contains(text(),'2022')]"));
    var clkBatchDropdown = element(by.xpath("//*[contains(text(),'Batches')]//following::i[@class='dropdown icon']"));
    var assertBatchDropdownOnGoing = element(by.xpath("//div[@class='title active']//following::span[2]//following::span[contains(text(),'Ongoing')]"));
    var assertBatchDropdownUpcoming = element(by.xpath("//*[contains(text(),'Batches')]//following::span[contains(text(),'Upcoming')]"));
    var assertBatchDropdownExpired = element(by.xpath("//*[contains(text(),'Batches')]//following::span[contains(text(),'Expired')]"));
    var assertEnrollEndDateWithYear = element(by.xpath("(//*[contains(text(),'2022')])[1]"));
    var assertEnrollEndDateWithInBatchSec = element(by.xpath("//div[contains(text(),'Created by Suma')]//following::*[contains(text(),'Last date for enrolment:')]"));
    var clkCancelBtnPublishPopup = element(by.xpath("//button[contains(text(),'Cancel')]"));
    var clkNoBtnPublishPopup = element(by.xpath("//button[contains(text(),'No')]"));
    var assertNoBatchMessages = element(by.xpath("//strong[contains(text(),'This course does not have any open batches')]"));
    var assertCourseloginpopUp = element(by.xpath("//div[contains(text(),'Access course')]//following::div[1]"));
    var createdBy = element(by.xpath("//div[@class='pb-24 ng-star-inserted']//following::div[text()=' Created by']"));
    var createdByname = element(by.xpath("//div[@class='pb-24 ng-star-inserted']//following::div[text()=' Created by']//following-sibling::div"));
    var loginPopup = element(by.xpath("//div[contains(text(),'Access course')]//following::a[contains(text(),' Login ')]"));
    var revSubmission = element(by.xpath("//a[@mattooltip='View drafts you are working on. Submit them for review when completed']//following::a[1]"));
    var assertJoinCourse = element(by.xpath("//button[contains(text(),'Join Course')]"));
    var assertenrollmentDate = element(by.xpath("//button[contains(text(),'Join Course')]//preceding::span[contains(text(),'Last date')]"));
    var clkSwitchToJoyFullTheme = element(by.xpath("//li[@routerlink='guest-profile']//following::span[contains(text(),'Switch to joyful theme')]"));
    var assertEnableDissInBatchpopUp = element(by.xpath("//div[@class='ng-star-inserted']//following::label[text()='Enable discussions']"));
    var yesRadbtnForBatchPopupdisc = element(by.xpath("//input[@formcontrolname='enableDiscussions']//following::label[text()='Yes']"));
    var clkSwithToClassicTheme = element(by.xpath("//span[contains(text(),'Switch to classic theme')]"));
    var selectGroup1 = element(by.xpath("(//div[text()='Admin'])[1]"));
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
    //var selectCourse1 = element(by.xpath("//h4[contains(text(),'Course')]"));
    var course1 = element(by.xpath("//div[text()=' Course ']//following::img[1]"));
    //var activityDashBoard = element(by.xpath("//button[text()=' Activity Dashboard']"));
    var LastUpdate = element(by.xpath("//label[contains(text(),' Last update : ')]"));
    var downloadAsCSV = element(by.xpath("//button[text()=' Download as CSV']"));
    var enterSunbirdID = element(by.xpath("//input[@placeholder='Enter SUNBIRD ID']"));
    var verifyID = element(by.xpath("//input[@placeholder='Enter SUNBIRD ID']//following::button[text()='Verify']"));
    var addToGroup = element(by.xpath("//button[text()=' Add to group ']"));
    var AdminMember = element(by.xpath("//span[text()='S']"));
    var member1 = element(by.xpath("//span[text()='M']"));
    var member2 = element(by.xpath("//span[text()='U']"));
    var addNewButton = element(by.xpath("//*[contains(text(),'Conversations')]//following::button[2]"));
    var conversation = element(by.xpath("//a[text()='Conversations']"));
    var nameHeading = element(by.xpath("//th[contains(text(),'Name')]"));
    var nameValue1 = element(by.xpath("//th[contains(text(),'Name')]//following::td[1]"));
    var statusHeading = element(by.xpath("//th[text()=' Status ']"));
    var statusValue1 = element(by.xpath("//th[text()=' Status ']/following::td[2]"));
    var descriptionHeading = element(by.xpath("//th[contains(text(),'Description')]"));
    var descriptionValue1 = element(by.xpath("//th[contains(text(),'Description')]//following::td[3]"));
    var startingmsgHeading = element(by.xpath("//th[text()=' Starting Message ']"));
    var startingmsgValue1 = element(by.xpath("//th[text()=' Starting Message ']/following::td[4]"));
    var botURLHeading = element(by.xpath("//th[text()=' Bot URL ']"));
    var botURLValue1 = element(by.xpath("//th[text()=' Bot URL ']//following::button[1]"));
    var botIDHeading = element(by.xpath("//th[text()=' Bot Id']"));
    var botIDValue1 = element(by.xpath("//th[text()=' Bot Id']//following::button[2]"));
    var actionHeading = element(by.xpath("//th[text()=' Action']"));
    var actionKebab1 = element(by.xpath("//th[contains(text(),'Action')]//following::*[contains(text(),'more_vert')]"));
    var deleteGroup = element(by.xpath("//div[text()='Delete group ']"));
    var assertLoginInPoup = element(by.xpath("//div[contains(text(),' To access the course you have to log in and join the course ')]//following::a[contains(text(),'Login')]"));
    var assertCourseDetailsAfterLogin = element(by.xpath("//*[contains(text(),'Course details')]"));
    var enableDiscussionsOpt = element(by.xpath("//div[text()=' Enable discussions ']"));
    var viewActivities = element(by.xpath("//h4[text()=' Activities']"));
    var clkDiscussionForum = element(by.xpath("//button[@title='Forum']"));
    var clkGeneralDiscussion1 = element(by.xpath("//div[text()='General Discussion']"));
    var startDiscussion = element(by.xpath("//button[@id='start-discussion']"));
    var discussionTopic = element(by.xpath("//label[text()='Discussion topic*']"));
    var buttonCancel = element(by.xpath("//button[@id='discard-discussion-start-form']"));
    var navigateBack = element(by.xpath("//button[text()=' Back ']"));
    var disableDiscussionsOpt = element(by.xpath("//div[text()=' Disable discussions ']"));
    var confirmDisable = element(by.xpath("//button[text()='Disable discussions']"));
    var enterDiscussionTopic = element(by.xpath("//input[@placeholder='Type here (minimum 8 characters)']"));
    var enterQuestionOrIdea = element(by.xpath("//textarea[@id='description']"));
    var submitOnDiscussionTopic = element(by.xpath("//span[text()='Submit']"));
    var createdTopic = element(by.xpath("//h3[text()='Demo1234']"));
    var generalDiscussion = element(by.xpath("//div[text()=' General Discussion ']"));
    var voteIcon = element(by.xpath("//img[@alt='votes icon']"));
    var closeButtonDiscussionForum = element(by.xpath("//button[@id='close-discussion-forum']"));
    var animationPage = element(by.xpath("//img[@alt='add activity']"));
    var clkTagOption = element(by.xpath("//a[text()='Tags']"));
    var tagPageAnimation = element(by.xpath("//label[text()='No tags Available !']//preceding::img[1]"));
    var noTagsAvailableMsg = element(by.xpath("//label[text()='No tags Available !']"));
    var assertDiscussionTopic = element(by.xpath("//input[@placeholder='Type here (minimum 8 characters)']"));
    var assertElaborateSection = element(by.xpath("//textarea[@placeholder='Type here (minimum 8 characters)']"));
    var viewIcon = element(by.xpath("//div[text()='General Discussion']//following::img[1]"));
    var createdTopic2 = element(by.xpath("//h3[text()='Demo5678']"));
    var assertMinLengthOnReply = element(by.xpath("//textarea[@placeholder='Type here (minimum 10 characters)']"));
    var minLengthValue = element(by.xpath("//textarea[@minlength='10']"));
    var assertelaborateLabel = element(by.xpath("//label[text()='Please elaborate your question or idea here*']"));
    var assertTagLabel = element(by.xpath("//label[text()='Tags']"));
    var assertTagWaterMark = element(by.xpath("//input[@placeholder='Add a tag and press Enter']"));
    var assertCCDiscussionTopic = element(by.xpath("//label[contains(text(),'D')]"));
    var assertCCelaborate = element(by.xpath("//label[contains(text(),'P')]"));
    var assertCCTags = element(by.xpath("//label[contains(text(),'T')]"));
    var assertCCTopicDesc = element(by.xpath("//small[contains(text(),'Q')]"));
    var assertCCelaborateDesc = element(by.xpath("//small[contains(text(),'D')]"));
    var assertCCCancelButton = element(by.xpath("(//button[contains(text(),'C')])[2]"));
    var createGroupSubmitButton1 = element(by.xpath("//input[@role='checkbox']//following::button"));
    var selectCourse1 = element(by.xpath("//h4[contains(text(),'Course')]"));
    var course1 = element(by.xpath("//div[text()=' Course ']//following::img[1]"));
    var activityDashBoard = element(by.xpath("//input[contains(@id,'keyword')]//following::*[contains(@alt,'Activity Dashboard')]"));
    var LastUpdate = element(by.xpath("//label[contains(text(),' Last update : ')]"));
    var downloadAsCSV = element(by.xpath("//button[text()=' Download as CSV']"));
    var enterSunbirdID = element(by.xpath("//input[@placeholder='Enter SUNBIRD ID']"));
    var verifyID = element(by.xpath("//input[@placeholder='Enter SUNBIRD ID']//following::button[text()='Verify']"));
    var addToGroup = element(by.xpath("//button[text()=' Add to group ']"));
    var AdminMember = element(by.xpath("//span[text()='S']"));
    var member1 = element(by.xpath("//span[text()='M']"));
    var member2 = element(by.xpath("//span[text()='U']"));
    //var addNewButton = element(by.xpath("//button[text()=' Add New']"));
    var conversation = element(by.xpath("//a[text()='Conversations']"));
    var nameHeading = element(by.xpath("//th[text()=' Name ']"));
    var nameValue1 = element(by.xpath("//th[text()=' Name ']//following::td[1]"));
    var statusHeading = element(by.xpath("//th[text()=' Status ']"));
    var statusValue1 = element(by.xpath("//th[text()=' Status ']/following::td[2]"));
    var descriptionHeading = element(by.xpath("//th[text()=' Description ']"));
    var descriptionValue1 = element(by.xpath("//th[text()=' Description ']//following::td[3]"));
    var startingmsgHeading = element(by.xpath("//th[text()=' Starting Message ']"));
    var startingmsgValue1 = element(by.xpath("//th[text()=' Starting Message ']/following::td[4]"));
    var botURLHeading = element(by.xpath("//th[text()=' Bot URL ']"));
    var botURLValue1 = element(by.xpath("//th[text()=' Bot URL ']//following::button[1]"));
    var botIDHeading = element(by.xpath("//th[text()=' Bot Id ']"));
    var botIDValue1 = element(by.xpath("//th[text()=' Bot Id ']//following::button[2]"));
    var actionHeading = element(by.xpath("//th[text()=' Action ']"));
    var actionKebab1 = element(by.xpath("//th[text()=' Action ']//following::i[1]"));
    var assertLoginInPoup = element(by.xpath("//div[contains(text(),' To access the course you have to log in and join the course ')]//following::a[contains(text(),'Login')]"));
    var assertCourseDetailsAfterLogin = element(by.xpath("//*[contains(text(),'Course details')]"));
    var enableDiscussionsOpt = element(by.xpath("//div[text()=' Enable discussions ']"));
    var viewActivities = element(by.xpath("//h4[text()=' Activities']"));
    var clkDiscussionForum = element(by.xpath("//button[@title='Forum']"));
    var clkGeneralDiscussion1 = element(by.xpath("//div[text()='General Discussion']"));
    var startDiscussion = element(by.xpath("//button[@id='start-discussion']"));
    var discussionTopic = element(by.xpath("//label[text()='Discussion topic*']"));
    var buttonCancel = element(by.xpath("//button[@id='discard-discussion-start-form']"));
    var navigateBack = element(by.xpath("//button[text()=' Back ']"));
    var disableDiscussionsOpt = element(by.xpath("//div[text()=' Disable discussions ']"));
    var confirmDisable = element(by.xpath("//button[text()='Disable discussions']"));
    var enterDiscussionTopic = element(by.xpath("//input[@placeholder='Type here (minimum 8 characters)']"));
    var enterQuestionOrIdea = element(by.xpath("//textarea[@id='description']"));
    var submitOnDiscussionTopic = element(by.xpath("//span[text()='Submit']"));
    var createdTopic = element(by.xpath("//h3[text()='Demo1234']"));
    var generalDiscussion = element(by.xpath("//div[text()=' General Discussion ']"));
    var voteIcon = element(by.xpath("//img[@alt='votes icon']"));
    var closeButtonDiscussionForum = element(by.xpath("//button[@id='close-discussion-forum']"));
    var animationPage = element(by.xpath("//img[@alt='add activity']"));
    var clkTagOption = element(by.xpath("//a[text()='Tags']"));
    var tagPageAnimation = element(by.xpath("//label[text()='No tags Available !']//preceding::img[1]"));
    var noTagsAvailableMsg = element(by.xpath("//label[text()='No tags Available !']"));
    var assertDiscussionTopic = element(by.xpath("//input[@placeholder='Type here (minimum 8 characters)']"));
    var assertElaborateSection = element(by.xpath("//textarea[@placeholder='Type here (minimum 8 characters)']"));
    var viewIcon = element(by.xpath("//div[text()='General Discussion']//following::img[1]"));
    var createdTopic2 = element(by.xpath("//h3[text()='Demo5678']"));
    var cancelRejectButton = element(by.xpath("(//button[contains(@id,'submitReview')]//following::button[text()='Cancel'])[1]"));
    var clkBackButton1 = element(by.xpath("(//button[@type='button'])[4]"));
    var leaveCourse = element(by.xpath("//*[contains(text(),'Batch Details')]//following::button[contains(text(),'Leave course')]"));
    var batchDropDown = element(by.xpath("//span[contains(text(),'Batch Details')]"));
    var leaveCoursePopUp = element(by.xpath("//button[@id='unenrollFromCourse']"));
    var allTextbook = element(by.xpath("//a[contains(text(),' All Textbooks ')]"));
    var showFilter = element(by.xpath("//div[@id='showFilterButton']"));
    var contentType = element(by.xpath("//*[@id='primaryCategory']//following::div[contains(text(),' Select Content Type')]"));
    var sortBy = element(by.xpath("//div[@id='sortByDropDown']"));
    var submittedForReview = element(by.xpath("//a[contains(text(),' Submitted for review ')]"));
    var submtdforRevImageCard = element(by.xpath("(//span[contains(text(),' My Workspace ')])//following::span[@class='sliderCardHeading text-cencapitalize']"));
    var categoryCourse = element(by.xpath("(//label[contains(text(),'Category  ')]//following::select[@id='sb-dropdown'])[1]"));
    var clkCourse = element(by.xpath("//h4[text()=' Course modules']//following::div[15]"));
    var clkAbtTheContent = element(by.xpath("//*[contains(text(),'About the content')]"));
    var assertAuthorTitle = element(by.xpath("//div[contains(text(),'Author')]"));
    var assertAuthorName = element(by.xpath("//div[contains(text(),'Author')]//following::div[1]"));
    var attributionTitle = element(by.xpath("//div[text()='Attributions']"));
    var attributeName = element(by.xpath("//div[text()='Attributions']//following::div"));
    var licenceTermTitle = element(by.xpath("//div[text()='License Terms']"));
    var licenceName = element(by.xpath("//div[text()='License Terms']//following::div"));
    var copyRightTitle = element(by.xpath("//div[text()='Copyright']"));
    var copyRightValue = element(by.xpath("//div[text()='Copyright']//following::div"));
    var assertCourseInProgress = element(by.xpath("//div[text()='Course progress']"));
    var assertModuleProgress = element(by.xpath("//div[text()='Module progress']"));
    var exploreTab = element(by.xpath("//a[text()=' Explore ']"));
    var assertExploreClick = element(by.xpath("//div[text()='Browse by Categories']"));
    var assertLatestCourse = element(by.xpath("//span[text()='Course']//following::a[1]"));
    var assertBatch = element(by.xpath("(//span[text()='Batch']//following::span)[4]"));
    var assertOngoingBatch = element(by.xpath("(//div[text()='Ongoing'])[1]"));
    var clickFullScreen = element(by.xpath("//span[text()='Fullscreen']"));
    var clickMinimize = element(by.xpath("//span[text()='Minimize']"));
    var courseCompletionMsg = element(by.xpath("//div[text()='Congratulations!!']"));
    var clossCompletionPopUp = element(by.xpath("//button[@class='close-btn']"));
    var navigateBackButton = element(by.xpath("//*[text()=' Share ']//preceding::button[1]"));
    var courseComplted = element(by.xpath("//div[contains(text(),'100%')]"));
    var clkKebabMenuForSync = element(by.xpath("//div[@class='kabab-menu pull-right ng-star-inserted']"));
    var assertSyncProgress = element(by.xpath("//div[text()=' Sync progress now']"));
    var clkDropDown = element(by.xpath("(//span[contains(text(),'Ongoing')]//following::div)[1]"));
    var clkExpired = element(by.xpath("//span[contains(text(),'Expired')]//.."));
    var assertExpiredBatch = element(by.xpath("(//i[@class='calendar outline icon'])[1]//.."));
    var assertResumebtnForExpBatch = element(by.xpath("//button[text()='Resume']"));
    var assertJoinCourseBtnForExpBatch = element(by.xpath("//button[text()='Join Course']"));
    var assertCourseCardOnProfile = element(by.xpath("(//div[text()='Course'])[1]//following::h4[1]"));
    
    var viewMoreCourse = element(by.xpath("//button[contains(text(),'View more')]"));
    var expiredBatch = element(by.xpath("(//div[text()='Expired batch'])[1]"));
    var BatchName = element(by.xpath("(//div[text()='Expired batch'])[1]//preceding::div[2]"));
    var ExpiredCourseName = element(by.xpath("(//div[text()='Expired batch'])[1]//preceding::div[3]"));
    var assertExpiredCourse = element(by.xpath("//h6[contains(text(),'Batch has ended on ')]"));
    var assertExpiredCourse1 = element(by.xpath("//h6[contains(text(),'therefore your progress will not be updated.')]"));
    var clickToSelectMedium = element(by.xpath("//*[contains(text(),'Select Medium')]"));
    var selTamil = element(by.xpath("//span[text()='Tamil']"));
    var clickToSelectClass = element(by.xpath("//label[text()='Class']//following::sb-caret-down[1]"));
    var selClass2 = element(by.xpath("//span[text()='Class 2']"));
    var assertTextBook = element(by.xpath("(//div[text()='Digital Textbook'])[1]"));
    var assertBoardSelected = element(by.xpath("//span[text()='Tamil Nadu']"));
    var assertMediumSelected = element(by.xpath("(//span[contains(@title,'English,Tamil')])[1]"));
    var assertClassSelected  = element(by.xpath("(//span[contains(@title,'Class 1,Class 2')])[1]"));
    var clkRole = element(by.xpath("//span[contains(text(),'Role')]//following::div[2]"));
    var selParent = element(by.xpath("//span[text()='Parent']"));
    var clkState = element(by.xpath("//span[contains(text(),'Role')]//following::sb-caret-down[2]"));
    var selAP = element(by.xpath("//span[text()='Andhra Pradesh']"));
    var clkDistrict = element(by.xpath("//span[contains(text(),'Role')]//following::sb-caret-down[3]"));
    var selChittoor = element(by.xpath("//span[text()='Chittoor']"));
    var clkbtnEdit2 = element(by.xpath("(//button[contains(text(),'Edit')])[2]"));
    var clkBoardUpdate = element(by.xpath("//label[text()='Board ']//following::sui-select"));
    var selNCERT = element(by.xpath("//span[text()='CBSE/NCERT']"));
    var clkMediumUpdate = element(by.xpath("//label[text()='Medium ']//following::sui-multi-select[1]"));
    var selHindi = element(by.xpath("//span[text()='Hindi']"));
    var clkClassUpdate = element(by.xpath("//label[text()='Class ']//following::sui-multi-select[1]"));
    var selClass = element(by.xpath("//span[text()='Class 2']"));
    var assertUpdatedRole = element(by.xpath("//div[text()=' Parent']"));
    var assertUpdatedDist = element(by.xpath("//div[text()=' Chittoor ']"));
    var assertUpdatedState = element(by.xpath("//div[text()=' Andhra Pradesh']"));
    var assertBoardUpdated = element(by.xpath("(//span[text()='CBSE/NCERT'])[1]"));
    var assertMediumUpdated = element(by.xpath("(//span[text()='Hindi'])[1]"));
    var assertClassUpdated = element(by.xpath("(//span[text()='Class 2'])[1]"));

    var shareIcon = element(by.xpath("//*[@id='keyword']//following::button[contains(text(),' Share ')]"));

    var sharePopUpCloseIcon = element(by.xpath("//button[contains(@aria-label,'close dialog')]"));
    var assertCourseProgressInHindi = element(by.xpath("//div[text()='कोर्स प्रगति']"));
    var assertCourseCompleteInHindi = element(by.xpath("(//div[contains(text(),'100%')]//following::span)[1]"));
    var assertCourseSyncInHindi = element(by.xpath("//div[text()=' अब प्रगति को समन्वयित करें']"));
    var sltKannadaLang = element(by.xpath("//span[contains(text(),'ಕನ್ನಡ')]"));
    var assertCourseInProgKannada = element(by.xpath("(//div[contains(text(),'100%')]//following::span[contains(text(),'ಪೂರ್ಣಗೊಂಡಿತು')])"));
    var assertCourseSyncInKannada = element(by.xpath("//div[text()=' ಈಗ ಪ್ರಗತಿಯನ್ನು ಸಿಂಕ್ ಮಾಡಿ']"));
    var clkLangDropdown = element(by.xpath("//*[contains(text(),'हिंदी')]/following::i"));
    var assertToastMsg = element(by.xpath("//strong[text()='You can view your updated course progress within 24 hours']"));
    var assertConversationPage = element(by.xpath("(//div[contains(text(),'Add new conversation')])[1]"));
    var submitDiscussion = element(by.xpath("//button[contains(@id,'submit-discussion-start-form')]"));


    var viewCollaborator = element(by.xpath("//div[@data-title='View collaborator']//child::i[@class='icon user plus mr-0']"));
    var courseEndDate =element(by.xpath("(//*[contains(@id,'dashoardFiltersHolder')]//following::div[@class='sb-course-progress-status-result'])"));
    var courseEndDateLabel =element(by.xpath("(//*[contains(@id,'dashoardFiltersHolder')]//following::span[@class='course-end-dt course-participants-label'])[1]"));
    var batchContentCard = element(by.xpath("//span[contains(text(),'Ongoing Courses')]//following::div[8]"));
    var updatedBatchName = element(by.xpath("//span[contains(text(),'Ongoing Courses')]//following::span[2]"));
    var listOfPublishedUserTypeDropDwn = element(by.xpath("//div[@aria-label=', selected ,Select User Type']//following-sibling::div"));
    var courseTab = element(by.xpath("//a[contains(text(),'Digital textbooks')]//following::a[contains(text(),' Courses ')][1]"));
    var tvClasstab = element(by.xpath("//a[contains(text(),'Digital textbooks')]//following::a[contains(text(),' TV classes ')]"));
    var enableDiscussionInCreateBatch = element(by.xpath("(//input[@formcontrolname='enableDiscussions'])[1]"));
    var validateForum = element(by.xpath("//*[@alt='Forum']"));
    var KebabOptOnActionColumn = element(by.xpath("((//span[contains(text(),'Copy')])//following::span)[5]//following::*[contains(text(),'more_vert')]"));
    var editOptOnActionColumn = element(by.xpath("(//button[contains(text(),'Edit')])[1]"));
    var deleteOptOnActionColumn = element(by.xpath("(//button[contains(text(),'Delete')])"));
    var DisableOptOnActionColumn = element(by.xpath("(//button[contains(text(),' Disable ')])"));
    var inputSearchName = element(by.xpath("//input[@data-placeholder='Search']"));
    var clkSearchName = element(by.xpath("//span[contains(text(),' Search ')]"));
    var assertConversationName = element(by.xpath("(//*[contains(text(),'Conversation name')])[1]"));
    var assertConversationDesc = element(by.xpath("(//*[contains(text(),'Conversation description')])[1]"));
    var assertConversationPurpose = element(by.xpath("(//*[contains(text(),'Purpose of the conversation ')])[1]"));
    var assertStartingMsg = element(by.xpath("(//*[contains(text(),'Start Message ')])[1]")); 
    var assertNextButton = element(by.xpath("(//span[contains(text(),'Next')])[1]"));
    var assertConversationFlow = element(by.xpath("(//div[contains(text(),'Conversation flow')])[1]"));
    var EnableOptOnActionColumn = element(by.xpath("//button[contains(text(),'Enable')]"));
    var assertLiveOption = element(by.xpath("//td[contains(text(),'Live')]"));
    var enterConversationName = element(by.xpath("//input[@placeholder='Enter name']"));
    var enterconversationPurpose = element(by.xpath("//input[@placeholder='Enter purpose']"));
    var enterStartingMsg = element(by.xpath("//input[@placeholder='Enter message']"));
    var assertNoLogicAdded = element(by.xpath("//div[text()=' No logic Added ']"));
    var assertAddLogicBtn = element(by.xpath("//span[contains(text(),' Add logic ')]"));
    var assertConvSetUpWithGreen = element(by.xpath("//button[@class='circular ui icon button green-bg-white-text']"));
    var assertConvFlowWithBlue = element(by.xpath("//button[@class='circular ui icon button blue-bg-white-text']"));
    var backBtnConvFlow = element(by.xpath("(//span[contains(text(),' Back ')])"));
    var assertConvSetUpWithBlue = element(by.xpath("//button[@class='circular ui icon button blue-bg-white-text']"));
    var assertDisabledOption = element(by.xpath("//td[text()='Disabled']"));
    var assertToastMsgEnable = element(by.xpath("//strong[text()='Enabled discussion forum successfully']"));
    var addmemberButton = element(by.xpath("//input[@id='search-within-group']//following::*[contains(text(),'Add member')]"));
    var addAnotheruser = element(by.xpath("//div[@aria-label='Add User']"));
    var addUser = element(by.xpath("//input[contains(@id,'keyword')]//following::button[contains(text(),' Add user ')]"));
    var userSelected = element(by.xpath("(//div[@class='sb-members-list-item sb-members-list-item--small sb-members-list-item--vertical'])[2]"));
    var changeUserButton = element(by.xpath("//input[@id='keyword']//following::button[contains(text(),' Change user ')]"));
    var userIdName = element(by.xpath("//input[contains(@id,'keyword')]//following::div[@id='copyUser']"));
    var notificationBell = element(by.xpath("//input[contains(@id,'keyword')]//following::*[contains(@class,'icon bell-icon')]"));
    var moreUser = element(by.xpath("//div[@class='more-user__btn']"));
    var messageNotification = element(by.xpath("//div[contains(text(),'Notification')]//following::div[@class='sb-notification-list p-8'][1]"));
    var userNameInput = element(by.xpath("//input[contains(@id,'keyword')]//following::input[contains(@placeholder,'Enter your name')]"));
    var profilePage = element(by.xpath("//li[contains(text(),' Profile ')]"));
    var hamburgerMenu = element(by.xpath("(//div[contains(@class,'menu ml-8')])[3]"));
    var removeMember = element(by.xpath("//span[contains(text(),'Remove member')]"));
    var backButton = element(by.xpath("//button[contains(@aria-label,'Back')]"));
    var removeMemberPopup = element(by.xpath("//button[contains(text(),'Remove member')]"));
    var myDiscussions = element(by.xpath("//a[text()='My discussion']"));
    var clkGeneralDisc = element(by.xpath("(//div[text()=' General Discussion '])[1]"));
    var enterAns = element(by.xpath("//textarea[@placeholder='Type here (minimum 10 characters)']"));
    var postReply = element(by.xpath("//span[text()='Post Reply']"));
    var assertRecentPost = element(by.xpath("//p[text()='automation demo']"));
    var assertUserWithSplChar = element(by.xpath("//span[contains(text(),'$')]"));
    var clearAllNotification = element(by.xpath("//*[contains(text(),'Clear')]"));
    var assertCountAtBellIcon = element(by.xpath("//div[text()='1']"));
    var assertNotification = element(by.xpath("//div[text()='Notification']"));
    var clkNotification1 = element(by.xpath("(//img[@class='Delete-gray'])[1]//following::div[1]"));
    var clkNotification2 = element(by.xpath("(//img[@class='Delete-gray'])[2]//following::div[1]"));
    var btnCloseNotificationList = element(by.xpath("//button[@aria-label='close dialog']"));
    var assertNotification1Clickable = element(by.xpath("//h4[text()='Course details']"));
    var assertNotification2Clickable = element(by.xpath("//h4[text()='Course details']"));
    var clkFirstActivity = element(by.xpath("//div[text()=' Course ']//following::a[1]"));
    var clkRemoveActivity = element(by.xpath("//span[text()='Remove activity']"));
    var clkBtnRemove = element(by.xpath("//button[text()='Remove']"));
    var deleteNotification = element(by.xpath("//img[@class='Delete-gray']"));
    var deleteNotification2 = element(by.xpath("//img[@class='Delete-red']"));
    var assertUnassignedMsg = element(by.xpath("//div[contains(text(),'has been unassigned')]"));
    var assertAssignedMsg = element(by.xpath("//div[contains(text(),'has been assigned')]"));
    var tagsButton = element(by.xpath("(//div[@class='discuss-left-panel']//following::a[contains(text(),'Tags')])[1]"));

    var tagIcon = element(by.xpath("//div[@id='search-input-container']//following::span[@class='margin-left-m'][1]"));
     

    var assertConversations = element(by.xpath("//a[text()='Conversations']"));
    var assertbotName = element(by.xpath("//th[contains(text(),'Name')]//following::td"));
    var assertbotStaus = element(by.xpath("//th[contains(text(),'Name')]//following::td[2]"));
    var assertbotDesc = element(by.xpath("//th[contains(text(),'Name')]//following::td[3]"));
    var dropDownIssueCertificate = element(by.xpath("//div[text()='Select']//following::i[1]"));
    var clkMyStateTeacher = element(by.xpath("//span[text()='My state teacher']"));
    var clkmerit = element(by.xpath("//span[text()='100%']"));
    var checkAllElements = element(by.xpath("//label[text()='All the elements and attributes are thoroughly verified']"));
    var selCertificate1 = element(by.xpath("//button[text()=' Refresh ']//following::div[1]"));
    var clkPreview = element(by.xpath("(//span[text()='Preview'])[1]"));
    var btnSelTemplate = element(by.xpath("//button[text()=' Select template ']"));
    var btnAddCertificate = element(by.xpath("//button[text()='Add certificate']"));
    var assertCertificateAdded = element(by.xpath("//strong[text()='Certificate added successfully']"));
    var assertCourseCardImage = element(by.xpath("//*[text()=' Share ']//preceding::img[1]"));
    var assertCourseModule = element(by.xpath("//h4[text()=' Course modules']"));
    var assertCourseUnit = element(by.xpath("//h4[text()=' Course Unit ']"));
    var assertCourseDetails = element(by.xpath("//h4[text()='Course details']"));

    var assertSerchedContentInLibrary = element(by.xpath("//div[contains(text(),'Showing (1) most relevant content')]//following::div[9]"));
    var expandChapter = element(by.xpath("(//div[contains(text(),'Folders')]//following::span)[12]"));
    var courseInChildNode = element(by.xpath("//div[contains(text(),'Folders')]//following::span[@class='fancytree-title'][3]"));
    var assertAlreadyAddedToFolder = element(by.xpath("//*[contains(text(),' Already present in this folder')]"));
    var assertAddContentButton = element(by.xpath("//button[contains(@id,'addResource')]"));
    var closeAddContentPopup = element(by.xpath("//*[contains(@aria-label,'close')]"));
    var childNode = element(by.xpath("//span[contains(@title,'Textbook Unit')]"));
    var homeTab = element(by.xpath("//div[@id='search-input-container']//following::*[contains(text(),'Home')]"));
    var digitalTextbookInHomeTab = element(by.xpath("//div[contains(text(),'Browse by Categories')]//following::label[contains(text(),'Digital Textbook')]"));
    var assertContentTypeFilter = element(by.xpath(" //div[contains(@id,'search-input-container')]//following::label[contains(text(),'Content type')]//following::span[contains(text(),' digital textbook')]"));
    var assertAdditionalCategory = element(by.xpath("//div[contains(@id,'search-input-container')]//following::label[contains(text(),'Additional Categories')]//following::*[contains(text(),'Select Additional Categories')]"));
    var lessonPlanadditionalCategory = element(by.xpath(" //div[contains(@id,'search-input-container')]//following::label[contains(text(),'Additional Categories')]//following::*[contains(text(),'lesson plan')]"));
    var backButtonInExplorePage = element(by.xpath("//div[contains(@id,'search-input-container')]//following::button[contains(@aria-label,'“Back”')]"));
    var back = element(by.xpath("//input[@id='keyword']//following::button[@type='button']"));
    var browseByCategories = element(by.xpath("//*[contains(text(),'Explore')]//following::div[contains(text(),'Browse by Categories')]//following::label[contains(text(),'Digital Textbook')]"));
    var contentTypeByPrimaryCategory = element(by.xpath("//label[contains(text(),'Content type')]//following::span[contains(text(),' digital textbook')]"));
    var groupingBasedOnSubject = element(by.xpath("//label[contains(text(),'Subject :')]//following::*[contains(text(),' Accountancy ')][1]"));
    var appliedFilters = element(by.xpath("//div[contains(text(),' Applied filters')]//following::label[contains(text(),'Content type :')]//following::*[contains(text(),' digital textbook ')]"));
    var filterBasedOnSubject = element(by.xpath("//div[contains(text(),' Applied filters')]//following::label[contains(text(),'Subject :')]//following::*[contains(text(),'accountancy')]"));
    var browseByBoard = element(by.xpath("//*[contains(text(),'Explore')]//following::div[contains(text(),'Browse by Categories')]//following::label[contains(text(),'Cbse/ncert')]"));
    var browseByRoles = element(by.xpath("//*[contains(text(),'Explore')]//following::div[contains(text(),'Browse by Audience')]//following::label[contains(text(),'School Head Or Officials')]"));
    var validateDefaultBoardType = element(by.xpath("//label[contains(text(),'Board')]//following::span[contains(text(),'CBSE/NCERT')][1]"));
    var appliedFilterBoardType = element(by.xpath("//div[contains(text(),' Applied filters')]//following::label[contains(text(),'Board :')]//following::*[contains(text(),'CBSE/NCERT')]"));
    var selectSubjectFromDrpDwn = element(by.xpath("(//label[contains(text(),'Subject')]//following::span[contains(text(),'accountancy')])[1]"));
    var validateDefaultBoard = element(by.xpath("//label[contains(text(),'Board')]//following::span[contains(text(),' state (tamil nadu)')][1]"));
    var validateDefaultMedium = element(by.xpath("//label[contains(text(),'Medium')]//following::span[contains(text(),' english')][1]"));
    var validateDefaultClass = element(by.xpath("//label[contains(text(),'Class')]//following::span[contains(text(),' class 1')][1]"));
    var validateDefaultSubject = element(by.xpath("//label[contains(text(),'Subject')]//following::span[contains(text(),' accountancy')][1]"));
    var validateDefaultContenttype = element(by.xpath("//label[contains(text(),'Content type')]//following::span[contains(text(),' digital textbook')][1]"));
    var contentDrpDownForHomeTab = element(by.xpath("//*[@id='primaryCategory']//following::*[contains(text(),'Select Content type')]"));
    var viewAllButtonForrecentlyPublishedCourse = element(by.xpath("(//button[contains(text(),' View all ')])[2]"));
    var browsebySubjlabel = element(by.xpath("//div[contains(text(),'Browse by Subjects')]"));
    var browsebyCategorylabel = element(by.xpath("//div[contains(text(),'Browse by Categories')]"));
    var browseOthercategoryLabel = element(by.xpath("//div[contains(text(),'Browse Other Categories')]"));
    var browseByBoardLabel = element(by.xpath("//div[contains(text(),'Browse by Board')]"));
    var browsebyAudienceLabel = element(by.xpath("//div[contains(text(),'Browse by Audience')]"));
    var resumeExpiredBatch = element(by.xpath("//*[contains(text(),' Expired Batches')]//following::*[contains(text(),'Resume')]"));
    var batchEndDate = element(by.xpath("//*[contains(text(),'Continue learning')]//preceding::*[contains(text(),'Batch has ended on 2022-02-24, therefore your progress will not be updated.')]"));
    var myCourseSection = element(by.xpath("//input[(@id='keyword')]//following::span[contains(text(),'My courses')]"));
    var englishSubject = element(by.xpath("//span[contains(text(),'My courses')]//following::div[contains(text(),' English ')]"));
    var hindiSubjects = element(by.xpath("//span[contains(text(),'My courses')]//following::div[contains(text(),' Hindi ')]"));
    var subjectAccountancy = element(by.xpath("//span[contains(text(),'My courses')]//following::div[contains(text(),'Accountancy')]"));
    var businessStudiesSubject = element(by.xpath("//span[contains(text(),'My courses')]//following::div[contains(text(),' Business Studies ')]"));
    var learningResourceContentTypes = element(by.xpath("//input[@id='keyword']//following::*[contains(text(),' Learning Resource ')]"));
    var explanationContentTypes = element(by.xpath("//input[@id='keyword']//following::*[contains(text(),' Explanation Content ')]"));
    var eTextBookContentTypes = element(by.xpath("//input[@id='keyword']//following::*[contains(text(),' eTextbook ')]"));
    var practiceQuestionSetContentTypes = element(by.xpath("//input[@id='keyword']//following::*[contains(text(),' Practice Question Set ')]"));
    var textBookUnitContentTypes = element(by.xpath("//input[@id='keyword']//following::*[contains(text(),' Textbook Unit')]"));
    var teacherResourceContentTypes = element(by.xpath("//input[@id='keyword']//following::*[contains(text(),' Teacher Resource ')]"));
    var digitalTextBookContenttypes = element(by.xpath("//input[@id='keyword']//following::*[contains(text(),' Digital Textbook ')]"));
    var allTab = element(by.xpath("//input[@id='keyword']//following::*[contains(text(),' All ')]"));

    var assertBatchStartDate = element(by.xpath("//div[contains(text(),'Batch start date')]//following::div[1]"));
    var assertBatchEnddate = element(by.xpath("//div[contains(text(),'Batch end date')]//following::div[1]"));
    var assertEnrollmentEndDate = element(by.xpath("//div[contains(text(),'Enrolment end date')]//following::div[1]"));
    var batchDetailsExpanding = element(by.xpath("//*[contains(text(),'Batch Details')]"));
    var batchDateDetailsAfterJoiningCourse = element(by.xpath("//div[contains(text(),'Batch')]//following::div[1]"));
    var leaveCourseButton = element(by.xpath("//div[contains(text(),'Batch')]//following::button[contains(text(),'Leave course')]"));
    var assertContinueLearning = element(by.xpath("//span[contains(text(),'Continue Learning')]"));

    var clickclass1 = element(by.xpath("//*[contains(text(),'Select Class')]"));
    var SelectClass1 = element(by.xpath("//*[contains(text(),'Select Class')]//following::div[2]"));
    var clicksubject1 = element(by.xpath("//*[contains(text(),'Select Subject')]"));
    var selectSubject1 = element(by.xpath("//*[contains(text(),'Select Subject')]//following::div[2]"));
    var selectSubjectValue1 = element(by.xpath("//*[@id='subject']/div[2]/sui-select-option[1]/span[contains(text(),'Accountancy')]"));
    var contentType1 = element(by.xpath("//*[contains(text(),'Select Content type')]"));
    var contentTypeValue1 = element(by.xpath("//span[contains(text(),'course')]"));
    var clickBoardAllMyContent1 = element(by.xpath("//*[contains(text(),'Select Board')]"));
    var selectBoardAllMyContent1 = element(by.xpath("//*[contains(text(),'Select Board')]//following::span[2]"));
    var clickFilterMedium1 = element(by.xpath("//*[contains(text(),'Select Medium')]"));
    var selectFilterMedium1 = element(by.xpath("//*[contains(text(),'Select Medium')]//following::span[2]"));
    var filterByButton = element(by.xpath("//input[@id='search-for-content-group']//following::button[text()='Filter by ']"));

    var profileDataSharingDrpdwn = element(by.xpath("(//*[contains(text(),'Profile data sharing')])[1]"));
    var updateButton = element(by.xpath("(//*[contains(text(),'Profile data sharing')])[2]//following::*[contains(text(),'Update')][1]"));
    var shareMyProfileDetails = element(by.xpath("//input[contains(@id,'shareConsent')]//.."));
    var donotShareMyProfileDetails = element(by.xpath("//input[contains(@id,'noShareContent')]"));
    var profileDataSharingSaveButton = element(by.xpath("//button[contains(text(),'Save')]"));
    var termsAndConditions = element(by.xpath("//*[contains(text(),' I consent to share my details with the administrators of this course. All course administrators are bound by the Privacy Policy and Course Terms in their use of my data.')]"));
    var relevantSection = element(by.xpath("//*[contains(text(),'The collection is relevant for')]"));
    var relevantSectionData = element(by.xpath("//*[contains(text(),'The collection is relevant for')]//following::div[1]"));
    var courseRelevantSection = element(by.xpath("//*[contains(text(),'Course details')]//following::div[1]"));

    var typeToSearchFiled = element(by.xpath("//input[@id='search-for-content-group']"));
    var btnSearch = element(by.xpath("(//button[contains(text(),'Search')])[2]"));
    var assertActvityAdded = element(by.xpath("//strong[text()='Activity added successfully']"));
    var viewAllButtonForMyCourseSection = element(by.xpath("//input[(@id='keyword')]//following::span[contains(text(),'My courses')]//following::button[contains(text(),'View all')]"));
    var insideMyCourseSection = element(by.xpath("//input[(@id='keyword')]//following::*[contains(text(),'My courses')]"));
    var enrollmentEndDateNearjoinButton = element(by.xpath("//*[text()='Continue learning']//preceding::*[contains(text(),'Batch has ended on 2022-02-24')]"));
    var profileIconInSideNavBar = element(by.xpath("//div[contains(text(),'Add another user ')]//following::*[contains(text(),'Profile')]"));
    var assertMyLearningSection = element(by.xpath("//label[contains(text(),'My learning')]"));
    var viewMoreDropDwn = element(by.xpath("(//button[contains(text(),'View more')]//following::i)[1]"));
    var assertExpiredBatchNearJoinButton = element(by.xpath("//button[contains(text(),'Start learning')]//preceding::h6//parent::div"));
    var courseCompletionPopUp = element(by.xpath("//*[contains(text(),'You have successfully completed the course')]"));
    var courseCompletionClosePopUp = element(by.xpath("//button[contains(@aria-label,'close dialog')]"));
    var courseProgressPercentage = element(by.xpath("//div[contains(text(),'Course progress')]//following::div[contains(text(),'100% Completed')]"));
    var courseProgressKebabMenu = element(by.xpath("//div[contains(text(),'Course progress')]//preceding::div[contains(@class,'kabab-menu pull-right ng-star-inserted')]"));
    var doNotShowThisMsgAgain = element(by.xpath("//div[contains(text(),'Confirm profile name')]//following::*[contains(@type,'checkbox')]"));
    var continueButton = element(by.xpath("//button[contains(text(),'Continue')]"));
    var clickTheCourse = element(by.xpath("//*[contains(text(),'TeacherResourceEpub')]"));
    var browseByUserTypeSchool = element(by.xpath("//*[contains(text(),'Explore')]//following::div[contains(text(),'Browse by Audience')]//following::label[contains(text(),'School Head Or Officials')]"));
    var exploreByUserTypeLabel = element(by.xpath("//button[contains(@aria-label,'Back')]//following::div[1]"));
    var leftSideSunbirdLogo = element(by.xpath("//*[contains(@aria-label,'Navigate to Homepage')]"));
    var assertdisableDigiTextbookTab = element(by.xpath("(//a[contains(@class,'active')])[1]"));
    var assertIdisplayesBesidePreference = element(by.xpath("//*[contains(text(),'Your preferences ')]//following::*[@src='assets/images/icon-info.svg']"));
    var assertHiUserNameAbovePreference = element(by.xpath("//*[contains(text(),'Your preferences ')]//preceding::*[contains(text(),'Hi')]"));
    var hindiBoardLabel = element(by.xpath("//label[contains(text(),'बोर्ड')]"));
    var hindiMediumLabel = element(by.xpath("//label[contains(text(),'माध्यम')]"));
    var hindiClassLabel = element(by.xpath("//label[contains(text(),'कक्षा')]"));
    var hindiSubjectLabel = element(by.xpath("//label[contains(text(),'विषय')]"));
    var urduBoardlabel = element(by.xpath("//label[contains(text(),'ಮಂಡಳಿ')]"));
    var urduMediumLabel = element(by.xpath("//label[contains(text(),'ಮಾಧ್ಯಮ')]"));
    var urduClassLabel = element(by.xpath("//label[contains(text(),'ತರಗತಿ')]"));
    var urduSubjectLabel = element(by.xpath("//label[contains(text(),'ವಿಷಯ')]"));
    var languagedropdwn = element(by.xpath("(//span[contains(text(),'हिंदी')])[1]"));
    var editBatch = element(by.xpath("//button[contains(text(),'Edit')]"));
    var batchUpdateButton = element(by.xpath("//button[contains(text(),' Update ')]"));
    var viewAllButtonFromNCERTsceton = element(by.xpath("(//button[contains(text(),'View all')])[3]"));
    var enterStartDate = element(by.xpath("(//input[contains(@formcontrolname,'startDate')])[1]"));
    var dicussCardTagsinput = element(by.xpath("(//input[@aria-label='Add a tag and press Enter'])"));
    var selectBrowseByAudience = element(by.xpath("//div[@role='button']//following::label[contains(text(),'Student')]"));
    var assertAddColaborator = element(by.xpath("//*[contains(text(),'Add Collaborators')]"));
    var clkAddCollaborator = element(by.xpath("//div[contains(@data-title,'View collaborator')]"));
    var closeIconInCollaborator = element(by.xpath("//*[contains(@aria-label,'close')]"));
    var batchTypedropDown = element(by.xpath("//*[contains(@id,'batches')]//following::*[contains(@role,'combobox')]//following::span[text()='Ongoing']"));
    var sltUpcomingBatch = element(by.xpath("//*[contains(@id,'batches')]//following::*[contains(@aria-label,'Upcoming')]//following::span[contains(text(),'Upcoming')]"));
    var editButton = element(by.xpath("//*[contains(@id,'batches')]//following::*[contains(text(),'Edit')]"));
    var assertUpcomingDates = element(by.xpath("//*[contains(@id,'batches')]//following::*[contains(@class,'calendar outline icon')]//following::span[1]"));
    //var batchUpdateButton = element(by.xpath("//*[contains(@id,'batches')]//following::button[contains(text(),'Update')]"));
    var assertCoursesInNcertSection = element(by.xpath("//div[contains(text(),'Course')]"));
    var asserTextbookInNcertSection = element(by.xpath("//div[contains(text(),'TextBook')]"));
    var listOfCourseCard = $$(by.xpath("//div[contains(@class,'sb-grid dynamic-section-card')]"));
    var instructionPage = element(by.xpath("(//span[contains(text(),'Instruction')])[2]"));
    var assertContentPrefnderOrgName = element(by.xpath("//div[contains(text(),'Staging Custodian Organization')]//following::*[contains(text(),'Content preference')]//following::div[1]"));
    var assertBMGSdisplayedUnderLocationDetails = element(by.xpath("(//div[contains(text(),'Staging Custodian Organization')]//following::*[contains(text(),'Content preference')]//following::div[1]//following::div)[13]"));
    var shareButton = element(by.xpath("//button[contains(text(),'Share')]"));
    var closeShareButton = element(by.xpath("//button[contains(@class,'close-btn')]"));
    var closebutton = element(by.xpath("//button[contains(text(),'Close ')]//following::i"));
    var viewAllcontinueLearningInHomeTab = element(by.xpath("//input[(@id='keyword')]//following::span[contains(text(),'Continue Learning')]//following::button[contains(text(),'View all')][1]"));
    var inputshareLink = element(by.xpath("//input[contains(@aria-label,'copy link data')]//following::button"));
    var sharebuttonInContent = element(by.xpath("//input[contains(@id,'keyword')]//following::*[contains(text(),'Share')]"));
    var toastMessage = element(by.className("iziToast-texts"));
    var listOfElementsOnHeader = element.all(by.xpath("(//app-header//following::div[contains(@class,'sbt-container')])[1]//child::header"));
    var listOfElementsOnConsumptionScreen = element.all(by.xpath("(//app-course-consumption-header//following::div[contains(@class,'ui container py-8 px-0 d-flex flex-ai-center')])"));
    var forumButtonInConsumptionScreen = element(by.xpath("//button[contains(@title,'Forum')]"));
    //var shareButtonOnConsumptionScreen = element(by.xpath("//*[contains(text(),'Share')]"));
    var contentTitle = element(by.xpath("//*[contains(text(),'forum')]"));
    var continueLearningButton = element(by.xpath("//*[contains(text(),'Continue learning')]"));
    var newBatchDrpDwn = element(by.xpath("//*[contains(text(),'Batches')]"));
    var assertTextBookInList = element(by.xpath("//th[contains(text(),'Content')]//following::img[1]"));
    var assertSearchField = element(by.xpath("//input[@placeholder='Search content']"));
    var assertShowFilter = element(by.xpath("//span[contains(text(),'Show Filters')]"));
    var selectBoardOpt = element(by.xpath("//label[contains(text(),'Board')]//following::div[1]"));
    var selectBoardValue = element(by.xpath("//option[contains(text(),'State (Tamil Nadu)')]"));
    var selectMediumOpt = element(by.xpath("//label[contains(text(),'Medium')]//following::div[1]"));
    var selectMediumValue = element(by.xpath("//label[contains(text(),'English')]"));
    var selectMediumValue2 = element(by.xpath("//label[contains(text(),'Tamil')]"));
    var selectClassOpt = element(by.xpath("//label[contains(text(),'Class(es)')]//following::div[1]"));
    var selectClassValue = element(by.xpath("//label[contains(text(),'Class 1')]"));
    var selectClassValue2 = element(by.xpath("//label[contains(text(),'Class 2')]"));
    var selectSubjectOpt = element(by.xpath("//label[contains(text(),'Subject(s)')]//following::div[1]"));
    var selectSubjectVal = element(by.xpath("(//label[contains(text(),'English')])[2]"));
    var selectSubjectVal2 = element(by.xpath("//label[contains(text(),'Mathematics')]"));
    var enterCopyrightVal = element(by.xpath("//label[contains(text(),'Copyright Year')]//following::input"));
    var selectStatus = element(by.xpath("//div[contains(text(),'Select Status')]"));
    var selectDraft = element(by.xpath("(//span[contains(text(),'Draft')])[1]"));
    var clkAfterSelect = element(by.xpath("//div[contains(text(),'Select Subject')] //following::div[2]"));
    var btnApplyStatus = element(by.xpath("//button[contains(text(),'Apply')]"));
    var assertLatestRelevantContent = element(by.xpath("//div[contains(text(),'Showing (100) most relevant content')]"));
    var progressCount = element(by.xpath("//div[contains(text(),'Course progress')]//following::div[1]"));
    var courseCardImage = element(by.xpath("//*[@src='assets/images/book.png']"));
    var assertPublisher = element(by.xpath("(//div[contains(text(),'Published on SUNBIRD by')]//..)[1]"));
    var assertBMCS = element(by.xpath("//div[@class='training-relevant mb-16']"));
    var nextButtonInCourseMCQ = element(by.xpath("//*[@alt='Navigate to Next']"));
    var nextButtonPopUp = element(by.xpath("//button[text()='Next']"));
    var mcqAnswerOne = element(by.xpath("//*[text()='₿']"));
    var assertFullResolution = element(by.xpath("//span[text()='Fullscreen']//.."));
    var boldKeyButton = element(by.xpath("(//div[@aria-label='Editor toolbar']//following::*[@class='ck ck-icon ck-button__icon'])[1]"));
    var italicRichTextButton = element(by.xpath("(//div[@aria-label='Editor toolbar']//following::*[@class='ck ck-icon ck-button__icon'])[2]"));
    var underLineRichTextButton = element(by.xpath("(//div[@aria-label='Editor toolbar']//following::*[@class='ck ck-icon ck-button__icon'])[3]"));
    var asserFourCourseCardCount = element.all(by.xpath("(//*[contains(text(),'Recently published courses')]//following::*[text()='Course'])"));
    var viewAllCourseButton = element(by.xpath("(//button[text()='View all'])[1]"));
    var secondCourseCard = element(by.xpath("(//div[contains(@role,'link')])[3]"));
    var firstCourseCard = element(by.xpath("//div[contains(@role,'link')]"));
    var browseByAudinceContent = element(by.xpath("//*[contains(text(),'Explore')]//following::div[contains(text(),'Browse by Audience')]//following::label[contains(text(),'School Head Or Officials')]"));
    var viewAllCourseButtonForBoard = element(by.xpath("(//button[text()='View all'])[3]"));
    var viewAllCourseButtonForAudience = element(by.xpath("(//*[contains(text(),' Course ')]//following::button[contains(text(),'View all')])[1]"));
    var clkOut = element(by.xpath("//div[contains(text(),'Select one')]"));
    var clickExistingBook = element(by.xpath("//span[contains(text(),'DontDelete')]"));
    var downloadCertificateFromLearnerPassBook = element(by.xpath("//label[contains(text(),'4.4 Ashok Course 1')]//following::button[text()='Download certificate']"));
    var selectUser = element(by.xpath("//input[contains(@id,'keyword')]//following::button[contains(text(),' Add user ')]//following::div[3]"));
    var tNcCheckBox = element(by.xpath("(//div[contains(text(),'Terms and Policies‎')])[1]//following::span[contains(text(),'I agree to the updated terms and policies')]"));
    var continueButtonForTnC = element(by.xpath("//button[contains(text(),' Continue ')]"));
    var selectBatchDropdown = element(by.xpath("(//div[@id='dashoardFiltersHolder']//following::span)[1]//.."));
    var selectBatch = element(by.xpath("(//*[contains(@aria-label,'Batch')])[3]"));
    var closeMemberDialog = element(by.xpath("//*[contains(@aria-label,'Close Member dialog')]"));
    var assertAddtoGroup = element(by.xpath("//button[contains(text(),'Verify')]//following::button[contains(text(),' Add to group ')]"));
    var startDateInconvFlow = element(by.xpath("//input[@formcontrolname='startDate']"));
    var endDateInconvflow = element(by.xpath("//input[@formcontrolname='endDate']"));
    var assertDisable = element(by.xpath("//label[@for='false']"));
    var BoardDropDown = element(by.xpath("//label[contains(text(),'Board')]//following::sb-caret-down[1]"));
    var selBoard = element(by.xpath("(//span[contains(text(),'CBSE/NCERT')])[2]"));
    var MediumDropdown = element(by.xpath("//label[contains(text(),'Medium')]//following::sb-caret-down[1]"));
    var selMed = element(by.xpath("//label[contains(text(),'Medium')]//following::span[contains(text(),'English')][1]"));
    var ClassDropdown = element(by.xpath("//label[contains(text(),'Class')]//following::sb-caret-down[1]"));
    var selClass1 = element(by.xpath("//label[contains(text(),'Class')]//following::span[contains(text(),'Class 1')][1]"));
    var assertBoardVal = element(by.xpath("(//span[text()='CBSE/NCERT'])[1]"));
    var assertMedium = element(by.xpath("(//span[text()=' English'])[1]"));
    var assertClass = element(by.xpath("//span[text()=' Class 1']"));
    var submitDetails = element(by.xpath("//button[contains(text(),'Submit details')]"));
    var clkReqDropDown = element(by.xpath("//label[contains(text(),'I wish to share my data with:')]//following::sb-caret-down"));
    var selectStateAP = element(by.xpath("//span[contains(text(),'Andra Pradesh')]"));
    var assertGuidlinePostClickSubmitDetails = element(by.xpath("//span[contains(text(),'I consent to provide my Profile Details and the additional details listed above with the administrators of my State / Institution. All administrators on DIKSHA are bound by the Privacy Policy and Administrator Guidelines in their use of my data.')]"));
    var clkCheckBoxGroup = element(by.xpath("//div[contains(text(),'Terms and conditions')]//following::input[1]"));
    var enterKeyword = element(by.xpath("(//button[text()='Search'])[2]//preceding::input[1]"));
    var BtnSearch = element(by.xpath("(//button[text()='Search'])[2]"));
    var btnClose = element(by.xpath("//button[@class='close-btn']"));
    var assertCourseTakenOnClick = element(by.xpath("//button[contains(text(),'Share')]"));
    var assertAllNotificationMsg = element(by.xpath("//div[contains(text(),'11 New Notification (s)')]"));
    var deleteSecondNotification = element(by.xpath("(//img[@class='Delete-gray'])[2]"));
    var assertAfterDeleteNotification = element(by.xpath("//div[contains(text(),'9 New Notification (s)')]"));
    var assertJoinBtn = element(by.xpath("//button[contains(text(),'Join')]"));
    var assertExpiredMsg = element(by.xpath("//h6[contains(text(),'therefore your progress will not be updated.')]"));
    var clkconsumeCourse = element(by.xpath("//h4[contains(text(),'Course modules')]//following::sb-toc-card"));
    var viewAllButtonForMyCourseSection = element(by.xpath("(//button[text()=' View all '])[1]"));

    var submittedForReviewTab = element(by.xpath("//*[contains(text(),' Submitted for review ')]"));
    var bookNameInSubmitReviewButton = element(by.xpath("//*[contains(@id,'search-input-container')]//following::span[contains(@class,'sliderCardHeading text-cencapitalize')]"));
    var assertQRcodeRequired = element(by.xpath("//label[contains(text(),'QR code required?')]"));
    var assertQRcode = element(by.xpath("//label[contains(text(),'QR code')]//following::input[contains(@placeholder,'Enter code here')]"));
    
    var assertPrimaryCategory = element(by.xpath("(//select[contains(@name,'sb-dropdown')])[1]"));
    var assertMultiselectAdditionalCategory = element(by.xpath("//label[contains(text(),'Keywords')]//following::label[contains(text(),'Category')]//following::label[contains(text(),'Additional Category')]"));
    var additionalCategoryDrpdwn = element(by.xpath("//label[contains(text(),'Additional Category')]//following::*[@class='caret-down'][1]"));
    var selectAllAdditionalCategory = element(by.xpath("//*[text()='Select All']"));
    var assertMultipleAdditionalCategoryValues = element(by.xpath("//label[contains(text(),'Keywords')]//following::label[contains(text(),'Category')]//following::label[contains(text(),'Additional Category')]//following::*[@class='list-border'][1]"));
    var clkLangDropdown1 = element(by.xpath("//mat-select[contains(@aria-label,'Select Language')]"));
    var selectUrdu = element(by.xpath("//span[contains(text(),'اردو')]"));
    var assertSearchBtnUrdu = element(by.xpath("//button[contains(text(),'تلاش کریں')]"));
    var assertSearchFieldUrdu = element(by.xpath("//input[contains(@placeholder,'تلاش کریں یا QR کوڈ درج کریں')]"));
    var assertshareBtnUrdu = element(by.xpath("//button[contains(text(),'شیئر ')]"));
    var nextButtonInEcml = element(by.xpath("//*[@alt='Navigate to Next']"));
    var assertEcmLContent = element(by.xpath("//*[@id='gameCanvas']"));
    var sltOption = element(by.xpath("//*[contains(text(),'(i) Sympathy')]"));
    var assessmentNextButton = element(by.xpath("(//*[contains(text(),'Next')])[1]"));
    var assertHomepage = element(by.xpath("(//*[contains(text(),' Home ')])"));
    var assertLiscenceTerms = element(by.xpath("//*[contains(text(),'License terms')]//following::p[text()='CC BY 4.0']"));
    var creditDropDwn = element(by.xpath("//*[contains(text(),'Credits and Licence information')]"));
    var clkAndConsume = element(by.xpath("//h4[contains(text(),'Course Unit')]//following::div[7]"));
    var assertBackBtn = element(by.xpath("//h5[contains(text(),'Course Unit')]//preceding::button[1]"));
    var bulletedListKeyButton = element(by.xpath("(//div[@aria-label='Editor toolbar']//following::*[@class='ck ck-icon ck-button__icon'])[4]"));
    var bulletedListKeyButton2 = element(by.xpath("((//div[@aria-label='Editor toolbar'])[2]//following::*[@class='ck ck-icon ck-button__icon'])[4]"));
    var bulletedListKeyButton3 = element(by.xpath("((//div[@aria-label='Editor toolbar'])[3]//following::*[@class='ck ck-icon ck-button__icon'])[4]"));
    var verticcalAnswerbutton = element(by.xpath("//button[contains(text(),'Vertical')]"));
    var digitalTextBookInAddactivity = element(by.xpath("//*[contains(text(),'Digital textbooks')]"));
    var tagsTab = element(by.xpath("//*[contains(text(),'Tags')]"));
    var clickTags = element(by.xpath("//div[contains(@class,'discuss-right-panel')]//following::span[contains(text(),'test')]"));
    var plusTag = element(by.xpath("//input[contains(@aria-label,'+ Tag')]"))
    var leaveGroup = element(by.xpath("//div[contains(text(),'Leave group')]"));
    var leaveGroupPopUp = element(by.xpath("//div[contains(text(),'Leave group')]//following::button[contains(text(),'Leave group')]"));
    var tncCheckboxInGroup = element(by.xpath("//input[contains(@type,'checkbox')]"));
    var tncYesButton = element(by.xpath("//button[contains(text(),'Yes')]"));
    var rolePopUpLabel = element(by.xpath("//*[contains(@id,'SelectUser')]"));
    var assertBoardLabel = element(by.xpath("//label[contains(text(),'Board')]"));
    var assertSelectBoardDrop = element(by.xpath("//label[contains(text(),'Board')]//following::li[contains(text(),'Select Board')]"));
    var assertMediumLabel = element(by.xpath("//label[contains(text(),'Medium')]"));
    var assertSelectMediumDrop = element(by.xpath("//label[contains(text(),'Medium')]//following::li[contains(text(),'Select Medium')]"));
    var assertClassabel = element(by.xpath("//label[contains(text(),'Class')]"));
   var assertClassDrop = element(by.xpath("//label[contains(text(),'Class')]//following::li[contains(text(),'Select Class')]"));
    var assertsubjectlabel = element(by.xpath("//label[contains(text(),'Subject')]"));
    var assertSubjectDrop = element(by.xpath("//label[contains(text(),'Subject')]//following::li[contains(text(),'Select Subject')]"));
    var addUserRoleButton = element(by.xpath("//button[contains(text(),'Add User Role')]"));
    var searchDikshaId = element(by.xpath("//input[contains(@placeholder,'Search user by DIKSHA ID')]"));
    var extractUserId = element(by.xpath("//div[contains(@id,'copyUser')]"));
    var profileTab = element(by.xpath("(//*[contains(text(),'Profile')])[2]"));
    var roleInProfile = element(by.xpath("//div[contains(@id,'copyUser')]//following::span[contains(text(),'Report Admin')]"));
    var roleInManageSection = element(by.xpath("//span[contains(text(),'Report Admin')]"));
    var roleEditOption = element(by.xpath("//span[contains(text(),'Edit')]"));
    var searchResult = element(by.xpath("(//*[contains(text(),'usersun')])[1]"));
    var resultAfterSearched = element(by.xpath("(//*[contains(@class,'user-id')])[1]"));
    var assertenableDiscussion = element(by.xpath("//label[contains(text(),'Enable discussions')]"));
    var closeBatch = element(by.xpath("//button[contains(@aria-label,'close dialog')]"));
    var assertNextButtonIsDisabled = element(by.xpath("//button[contains(@class,'mat-button-disabled')]//following::span[contains(text(),'Next')]"));
    var assertConversationTab = element(by.xpath("//*[contains(text(),'वार्तालाप')]"));
    var assertNameTab = element(by.xpath("//*[contains(text(),' नाम')]"));
    var assertstatusTab = element(by.xpath("//*[contains(text(),'स्थिति ')]"));
    var assertMessageTab = element(by.xpath("//*[contains(text(),'शुरुआती संदेश ')]"));
    var tncCheckBoxInConsole = element(by.xpath("(//input[contains(@name,'isCheckedTermCondition')]//..)[1]"));
    var submitButtonInConsole = element(by.xpath("(//button[contains(@class,'mat-button-disabled')]//span[contains(text(),'Submit')])[1]"));
    var saveButtonInConsole = element(by.xpath("(//button[contains(@class,'mat-button-disabled')]//span[contains(text(),'Save')])[1]"));
    var assertCourseTocContent = element(by.xpath("//h4[contains(text(),'Course details')]"));
    var assertCourseTocContent2 = element(by.xpath("//span[contains(text(),'Board')]"));
    var assertTxtBookUnit = element(by.xpath("//div[contains(text(),'Textbook Unit')]"));
    var assertETxtBook = element(by.xpath("//div[contains(text(),'eTextbook')]"));
    var assertETxtBookSubject = element(by.xpath("//div[contains(text(),'eTextbook')]//following::span[contains(text(),'Subject: ')][1]"));
    var assertETxtBookPublisher = element(by.xpath("//div[contains(text(),'eTextbook')]//following::span[contains(text(),'Publisher: ')][1]//following::span[@title='diksha_ntptest_org'][1]"));
    var assertDigitalTxtBook = element(by.xpath("//div[contains(text(),'Digital Textbook')]"));
    var assertDigitalTxtBookSubject = element(by.xpath("//div[contains(text(),'Digital Textbook')]//following::span[contains(text(),'Subject: ')][1]"));
    var assertDigitalTxtBookPublisher= element(by.xpath("//div[contains(text(),'Digital Textbook')]//following::span[contains(text(),'Publisher: ')][1]//following::span[@title='diksha_ntptest_org'][1]"));
    var assertEplanationPdf = element(by.xpath("//div[contains(@title,'Explanation_PDF.pdf')]"));
    var assertMp4 = element(by.xpath("//div[contains(@title,'Explanation_PDF.pdf')]"));
    var assertYTvedion = element(by.xpath("//div[contains(@title,'May04_reddyyoutube')]"));
    var assertProgressBar = element(by.xpath("(//*[contains(@class,'certified-course__progress')]//following::div)[4]"));
    var assertCertificatePopUp = element(by.xpath("//*[contains(@class,'course-complete-content')]//following::*[contains(text(),'You will be notified about the course certificate on your registered contact details within 7 days')]"));
    var newFilterRoleDropDwn = element(by.xpath("(//div[contains(@class,'mat-select-arrow-wrapper')])[3]"));
    var selectHindiInNewfilter = element(by.xpath("//label[contains(text(),'Role')]//following::*[contains(@aria-label,'Hindi') or contains(@aria-label,'English')][3]"));
    var selectClassInNewFilter = element(by.xpath("//label[contains(text(),'Verticals')]//following::*[contains(@aria-label,'Class 2')]"));
    var newFilterVeerticalDrpDwn = element(by.xpath("(//div[contains(@class,'mat-select-arrow-wrapper')])[4]"));
    var assertBatchUpdated = element(by.xpath("(//div[contains(@class,'batch-details')])[2]"));
    var assertChildDropdwn = element(by.xpath("(//span[contains(text(),'Chapter')]//..)[1]"));
    var assertAudienceType = element(by.xpath("//span[text()=' Student ']"));
    var assertBoard = element(by.xpath("(//select[contains(@id,'sb-dropdown')])[2]"));
    var assertmedium = element(by.xpath("(//span[contains(text(),'English')])[1]"));
    var assertsubject = element(by.xpath("(//span[contains(text(),'English')])[2]"));
    var assertClassInReviewerSide = element(by.xpath("(//span[contains(text(),' Class 1 ')])"));
    var clkCourseInGroup = element(by.xpath("//*[contains(@title,'Course')]"));
    var assertCorrectAnsQ1 = element(by.xpath("//div[@class='scoreboard__index correct ng-star-inserted' and text()=' 1 ']"));
    var assertWrongAnsQ2 = element(by.xpath("//div[@class='scoreboard__index wrong ng-star-inserted' and text()=' 2 ']"));
    var assertWrongAnsQ3 = element(by.xpath("//div[@class='scoreboard__index wrong ng-star-inserted' and text()=' 3 ']"));
    var assertPercentageInActivityDashBoard = element(by.xpath("//*[contains(@aria-label,'%')]"));
    var assertMembersPresentUnderAdmin = element(by.xpath("//div[contains(text(),'Admin')]//preceding::label[@title='Content reviewer']"));
    var assertAdminPresentFirstUnderAddMember = element(by.xpath("//div[contains(text(),'Add member')]//following::label[contains(@title,'You')]//following::*[text()='Admin'][1]"));
    var assertConsumedProgressBar = element(by.xpath("//td[contains(text(),'ABC')]//following::td[contains(text(),'100')]"));
    
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
        downloadAsCSV,
        enterSunbirdID,
        verifyID,
        addToGroup,
        AdminMember,
        member1,
        member2,
        addNewButton,
        conversation,
        nameHeading,
        nameValue1,
        statusHeading,
        statusValue1,
        descriptionHeading,
        descriptionValue1,
        startingmsgHeading,
        startingmsgValue1,
        botURLHeading,
        botURLValue1,
        botIDHeading,
        botIDValue1,
        actionHeading,
        actionKebab1,
        deleteGroup,
        assertLoginInPoup,
        assertCourseDetailsAfterLogin,
        enableDiscussionsOpt,
        viewActivities,
        clkDiscussionForum,
        clkGeneralDiscussion1,
        startDiscussion,
        discussionTopic,
        buttonCancel,
        navigateBack,
        disableDiscussionsOpt,
        confirmDisable,
        enterDiscussionTopic,
        enterQuestionOrIdea,
        submitOnDiscussionTopic,
        createdTopic,
        generalDiscussion,
        voteIcon,
        closeButtonDiscussionForum,
        animationPage,
        clkTagOption,
        tagPageAnimation,
        noTagsAvailableMsg,
        assertDiscussionTopic,
        assertElaborateSection,
        viewIcon,
        createdTopic2,
        assertMinLengthOnReply,
        minLengthValue,
        assertelaborateLabel,
        assertTagLabel,
        assertTagWaterMark,
        assertCCDiscussionTopic,
        assertCCelaborate,
        assertCCTags,
        assertCCTopicDesc,
        assertCCelaborateDesc,
        assertCCCancelButton,
        cancelRejectButton,
        clkBackButton1,
        leaveCourse,
        batchDropDown,
        leaveCoursePopUp,
        allTextbook,
        showFilter,
        sortBy,
        submtdforRevImageCard,
        categoryCourse,
        clkCourse,
        clkAbtTheContent,
        assertAuthorTitle,
        assertAuthorName,
        attributionTitle,
        attributeName,
        licenceTermTitle,
        licenceName,
        copyRightTitle,
        copyRightValue,
        assertCourseInProgress,
        assertModuleProgress,
        exploreTab,
        assertExploreClick,
        assertLatestCourse,
        assertBatch,
        assertOngoingBatch,
        clickFullScreen,
        clickMinimize,
        courseCompletionMsg,
        clossCompletionPopUp,
        navigateBackButton,
        courseComplted,
        clkKebabMenuForSync,
        assertSyncProgress,
        clkDropDown,
        clkExpired,
        assertExpiredBatch,
        assertResumebtnForExpBatch,
        assertJoinCourseBtnForExpBatch,
        assertCourseCardOnProfile,
        viewMoreCourse,
        expiredBatch,
        BatchName,
        ExpiredCourseName,
        assertExpiredCourse,
        assertExpiredCourse1,
        clickToSelectMedium,
        selTamil,
        clickToSelectClass,
        selClass2,
        assertTextBook,
        assertBoardSelected,
        assertMediumSelected,
        assertClassSelected,
        clkRole,
        selParent,
        clkState,
        selAP,
        clkDistrict,
        selChittoor,
        clkbtnEdit2,
        clkBoardUpdate,
        selNCERT,
        clkMediumUpdate,
        selHindi,
        clkClassUpdate,
        selClass,
        assertUpdatedRole,
        assertUpdatedDist,
        assertUpdatedState,
        assertBoardUpdated,
        assertMediumUpdated,
        assertClassUpdated,
        shareIcon,
        sharePopUpCloseIcon,
        viewCollaborator,
        assertCourseProgressInHindi,
        assertCourseCompleteInHindi,
        assertCourseSyncInHindi,
        sltKannadaLang,
        assertCourseInProgKannada,
        assertCourseSyncInKannada,
        clkLangDropdown,
        assertToastMsg,
        assertConversationPage,
        courseEndDate,
        courseEndDateLabel,
        batchContentCard,
        batchUpdate,
        updatedBatchName,
        listOfPublishedUserTypeDropDwn,
        courseTab,
        tvClasstab,
        enableDiscussionInCreateBatch,
        validateForum,
        closeForum,
        submitDiscussion,
        KebabOptOnActionColumn,
        editOptOnActionColumn,
        deleteOptOnActionColumn,
        DisableOptOnActionColumn,
        inputSearchName,
        clkSearchName,
        assertConversationName,
        assertConversationDesc,
        assertConversationPurpose,
        assertStartingMsg,
        assertNextButton,
        assertConversationFlow,
        EnableOptOnActionColumn,
        assertLiveOption,
        enterConversationName,
        enterconversationPurpose,
        enterStartingMsg,
        assertNoLogicAdded,
        assertAddLogicBtn,
        assertConvSetUpWithGreen,
        assertConvFlowWithBlue,
        backBtnConvFlow,
        assertConvSetUpWithBlue,
        assertDisabledOption,
        assertToastMsgEnable,
        addmemberButton,
        addAnotheruser,
        addUser,
        userSelected,
        changeUserButton,
        userIdName,
        notificationBell,
        moreUser,
        messageNotification,
        userNameInput,
        profilePage,
        hamburgerMenu,
        removeMember,
        backButton,
        removeMemberPopup,
        myDiscussions,
        clkGeneralDisc,
        enterAns,
        postReply,
        assertRecentPost,
        assertUserWithSplChar,
        clearAllNotification,
        assertCountAtBellIcon,
        assertNotification,
        clkNotification1,
        clkNotification2,
        btnCloseNotificationList,
        assertNotification1Clickable,
        assertNotification2Clickable,
        clkFirstActivity,
        clkRemoveActivity,
        clkBtnRemove,
        deleteNotification,
        deleteNotification2,
        assertUnassignedMsg,
        assertAssignedMsg,
        tagsButton,
        tagIcon,
        assertConversations,
        assertbotName,
        assertbotStaus,
        assertbotDesc,
        dropDownIssueCertificate,
        clkMyStateTeacher,
        clkmerit,
        checkAllElements,
        selCertificate1,
        clkPreview,
        btnSelTemplate,
        btnAddCertificate,
        assertCertificateAdded,
        assertCourseCardImage,
        assertCourseModule,
        assertCourseUnit,
        assertCourseDetails,
        assertSerchedContentInLibrary,
        expandChapter,
        courseInChildNode,
        assertAlreadyAddedToFolder,
        assertAddContentButton,
        closeAddContentPopup,
        childNode,
        homeTab,
        digitalTextbookInHomeTab,
        assertContentTypeFilter,
        assertAdditionalCategory,
        lessonPlanadditionalCategory,
        backButtonInExplorePage,
        back,
        browseByCategories,
        contentTypeByPrimaryCategory,
        groupingBasedOnSubject,
        appliedFilters,
        filterBasedOnSubject,
        browseByBoard,
        browseByRoles,
        validateDefaultBoardType,
        appliedFilterBoardType,
        selectSubjectFromDrpDwn,
        validateDefaultBoard,
        validateDefaultMedium,
        validateDefaultClass,
        validateDefaultSubject,
        validateDefaultContenttype,
        contentDrpDownForHomeTab,
        viewAllButtonForrecentlyPublishedCourse,
        browsebySubjlabel,
        browsebyCategorylabel,
        browseOthercategoryLabel,
        browseByBoardLabel,
        browsebyAudienceLabel,
        resumeExpiredBatch,
        batchEndDate,
        myCourseSection,
        englishSubject,
        hindiSubjects,
        subjectAccountancy,
        businessStudiesSubject,
        learningResourceContentTypes,
        explanationContentTypes,
        eTextBookContentTypes,
        practiceQuestionSetContentTypes,
        textBookUnitContentTypes,
        teacherResourceContentTypes,
        digitalTextBookContenttypes,
        allTab,
        assertBatchStartDate,
        assertBatchEnddate,
        assertEnrollmentEndDate,
        batchDetailsExpanding,
        batchDateDetailsAfterJoiningCourse,
        leaveCourseButton,
        assertContinueLearning,
        clickclass1,SelectClass1,
        clicksubject1,
        selectSubject1,
        selectSubjectValue1,
        contentType1,
        contentTypeValue1,
        clickBoardAllMyContent1,
        selectBoardAllMyContent1,
        selectBoardAllMyContent1,
        clickFilterMedium1,
        selectFilterMedium1,
        filterByButton,
        profileDataSharingDrpdwn,
        updateButton,
        shareMyProfileDetails,
        donotShareMyProfileDetails,
        profileDataSharingSaveButton,
        termsAndConditions,
        relevantSection,
        relevantSectionData,
        courseRelevantSection,
        typeToSearchFiled,
        btnSearch,
        assertActvityAdded,
        viewAllButtonForMyCourseSection,
        insideMyCourseSection,
        enrollmentEndDateNearjoinButton,
        profileIconInSideNavBar,
        assertMyLearningSection,
        viewMoreDropDwn,
        assertExpiredBatchNearJoinButton,
        courseCompletionPopUp,
        courseCompletionClosePopUp,
        courseProgressPercentage,
        courseProgressKebabMenu,
        doNotShowThisMsgAgain,
        continueButton,
        clickTheCourse,
        browseByUserTypeSchool,
        exploreByUserTypeLabel,
        leftSideSunbirdLogo,
        assertdisableDigiTextbookTab,
        assertIdisplayesBesidePreference,
        assertHiUserNameAbovePreference,
        hindiBoardLabel,
        hindiMediumLabel,
        hindiClassLabel,
        hindiSubjectLabel,
        urduBoardlabel,
        urduMediumLabel,
        urduClassLabel,
        urduClassLabel,
        urduSubjectLabel,
        languagedropdwn,
        editBatch,
        batchUpdateButton,
        viewAllButtonFromNCERTsceton,
        enterStartDate,
        dicussCardTagsinput,
        selectBrowseByAudience,
        assertAddColaborator,
        clkAddCollaborator,
        closeIconInCollaborator,
        batchTypedropDown,
        sltUpcomingBatch,
        editButton,
        assertUpcomingDates,
        assertCoursesInNcertSection,
        asserTextbookInNcertSection,
        listOfCourseCard,
        instructionPage,
        assertContentPrefnderOrgName,
        assertBMGSdisplayedUnderLocationDetails,
        shareButton,
        closeShareButton,
        closebutton,
        viewAllcontinueLearningInHomeTab,
        inputshareLink,
        sharebuttonInContent,
        toastMessage,
        listOfElementsOnHeader,
        listOfElementsOnConsumptionScreen,
        forumButtonInConsumptionScreen,
        //textbookTitleOnConsumptionHeader,
       // shareButtonOnConsumptionScreen,
        contentTitle,
        continueLearningButton,
        newBatchDrpDwn,
        assertTextBookInList,
        assertSearchField,
        assertShowFilter,
        selectBoardOpt,
        selectBoardValue,
        selectMediumOpt,
        selectMediumValue,
        selectClassOpt,
        selectClassValue,
        selectSubjectOpt,
        selectSubjectVal,
        enterCopyrightVal,
        selectMediumValue2,
        selectClassValue2,
        selectSubjectVal2,
        selectStatus,
        selectDraft,
        clkAfterSelect,
        btnApplyStatus,
        assertLatestRelevantContent,
        progressCount,
        courseCardImage,
        assertPublisher,
        assertBMCS,
        nextButtonInCourseMCQ,
        nextButtonPopUp,
        mcqAnswerOne,
        assertFullResolution,
        boldKeyButton,
        italicRichTextButton,
        underLineRichTextButton,
        asserFourCourseCardCount,
        viewAllCourseButton,
        secondCourseCard,
        firstCourseCard,
        browseByAudinceContent,
        viewAllCourseButtonForBoard,
        viewAllCourseButtonForAudience,
        clkOut,
        clickExistingBook,
        downloadCertificateFromLearnerPassBook,
        selectUser,
        tNcCheckBox,
        continueButtonForTnC,
        selectBatchDropdown,
        selectBatch,
        closeMemberDialog,
        assertAddtoGroup,
        startDateInconvFlow,
        endDateInconvflow,
        assertDisable,
        BoardDropDown,
        selBoard,
        MediumDropdown,
        selMed,
        ClassDropdown,
        selClass1,
        assertBoardVal,
        assertMedium,
        assertClass,
        submitDetails,
        clkReqDropDown,
        selectStateAP,
        assertGuidlinePostClickSubmitDetails,
        clkCheckBoxGroup,
        enterKeyword,
        BtnSearch,
        btnClose,
        assertCourseTakenOnClick,
        assertAllNotificationMsg,
        deleteSecondNotification,
        assertAfterDeleteNotification,
        assertJoinBtn,
        assertExpiredMsg,
        clkconsumeCourse,
        submittedForReviewTab,
        bookNameInSubmitReviewButton,
        assertQRcodeRequired,
        assertQRcode,
        assertPrimaryCategory,
        assertMultiselectAdditionalCategory,
        additionalCategoryDrpdwn,
        selectAllAdditionalCategory,
        assertMultipleAdditionalCategoryValues,
        clkLangDropdown1,
        selectUrdu,
        assertSearchBtnUrdu,
        assertSearchFieldUrdu,
        assertshareBtnUrdu,
        nextButtonInEcml,
        assertEcmLContent,
        sltOption,
        assessmentNextButton,
        assertHomepage,
        assertLiscenceTerms,
        creditDropDwn,
        clkAndConsume,
        assertBackBtn,
        bulletedListKeyButton,
        verticcalAnswerbutton,
        bulletedListKeyButton2,
        bulletedListKeyButton3,
        digitalTextBookInAddactivity,
        tagsTab,
        clickTags,
        plusTag,
        leaveGroup,
        leaveGroupPopUp,
        tncCheckboxInGroup,
        tncYesButton,
        rolePopUpLabel,
        assertBoardLabel,
        assertSelectBoardDrop,
        assertMediumLabel,
        assertSelectMediumDrop,
        assertClassabel,
        assertClassDrop,
        assertsubjectlabel,
        assertSubjectDrop,
        addUserRoleButton,
        searchDikshaId,
        extractUserId,
        profileTab,
        roleInProfile,
        roleInManageSection,
        roleEditOption,
        searchResult,
        resultAfterSearched,
        assertenableDiscussion,
        closeBatch,
        assertNextButtonIsDisabled,
        assertConversationTab,
        assertNameTab,
        assertstatusTab,
        assertMessageTab,
        tncCheckBoxInConsole,
        submitButtonInConsole,
        saveButtonInConsole,
        assertCourseTocContent,
        assertCourseTocContent2,
        assertTxtBookUnit,
        assertETxtBook,
        assertETxtBookSubject,
        assertETxtBookPublisher,
        assertDigitalTxtBook,
        assertDigitalTxtBookSubject,
        assertDigitalTxtBookPublisher,
        assertEplanationPdf,
        assertMp4,
        assertYTvedion,
        assertProgressBar,
        assertCertificatePopUp,
        newFilterRoleDropDwn,
        selectHindiInNewfilter,
        selectClassInNewFilter,
        newFilterVeerticalDrpDwn,
        assertBatchUpdated,
        assertChildDropdwn,
        assertAudienceType,
        assertBoard,
        assertmedium,
        assertsubject,
        assertClassInReviewerSide,
        clkCourseInGroup,
        assertCorrectAnsQ1,
        assertWrongAnsQ2,
        assertWrongAnsQ3,
        assertPercentageInActivityDashBoard,
        assertMembersPresentUnderAdmin,
        assertAdminPresentFirstUnderAddMember,
        assertConsumedProgressBar,

    }
}
module.exports = {
    tpdPage
}