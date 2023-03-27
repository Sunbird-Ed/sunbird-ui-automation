//const { element } = require("protractor");

const { element } = require("protractor");

var contentCreation = () => {
  
  var proceedButton = element(by.xpath("//div[@class=' ui clearing segment']/..//button[contains(text(),'PROCEED')]"));
  var createCourse = element(by.xpath("//span[.='Course']"));
  var createBook = element(by.xpath("//div[@class='content']/..//span[.='Book']"));
  var createResource = element(by.xpath("//div[@class='content']/..//span[.='Resource']"));
  var createCollection = element(by.xpath("//div[@class='content']/..//span[.='Collection']"));
  var createLesson = element(by.xpath("//div[@class='content']/..//span[.='Lesson Plan']"));
  var createUploadContent = element(by.xpath("//div[@class='content']/..//span[.='Upload Content']"));
  var loginLink = element(by.xpath("//a[text()=' Login ']"));
  var userName = element(by.id('username'));
  var password = element(by.id('password'));
  var login = element(by.id('login'));
  var workSpace = element(by.xpath("//*[contains(text(),'Workspace')]"));
  var course = element(by.xpath("(//span[contains(text(),'Course')])[1]"));
  var name = element(by.xpath("//input[@placeholder='Name' or @placeholder='Title']"));
  var startCreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
  var newchild = element(by.xpath("//i[@class='level up icon clockwise rotated table-of-contents-child-icon ']"));
  var title = element(by.model('contentMeta[dynamicField.code]  '));
  var titleN = element(by.xpath("//input[@placeholder='Enter the Title ']"));
  var description = element(by.model('contentMeta.description '));
  var addTag = element(by.model('npdownewTag.text'));
  var btnBack = element(by.id('back-button'));
  var descriptionN = element(by.xpath("//textarea[@id='description']"));
  var addTagN = element(by.xpath("//input[@placeholder='Add a tag']"));
  var addResource = element(by.xpath("//button[@class='ui blueBackGround whiteColor button list-addResource']"));
  var checkboxFirst = element(by.xpath("(//input[@type='checkbox'])[1]"));
  var proceed = element(by.xpath("//button[contains(text(),'PROCEED')]"));
  var save = element(by.xpath("//span[contains(text(),'Save')]"));
  var closeIcon = element(by.xpath("//div[@class='close icon-box popup-item']"));
  var headerDropdown = element(by.xpath("(//div[@class='avatar-container'])[2]"));
  var headerDropdown1 = element(by.xpath("(//div[@class='avatar-container'])[2]"));
  var headerDropdown2 = element(by.xpath("(//div[@class='avatar-container'])[2]"));
  var classicThemeHeaderDropdown = element(by.xpath("(//div[@class='avatar-container'])"));
  var headerdrpdwn = element(by.xpath("//ngx-avatar[@class='ng-star-inserted']//following::div[@class='avatar-container']"));
  var workspaceHeaderDropDwn = element(by.xpath("(//div[@class='avatar-container'])[2]"));
  var logout = element(by.xpath("//li[contains(text(),' Logout ')]"));
  var dog = element(by.css('name'));
  var district = element(by.xpath("//*[contains(@id,'district')]//following::*[contains(@aria-label,'Select District')]"));
  var selectDistrict = element(by.xpath("//div[contains(@aria-label,'Select District')]//following::span"));
  var submitForm = element(by.xpath("//button[text()='Submit ']"));
  var btnSubmit = element(by.xpath("//button[contains(text(),'Submit')]"));
  var resourceSearch = element(by.id("resourceSearch"));
  var selectResourceType2 = element(by.xpath("//input[@id='resourceSearch']/following::li[1]"));
  var clickAddbutton = element(by.xpath("//button[@class='ui small button blueBackGround whiteColor']"));
  var sendForReview = element(by.xpath("//div[@class='ui button text-part popup-item']//i[@class='send icon']"));
  var clickAppIcon = element(by.id("field-app-icon "));
  var checkAppIcon = element(by.xpath("//div[@class='ui image']//img"));
  var selectAppIcon = element(by.buttonText('Select'));
  var clickBoard = element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]"));
  var selectBoard = element(by.xpath("//*[contains(text(),'Select Board')]//following::span[@class='mat-option-text']"));
  var clickMedium = element(by.xpath("//*[contains(text(),'Select Medium')]"));
  var selectMedium = element(by.xpath("//*[contains(text(),'Select Medium')]//following::span[@class='mat-option-text']"));
  var clickclass = element(by.xpath("//*[contains(text(),'Select Class')]"));
  var SelectClass = element(by.xpath("//*[contains(text(),'Select Class')]//following::span[@class='mat-option-text']"));
  var clicksubject = element(by.xpath("//*[contains(text(),'Select Subject')]"));
  var selectSubject = element(by.xpath("//*[contains(text(),'Select Subject')]//following::span[@class='mat-option-text']"));
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
  var topic = element(by.xpath("//topic-selector[@class='ng-isolate-scope']/div/input"));
  var topicSelectorImg = element(by.xpath("//a[@class='tree item active']//following::input[1]//following::a[1]//preceding::i[3]"));
  var topicSelectorContent = element(by.xpath("//a[@class='tree item active']//following::input[1]//following::a[1]//following::a[1]"));
  var topicSelectorDone = element(by.xpath("(//a[.='Done'])[2]"));
  var titleName = element(by.id("name"));
  var saveform = element(by.xpath("//button[@id='closePopUp ']//following::button"));
  var author = element(by.xpath("//input[@id='author']"));
  var upForReview = element(by.xpath("//a[contains(text(),'Up For Review')]"));
  var searchForReview = element(by.xpath("//input[@placeholder='Search content']"));
  var searchIconUpForReview = element(by.xpath("//input[@placeholder='Search content']/following::i"));
  var searchedContentForPublish = element(by.xpath("//div[@class='UpReviewHeader']"));
  var publishCourseButton = element(by.xpath("//span[contains(text(),'Publish')]"));
  var checkBox = element.all(by.xpath("//input[@class='listItem']"));
  var popupPublishButtons = element(by.xpath("(//button[contains(text(),'Publish')])[2]"));
  var btnPublish = element(by.xpath("(//button[contains(text(),'Publish')])[1]"));
  var collection = element(by.xpath("//div[@class='content']/..//span[.='Collection']"));
  var lessonPlan = element(by.xpath("//div[@class='content']/..//span[.='Lesson Plan']"));
  var fieldLessonPlanDesc = element(by.xpath("(//textarea[@placeholder='Brief description about the unit'])[2]"));
  var fieldAddNotes = element(by.xpath("//input[@placeholder='Add Notes']"));
  var uploadContent = element(by.xpath("//div[@class='content']/..//span[.='Upload Content']"));
  // var year2020 = element(by.xpath("//select[@id='_selectyear']//following::option[2]"));
  var selectYear = element(by.xpath("//select[@id='_selectyear']"));
  var year2020 = element(by.xpath("//option[.='2018']"));
  var publishResource = element(by.xpath("//button[contains(text(),'Publish')]"));
  var publishLesson = element(by.xpath("//span[contains(text(),'Publish')]"));
  var addQuestionSet = element(by.id("question-set"));
 // var addbutton = element(by.id("add-to-stage"));

  var addbutton = element(by.xpath("//button[@type='button'][@id='add-to-stage']"));

  var questionCheckbox = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[1]"));
  var checkbxQn = element(by.xpath("(//div[contains(@class,'ui checkbox action-btn-checkbox')]//following::input[1])[1]"));
  var btnCancelInquestion = element(by.xpath("//button[@id='cancel-button']"));
  var nextButton = element(by.xpath("//button[contains(text(),'Next')]"));

//var questionSetTitle = element(by.model("questionSetConfigObj.title"));
 var questionSetTitle = element(by.xpath("//input[@placeholder='Question Set Title']"));
  var searchTextInQuestion = element(by.xpath("//input[@id='searchText']"));
  var copyQuestion = element(by.xpath("//*[@class='copy icon']"));
  var previewRefreshIcon = element(by.xpath("//button[.='Refresh']"));
  var nextButtonInQuestion = element(by.id("next-button"));
  var submitButtonInQuestion = element(by.xpath("(//button[@id='save-question-button'])[2]"));
  var popupPublishButton1 = element(by.xpath("(//button[contains(text(),'Publish')])[1]"));
  var frameElement = element(by.tagName('iframe'));
  var enterTheTitleQues = element(by.xpath("//input[@placeholder='Enter the Title']"));
  var boardPostSelect = element(by.xpath("//textarea[@id='description']//following::input[1]"));
  var mediumPostSelect = element(by.xpath("//textarea[@id='description']//following::input[2]"));
  var gradePostSelect = element(by.xpath("//textarea[@id='description']//following::input[3]"));
  var subjectPostSelect = element(by.xpath("//textarea[@id='description']//following::input[4]"));
  var levelPostSelect = element(by.xpath("//textarea[@id='description']//following::input[6]"));
  var untitledUnitName = element(by.xpath("//input[@placeholder='Enter title for unit']"));
  var headerLibrary = element(by.xpath("//*[contains(@class,'textbooks')]"));
  var filterSearch = element(by.xpath("//input[@name='filter_search']"));
  var searchIcon = element(by.xpath("//button[contains(.,'Search')]"));
  var courseCard = element(by.xpath("(//div[contains(@class,'sb--card__meta')]//..//..)[1]"));
  var firstCourseCardContentName = element(by.xpath("//*[@class='sliderCardHeading text-cencapitalize']"));
  var deleteButton = element(by.xpath("(//i[@class='trash large icon'])[1]"));
  var yesButtonPopup = element(by.xpath("//button[contains(.,'Yes')]"))
  var messageBox = element(by.xpath("//strong[@class='iziToast-title slideIn']"));
  var published = element(by.xpath("//a[contains(text(),'Published')]"))
  var questionCheckbox0 = element(by.xpath("(//div[@class='ui checkbox action-btn-checkbox']//input[@type='checkbox'])[1]"));
  var questionCheckbox1 = element(by.xpath("(//div[@class='ui checkbox action-btn-checkbox']//input[@type='checkbox'])[2]"));
  var questionCheckbox2 = element(by.xpath("(//div[@class='ui checkbox action-btn-checkbox']//input[@type='checkbox'])[3]"));
  var selectedQuestionName = element(by.xpath("//div[@class='ui checkbox action-btn-checkbox']//input[@type='checkbox']/preceding::div[@class='middle aligned content nine wide column']/div"));
  var configureScore = element(by.xpath("//div[contains(.,'Configure Score')]/input[contains(@name,'max_score')]"));
  var saveCourse = element(by.xpath("//div[@id='saveButton']//i"));
  var previewClick = element(by.xpath("//i[@data-content='Preview']"));
  var clickLibray = element(by.xpath("//*[contains(@class,'textbooks')]"));
  var searchInput = element(by.xpath("(//input[@id='keyword'])[1]"));

  var searchPublishedCourses = element(by.xpath("(//h4[contains(@class,'sb--card__title')])[1]"));
  var fetchContentName = element(by.xpath("//div[@class='content-header__title font-weight-bold ellipsis text-left']"));
  var clickShare = element(by.xpath("//*[contains(text(),'Share')]"));
  var clickCopy = element(by.xpath("//button[@class='ui basic primary button']"));

  var closeIconInShare = element(by.xpath("//button[@class='close-btn']"));
  var playSharedContent = element(by.xpath("//*[contains(@class,'sb-pageSection-title')]//following::h3[1]"));
  var closeicon = element(by.xpath("//i[@class='close icon']"));
  var closeUploadContent = element(by.id("closeButton"));
  var closeSave = element(by.xpath("//button[contains(text(),'Close')]"));
  var uploadAgain = element(by.xpath("//i[@class='upload icon custom-icon']"));
  var saveIcon = element(by.xpath("//span[@class='label-icon-box-text save-button-text']"));


  var searchedCard = element(by.xpath("//h4[contains(@class,'sb--card__title')]"));
  var searchedContentForUpload = element(by.xpath("(//h4[contains(@class,'sb--card__title')])[1]"));
  var folderIcon = element(by.xpath("//h3[@class='sb-collectionTree-title']"));
  var playVedio = element(by.xpath("//span[@class='fancytree-node fancytree-lastsib fancytree-exp-nl fancytree-ico-c']"));
  var menuIcon1 = element(by.xpath("//img[@class='menu-icon icon']"));
  var closeIconOfContent = element(by.xpath("//i[@class='close icon']"));
 // var mediumDropDown = element(by.xpath("//i[@class='dropdown icon']"));

  var submitFilterButton = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary ml-8']"));
  var engMed = element(by.xpath("//div[contains(text(),' Medium : English ')]"));
  var resetBtn = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-outline-primary']"));
  var sltclass1 = element(by.xpath("//sui-select-option[@title='Class 1']"));
  var sltcls = element(by.xpath("//div[@title='Class 1']"));
  var sltsubj = element(by.xpath("//sui-select-option[@title='English']"));
  var stldEng = element(by.xpath("//div[@title='English']"));

  var pdfContent1 = element(by.xpath("//span[contains(@class,'fancytree-custom-icon')]"));
  var menuPlayer = element(by.xpath("//img[@class=menu-icon icon nav-top hamberger-menu]"));
  var selectCBSE = element(by.xpath("//sui-select-option[contains(.,'CBSE')]"));
  var selectHindi = element(by.xpath("//sui-select-option[contains(.,'Hindi')]"));
  var clickClass = element(by.xpath("//div[contains(text(),'Select Class')]"));
  var submitButtonFilter = element(by.xpath("//button[contains(text(),'Apply')]"));
  var contentEngMed = element(by.xpath("//div[@title='English']"));
  var resetButton = element(by.xpath("//button[contains(text(),' Reset ')]"));
  var selectClass1 = element(by.xpath("//sui-select-option[contains(.,'Class 1')]"));
  var boardInCard = element(by.xpath("//div[@class='d-inline-block']"));
  var clssInCard = element(by.xpath("//div[@class='d-inline-block']"));
  var medInCard = element(by.xpath("//div[@class='d-inline-block']"));
  var clickSubject = element(by.xpath("//div[contains(text(),'Select Subject')]"));
  var selectGeography = element(by.xpath("//sui-select-option[contains(.,'Biology')]"));
  var subInCard = element(by.xpath("//div[@class='d-inline-block']"));
  var ContentfilterForGroup = element(by.xpath("//*[contains(text(),'Filter by')]"));
  var courseName = element(by.xpath("//input[@placeholder='Name']"));
  var courseToBeClicked = element(by.xpath("//h4[@class='sb--card__title sb--card__title--ellipsis']"));
  var clickBoardFilter = element(by.xpath("//div[contains(text(),'Select Board')]"));
  var selectBoardFilter = element(by.xpath("//div[contains(text(),'Select Board')]//following::div[1]"));
  var headerCourse = element(by.xpath("//a[contains(.,' Courses ')]"));
  var closeIcon2 = element(by.xpath("(//i[@class='close icon'])[2]"));
  var nextButtonContentPlayer = element(by.xpath("//span[@class='header']"));
  var mergeAccount = element(by.xpath("//*[contains(text(),'Merge Account')]"));
  var mergebutton = element(by.xpath("//button[contains(text(),'Merge')]"));
  var mergeMessage = element(by.xpath("//p[text()=' Account merge initiated successfully. you will be notified once it is completed']"));
  var mergeMessageOkButton = element(by.xpath("//button[text()='OK ']"));


  var searchButton = element(by.xpath("//button[contains(@title,'Search in ')]"));
  var courseCardAfterSearch = element(by.xpath("//h4[@class='sb-card-title']"));
  var batchEnrollmentDateEnded = element(by.xpath("//span[@class='sb-label-status-error']"));
  var joinTraining = element(by.xpath("//button[contains(text(),'Join ')]"));


  var searchCourse1 = element(by.xpath("//input[@placeholder='Search in Trainings']"));
  var searchButton1 = element(by.xpath("//button[@title='Search in Trainings']"));

  var addIcon = element(by.xpath("//i[@class='add icon']"));
  var nameOfBatch = element(by.xpath("//input[contains(@formcontrolname,'name')]"));
  var aboutBatch = element(by.xpath("//input[@formcontrolname='description']"));
  var startDate = element(by.xpath("//input[@formcontrolname='startDate'] "));
  var startDateCalendar = element(by.xpath("//input[@formcontrolname='startDate']/../../../../../../../../../../../../sui-popup/div/sui-datepicker/sui-calendar-date-view/table/tbody/tr/td[@class='link today focus']"));
  var endDate = element(by.xpath("//input[@formcontrolname='endDate']"));
  var endDateCalendar = element(by.xpath("//input[@formcontrolname='startDate']/../../../../../../../../../../../../sui-popup/div/sui-datepicker/sui-calendar-date-view/table/tbody/tr/td[@class='link']"));
  var mentorsInBatch = element(by.xpath("(//i[contains(@class,'dropdown icon')])[4]"));
  var suborgMentor2InBatch = element(by.xpath("(//div[contains(@class,'item')])[6]"));
  var selectMentorsInBatch = element(by.xpath("//div[@class='item'][1]"));
  var mentorDropdown = element(by.xpath("//input[@id='mentorSelList']/following-sibling::i"));
  var membersInBatch = element(by.xpath("//div[contains(text(),'Select batch members')]"));
  var memberDropdown = element(by.xpath("//input[@id='userSelList']/following-sibling::i"));
  var buttonCreate = element(by.xpath("//button[@id='submitbutton']"));
  var closeBatchPopup = element(by.xpath("//i[@class='close icon']"));
  var batchForm = element(by.xpath("//label[contains(text(),'NAME OF BATCH')]"));
  var editBatchIcon = element(by.xpath("(//i[@class='icon right-floated cursor-pointer write'])"));
  var updateBatchButton = element(by.xpath("//button[contains(text(),' Update ')]"));
  var batchDropDownIcon = element(by.xpath("(//span[contains(.,'Ongoing')])[1]"));

  var contentPlayer = element(by.xpath("//img[@class='menu-icon icon nav-top hamberger-menu']"));
  var closePopup1 = element(by.xpath("//i[@class='close icon']"));
  var latestCourseCard = element(by.xpath("//h4[contains(text(),'Latest Trainings')]//following::h4[@class='sb-card-title'][1]"));
  var clearButton = element(by.xpath("//button[contains(text(),' Clear ')]"));
  var enterValidStartDate = element(by.xpath("//div[contains(text(),'Enter a valid start date ')]"));
  var start1 = element(by.xpath("//input[@formcontrolname='startDate']/../../../../../../../../../../../../sui-popup/div/sui-datepicker/sui-calendar-date-view/table/tbody/tr/td[@class='link'][3]"));
  var endDateShouldBeGreaterThanStartDate = element(by.xpath("//div[@class='iziToast fadeInUp iziToast-theme-light iziToast-color-red iziToast-animateInside iziToast-opened']"));
  var calendarIcon1 = element(by.xpath("//i[@class='calendar outline icon']"));
  var removeMembers = element(by.xpath("//i[@class='delete icon']"));
  var courseBatchesSection = element(by.xpath("//a[contains(text(),' Course Batches ')]"));
  var createdByMeCard = element(by.xpath("//span[@class='batch-content-description batch-card-ellipsis w-162']"));
  var assignedToMe = element(by.xpath("//a[contains(text(),'Assigned to me')]"));
  var editIcon = element(by.xpath("//i[@class='icon right-floated cursor-pointer write']"));
  var upcomingBatches = element(by.xpath("//span[contains(text(),'Upcoming')]"));


  var untitledCollection = element(by.xpath("//label[@class='content-title popup-item ng-binding ng-scope']"));
  var advancedFilter = element(by.xpath("//i[contains(@class,'dropdown icon ng-scope')]"));
  var difficulty = element(by.xpath("//div[text()='DIFFICULTY']/following-sibling::div"));
  var selectDifficulty = element(by.xpath("(//div[text()='DIFFICULTY']/following-sibling::div//*[contains(@class,'item')])[1]"));
  var questionType = element(by.xpath("//div[text()='QUESTION TYPE']/following-sibling::div"));
  var selectQuestionType = element(by.xpath("(//div[text()='QUESTION TYPE']/following-sibling::div//*[contains(@class,'item')])[1]"));
  var boardSyllabus = element(by.xpath("//div[text()='BOARD/SYLLABUS']/following-sibling::div"));
  var selectBoardSyllabus = element(by.xpath("//div[text()='BOARD/SYLLABUS']/following-sibling::div//*[contains(@class,'item')]"));
  var medium = element(by.xpath("(//div[text()='MEDIUM'])[2]/following-sibling::div"));
  var selectMediumQ = element(by.xpath("((//div[text()='MEDIUM'])[2]/following-sibling::div//*[contains(@class,'item')])[1]"));
  var classType = element(by.xpath("//div[text()='CLASS']/following-sibling::div"));
  var selectClassQ = element(by.xpath("(//div[text()='CLASS']/following-sibling::div//*[contains(@class,'item')])[4]"));
  var subject = element(by.xpath("//div[text()='SUBJECT']/following-sibling::div"));
  var selectSubjectQ = element(by.xpath("(//div[text()='SUBJECT']/following-sibling::div//*[contains(@class,'item')])[1]"));
  var myQuestionToggle = element(by.xpath("//input[@placeholder='My Questions']"));


  var validateLatestCourse = element(by.xpath("(//*[contains(text(),'My courses')]/following::div[contains(@class,'sb--card__meta')])[1]"));
  var licenceTerms = element(by.xpath("//span[text()='License Terms:']"));
  var licenceTag = element(by.xpath("//span[@class='licenseTag']/a"));
  var copyCourse = element(by.xpath("//i[@class='blue clone outline icon']"));
  var copyCourseContent = element(by.xpath("//div[@class='four wide column custom-6-wide']"));
  var editOrViewDetailslink = element(by.xpath("//span[@class='ng-scope']"));

  var credit = element(by.xpath("//a[contains(text(),'Credits')]"));
  var msgDerivedFrom = element(by.xpath("//div[contains(text(),' This content is derived from ')]"));
  var originalContentName = element(by.xpath("//div[contains(text(),'CONTENT')]/following-sibling::div"));
  var authorName = element(by.xpath("//div[contains(text(),'AUTHOR OF SOURCE CONTENT')]/following-sibling::div"));
  var publishedDetails = element(by.xpath("//div[contains(text(),' PUBLISHED ON DIKSHA BY')]/following-sibling::div"));
  var attributionName = element(by.xpath("//div[contains(text(),'ATTRIBUTIONS')]/following-sibling::div"));

  var courseNameInContentPlayer = element(by.xpath("//h5[contains(@class,'textbook__title sb-color-primary')]"));
  var clickProfileIcon = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]/..//a[contains(.,'Profile')]"));
  var viewMoreButton = element(by.xpath("(//div[contains(text(),'Contribution(s)')])[2]"));
  var linkProfile = element(by.xpath("//li[contains(text(),' Profile')]"));
  var profileTickMark = element(by.xpath("//img[contains(@class,'avatar-tickmark')]"));
  var btnEdit = element(by.xpath("(//button[contains(text(),'Edit')])[1]"));
  var stateInsideEdit = element(by.xpath("//sui-select[@name='state']"));
  var districtInsideEdit = element(by.xpath("//sui-select[@name='district']"));
  var stateSelectInsideEdit = element(by.xpath("//span[contains(text(),'Andhra Pradesh')]"));
  var districtSelectInsideEdit = element(by.xpath("//span[contains(text(),'Anantapur')]"));
  var profileUpdatedSuccessPopup = element(by.xpath("//strong[contains(text(),'Profile updated successfully...')]"));
  var btnClose = element(by.xpath("//i[@class='close icon']"));
  var filterIcon = element(by.xpath("//span[@class='browse item cursor-pointer']"));

  var clickFilterBoard = element(by.xpath("//*[contains(text(),'Select Board')]"));
  var selectFilterBoard = element(by.xpath("//*[contains(text(),'Select Board')]//following::span[@class='mat-option-text'][2]"));
  var clickFilterGrade = element(by.xpath("//*[contains(text(),'Select Grade') or contains(text(),'Select Class')]"));
  var SelectFilterGrade = element(by.xpath("//*[contains(text(),'Select Grade') or contains(text(),'Select Class')]//following::span[@class='mat-option-text']"));
  var clickFilterSubject = element(by.xpath("//*[contains(text(),'Select Subject')]"));
  var selectFilterSubject = element(by.xpath("//*[contains(text(),'Select Subject')]//following::span[@class='mat-option-text']"));

  var clickFilterMedium = element(by.xpath("//*[contains(text(),'Select Medium')]"));
  var selectFilterMedium = element(by.xpath("//*[contains(text(),'Select Medium')]//following::span[@class='mat-option-text']"));
  var selectFilterMedium2 = element(by.xpath("//*[contains(text(),' 1 Medium')]/following::span[4]"));

  var clickSubmit = element(by.xpath("//button[contains(.,' Apply ')]"));

  var sortByDropdown = element(by.xpath("//*[@id='sortByDropDown']"));
  var modifiedOnDropdown = element(by.xpath("//span[contains(.,'Updated On')]"));
  var searchCoursesUpForReview = element(by.xpath("(//div[@class='UpReviewHeader'])[1]"));
  var nameAToZ = element(by.xpath("//span[contains(.,'Name A-Z')]"));
  var createdOnDropdown = element(by.xpath("//span[contains(.,'Created On')]"));
  var nextLink = element(by.xpath("//a[contains(text(),'>') or contains(text(),'Next')]"));
  var firstLink = element(by.xpath("//a[contains(text(),'1') or contains(text(),'First')]"));
  var lastLink = element(by.xpath("//a[contains(text(),'»') or contains(text(),'Last')]"));
  var previousLink = element(by.xpath("//a[contains(text(),'<') or contains(text(),'Previous')]"));

  var requestChangesButton = element(by.xpath("//body//*[contains(text(),'Request')]"));
  var requestChangesComment = element(by.xpath("//textarea[@class='ng-untouched ng-pristine ng-valid']"));
  var requestChangesBlueButton = element(by.xpath("(//button[contains(text(),'Request changes')])[2]"));
  var drafts = element(by.xpath("//a[contains(text(),'Drafts')]"));
  var firstContentName = element(by.xpath("(//div[contains(@class,'cardImageText ')])[1]"));
  var imageCard = element(by.xpath("//div[@class='ui image']"));
  var reviewerCommentIcon = element(by.xpath("//i[@class='fa fa-comment']"));
  var reviewerCommentSection = element(by.xpath("//textarea[@id='review-comments']"));
  var closePopup = element(by.xpath("//i[@class='close link icon']"));
  var closeEditor2 = element(by.xpath("//*[@id='closeButton']"));


  var courseCard1 = element(by.xpath("//div[@class='sb-card-body']"));
  var viewCourseDashBoard = element(by.xpath("//button[contains(text(),'View course dashboard')]"));
  var startDateDashboard = element(by.xpath("//span[contains(text(),'Start Date')]"));
  var endDateDashboard = element(by.xpath("//span[contains(text(),'End Date')]"));
  var participants = element(by.xpath("//span[contains(@class,'course-participants ')]"));
  var trainingCompleted = element(by.xpath("//*[@id='dashoardFiltersHolder']/div/span[4]/span"));
  var certificateIssued = element(by.xpath("//*[@id='dashoardFiltersHolder']/div/span[5]/span"));
  var userName1 = element(by.xpath("//div[contains(text(),'User Name')]"));
  var organizationName = element(by.xpath("//div[contains(text(),'Organization Name')]"));
  var mobileNumber = element(by.xpath("//div[contains(text(),'Mobile Number')]"));
  var enrollOn = element(by.xpath("//div[contains(text(),'Enroled On ')]"));
  var status = element(by.xpath("//div[contains(text(),'Status')]"));
  var certificateStatus = element(by.xpath("//div[contains(text(),'Certificate Status')]"));
  var selectBatch = element(by.xpath("//a[contains(text(),'Batches')]//following::div[@class='mat-select-arrow-wrapper']"));
  var batchName = element(by.xpath("//div[contains(text(),'Select batch to see dashboard')]/following::i/following::sui-select-option/span[2]"));
  var sortFunctionalityInAllColumn1 = element(by.xpath("(//i[@class='sort up icon fs-1'])[1]"));
  var sortFunctionalityInAllColumn2 = element(by.xpath("(//i[@class='sort up icon fs-1'])[2]"));
  var sortFunctionalityInAllColumn3 = element(by.xpath("(//i[@class='sort up icon fs-1'])[3]"));
  var sortFunctionalityInAllColumn4 = element(by.xpath("(//i[@class='sort up icon fs-1'])[4]"));

  var userEnrolledInToBatch = element(by.xpath("//*[@id='CourseStatsTable']/tbody/tr/td/span"));
  var downloadCsv = element(by.xpath("//i[@class='download icon']"));
  var searchForParticipants = element(by.xpath("//input[@placeholder='Search for participants']"));
  var twoHundersUsers = element(by.xpath("//div[@class='sb-pagination-container flex-ai-center']/div"));
  var secondButton = element(by.xpath("//div[@class='sb-pagination ml-auto']/a[3]"));
  var firstButton = element(by.xpath("//div[@class='sb-pagination ml-auto']/a[2]"));
  var nextButton1 = element(by.xpath("//div[@class='sb-pagination ml-auto']/a[4]"));
  var previousButton = element(by.xpath("//div[@class='sb-pagination ml-auto']/a[1]"));
  var closeDashboard = element(by.xpath("//i[@class='ui remove icon CloseButtonFont']"));

  var classDropDown = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[3]"));
  var subjectDropDown = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[4]"));
  var selectEng = element(by.xpath("//sui-select-option[contains(.,'Hindi')]"));

  var mediumDropDown1 = element(by.xpath("//div[contains(text(),' Select Medium')]"));
  var classDropDown1 = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[2]"));
  var subjectDropDown1 = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[3]"));
  var selectEng1 = element(by.xpath("//div[contains(text(),' Select Medium')]//following::sui-select-option[1]"));
  var submitFilterButton1 = element(by.xpath("//button[contains(text(),' Apply ')]"));
  var engMed1 = element(by.xpath("//div[contains(text(),' Medium : English ')]"));
  var resetBtn1 = element(by.xpath("//button[contains(text(),'Reset')]"));
  var sltclass2 = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[2]//following::span[2]"));
  var sltcls1 = element(by.xpath("//div[@title='Class 1']"));
  var sltsubj1 = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[3]//following::span[2]"));
  var stldEng1 = element(by.xpath("//div[@title='English']"));
  var Teacher = element(by.xpath("//div[text()='Teacher']"));
 var Continue = element(by.xpath("//div[contains(text(),'Teacher')]//following::button[contains(text(),' Continue ')]"));

 var toastMsg = element(by.xpath("//*[@class='iziToast-title slideIn']"));
  var firstCourseCardName = element(by.xpath("(//span[contains(@class,'sliderCardHeading')])[1]"));
  var allMyContent = element(by.xpath("//a[contains(text(),'All My Content')]"));
  var collecclick = element(by.xpath("(//h4[contains(@class,'sb--card__title')])[1]"));
  var getcopyshardata = element(by.xpath("//input[@id='copyLinkData']"));
  var verifyDataAfterFilter = element(by.xpath("//div[@class='sb--card__meta2_data']"));

  var mergeAccountWithCusto = element(by.xpath("//li[contains(text(),' Merge Account')]"));
  var btnMerge = element(by.xpath("//button[contains(text(),' Merge ')]"));
  var btnOk = element(by.xpath("//button[contains(text(),'OK')]"));
  var click2Next = element(by.xpath("//a[@class='sb-item'][1]"));
  var click3Next = element(by.xpath("//a[@class='sb-item'][2]"));
  var SearchInPublished = element(by.xpath("(//input[@name='filter_search'])[2]"));
  // var sunbirdOkMsg = element(by.xpath("//button[text()='OK, Got it!']"));
  // var sunbirdOkMsg =element(by.xpath("//button[text()=' Try new theme ']"));
  var sunbirdOkMsg = element(by.xpath("//button[contains(text(),' Continue with new theme ')]"));

  var saveButoonReview = element(by.xpath("//button[@id='closePopUp ']//following::button"));
  let clickCourse = element(by.xpath("//a[contains(@class,'item item--textbooks')]/following-sibling::a[1]"));
  var BasedOnYourPrefernceText = element(by.xpath("//div[text()='Based on your preferences']"));
  var profileImage = element(by.xpath("(//img[@alt='Guest User'])[2]"));
  var RegisterHereLink = element(by.xpath("//span[@id='signup']"));
  var RegisterOnDikshaHeader = element(by.xpath("//div[contains(text(),' Register on ')]"));
  var QRcodeSearchBox = element(by.xpath("//input[@placeholder='Enter QR code']"));
  var searchQRCode = element(by.xpath("(//button[text()='Search'])[2]"));
  var clickOnFirstContent = element(by.xpath("(//div[@class='sb--card__meta'])[1]"));
  var topicSelectorDone1 = element(by.xpath("(//a[.='Done'])[1]"));
  var zoomIn = element(by.xpath("//span[text()='Fullscreen']"));
  var zoomOut = element(by.xpath("//span[text()='Minimize']"));
  var clkChatBox = element(by.xpath("//*[@class='chatboxImg']"));
  var closeChatBox = element(by.xpath("//span[@class='close-container clickable']"));
  var chatlabel = element(by.xpath("//div[contains(text(),' Hello, I am Tara!')]"));
  var chatDigitalContent = element(by.xpath("//button[contains(text(),'Digital content')]"));
  var chatCourse = element(by.xpath("//button[contains(text(),'Courses')]"));
  var chatDikshaMobileApp = element(by.xpath("//button[contains(text(),'DIKSHA mobile app')]"));
  var chatcontentContribution = element(by.xpath("//button[contains(text(),'Content contribution')]"));
  var chatOtherDIKSHAqueries = element(by.xpath("//button[contains(text(),'Other DIKSHA queries')]"));
  var chatExplore = element(by.xpath("//span[contains(text(),' What content would you like to explore?')]"));
  var headerDropdown1 = element(by.xpath("(//ngx-avatar[@aria-controls='overlaySidebarID']//following::div)[1]"));
  var Student = element(by.xpath("//div[text()='Student']"));
  var Other = element(by.xpath("//div[text()='Other']"));
  var BookCount = element(by.xpath("//div[@class='title']/span"));
  var clickSearchedResourceDoId = element(by.xpath("//div[@class='header contentMetaTitle ng-binding']"));
  var chatTakeaCourse = element(by.xpath("//button[contains(text(),'Take a course')]"));
  var chatHelpSupport = element(by.xpath("//button[contains(text(),'Help/ Support for Course')]"));
  var chatMainMenu = element(by.xpath("//button[contains(text(),'Main Menu')]"));
  var chatStateCourse = element(by.xpath("//button[contains(text(),'State Courses')]"));
  var chatIGOT = element(by.xpath("//button[contains(text(),'IGOT Courses')]"));
  var chatNishthaCourse = element(by.xpath("//button[contains(text(),'NISHTHA Courses')]"));
  var chatGoBack = element(by.xpath("//button[contains(text(),'Go Back')]"));
  var chatMainMenu2 = element(by.xpath("//button[contains(text(),'Go Back')]//following::button[1]"));
  var verifykarnatakaState = element(by.xpath("//button[contains(text(),'Karnataka')]"));
  var clkDikshaCopy = element(by.xpath("//span[contains(text(),'Copy')]"));
  var boardDropdown = element(by.xpath("//*[contains(@id,'board')]//following::*[@role='combobox']"));
  var mediumDropdown = element(by.xpath("//*[contains(@id,'medium')]//following::*[@role='combobox']"));
  var gradeLevelDropDown = element(by.xpath("//*[contains(@id,'gradeLevel')]//following::*[@role='combobox']"));
  var subjectDropdown = element(by.xpath("//sui-multi-select[@id='subject']"));
  var submitButtonForDropdowns = element(by.xpath("//button[contains(text(),' Submit ')]"));
  // var selectBoardValue=element(by.xpath("//span[contains(text(),'CBSE/NCERT')]"));
  var selectBoardValue = element(by.xpath("//span[contains(text(),'State (Andhra Pradesh)')]"));

  var selectMediumValue = element(by.xpath("//*[contains(@aria-label,'English')]//following::span"));
  //  var selectGradeLevelValue=element(by.xpath("//*[@id='gradeLevel']/div[2]/sui-select-option[2]/span[contains(text(),'Class 1')]"));
  var selectGradeLevelValue = element(by.xpath("//*[contains(@aria-label,'Class 1')]//following::span"));
  var selectGradeLevelValue2=element(by.xpath("//*[contains(@aria-label,'Class 1')]//following::span[2]"));

  var selectSubjectValue = element(by.xpath("//*[@id='subject']/div[2]/sui-select-option[1]/span[contains(text(),'Accountancy')]"));

  var district1 = element(by.xpath("(//*[contains(@class,'cfe-multiselect-field-caret caret-down')])[7]"));
  var searchButton2 = element(by.xpath("//*[contains(text(),'Search')]"));
  var courseProgress = element(by.xpath("//div[contains(@class,'course__progress')]//div[3]"));
  var continueLearning = element(by.xpath("//*[contains(text(),'AutomationCourseContent ')]//following::button[contains(text(),'Continue learning')]"));
  var kebabMenu = element(by.xpath("//div[contains(@class,'kabab-menu pull-right ng-star-inserted')]"));
  var joinCourse = element(by.xpath("(//*[contains(@class,'sb-btn sb-btn-secondary sb-btn-normal ml-auto textbook__addbtn')])[1]"));
  var checkbox = element(by.xpath("(//input[contains(@class,'mr-8 ng-valid ng-touched ng-dirty')])"));
  var shareButton = element(by.xpath("(//*[contains(@class,'sb-btn sb-btn-normal sb-btn-primary text-uppercase ng-star-inserted')])[1]"));
  var startLearning = element(by.xpath("(//*[contains(text(),'Start learning')])[1]"));
  var syncProgressNow = element(by.xpath("(//*[contains(text(),'Sync progress now')])"));
  var progresSynced = element(by.xpath("(//*[contains(text(),'Progress synced successfully')])"));
  var continuePolicyButton = element(by.xpath("(//*[contains(text(),' Continue ')])"));
  var BMCstate = element(by.xpath("//div[contains(@id,'state')]//following::sb-caret-down[1]"));
  var BMCdistrict = element(by.xpath("//span[contains(text(),'Role')]//following::span[contains(text(),'District')]//following::div[2]"));
  var BMCBlock = element(by.xpath("//span[contains(text(),'Role')]//following::label[contains(text(),'Block')]//following::div[2]"));
  var SelectBMCblock = element(by.xpath("//span[contains(text(),'Achnera')]"));
  var BMCcluster = element(by.xpath("//label[@for='cluster']//following::span[1]"));
  var SelectBMCcluster = element(by.xpath("//label[@for='cluster']//following::li[1]"));
  var BMCSubmit = element(by.xpath("(//*[contains(@type,'submit')])[2]"));
  var BMCSchoolCluster = element(by.xpath("(//*[contains(text(),'Select School')])[1]"));
  var profileName = element(by.xpath("//*[contains(@class,'profile-user-label font-w-bold d-flex')]"));
  var profileButton = element(by.xpath("//*[@class='icon-svg icon-svg--sm icon-profileuser mr-8']"));
  var guestName = element(by.xpath("//*[contains(@class,'sb-textbox ng-pristine ng-valid ng-touched')]"));
  var editProfileName = element(by.xpath("(//*[contains(@class,'sb-btn sb-btn-primary')])[1]"));

  var yobPopup = element(by.xpath("//*[@class='mr-16']"));
  var yobSelectYearDropdown = element(by.xpath("//sui-select[contains(@class,'selection ui dropdown')]"));
  var yearSelection = element(by.xpath("//*[contains(text(),'2018')]"));


  var contentType = element(by.xpath("//*[contains(text(),'Select Content type')]"));
  var contentTypeValue = element(by.xpath("//span[contains(text(),'course')]"));
  var subSelect = element(by.xpath("(//*[contains(@class,'cfe-multiselect-field-label-container list-border')])[1]"));
  var addToGroup = element(by.xpath("(//*[contains(text(),'Add to group')])[7]"));
  var subSelectValue = element(by.xpath("//*[contains(text(),'CBSE/NCERT')]"));
  var MedSelect = element(by.xpath("(//*[contains(@class,'cfe-multiselect-field-label-container list-border')])[2]"))
  var MedSelectValue = element(by.xpath("(//*[contains(text(),'english')])[1]"));
  var statelogin = element(by.xpath("//*[@id='stateButton']"));
  var stateDropdown = element(by.xpath("//*[contains(text(),'State Andhrapradesh')]"));
  var stateSubmit = element(by.xpath("//*[contains(@class,'sb-btn-primary')]"));
  var MUAuser = element(by.xpath("(//div[@class='sb-member text-left']//parent::div)[4]"));
  var userChangepolicyCheckbox = element(by.xpath("//input[@type='checkbox']"));
  var policySubmitButton = element(by.xpath("//button[text()=' Continue ']"));

  var googleSignButton = element(by.xpath("//button[contains(@class,'signInWithGoogle')]"));
  var GoogleUserName = element(by.xpath("//*[(@name='identifier')]"));
  var googleNextButton = element(by.xpath("(//*[(@class='VfPpkd-Jh9lGc')])[1]"));
  var googlePassword = element(by.xpath("(//*[(@type='password')])[1]"));

  var SSOUserName = element(by.xpath("(//*[contains(@data-placeholder,'Ex. John Doe')]//..)[1]"));
  var SSOUserName1 = element(by.xpath("//*[contains(@data-placeholder,'Ex. John Doe')]"));
  
  var SSOUserExtID = element(by.xpath("//*[contains(@formcontrolname,'user_external_id')]"));
  var SSOSchoolExtID = element(by.xpath("//*[contains(@formcontrolname,'school_external_id')]"));
  var SSOsubmit = element(by.xpath("//*[contains(text(),'Submit')]"));
  var SSOStateSelect = element(by.xpath("//*[contains(text(),'tn')][1]"));
  var SSOSubmit2 = element(by.xpath("//*[contains(@class,'sb-btn sb-btn-normal w-100 sb-btn-primary')]"));
  var UpdateButton = element(by.xpath("//button[contains(text(),'Update')]"));
  var DataDropdown = element(by.xpath("//*[contains(@class,'cfe-multiselect-field-label-container list-border')]"));
  var SelectDataDropdown = element(by.xpath("//*[contains(text(),'Haryana State')]"));
  var myDetails = element(by.xpath("//*[contains(text(),'Haryana State')]"));
  var SelectTextBook = element(by.xpath("//*[contains(@class,'ui image')]"));

  var profileboard = element(by.xpath("(//*[contains(text(),'State (Andhra Pradesh)')])[1]"));
  var profileMedium = element(by.xpath("(//*[contains(text(),'English')])[3]"));
  var profileClasses = element(by.xpath("(//*[contains(text(),'Class 1')])[1]"));
  var YOB = element(by.xpath("//*[contains(@class,'sb-modal-header')]"));
  var selectBMCSchoolCluster = element(by.xpath("(//*[contains(text(),'J.H.S.BABRAUD')])[1]"));


  var guestName1 = element(by.xpath("(//input[@placeholder='Enter Name'])[2]"));
  var AbsSubmit = element(by.xpath("(//button[contains(@type,'submit')])[4]"));
  var Cluster = element(by.xpath("(//*[contains(text(),'Cluster')])"));
  var SelectBMCstate = element(by.xpath("(//span[text()=' Uttar Pradesh '])"));
  var SelectBMCdistrict = element(by.xpath("//span[text()=' Agra ']"));
  var themeChange = element(by.xpath("(//span[text()='Switch to classic theme'])"));
  var stateDropdownsso = element(by.xpath("//*[contains(text(),'State Andhrapradesh')]"));

  var muteButton = element(by.xpath("//button[@title='Mute']"));
  var UnmuteButton = element(by.xpath("//button[@title='Unmute']"));
  var clkcheckBoxPublising = element.all(by.xpath("//div[@class='sb-checkbox sb-checkbox-primary ng-star-inserted']//following::input"));
  //var clkcheckBoxPublising = element.all(by.xpath("//div[@class='sb-checkbox sb-checkbox-primary']"));

  var GlobalSearch = element(by.xpath("(//input[@name='filter_search'])[1]"));
  var selectIGOTboardValue = element(by.xpath("//span[text()='IGOT-Health']"));
  var clkSchoolHeader = element(by.xpath("//div[contains(text(),'School head OR Officials')]"));
  var SSOStateSelect1 = element(by.xpath("//*[@aria-label='Select State']"));
  var selectLoginState = element(by.xpath("//*[text()='TN Staging SSO' or text()='Preprod Client']"));
  
  var qrCodeRequred = element(by.xpath("//input[@id='dialcode-required_yes']"));
  var guestIcon = element(by.xpath("//div[contains(text(),'Guest ')]"));
  var assertState = element(by.xpath("//span[contains(text(),'State (Andhra Pradesh)')]"));
  var browseBySubj = element(by.xpath("//div[contains(text(),'Browse by Subjects')]"));
  var featured = element(by.xpath("//div[contains(text(),'Featured')]"));
  var browseByCategories = element(by.xpath("//div[contains(text(),'Browse by Categories')]"));
  var browseByBoard = element(by.xpath("//div[contains(text(),'Browse by Board')]"));
  var browseByAudience = element(by.xpath("//div[contains(text(),'Browse by Audience')]"));
  var assertCbseBoard = element(by.xpath("//label[contains(text(),'Cbse/ncert')]"));
  var assertIgotBoard = element(by.xpath("//label[contains(text(),'Igot-health')]"));
  var allTab = element(by.xpath("//div[@aria-label='Main menu']//following::a[contains(@class,'all')]"))
  var submitDetailsProfile = element(by.xpath("//button[contains(text(),' Submit details ')]"));
  var clickFirstChekcBox = element(by.xpath("//input[@id='no-hate-speech-abuse-violence-profanity']"));
  var profilePage = element(by.xpath("(//*[@class='icon-svg icon-svg--sm icon-profileuser mr-8'])[1]"));
  var usrName = element(by.xpath("//div[@class='ui container']//following::div[@class='profile-user-label font-w-bold d-flex text-center relative position']"));
  var userId = element(by.xpath("//div[@id='copyUser']"));
  var userRole = element(by.xpath("//div[@class='mb-0 d-flex flex-jc-center m-responsive-flex-dc m-responsive-mt-15']"));
  var userDistrict = element(by.xpath("//div[@class='mb-0 d-flex flex-jc-center m-responsive-flex-dc m-responsive-mt-15'][2]"));
  var userState = element(by.xpath("//div[@class='d-flex mb-5 flex-jc-center m-responsive-flex-dc m-responsive-mt-15']"))
  var userboard = element(by.xpath("//div[@class='mb-15 d-flex flex-jc-center']//following::span[contains(text(),'Board')]"));
  var userMedium = element(by.xpath("(//div[@class='mb-15 d-flex flex-jc-center']//following::span[contains(text(),'Medium :')])[1]"));
  var userClass = element(by.xpath("(//div[@class='mb-15 d-flex flex-jc-center']//following::span[contains(text(),'Classes :')])[1]"));
  var userSubject = element(by.xpath("(//div[@class='mb-15 d-flex flex-jc-center']//following::span[contains(text(),'Subjects :')])[1]"));
  var maskednumber = element(by.xpath("//i[@class='phone blue icon mr-5']//.."));
  var maskedEmail = element(by.xpath("//i[@class='mail blue icon mr-5']//.."));
  var recoveryEmail = element(by.xpath("//label[contains(@for,'email')]"));
  var recoveryMobile = element(by.xpath("//label[contains(@for,'phone')]"));
  var assertsubmitButton = element(by.xpath("//div[@class='sb-modal-actions']//button[contains(text(),' Submit ')]"));
  var userProfilebutton = element(by.xpath("(//*[@class='icon icon-svg--primary'])[1]"));
  var helpCentreFaq = element(by.xpath("//*[contains(text(),'Go to Help Center')]"));
  var faqQuestions = element(by.xpath("//*[contains(text(),'Faq(s)')]//.."));
  var helpCentreburgerButton = element(by.xpath("//a[text()=' Go to Help Center ']"));
  var stateValue = element(by.xpath("(//span[contains(text(),'Teststate')])"));
  var districtValue = element(by.xpath("(//span[contains(text(),'Bagalkot')])"));
  var clickState = element(by.xpath("(//div[contains(@class,'cfe-multiselect-field-label-container list-border')])[2]"));
  var clickDistrict = element(by.xpath("(//div[contains(@class,'cfe-multiselect-field-label-container list-border')])[3]"));
  var assertFromNcert = element(by.xpath("//div[@class='title']"));
  var clkHomeTab = element(by.xpath("//div[@aria-label='Main menu']//following::a[contains(text(),' Home ')]"));
  var inputField = element(by.xpath("//div[@class='sb-field']"));
  var recoverySubmit = element(by.xpath("(//button[contains(text(),'Submit')])[2]"));
  var invalidMessage = element(by.xpath("//div[contains(@class,'sb-field')]//following::span[@class='sb-color-error fnormal mt-8']"));
  var reviewComments = element(by.xpath("//span[@data-title='View review comments']"));
  var commentsInput = element(by.xpath("//textarea[@id='wmd-input']"));
  var commentBoxClose = element(by.xpath("//button[text()='Close']"));
  var SelectBoardValue2 = element(by.xpath("//span[contains(text(),'State (Assam)')]"));
  var mediumDropdown3 = element(by.xpath("//sui-multi-select[contains(@id,'medium')]"));
  var selectmediumvalue2 = element(by.xpath("//*[contains(@aria-label,'English')]//following::span[2]"));
  var classDropdown = element(by.xpath("//sui-multi-select[contains(@id,'gradeLevel')]"));
  var selectClassValue = element(by.xpath("//span[contains(text(),'Class 5')]"));
  var editProfile = element(by.xpath("(//*[contains(@class,'sb-btn sb-btn-primary')])[2]"));
  var collectionDescription = element(by.xpath("//input[@placeholder='Description']"));

  var HelpLink = element(by.xpath("//li[@role='link']//following::li[contains(text(),' Help ')]"));
  var FAQLogin = element(by.xpath("//div[normalize-space()='Login']"));
  var FAQProfile = element(by.xpath("//div[@role='button']//following::div[1]"));
  var FAQCourseAndCertificate = element(by.xpath("//div[normalize-space()='Course & certificates']"));
  var assertConsume = element(by.xpath("//div[@class='title animated fadeInDown']"));
  var logincourseconsume = element(by.xpath("//button[@id='login']"));

  var boardSelection = element(by.xpath("//div[contains(text(),' To discover relevant content, update the following details:‎ ')]"));
  var HelpList = element(by.xpath("//*[@id='overlaySidebarID']/div[2]/div/ul/li[6]"));
  var submitFeedback1 = element(by.xpath("//button[contains(text(),' Submit feedback ')]"));
  var selectSubCatagory = element(by.xpath("//li[@class='cfe-multiselect-field-label placeholder']"));
  var TextArea = element(by.xpath("//textarea[@id='details']"));
  var ReportOtherIssue = element(by.xpath("//button[@class='sb-btn sb-btn-outline-primary sb-btn-normal w-100']"));
  var selectCatagory = element(by.xpath("//div[@id='category']//following::li[contains(text(),'Select Category')]"));
  var AddCertificate = element(by.xpath("//*[@id='batches']/div/div/div/div/div[2]/div/div/a"));
  var AddNewCertificate = element(by.xpath("//*[@id='addNewCert']"));
  var IssueCertificateTo = element(by.xpath("//*[text()='Issue certificate to']"));
  var IssueCertificateToDropdown = element(by.xpath("(//*[text()='Issue certificate to']//..//..//..//..)[1]"));
  var defaultValue = element(by.xpath("//input[@placeholder='100%']"));

  var editBMC = element(by.xpath("(//*[contains(@class,'sb-btn sb-btn-primary')])[2]"));
  var updateBoardValue = element(by.xpath("//span[contains(text(),' state (andhra pradesh) ')]"));
  var updateGradeLevelValue = element(by.xpath("//*[@id='gradeLevel']/div[2]/sui-select-option[2]/span[contains(text(),'Class 2')]"));
  var HomeTab = element(by.xpath("//a[text()=' Home ']"));
  var BoardUpdated = element(by.xpath("//span[text()='CBSE']"));
  var MedUpdated = element(by.xpath("//span[text()='Hindi']"));
  var LevelUpdated = element(by.xpath("//span[text()='Class 2']"));
  var plusIcon = element(by.xpath("//img[@src='assets/images/plus-icon.svg']"));
  var bestAttemptScore = element(by.xpath("//input[@placeholder='Best attempt score']"));
  var selectDropDown = element(by.xpath("//sui-select[@formcontrolname='scoreRange']"));
  var scoreRule = element(by.xpath("//label[contains(text(),'Score rule')]"));
  var greaterThan = element(by.xpath("//div[text()=' Greater than or equal to']"));
  var deleteAllMyContent = element(by.xpath("(//i[contains(@class,'trash large icon')])[1]"));
  var clkBoardReview = element(by.xpath("(//input[contains(@class,'search')]//following::div[contains(text(),'Select Board/Syllabus')])[2]"));
  var clkUploadBucket = element(by.xpath("//a[@mattooltip='View all your uploads']"));
  var sltCourseCard = element(by.xpath("//div[@class='sb--card__meta1 text-left']"));

  var createdOn = element(by.xpath("(//div[@class='pb-24 ng-star-inserted']//following::div[text()=' Created on']//following::div[@class='content-metadeta__text  fnormal sb-color-gray-400'])[1]"));
  var assertAuthor = element(by.xpath("//div[@class='pb-24 ng-star-inserted'][1]"));
  var assertCreatedBy = element(by.xpath("//div[@class='pb-24 ng-star-inserted'][2]"));
  var assertPubishedBy = element(by.xpath("//div[@class='pb-24']"));
  var assertCreditLink = element(by.xpath("//div[@class='pb-24 ng-star-inserted']//following::a[@title='Credits']"));
  var assertLiscence = element(by.xpath("//div[@class='pb-24 ng-star-inserted']//following::a[@title='Credits']//following::div[1]"));

  var assertquestionSet = element(by.xpath("//i[@class='my-icon file text outline icon']//following::span[text()='QuestionSet']"));
  var summaryTypeValues = element(by.xpath("//select[@id='sb-dropdown']//following::option[text()='Select Summary Type ']"));
  var questionSetsummaryType = element(by.xpath("//option[text()='Select Summary Type ']"));

  var headerDropdownForClassTheme = element(by.xpath("//a[contains(text(),'All')]//following::div[contains(text(),'G')]"));


  var QuestionSetImage1 = element(by.xpath("//span[text()='1']//following::img[1]"));
  var QuestinSetTitle1 = element(by.xpath("(//div[text()=' QuestionSet with complete score '])[1]"));
  var totalNoOfQuestions1 = element(by.xpath("//span[text()='4']"));
  var totalNoOfQuestions2 = element(by.xpath("//span[text()='3']"));
  var durationQuestionSet1 = element(by.xpath("(//span[text()='1:00'])"));
  var instructionQuestionSet1 = element(by.xpath("//div[text()='complete score']"));
  var nextSlideIconStep1 = element(by.xpath("//div[@aria-label='next slide']"));
  var selectAnswer1 = element(by.xpath("(//input[@id='option-checkbox'])[1]"));
  var assertFeedback = element(by.xpath("//div[@class='quml-alert']//following::div[@class='quml-alert__body']"));
  var selectAnswer2 = element(by.xpath("(//input[@id='option-checkbox'])[3]"));
  var selectAnswer3 = element(by.xpath("(//input[@id='option-checkbox'])[5]"));
  var contentFeedback = element(by.xpath("//button[text()=' Submit ']//preceding::i[2]"));
  var submitcontentFeedback = element(by.xpath("//button[text()=' Submit ']"));
  var assertNoSubmitOption = element(by.xpath("//div[text()=' Enjoyed this content? ']"));
  var assertComplete = element(by.xpath("//span[text()='QuestionSet with complete score']"));
  var userConsumedQuestionSet = element(by.xpath("//*[@id='summary/card1']//following::*[@id='Group']"));
  var questionSetOnlyWithScore = element(by.xpath("//span[text()='QuestionSet with only score aug19']"));
  var QuestinSetTitle2 = element(by.xpath("(//div[text()=' QuestionSet with only score aug19 '])[1]"));
  var instructionQuestionSet2 = element(by.xpath("//div[text()='only score']"));
  var QuestinSetTitle3 = element(by.xpath("(//div[text()=' QuestionSet with only duration aug19 '])[1]"));
  var instructionQuestionSet3 = element(by.xpath("//div[text()='duration only']"));
  var selectAnswer22 = element(by.xpath("(//input[@id='option-checkbox'])[4]"));
  var selectAnswer33 = element(by.xpath("(//input[@aria-checked='mcqOption.selected'])[6]"));
  var questionSetOnlyWithDuration = element(by.xpath("//span[text()='QuestionSet with only duration aug19']"));
  var assertDuration = element(by.xpath("//*[@id='summary/card1']//following::*[@id='Group']//following::*[contains(@id,'Icon')]//following::*[2]"));
  var selSubjectiveAnswer3 = element(by.xpath("//div[text()='Show Answer']"));
  var subjectiveAnswer3 = element(by.xpath("(//p[text()='Testing 3'])[2]"));
  var subjectiveAnswer4 = element(by.xpath("(//p[text()='Testing 4'])[2]"));
  var completeQuestionSet = element(by.xpath("//span[text()='Complete QuestionSet']"));
  var questionSetTitleComplete = element(by.xpath("//div[text()=' Complete QuestionSet ']"));
  var questionSetInstComplete = element(by.xpath("//p[text()='Instructions']"));
  var questionSetTitleScore = element(by.xpath("(//div[text()=' Score QuestionSet '])[1]"));
  var questionSetdurationScore = element(by.xpath("//span[text()='6:00']"));
  var questionSetInstScore = element(by.xpath("//p[text()='Score QuestionSet']"));
  var scoreQuestionSet = element(by.xpath("//span[text()='Score QuestionSet']"));
  var questionSetTitleDuration = element(by.xpath("(//div[text()=' Duration QuestionSet '])[1]"));
  var questionSetInstDuration = element(by.xpath("//p[text()='Duration QuestionSet']"));
  var durationQuestionSet = element(by.xpath("//span[text()='Duration QuestionSet']"));
  var subjectiveAnswer = element(by.xpath("//p[text()='Testing']"));

  var questioSetTtitlewithSolution = element(by.xpath("(//div[text()=' QuestionSet with solution '])[1]"));
  var questionSetInstwithSoln = element(by.xpath("//p[text()='QuestionSet with solution']"));
  var questionSetwithSolution = element(by.xpath("(//div[text()=' QuestionSet with solution '])[2]"));
  var submitQuestionSet = element(by.xpath("//button[text()='Submit']"));
  var viewSolution = element(by.xpath("//span[text()='View Solution']"));
  var Solution1 = element(by.xpath("(//div[text()='Solution'])[2]//following::div[1]//following::p[1]"));
  var buttonDone = element(by.xpath("//button[text()='Done']"));
  var SubjectiveAns3 = element(by.xpath("//div[text()='Answer']//following::p[1]"));
  var SubjectiveSol3 = element(by.xpath("//div[text()='Solution']//following::p[1]"));
  var clkProfile1 = element(by.xpath("//div[text()=' Add another user ']//following::i[1]"));
  var joinCourse1 = element(by.xpath("//button[text()='Join Course']"));
  var checkBox1 = element(by.xpath("//input[@type='checkbox']"));
  var buttonShare = element(by.xpath("//button[text()='Share']"));
  var selQuestionSet = element(by.xpath("//h4[text()=' QuestionSet ']//following::img[1]"));
  var exceedMaximumNoOfAttempts = element(by.xpath("//div[text()=' You have exceeded the maximum number of attempts that can be submitted ']"));
  var Replay = element(by.xpath("//div[text()='Replay']"));
  var OneAttemptRemaining = element(by.xpath("//span[text()='Attempt no 1/2 ']"));
  var closeWarning = element(by.xpath("//a[text()=' Close ']"));
  var courseCompleted = element(by.xpath("//div[text()='100% Completed']"));
  var questionSetTitl1 = element(by.xpath("//div[text()=' 0/4 ']//following::div[6]"));
  var questionSetInstruction1 = element(by.xpath("//div[text()='Instructions']//following::p[1]"));
  var questionSetWarningTime = element(by.xpath("//span[contains(text(),'0:')]"));

  var selectMediumValue1 = element(by.xpath("//span[text()=' english ']"));
  var selecClassValue1 = element(by.xpath("//label[text()='Grade']//following::span[contains(text(),'class')]"));

  var masterOrgDropdown = element(by.xpath("//div[@id='tenant']"));
  var externalID = element(by.xpath("//input[@id='declared-ext-id']"));
  var phoneNumber = element(by.xpath("//input[@id='declared-phone']"));
  var emailID = element(by.xpath("//input[@id='declared-email']"));
  var optionalFieldID = element(by.xpath("//label[@for='declared-ext-id']"));
  var optionalFieldphoneNumber = element(by.xpath("//label[@for='declared-phone']"));
  var optionalFieldEmailID = element(by.xpath("//label[@for='declared-email']"));
  var sltStateDropdown = element(by.xpath("//span[contains(text(),'Haryana State')]"));
  var consentCheckBox = element(by.xpath("//div[@class='sb-checkbox']//following::label[contains(@class,'label-html')]"));

  var profileEdit = element(by.xpath("//button[@aria-label='Edit Personal Details']"));
  var profileRole = element(by.xpath("(//div[@id='persona']//following::span)[1]"));
  var roleValues = element(by.xpath("(//div[@id='persona']//following::div[contains(@class,'cfe-multiselect-dropdown sb-modal-dropdown-web cfe-dropdown-web')])[1]"));

  var reportIssueCategoryDrpdwn = element(by.xpath("//div[@id='category']//following::li[text()='Select Category']"));
  var sltReportIssueCategoryDrpdwn = element(by.xpath("//div[@id='category']//following::span[text()='Content']"));
  var reportIssueSubcategoryDrpdwn = element(by.xpath("//div[@id='subcategory']//following::li[text()='Select Subcategory']"));
  var sltReportIssueSubcategoryDrpdwn = element(by.xpath("//div[@id='subcategory']//following::span[text()='Content Quality']"));
  var reportIssueTextArea = element(by.xpath("//textarea[@id='details']"));

  var reportSubmitFeedback = element(by.xpath("//button[contains(text(),' Submit feedback ')]"));
  var feedbackToastMsg = element(by.xpath("//*[@class='iziToast-message slideIn']"));

  var checkBoxConsent = element(by.xpath("//input[@name='checkbox']//following::span[@class='checkmark']"));
  var locationPopupState = element(by.xpath("//div[@id='state']"));
  var locationpopupDistrict = element(by.xpath("//div[@id='district']"));
  var sltlocationpopupDistrict = element(by.xpath("//label[@for='district']//following::span[text()='Bagalkot']"));
  var sltlocationPopupState = element(by.xpath("//label[@for='state']//following::span[text()='Karnataka']"));
  var assertDistrict = element(by.xpath("//div[contains(text(),'District :')]//following::div[1]"));
  var assertStateInProfile = element(by.xpath("//div[contains(text(),'State :')]//following::div[1]"));
  var visibleDrpdwn = element(by.xpath("(//sui-select[@id='board']//following::div[@class='menu transition visible'])[1]"));
  var hiddenDrpdwn = element(by.xpath("(//sui-select[@id='board']//following::div[@class='menu transition hidden'])[1]"))

  var locationPopUpclearButton = element(by.xpath("//mat-dialog-container[@id='location-selection']//following::button[contains(text(),'Clear')]"));
  var birthYear = element(by.xpath("//input[@aria-label='Select year of birth']"));
  var sltBirtYear = element(by.xpath("//span[contains(text(),'2021')]"));
  var signUpName = element(by.xpath("(//form[@id='signUpForm']//following::label[text()='Name'])[1]"));
  var emailLabel = element(by.xpath("//label[@id='emailLbl']"));
  var phonenumLabel = element(by.xpath("//span[contains(text(),'Mobile Number for State/ Org')]"));
  var passwordLabel = element(by.xpath("//label[text()='Password']"));
  var confirmPassLabel = element(by.xpath("//label[text()='Confirm Password']"));
  var tncLabel = element(by.xpath("//input[@id='tncAccepted']//following::label"));

  var learnerPassbook = element(by.xpath("//div[@id='learner-passbook']"));
  var dwnldCourseCertificate = element(by.xpath("//div[@id='learner-passbook']//following::i"));

  var registersignupName = element(by.xpath("//input[@id='signup-form-name']"));
  var signUpEmailId = element(by.xpath("//div[@role='radio']//following::label[@id='emailLbl']"));
  var signUpPassword = element(by.xpath("//input[@id='signup-form-password']"));
  var emailId = element(by.xpath("//label[@id='emailLbl']//following::input[@name='email']"));
  var signUpCnfrmPasswrd = element(by.xpath("//input[@id='signup-form-confirmPassword']"));
  var signUptnc = element(by.xpath("//input[@id='tncAccepted']"));
  var signUpSubmitBtn = element(by.xpath("//button[@type='submit']"));
  var tnccheckBox = element(by.xpath("//input[@id='tncAccepted']"));
  var registerLink = element(by.xpath("//span[@id='signup']"));
  var otpValidation = element(by.xpath("//input[@placeholder='Enter OTP']"));
  var otpSubmit = element(by.xpath("//button[@type='submit']"));
  var warningMessage = element(by.xpath("//label[text()='One Time Password (OTP)']//following::label"));

  var autocl = element(by.xpath("//div[@class='menu transition visible']"));
  //var state = element(by.xpath("//span[contains(text(),'Role')]//following::label//following::span[2]"));
  var selectState = element(by.xpath("//div[contains(@aria-label,'Select State')]//following::span"));
  var clkBackProfileBtn = element(by.xpath("//div[@role='heading']//preceding::button[1]"));
  var assertNoData = element(by.xpath("//div[contains(text(),'No results found')]"));
  var durationQuestionSet11 = element(by.xpath("(//span[text()='3:00'])[2]"));
  var state = element(by.xpath("//*[contains(@id,'state')]//following::*[contains(@aria-label,'Select State')]"));
  var courseClk = element(by.xpath("(//div[@role='button']//following::div)[2]"));
  var coursecardClk = element(by.xpath("(//div[@class='sb--card__meta1 text-left'])[1]"));
  var forgotPasswordLink = element(by.xpath("//div[@id='fgtPortalFlow']"));
  var invalidEmailMessage = element(by.xpath("//*[@id='withemail']//following::label[1]"));
  var assertLogin = element(by.xpath("//button[@id='login']"));
  var manageOptionPopUp = element(by.xpath("//*[@id='fbcf275e-0e28-8dab-b29e-530d728bbc99']//following::span[@class='ui header ng-star-inserted']"))
  var manageOption = element(by.xpath("//div[@id='overlaySidebarID']//following::li[@routerlink='manage']"));
  var adminpolicyInManage = element(by.xpath("//a[contains(text(),'admin policy')]"));
  var tncPopUp = element(by.xpath("(//div[contains(text(),'Terms and Policies')])[1]"));
  var assertselectedstate = element(by.xpath("//div[contains(@id,'state')]"));
  var assertselectedDistrict = element(by.xpath("//div[contains(@id,'district')]"));
  var assertProfileDistrict = element(by.xpath("//*[contains(text(),' Content preference')]//following::div[5]"));
  var assertProfileState = element(by.xpath("//*[contains(text(),' Content preference')]//following::div[8]"));
  var searchBar = element(by.xpath("//div[@id='search-input-container']//following::input[@name='filter_search']"));
  var searchBarIcon = element(by.xpath("//div[@id='search-input-container']//following::button[@title='Search in undefined']"));
  var searchedContentType = element(by.xpath("//div[@id='search-input-container']//following::div[contains(@class,'sb--card__type')]"));
  var assertBmcPopUp = element(by.xpath("//div[@id='mat-dialog-title-0']//following::div[@class='sb-mat__modal__content']"));
  var exploretab = element(by.xpath("//div[@id='search-input-container']//following::a[contains(text(),' Explore ')]"));
  var digitalTextbookTab = element(by.xpath("//div[@id='search-input-container']//following::a[contains(text(),' Digital textbooks ')]"));
  var tvclassTab = element(by.xpath("//div[@id='search-input-container']//following::a[contains(text(),' TV classes ')]"));
  var faqburgermenu = element(by.xpath("//*[text()='Faq(s)']//following::div[@class='text-left panel-title']"));
  var profileHelpButton = element(by.xpath("//div[@id='overlaySidebarID']//following::*[contains(text(),'Help')]"));
  var searchButtonInProfPage = element(by.xpath("//div[@id='search-input-container']//following::button[@title='Search in Users']"));
  var changePreference = element(by.xpath("//input[contains(@id,'keyword')]//following::button[contains(text(),'CHANGE PREFERENCE')]"));
  var boardValueSelection = element(by.xpath("//span[contains(text(),'State (Tamil Nadu)')]"));
  var boardValueSelection2 = element(by.xpath("//span[contains(text(),'State (Assam)')]"));
  var backbutton = element(by.xpath("//input[@id='keyword']//following::span[contains(text(),'Back')]"));
  var liscenceDropdown = element(by.xpath("//div[@id='search-input-container']//following::*[contains(text(),'Credits')]"));
  var liscenceterms = element(by.xpath("//div[@id='search-input-container']//following::span[contains(text(),'Credits & license info')]//following::div[21]"))
  var loginPopup = element(by.xpath("//div[contains(text(),'Access course')]//following::*[contains(text(),'Login')]"));
  var usernamePopUp = element(by.xpath("//*[@id='kc-form-login']//following::*[@id='username']"));
  var passwordPopUp = element(by.xpath("//*[@id='kc-form-login']//following::*[@id='password']"));
  var loginpopUpMsg = element(by.xpath("//div[contains(text(),'Access course')]//following::*[contains(text(),'Login')]"));
  var courseAssessment = element(by.xpath("//div[@id='search-input-container']//following::span[contains(text(),'Course Assessment')]"));
  var assessNumberAttempts = element(by.xpath("//input[contains(@placeholder,'Max no of attempts')]"));
  var clkpublishedUsertype = element(by.xpath("//*[contains(@aria-label,', selected ,Select User Type')]//following::div[1]"));
  var sltSchoolHeadOfficial = element(by.xpath("//*[contains(@aria-label,', selected ,Select User Type')]//following::*[contains(text(),'School head OR Officials')]"));
  var mergeAccpopUpbutton = element(by.xpath("//*[contains(text(),'Merge Account')]//following::button[contains(text(),'Merge')]"));
  var googleSignInbutton = element(by.xpath("//button[contains(@id,'googleSignInBtn')]//following::img"));
  var mergerAccountpage = element(by.xpath("//*[contains(@id,'signIn')]"));
  var usernameInput = element(by.xpath("//*[@id='kc-form-login']//following::label[@id='usernameLabel']"));
  var languageDropDown = element(by.xpath("//*[contains(@id,'keyword')]//following::sui-select"));
  var sltHindiLanguage = element(by.xpath("//*[contains(@id,'keyword')]//following::sui-select-option[contains(@aria-label,'Hindi')]"));
  var sltKannadaLanguage = element(by.xpath("//*[contains(@id,'keyword')]//following::sui-select-option[contains(@aria-label,'Kannada')]"));
  var sltMarathilanguage = element(by.xpath("//*[contains(@id,'keyword')]//following::sui-select-option[contains(@aria-label,'Marathi')]"));
  var sltBengaliLanguage = element(by.xpath("//*[contains(@id,'keyword')]//following::sui-select-option[contains(@aria-label,'Bengali')]"));
  var sltTamilLanguage = element(by.xpath("//*[contains(@id,'keyword')]//following::sui-select-option[contains(@aria-label,'Tamil')]"));
  var sltOdiyaLanguage = element(by.xpath("//*[contains(@id,'keyword')]//following::sui-select-option[contains(@aria-label,'Odia')]"));
  var sltPunjabilanguage = element(by.xpath("//*[contains(@id,'keyword')]//following::sui-select-option[contains(@aria-label,'Punjabi')]"));
  var sltGujratiLanguage = element(by.xpath("//*[contains(@id,'keyword')]//following::sui-select-option[contains(@aria-label,'Gujarati')]"));
  var sltState = element(by.xpath("//*[contains(text(),'CBSE/NCERT')]"));
  var hindisubmitButton = element(by.xpath("//button[contains(text(),' दाख़िल करें ')]"));
  var kanndaSubmitButton = element(by.xpath("//button[contains(text(),' ಸಲ್ಲಿಸಿ ')]"));
  var marathiSubmitButton = element(by.xpath("//button[contains(text(),' दाखल करा ')]"));
  var bengaliSubmitbutton = element(by.xpath("//button[contains(text(),' জমা দিন ')]"));
  var tamilSubmitButton = element(by.xpath("//button[contains(text(),' சமர்ப்பிக்கவும் ')]"));
  var odiyaSubmitButton = element(by.xpath("//button[contains(text(),' ସବମିଟ୍ କରନ୍ତୁ ')]"));
  var gujratiSubmitButton = element(by.xpath("//button[contains(text(),' સબમિટ કરો ')]"));
  var punjabiSubmitButton = element(by.xpath("//button[contains(text(),' ਸਬਮਿਟ ')]"));
  var viewDashBoard = element(by.xpath("//input[@id='keyword']//following::button[contains(text(),' View course dashboard ')]"));
  var sltCertificates = element(by.xpath("//input[@id='keyword']//following::a[contains(text(),'Certificates')]"));
  var searchUserId = element(by.xpath("//input[@id='keyword']//following::input[contains(@id,'search-user-input-id')]"));
  var searchButtonForuserId  = element(by.xpath("//button[@id='search-btn']"));
  var assertBatchName = element(by.xpath("//input[@id='keyword']//following::div[contains(@class,'re-issue-label')][1]"));
  var assertUserName = element(by.xpath("//input[@id='keyword']//following::div[contains(@class,'re-issue-label')][2]"));
  var assertuserDistrict = element(by.xpath("//input[@id='keyword']//following::div[contains(@class,'re-issue-label')][3]"));
  var assertCourseProgress = element(by.xpath("//input[@id='keyword']//following::div[contains(@class,'re-issue-label')][4]"));
  var clkSecondPagenationList = element(by.xpath("(//input[@id='keyword'])[2]//following::a[contains(text(),'2')]"));
  var clkNextPagenationList = element(by.xpath("//input[@id='keyword']//following::button[contains(@aria-label,'Next Page')]"));
  var clkLastPagenationList = element(by.xpath("(//input[@id='keyword'])[2]//following::a[contains(text(),'Last')]"));
  var clkPreviousPgenationList = element(by.xpath("//input[@id='keyword']//following::button[contains(@aria-label,'Previous Page')]"));
  var clkFirstPagenationList = element(by.xpath("(//input[@id='keyword'])[2]//following::a[contains(text(),'First')]"));
  var closeDashboardButton = element(by.xpath("//input[@id='keyword']//following::button[contains(text(),' Close dashboard ')]"));
  var downloadButton = element(by.xpath("//*[text()=' Download']"));
  var overlayButton = element(by.xpath("//*[contains(@aria-label,'Player Menu')]//child::span"));
  var consumptionTimer = element(by.xpath("//*[@id='summary/card1']//following::*[@id='Group-17-Copy-2']"));
  var replayButton = element(by.xpath("//div[@class='title animated fadeInDown']//following::div[contains(text(),'Replay')]"));
  var totalPageRead = element(by.xpath("//*[@id='summary/card1']//following::*[@id='Pages-read-:']"));
  var minimize = element(by.xpath("(//button[@class='sb-btn sb-btn-link sb-btn-link-gray sb-btn-sm sb-btn-square']//following::*[@class='icon-svg icon-svg--sm icon-back'])[3]"));
  var consumptionInPercentage = element(by.xpath("//div[contains(@class,'sb-pdf-reading-status ng-star-inserted')]"));
  var zoomInToc = element(by.xpath("//button[@aria-label='zoom in']"));
  var zoomOutToc = element(by.xpath("//button[@aria-label='zoom out']"));
  var downloadPopUpButton = element(by.xpath("//button[contains(text(),'Download')]"));
  var closeButton = element(by.xpath("//button[@id='close']"));
  var fullScreen = element(by.xpath("(//*[contains(@class,'icon-svg icon-svg--sm icon-back')])[7]"));
  var sharebutton = element(by.xpath("//*[contains(text(),' Download')]//preceding::*[contains(text(),'Share')][1]"));
  var minimizeToc = element(by.xpath("(//span[contains(text(),'Minimize')]//..)[1]"));
  var clkBanner = element(by.xpath("//div[contains(text(),'Featured')]//following:: div[contains(text(),'NISHTHA FLN COurses')]"));
  var consentTnCcheckbox = element(by.xpath("//input[@aria-label='term and condition checkbox']"));
  var batchDropDown = element(by.xpath("//*[contains(text(),'Batch Details')]"));
  var leaveCourse = element(by.xpath("//button[contains(text(),'Leave course')]"));
  var leaveCoursePopUp = element(by.xpath("//div[contains(text(),' Batch Unenrolment ')]//following::button[contains(text(),' Leave course ')]"));
  var nextArrow = element(by.xpath("//button[contains(@aria-label,'Next')]"));
  var prevArrowBtn = element(by.xpath("//button[contains(@aria-label,'Previous')]"));
  var pagenummberInput = element(by.xpath("//span[@aria-label='Go to page']//preceding::input[contains(@type,'number')]"));
  var rightArrowSearchbutton = element(by.xpath("//*[contains(@alt,'arrow-right')]"));
  var assertPageNotFoundMsg = element(by.xpath("//div[contains(text(),'Page Not Found')]"));
  var assertPercentageOfCompletion = element(by.xpath("//label[contains(@id,'overlay-button')]//following::div[contains(@class,'sb-epub-reading-status ng-star-inserted')]"));
  var clicktheCourse = element(by.xpath("(//div[@role='button']//following::div)[2]//following::div[contains(@class,'certificate-course-content pl-8')]"));
  var filterBy = element(by.xpath("//input[contains(@id,'search-for-content-group')]//following::button[contains(text(),'Filter by')]"));
  var selectTamilboard = element(by.xpath("//span[contains(text(),'state (tamil nadu)')]"));
  var assertPlussignfollowedWithMed = element(by.xpath("//span[contains(text(),'Medium:')]//following::span[contains(text(),'English')]//following::span[contains(text(),'+')][1]"));
  var assertPlussignfollowedWithClass = element(by.xpath("//span[contains(text(),'Medium:')]//following::span[contains(text(),'English')]//following::span[contains(text(),'+')][2]"));
  var assertShareButtonInQuestionSet = element(by.xpath("//*[contains(@id,'sidebar-list')]//following-sibling::*[contains(text(),'Share')]"));
  var selectDur3 = element(by.xpath("(//input[@id='option-checkbox'])[6]"));
  var blurredInstruction = element(by.xpath("(//div[contains(@id,'answer-container') and @class='option-container-blurred'])[2]"));
  var boardelements = element.all(by.css("div.menu.transition.visible"));
  var explorePageDropdownElements = element.all(by.css("div.cfe-multiselect-dropdown.sb-modal-dropdown-web.cfe-dropdown-web.ng-star-inserted"));
  var selectBoardValueInExplorePage = element(by.xpath("//span[contains(text(),'state (tamil nadu)')]"));
  var selectExplorepageMedium = element(by.xpath("//*[contains(text(),'Select Medium')]"));
  var selectExplorePageMediumValue = element(by.xpath("(//span[contains(text(),'english')])[1]"));
  var clkDesc = element(by.xpath("//div[@role='heading']"));
  var assertDisabledFullscreen = element(by.xpath("//span[text()='Minimize']//.."));
  var assertViewAll = element(by.xpath("//span[contains(text(),'View All')]"));
  var assertClearAll = element(by.xpath("//a[contains(text(),'Clear All')]"));
  var clkContentType1 = element(by.xpath("//div[contains(text(),'Select contentType')]"));
  var content1Val = element(by.xpath("//div[text()='Resource']"));
  var clkFindAndSelected = element(by.xpath("//strong[contains(text(),'Find & Select Resources')]"));
  var clkSelectCurriculum = element(by.xpath("//div[contains(text(),'Select Curriculum')]"));
  var Curriculam1Val = element(by.xpath("(//div[text()='State (Tamil Nadu)'])[1]"));
  var selMed = element(by.xpath("//div[contains(text(),'Select Medium')]"));
  var Med1Val = element(by.xpath("(//div[text()='English'])[2]"));
  var select1stFilteredResult = element(by.xpath("//span[contains(text(),'matching results')]//following::img[1]"));
  var clkProceedBtn = element(by.xpath("//button[contains(text(),'PROCEED')]"));
  var assertUserPreferenceUpdateMsg = element(by.xpath("//strong[contains(text(),'User preference updated successfully')]"));
  var clkAddUserRole = element(by.xpath("//button[contains(text(),'Add User Role')]"));
  var searchUser = element(by.xpath("//input[@placeholder='Search user by DIKSHA ID']"));
  var clickForSearch = element(by.xpath("//h4[contains(text(),'Add user role')]//following::i"));
  var btnAddNewRole = element(by.xpath("//button[contains(text(),'+ ADD NEW ROLE')]"));
  var selectRole = element(by.xpath("//label[contains(text(),'Role')]//following::i[1]"));
  var selectOrgName = element(by.xpath("//label[contains(text(),'Organization Name')]//following::i[1]"));
  var selectCourseAsMentor = element(by.xpath("//span[contains(text(),'Course Mentor')]"));
  var selectOrgNameAsTN = element(by.xpath("//span[contains(text(),'Tamil nadu') or contains(text(),'Tamil Nadu')]"));
  var saveBtn = element(by.xpath("//button[contains(text(),'Save')]"));
  var assertCourseMentor = element(by.xpath("//div[contains(text(),'Course Mentor')]"));
  var assertEditBtn = element(by.xpath("//span[contains(text(),'Edit')]"));
  var assertDeleteBtn = element(by.xpath("//span[contains(text(),'Delete')]"));
  var clkDelete = element(by.xpath("(//span[contains(text(),'Delete')])[2]"));
  var selectRoleAsCR = element(by.xpath("//span[contains(text(),'Content Reviewer')]"));
  var assertContentReviewer = element(by.xpath("//div[contains(text(),'Content Reviewer')]"));
  var batchSelectValue = element(by.xpath("//*[contains(@role,'listbox')]//following::*[contains(@id,'mat-option-15')]"));
  var clkCardContent = element(by.xpath("//div[contains(@class,'cardImageText center')]"));
  var assertDeactivateGroupMsg = element(by.xpath("//div[contains(text(),' This group is temporarily inactive. The group admin can re-activate the group if required. Group members can continue their discussions on the discussion forum. ')]"));
  var selectBatchValueInDashBoard = element(by.xpath("//div[contains(@role,'listbox')]//following::mat-option//child::span"));
  var selectMediumMultipleValue = element(by.xpath("//*[contains(@aria-label,'English')]//following::span[2]"));
  var selectGradeLevelMultipleValue = element(by.xpath("//*[contains(@aria-label,'Class 1')]//following::span[2]"));
  var savedPost = element(by.xpath("//span[@id='bookmark']"));
  var assertSavedPost = element(by.xpath("//div[contains(@class,'discuss-card-content')]"));
  var continueButton = element(by.xpath("//span[contains(text(),'Continue')]"));
  var assertRoleAutoPopulated = element(by.xpath("//label[contains(@for,'persona')]//following::div[contains(@id,'persona')]"));
  var assertParentGuardianPhone = element(by.xpath("//span[contains(text(),'of your parent or guardian')]//following::label[contains(text(),'Mobile Number')]"));
  var assertParentGuardianEmail = element(by.xpath("//span[contains(text(),'of your parent or guardian')]//following::label[contains(text(),'Email')]"));
  var nameInRegisterPage = element(by.xpath("//input[contains(@id,'signup-form-name')]"));
  var printButtonInPlayerNavBar = element(by.xpath("//*[contains(text(),' Download')]//following::*[contains(text(),' Print')]"));
  var expandAllButton = element(by.xpath("//*[contains(text(),'Expand all')]"));
  var clkCoursePdf = element(by.xpath("//div[contains(@title,'pdf')]"));
  var assertPagesReplaceWithLocationLabel = element(by.xpath("//div[contains(text(),'Page')]"));
  var assertDikshaGuidelines = element(by.xpath("//strong[contains(text(),'DIKSHA Administrator Guidelines')]"));
  var assertDownloadDataAccordance = element(by.xpath("//p[contains(text(),'Downloaded data should be used in accordance with')]"));
  var sltBirtYearForMajorUser = element(by.xpath("//span[contains(text(),'2000')]"));
  var emailCheckBox = element(by.xpath("//input[contains(@id,'email')]"));
  var mobileNumberCheckBox = element(by.xpath("//input[contains(@id,'phoneNumber')]"));
  var QuestionSetImage11 = element(by.xpath("//div[@class='img-container']"));
  var assertInstructionPage = element(by.xpath("//div[contains(text(),'Instructions')]"));
  var selectOrgValue = element(by.xpath("//*[contains(text(),' state (tamil nadu) ')]"));
  var selectRoleValue = element(by.xpath("//*[contains(text(),' english ')]"));
  var draftsVersion = element(by.xpath("//*[contains(text(),'Drafts')]"));
  var contentCard = element(by.xpath("//span[@class='sliderCardHeading text-cencapitalize']"));
  var QuestionSetImageScore = element(by.xpath("//bdi[contains(text(),'Score QuestionSet')]"));
  var QuestionSetImageGenre = element(by.xpath("//div[@class='img-container']"));
  var assertMergeMsgNotPermitted = element(by.xpath("//*[contains(text(),' Not permitted to merge account')]"));
  var assertMergeMsg2 = element(by.xpath("//div[contains(text(),'Invalid Email Address/Mobile number or password. Please try again with valid credentials')]"));
  var assertMergeMsg3 = element(by.xpath("//div[contains(text(),'to merge')]"));
  var assertTcnc1 = element(by.xpath("//div[contains(text(),'Terms and Policies')]"));
  var assertTcnc2 = element(by.xpath("//span[contains(text(),'I agree to the updated terms and policies')]"));
  var clkEmailOption = element(by.xpath("//div[contains(text(),'yopmail')]"));
  var assertOtpPopup = element(by.xpath("//*[contains(text(),'Enter OTP to edit your contact information')]"));
  var assertValidMergeMsg = element(by.xpath("//*[contains(text(),' Account merge initiated successfully. you will be notified once it is completed')]"));
  var verifyStateUserIcon = element(by.xpath("//img[@alt='certified']"));
  var selectQuestionSet = element(by.xpath("//div[@class='img-container']"));
  var assertInstructionPage = element(by.xpath("//div[contains(text(),'Instructions')]"));
  var assertIsymbOnProgressBar = element(by.xpath("//li[contains(text(),'i')]"));
  var assertTermsDesc = element(by.xpath("//span[contains(text(),'I consent to provide my Profile Details and the additional details listed above with the administrators of my State / Institution. All administrators on DIKSHA are bound by the Privacy Policy and Administrator Guidelines in their use of my data. ')]"));
  var assertSubmitSuccesMsg = element(by.xpath("//div[contains(text(),' Thank you for submitting your details ')]"));
  var assertSubmitSuccesTostrMsg = element(by.xpath("//strong[contains(text(),'Profile share settings submitted successfully')]"));
  var assertSubmitSuccesMsg2 = element(by.xpath("//div[contains(text(),'You can edit this information from your profile')]"));
  var enterEmailForRecovery = element(by.xpath("//input[@name='identifier']"));
  var enterNameForRecovery = element(by.xpath("//input[@name='name']"));
  var clkNextInRecovery = element(by.xpath("//input[@name='name']//following::button[1]"));
  var assertRecoveryMsg1 = element(by.xpath("//div[contains(text(),'You will receive an OTP. After you validate it, you can recover your account ')]"));
  var clkRadioBtnForSelection = element(by.xpath("//div[contains(text(),'Recover Account')]//following::span[1]"));
  var clkGetOTP = element(by.xpath("//button[contains(text(),'Get OTP')]"));
  var assertOtpMsg1 = element(by.xpath("//div[contains(text(),' OTP has been sent to ')]"));
  var assertOtpMsg2 = element(by.xpath("//span[contains(text(),'*@gmail.com')]"));
  var assertOtpMsg3 = element(by.xpath("//div[contains(text(),' It is ')]"));
  var assertOtpMsg4 = element(by.xpath("//span[contains(text(),'valid for 30 min')]"));
  var enterOtp1 = element(by.xpath("//input[@name='otp']"));
  var clkResendOtp = element(by.xpath("//input[@name='otp']//following::span[contains(text(),'Resend OTP')]"));
  var resendSuccessMsg = element(by.xpath("//strong[contains(text(),'OTP sent successfully')]"));
  var submitOtp = element(by.xpath("//input[@name='otp']//following::button[contains(text(),'Submit OTP')]"));
  var assertErrorOtpMsg1 = element(by.xpath("//strong[contains(text(),'Incorrect OTP. Number of attempts remaining : 1')]"));
  var assertErrorOtpMsg2 = element(by.xpath("//div[contains(text(),'Failed to validate OTP. Try again later')]"));
  var enterPasswordInRegister = element(by.xpath("//input[@name='password']"));
  var clickEyeImg = element(by.xpath("//img[@class='showhideimage']"));
  var conifrmPassword = element(by.xpath("//input[@name='confirmPassword']"));
  var clickEmailBtn = element(by.xpath("//label[@for='email']"));
  var enterEmailTextbox = element(by.xpath("//input[@formcontrolname='email']"));
  var assertEmailOtpMSg1 = element(by.xpath("//span[contains(text(),'OTP is sent to your email address:')]"));
  var assertEmailOtpMSg2 = element(by.xpath("//b[contains(text(),'EmailCheck@yopmail.com')]"));
  var assertEmailOtpMSg3 = element(by.xpath("//div[contains(text(),'OTP is valid for 30 minutes')]"));
  var assertEmailOtpMSg4 = element(by.xpath("//label[contains(text(),'I am 18+ years old and understand and ')]"));
  var sltBirtMajorYear = element(by.xpath("//span[contains(text(),'1993')]"));
  var assertEmailOtpMSgforMinor1 = element(by.xpath("//span[contains(text(),'Parent/guardian should enter the OTP')]"));
  var assertEmailOtpMSgforMinor2 = element(by.xpath("//label[contains(text(),'As a parent/guardian I understand')]"));
  var enterMobileNoTextbox = element(by.xpath("//input[@name='phone']"));
  var assertMobileOtpMsg1 = element(by.xpath("//span[contains(text(),'OTP is sent to your mobile number')]"));
  var assertMobileOtpMsg2 = element(by.xpath("//b[contains(text(),'9591429465')]"));
  var assertBoardOfOrgFrame = element(by.xpath("//span[contains(text(),'Board/University')]//following::span[contains(text(),'State (Tamil Nadu)')]"));
  var assertmediumOfOrgFrame = element(by.xpath("//span[contains(text(),'Medium')]//following::span[contains(text(),'English')]"));
  var assertGradeOfOrgFrame = element(by.xpath("//span[contains(text(),'Grade')]//following::span[contains(text(),'Class 1')]"));
  var assertTitleOfCollection = element(by.xpath("//div[contains(@role,'heading')]"));
  var clickCollectionRelevantDrpdwn = element(by.xpath("//*[contains(text(),'The collection is relevant for')]"));
  var idAsRequestedByStateBoardOrg = element(by.xpath("//input[@placeholder='Enter ID']"));
  var selectStateInstitutionDrpDwn = element(by.xpath("//*[contains(text(),'Select State/Institution')]"));
  var selectStateInstitutionDrpDwnValue = element(by.xpath("//*[contains(text(),'State (Punjab)')]"));
  var updateButtonInproFilePage = element(by.xpath("//button[contains(text(),'Update')]"));
  var closeProfile = element(by.xpath("//*[@title='Close sidebar']"));
  var buttonClose1 = element(by.xpath("//div[@aria-label='Close']"));
  var assertPhoneNoFieldPreField = element(by.xpath("//label[@for='declared-email']//preceding::*[@id='Green']"));
  var assertEmailFieldPreField = element(by.xpath("//label[@for='declared-email']//following::*[@id='Green']"));
  var homeTabClick = element(by.xpath("//*[contains(text(),'Home')]"));
  var assertBoardValue = element(by.xpath("//*[@id='board']//span[contains(text(),'State (Andhra Pradesh)')]"));
  var assertClassValue = element(by.xpath("//*[@id='medium']//span[contains(text(),'English')]"));
  var assertMediumValue = element(by.xpath("//*[@id='gradeLevel']//span[contains(text(),'Class')]"));
  var assertRightContent = element(by.xpath("//*[contains(text(),'AutomationCourseContent')]"));
  var assertRightContent2 = element(by.xpath("//*[contains(text(),'Course details')]"));
  var content1 = element(by.xpath("//span[contains(text(),'Course Unit')]//following::span[1]"));
  var content2 = element(by.xpath("//span[contains(text(),'Course Unit')]//following::span[8]"));
  var clkExpandContent = element(by.xpath("//span[@class='fancytree-expander fa fa-caret-right']"));
  var assertPreFilledName = element(by.xpath("//label[contains(text(),'I wish to share my data with:')]//following::span[1]"));
  var clkTheCourse = element(by.xpath("//div[@role='button']//following::div[contains(@title,'PDF_13.pdf')]//.."));
  var tAndCBelowOtpTxtbox = element(by.xpath("//label[@for='tncAccepted']"));
  var stateDropdownAfterSwithUserLocation = element(by.xpath("//div[@id='state']//following::sb-caret-down[1]"));
  var districtDropdownAfterSwitchUserLocation = element(by.xpath("//div[@id='district']//following::sb-caret-down[1]"));
  var clkContinueBtn = element(by.xpath("//span[text()='Continue']"));
  var submitBtn = element(by.xpath("//button[text()='Submit ']"));
  var clkHamrureger = element(by.xpath("//em[contains(text(),'Player Menu Open')]"));
  var ClkCloseInHamru = element(by.xpath("//em[contains(text(),'Player Menu Close')]"));
  var selectFilterBoardTn = element(by.xpath("//*[contains(text(),'Select Board')]//following::span[@class='mat-option-text'][3]"));
  var selectFilterBoardFirstValue = element(by.xpath("//*[contains(text(),'Select Board')]//following::span[@class='mat-option-text']"));
  var assertFirstSlide = element(by.xpath("(//div[contains(text(),'1/3')])[2]"));
  var firstAnswerOption = element(by.xpath("(//span[contains(@class,'radiomark')])[1]//.."));
  var secondAnswerOption = element(by.xpath("(//span[contains(@class,'radiomark')])[2]//.."));
  var clickFirstAnswerToChangeOption = element(by.xpath("(//span[contains(@class,'radiomark')])[4]//.."));
  var navigateToPrevious = element(by.xpath("(//div[contains(@aria-label,'preview slide')])[1]"));
  var showAnswerButton = element(by.xpath("//div[contains(@aria-label,'Show Answer')]"));
  var assertQuestionSkipped = element(by.xpath("//div[contains(text(),'Questions Skipped')]"));
  var assertTotalQuestion = element(by.xpath("//div[contains(text(),'Total Questions')]"));
  var assertHightlightedAnswer = element(by.xpath("//div[contains(@class,'quml-option quml-option--selected')]"));
  var submitButtonInQuestionSet = element(by.xpath("//button[contains(text(),'Submit')]"));

  var ansScore2 = element(by.xpath("//*[text()='0']"));
  var ansScore1 = element(by.xpath("//*[text()='0.33']"));
  var ansKeys1 = element(by.xpath("//*[text()='C']"));
  var ansKeys2 = element(by.xpath("//*[text()='F']"));
  var ansKeys3 = element(by.xpath("//*[text()='I']"));
  var previewNext = element(by.xpath("(//*[text()='Next'])[1]"));
  var correctButton = element(by.xpath("(//*[@id='correctButton'])[1]"));
  var partialScore = element(by.xpath("(//*[@type='checkbox'])[56]"));
  var engKeyBoard = element(by.xpath("(//*[text()='English'])[7]"));
  var customKeyBoard = element(by.xpath("(//*[text()='Custom'])[2]"));
  var keyBoard = element(by.xpath("(//*[@class='dropdown icon'])[15]"));
  var ansFild1 = element(by.xpath("//*[@id='ans-field1']"));
  var ansFild2 = element(by.xpath("//*[@id='ans-field2']"));
  var ansFild3 = element(by.xpath("//*[@id='ans-field3']"));
  var createdQuestion = element(by.xpath("(//*[text()='Question'])[1]"));
  var questionConfiguration = element(by.xpath("(//*[@class='section activeBreadcumb'])[2]"));
  var questionSlid = element(by.xpath("(//*[@type='text'])[2]"));
  var editQuestion = element(by.xpath("(//*[@id='edit-question-config'])[1]"));
  var deleteButtonInWorkSpace = element(by.xpath("(//i[@class='trash large icon ng-star-inserted'])[1]"));
  var saveAsDraftInWorkspace = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-outline-primary mr-10 ng-star-inserted']"));
  var assertFirstnode = element(by.xpath("//span[contains(text(),'Textbook UnitChildTitle')]"));
  var assertSecondnode = element(by.xpath("//span[contains(text(),'Textbook UnitChildTitle')]"));
  var selectUrdu = element(by.xpath("//span[contains(text(),'اردو')]"));
  var assertSearchBtnUrdu = element(by.xpath("//button[contains(text(),'تلاش کریں')]"));
  var assertSearchFieldUrdu = element(by.xpath("//input[contains(@placeholder,'تلاش کریں یا QR کوڈ درج کریں')]"));
  var assertshareBtnUrdu = element(by.xpath("//button[contains(text(),'شیئر ')]"));
  var keyBoard1 = element(by.xpath("(//*[@class='dropdown ng-pristine ng-untouched ng-valid has-error ui selection ng-not-empty ng-valid-required'])"));
  var customKeyBoard1 = element(by.xpath("(//*[text()='Custom'])[2]"));
  var assertErrMsgInAddUser = element(by.xpath("//label[contains(text(),'You have to enter a username')]"));
  var clkSubmitOrUpdateDetailsProfile = element(by.xpath("//button[contains(text(),'Update')]"));
  var SelectBMCstateTN = element(by.xpath("//span[contains(text(),' Tamil Nadu ')]"));
  var BMCstateTN = element(by.xpath("//label[@for='state']//following::span[2]"));
  var SelectBMCdistrictChennai = element(by.xpath("//span[text()=' Chennai ']"));
  var SelectBMCblockPerambur = element(by.xpath("//span[contains(text(),' Perambur ')]"));
  var assertTNDistrictInProfile = element(by.xpath("//div[contains(text(),'District :')]//following::div[contains(text(),' CHENNAI ')]"));
  var assertTNStateInProfile = element(by.xpath("//div[contains(text(),'State :')]//following::div[contains(text(),' Tamil Nadu')]"));
  var assertTNDBlockInProfile = element(by.xpath("//div[contains(text(),'Block :')]//following::div[contains(text(),' Perambur ')]"));
  var assertTNClusterInProfile = element(by.xpath("//div[contains(text(),'Cluster :')]//following::div[contains(text(),' Koyambedu ')]"));


  return {
    closeIcon,
    assertDisabledFullscreen,
    boardDropdown,
    selectSubjectValue,
    selectBoardValue,
    selectGradeLevelValue,
    selectMediumValue,
    subjectDropdown,
    submitButtonForDropdowns,
    gradeLevelDropDown,
    mediumDropdown,
    workSpace,
    startCreating,
    addResource,
    proceedButton,
    createCourse,
    createBook,
    createResource,
    createCollection,
    createLesson,
    createUploadContent,
    loginLink,
    clickAddbutton,
    selectResourceType2,
    resourceSearch,
    submitForm,
    selectDistrict,
    district,
    dog,
    logout,
    headerDropdown,
    save,
    proceed,
    userName,
    password,
    login,
    course,
    name,
    newchild,
    title,
    titleN,
    description,
    addTag,
    descriptionN,
    addTagN,
    checkboxFirst,
    sendForReview,
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
    topic,
    topicSelectorImg,
    topicSelectorContent,
    topicSelectorDone,
    titleName,
    saveform,
    author,
    upForReview,
    searchForReview,
    searchIconUpForReview,
    searchedContentForPublish,
    publishCourseButton,
    checkBox,
    popupPublishButtons,
    btnPublish,
    frameElement,
    collection,
    lessonPlan,
    uploadContent,
    selectYear,
    year2020,
    publishResource,
    addQuestionSet,
    questionCheckbox,
    nextButton,
    questionSetTitle,
    addbutton,
    searchTextInQuestion,
    copyQuestion,
    previewRefreshIcon,
    nextButtonInQuestion,
    submitButtonInQuestion,
    popupPublishButton1,
    enterTheTitleQues,
    untitledUnitName,
    headerLibrary,
    filterSearch,
    searchIcon,
    courseCard,
    firstCourseCardContentName,
    deleteButton,
    yesButtonPopup,
    messageBox,
    published,
    questionCheckbox0,
    questionCheckbox1,
    questionCheckbox2,
    selectedQuestionName,
    configureScore,
    saveCourse,
    previewClick,
    searchInput,
    clickLibray,
    searchPublishedCourses,
    fetchContentName,
    clickShare,
    clickCopy,
    closeIconInShare,
    playSharedContent,
    closeicon,
    closeUploadContent,
    closeSave,
    uploadAgain,
    saveIcon,
    selectHindi,
    clickClass,
    submitButtonFilter,
    contentEngMed,
    resetButton,
    selectClass1,
    clssInCard,
    clickSubject,
    selectGeography,
    subInCard,
    searchedCard,
    searchedContentForUpload,
    folderIcon,
    playVedio,
    menuIcon1,
    closeIconOfContent,
    selectEng,
    submitFilterButton,
    engMed,
    resetBtn,
    sltclass1,
    sltcls,
    sltsubj,
    stldEng,
    pdfContent1,
    menuPlayer,
    selectCBSE,
    //filter,
    boardInCard,
    medInCard,
    courseName,
    courseToBeClicked,
    clickBoardFilter,
    selectBoardFilter,
    headerCourse,
    closeIcon2,
    nextButtonContentPlayer,
    mergeAccount,
    mergebutton,
    mergeMessage,
    mergeMessageOkButton,
    searchButton,
    courseCardAfterSearch,
    batchEnrollmentDateEnded,
    joinTraining,

    editIcon,
    searchCourse1,
    searchButton1,
    addIcon,
    nameOfBatch,
    aboutBatch,
    startDate,
    startDateCalendar,
    endDate,
    endDateCalendar,
    mentorsInBatch,
    suborgMentor2InBatch,
    selectMentorsInBatch,
    mentorDropdown,
    membersInBatch,
    memberDropdown,
    buttonCreate,
    closeBatchPopup,
    batchForm,
    editBatchIcon,
    updateBatchButton,
    contentPlayer,
    closePopup1,
    latestCourseCard,
    clearButton,
    enterValidStartDate,
    start1,
    endDateShouldBeGreaterThanStartDate,
    calendarIcon1,
    removeMembers,
    courseBatchesSection,
    createdByMeCard,
    assignedToMe,
    batchDropDownIcon,
    upcomingBatches,
    untitledCollection,
    advancedFilter,
    difficulty,
    selectDifficulty,
    questionType,
    selectQuestionType,
    boardSyllabus,
    selectBoardSyllabus,
    medium,
    selectMediumQ,
    classType,
    selectClassQ,
    subject,
    selectSubjectQ,
    myQuestionToggle,
    validateLatestCourse,
    licenceTerms,
    licenceTag,
    copyCourse,
    copyCourseContent,
    editOrViewDetailslink,
    credit,
    msgDerivedFrom,
    originalContentName,
    authorName,
    publishedDetails,
    attributionName,
    courseNameInContentPlayer,
    clickProfileIcon,
    viewMoreButton,
    filterIcon,
    clickFilterBoard,
    selectFilterBoard,
    clickFilterMedium,
    selectFilterMedium,
    clickFilterSubject,
    selectFilterSubject,
    clickSubmit,
    clickFilterGrade,
    SelectFilterGrade,
    selectFilterMedium2,
    sortByDropdown,
    modifiedOnDropdown,
    searchCoursesUpForReview,
    nameAToZ,
    createdOnDropdown,
    nextLink,
    firstLink,
    lastLink,
    previousLink,
    requestChangesButton,
    requestChangesComment,
    requestChangesBlueButton,
    drafts,
    firstContentName,
    imageCard,
    reviewerCommentIcon,
    reviewerCommentSection,
    closePopup,
    closeEditor2,
    closeDashboard,
    previousButton,
    nextButton1,
    firstButton,
    secondButton,
    searchForParticipants,
    twoHundersUsers,
    downloadCsv,
    userEnrolledInToBatch,
    sortFunctionalityInAllColumn1,
    sortFunctionalityInAllColumn2,
    sortFunctionalityInAllColumn3,
    sortFunctionalityInAllColumn4,
    batchName,
    selectBatch,
    certificateStatus,
    status,
    enrollOn,
    mobileNumber,
    organizationName,
    userName1,
    certificateIssued,
    trainingCompleted,
    participants,
    endDateDashboard,
    startDateDashboard,
    viewCourseDashBoard,
    courseCard1,
    classDropDown,
    subjectDropDown,
    classDropDown1,
    subjectDropDown1,
    selectEng1,
    submitFilterButton1,
    engMed1,
    resetBtn1,
    sltclass2,
    sltcls1,
    sltsubj1,
    stldEng1,
    mediumDropDown1,
    Teacher,
    Continue,
    state,
    selectState,
    fieldLessonPlanDesc,
    fieldAddNotes,
    publishLesson,
    toastMsg,
    firstCourseCardName,
    allMyContent,
    btnBack,
    boardPostSelect,
    mediumPostSelect,
    gradePostSelect,
    levelPostSelect,
    subjectPostSelect,
    checkbxQn,
    btnCancelInquestion,
    linkProfile,
    profileTickMark,
    btnEdit,
    btnClose,
    stateInsideEdit,
    districtInsideEdit,
    stateSelectInsideEdit,
    districtSelectInsideEdit,
    profileUpdatedSuccessPopup,
    btnSubmit,
    collecclick,
    getcopyshardata,
    verifyDataAfterFilter,
    mergeAccountWithCusto,
    btnMerge,
    btnOk,
    click2Next,
    click3Next,
    SearchInPublished,
    sunbirdOkMsg,
    saveButoonReview,
    clickCourse,
    BasedOnYourPrefernceText,
    profileImage,
    RegisterHereLink,
    RegisterOnDikshaHeader,
    QRcodeSearchBox,
    searchQRCode,
    clickOnFirstContent,
    topicSelectorDone1,
    zoomIn,
    zoomOut,
    clkChatBox,
    closeChatBox,
    chatlabel,
    chatDigitalContent,
    chatCourse,
    chatDikshaMobileApp,
    chatcontentContribution,
    chatOtherDIKSHAqueries,
    chatExplore,
    headerDropdown1,
    Student,
    Other,
    BookCount,
    clickSearchedResourceDoId,
    chatTakeaCourse,
    chatHelpSupport,
    chatMainMenu,
    chatStateCourse,
    chatIGOT,
    chatNishthaCourse,
    chatGoBack,
    chatMainMenu2,
    verifykarnatakaState,
    clkDikshaCopy,
    district1,
    searchButton2,
    courseProgress,
    continueLearning,
    kebabMenu,
    joinCourse,
    checkbox,
    shareButton,
    startLearning,
    syncProgressNow,
    progresSynced,
    //  SelectDistrict,
    continuePolicyButton,
    BMCstate,
    SelectBMCstate,
    BMCdistrict,
    SelectBMCdistrict,
    BMCBlock,
    SelectBMCblock,
    BMCcluster,
    SelectBMCcluster,
    BMCSchoolCluster,
    BMCSubmit,
    headerDropdown2,
    profileName,
    profileButton,
    guestName,
    editProfileName,
    yobPopup,
    yobSelectYearDropdown,
    yearSelection,
    contentType,
    contentTypeValue,
    subSelect,
    addToGroup,
    subSelectValue,
    MedSelect,
    MedSelectValue,
    statelogin,
    stateDropdown,
    stateSubmit,
    MUAuser,
    userChangepolicyCheckbox,
    policySubmitButton,
    googleSignButton,
    GoogleUserName,
    googleNextButton,
    googlePassword,
    SSOUserName,
    SSOUserExtID,
    SSOSchoolExtID,
    SSOsubmit,
    SSOStateSelect,
    SSOSubmit2,
    UpdateButton,
    DataDropdown,
    SelectDataDropdown,
    myDetails,
    SelectTextBook,
    profileboard,
    profileMedium,
    profileClasses,
    YOB,
    guestName1,
    selectBMCSchoolCluster,
    AbsSubmit,
    Cluster,
    themeChange,
    stateDropdownsso,
    UnmuteButton,
    muteButton,
    clkcheckBoxPublising,
    GlobalSearch,
    ContentfilterForGroup,
    selectIGOTboardValue,
    clkSchoolHeader,
    SSOStateSelect1,
    qrCodeRequred,
    classicThemeHeaderDropdown,
    guestIcon,
    assertState,
    browseBySubj,
    featured,
    browseByCategories,
    allTab,
    browseByBoard,
    browseByAudience,
    assertCbseBoard,
    assertIgotBoard,
    submitDetailsProfile,
    workspaceHeaderDropDwn,
    clickFirstChekcBox,
    profilePage,
    usrName,
    userId,
    userRole,
    userDistrict,
    userState,
    userboard,
    userMedium,
    userClass,
    userSubject,
    maskednumber,
    maskedEmail,
    recoveryEmail,
    recoveryMobile,
    assertsubmitButton,
    userProfilebutton,
    helpCentreFaq,
    faqQuestions,
    helpCentreburgerButton,
    stateValue,
    districtValue,
    clickState,
    clickDistrict,
    assertFromNcert,
    clkHomeTab,
    inputField,
    recoverySubmit,
    invalidMessage,
    reviewComments,
    commentsInput,
    commentBoxClose,
    SelectBoardValue2,
    mediumDropdown3,
    selectmediumvalue2,
    classDropdown,
    selectClassValue,
    editProfile,
    collectionDescription,
    HelpLink,
    FAQLogin,
    FAQProfile,
    FAQCourseAndCertificate,
    boardSelection,
    assertConsume,
    logincourseconsume,
    HelpList,
    submitFeedback1,
    selectSubCatagory,
    TextArea,
    ReportOtherIssue,
    selectCatagory,
    AddCertificate,
    AddNewCertificate,
    IssueCertificateTo,
    defaultValue,
    editBMC,
    updateBoardValue,
    updateGradeLevelValue,
    HomeTab,
    BoardUpdated,
    MedUpdated,
    LevelUpdated,
    plusIcon,
    bestAttemptScore,
    selectDropDown,
    scoreRule,
    greaterThan,
    deleteAllMyContent,
    clkBoardReview,
    clkUploadBucket,
    sltCourseCard,
    createdOn,
    assertAuthor,
    assertCreatedBy,
    assertPubishedBy,
    assertCreditLink,
    assertLiscence,
    assertquestionSet,
    summaryTypeValues,
    questionSetsummaryType,
    headerDropdownForClassTheme,

    QuestionSetImage1,
    QuestinSetTitle1,
    selectAnswer2,
    totalNoOfQuestions1,
    totalNoOfQuestions2,
    durationQuestionSet1,
    instructionQuestionSet1,
    nextSlideIconStep1,
    selectAnswer1,
    assertFeedback,
    selectAnswer3,
    contentFeedback,
    userConsumedQuestionSet,
    assertComplete,
    submitcontentFeedback,
    assertNoSubmitOption,
    questionSetOnlyWithScore,
    QuestinSetTitle2,
    instructionQuestionSet2,
    selectAnswer22,
    instructionQuestionSet3,
    selectAnswer33,
    QuestinSetTitle3,

    questionSetOnlyWithDuration,
    assertDuration,
    questionSetTitleDuration,
    durationQuestionSet,
    selSubjectiveAnswer3,
    subjectiveAnswer,
    questionSetInstDuration,
    scoreQuestionSet,
    questionSetInstScore,
    subjectiveAnswer3,
    questionSetTitleScore,
    questionSetdurationScore,
    questionSetInstComplete,
    completeQuestionSet,
    questionSetTitleComplete,
    subjectiveAnswer4,
    questioSetTtitlewithSolution,
    questionSetInstwithSoln,
    questionSetwithSolution,
    submitQuestionSet,
    viewSolution,
    buttonDone,
    Solution1,
    SubjectiveAns3,
    SubjectiveSol3,
    clkProfile1,
    joinCourse1,
    checkBox1,
    buttonShare,
    selQuestionSet,
    exceedMaximumNoOfAttempts,
    Replay,
    OneAttemptRemaining,
    courseCompleted,
    questionSetInstruction1,
    questionSetTitl1,
    questionSetWarningTime,
    closeWarning,
    selectMediumValue1,
    selecClassValue1,
    QuestinSetTitle1,
    selectAnswer2,
    totalNoOfQuestions1,
    totalNoOfQuestions2,
    //durationQuestionSet1,
    instructionQuestionSet1,
    // nextSlideIconStep1,
    //selectAnswer1,
    assertFeedback,
    selectAnswer3,
    contentFeedback,
    userConsumedQuestionSet,
    assertComplete,
    submitcontentFeedback,
    assertNoSubmitOption,
    questionSetOnlyWithScore,
    QuestinSetTitle2,
    instructionQuestionSet2,
    //selectAnswer22,
    //instructionQuestionSet3,
    selectAnswer33,
    QuestinSetTitle3,

    questionSetOnlyWithDuration,
    assertDuration,
    //questionSetTitleDuration,
    durationQuestionSet,
    selSubjectiveAnswer3,
    subjectiveAnswer,
    questionSetInstDuration,
    scoreQuestionSet,
    questionSetInstScore,
    subjectiveAnswer3,
    questionSetTitleScore,
    questionSetdurationScore,
    questionSetInstComplete,
    completeQuestionSet,
    questionSetTitleComplete,
    subjectiveAnswer4,
    masterOrgDropdown,
    externalID,
    phoneNumber,
    emailID,
    optionalFieldID,
    optionalFieldphoneNumber,
    optionalFieldEmailID,
    sltStateDropdown,
    consentCheckBox,
    profileEdit,
    profileRole,
    roleValues,
    profileEdit,
    profileRole,
    roleValues,
    reportIssueCategoryDrpdwn,
    sltReportIssueCategoryDrpdwn,
    reportIssueSubcategoryDrpdwn,
    sltReportIssueSubcategoryDrpdwn,
    reportIssueTextArea,
    reportSubmitFeedback,
    feedbackToastMsg,
    headerdrpdwn,
    checkBoxConsent,
    locationPopupState,
    locationpopupDistrict,
    sltlocationpopupDistrict,
    sltlocationPopupState,
    assertDistrict,
    assertStateInProfile,
    visibleDrpdwn,
    hiddenDrpdwn,
    locationPopUpclearButton,
    birthYear,
    sltBirtYear,
    signUpName,
    emailLabel,
    phonenumLabel,
    passwordLabel,
    confirmPassLabel,
    tncLabel,
    learnerPassbook,
    dwnldCourseCertificate,
    registersignupName,
    signUpEmailId,
    signUpPassword,
    signUpCnfrmPasswrd,
    signUptnc,
    signUpSubmitBtn,
    autocl,
    clkBackProfileBtn,
    assertNoData,
    durationQuestionSet11,
    tnccheckBox,
    registerLink,
    courseClk,
    emailId,
    otpValidation,
    otpSubmit,
    warningMessage,
    coursecardClk,
    forgotPasswordLink,
    invalidEmailMessage,
    assertLogin,
    manageOptionPopUp,
    manageOption,
    adminpolicyInManage,
    tncPopUp,
    assertselectedstate,
    assertselectedDistrict,
    assertProfileDistrict,
    assertProfileState,
    searchBar,
    searchBarIcon,
    searchedContentType,
    assertBmcPopUp,
    exploretab,
    digitalTextbookTab,
    tvclassTab,
    faqburgermenu,
    profileHelpButton,
    searchButtonInProfPage,
    changePreference,
    boardValueSelection,
    backbutton,
    liscenceDropdown,
    liscenceterms,
    loginPopup,
    usernamePopUp,
    passwordPopUp,
    loginpopUpMsg,
    courseAssessment,
    assessNumberAttempts,
    sltSchoolHeadOfficial,
    clkpublishedUsertype,
    mergeAccpopUpbutton,
    googleSignInbutton,
    mergerAccountpage,
    usernameInput,
    languageDropDown,
    sltHindiLanguage,
    sltKannadaLanguage,
    sltMarathilanguage,
    sltBengaliLanguage,
    sltTamilLanguage,
    sltOdiyaLanguage,
    sltPunjabilanguage,
    sltGujratiLanguage,
    sltState,
    hindisubmitButton,
    kanndaSubmitButton,
    marathiSubmitButton,
    bengaliSubmitbutton,
    tamilSubmitButton,
    odiyaSubmitButton,
    gujratiSubmitButton,
    punjabiSubmitButton,
    viewDashBoard,
    sltCertificates,
    searchUserId,
    searchButtonForuserId,
    assertBatchName,
    assertUserName,
    assertuserDistrict,
    assertCourseProgress,
    clkSecondPagenationList,
    clkNextPagenationList,
    clkLastPagenationList,
    clkPreviousPgenationList,
    clkFirstPagenationList,
    closeDashboardButton,
    downloadButton,
    overlayButton,
    consumptionTimer,
    replayButton,
    totalPageRead,
    minimize,
    consumptionInPercentage,
    zoomInToc,
    downloadPopUpButton,
    closeButton,
    zoomOutToc,
    fullScreen,
    sharebutton,
    minimizeToc,
    clkBanner,
    consentTnCcheckbox,
    batchDropDown,
    leaveCourse,
    leaveCoursePopUp,
    nextArrow,
    prevArrowBtn,
    pagenummberInput,
    rightArrowSearchbutton,
    assertPageNotFoundMsg,
    assertPercentageOfCompletion,
    clicktheCourse,
    filterBy,
    selectTamilboard,
    selectDur3,
    boardValueSelection2,
    selectGradeLevelValue2,
    assertPlussignfollowedWithMed,
    assertPlussignfollowedWithClass,
    assertShareButtonInQuestionSet,
    blurredInstruction,
    boardelements,
    explorePageDropdownElements,
    selectBoardValueInExplorePage,
    selectExplorepageMedium,
    selectExplorePageMediumValue,
    clkDesc,
    assertViewAll,
    assertClearAll,
    clkContentType1,
    content1Val,
    clkFindAndSelected,
    clkSelectCurriculum,
    Curriculam1Val,
    selMed,
    Med1Val,
    select1stFilteredResult,
    clkProceedBtn,
    assertUserPreferenceUpdateMsg,
    clkAddUserRole,
    searchUser,
    clickForSearch,
    btnAddNewRole,
    selectRole,
    selectCourseAsMentor,
    selectOrgName,
    selectOrgNameAsTN,
    saveBtn,
    assertCourseMentor,
    assertEditBtn,
    assertDeleteBtn,
    clkDelete,
    selectRoleAsCR,
    assertContentReviewer,
    batchSelectValue,
    clkCardContent,
    assertDeactivateGroupMsg,
    selectBatchValueInDashBoard,
    selectMediumMultipleValue,
    selectGradeLevelMultipleValue,
    savedPost,
    assertSavedPost,
    continueButton,
    assertRoleAutoPopulated,
    assertParentGuardianPhone,
    assertParentGuardianEmail,
    nameInRegisterPage,
    printButtonInPlayerNavBar,
    expandAllButton,
    clkCoursePdf,
    assertPagesReplaceWithLocationLabel,
    assertDikshaGuidelines,
    assertDownloadDataAccordance,
    sltBirtYearForMajorUser,
    emailCheckBox,
    mobileNumberCheckBox,
    QuestionSetImage11,
    assertInstructionPage,
    selectOrgValue,
    selectRoleValue,
    draftsVersion,
    contentCard,
    QuestionSetImageScore,
    QuestionSetImageGenre,
    selectLoginState,
    SSOUserName1,
    assertMergeMsgNotPermitted,
    assertMergeMsg2,
    assertMergeMsg3,
    assertTcnc1,
    assertTcnc2,
    clkEmailOption,
    assertOtpPopup,
    assertValidMergeMsg,
    verifyStateUserIcon,
    IssueCertificateToDropdown,
    selectQuestionSet,
    assertInstructionPage,
    assertIsymbOnProgressBar,
    assertTermsDesc,
    assertSubmitSuccesTostrMsg,
    assertSubmitSuccesMsg,
    assertSubmitSuccesMsg2,
    enterEmailForRecovery,
    enterNameForRecovery,
    clkNextInRecovery,
    assertRecoveryMsg1,
    clkRadioBtnForSelection,
    clkGetOTP,
    assertOtpMsg1,
    assertOtpMsg2,
    assertOtpMsg3,
    assertOtpMsg4,
    enterOtp1,
    clkResendOtp,
    submitOtp,
    assertErrorOtpMsg1,
    assertErrorOtpMsg2,
    resendSuccessMsg,
    enterPasswordInRegister,
    clickEyeImg,
    conifrmPassword,
    clickEmailBtn,
    enterEmailTextbox,
    assertEmailOtpMSg1,
    assertEmailOtpMSg2,
    assertEmailOtpMSg3,
    assertEmailOtpMSg4,
    sltBirtMajorYear,
    assertEmailOtpMSgforMinor1,
    assertEmailOtpMSgforMinor2,
    enterMobileNoTextbox,
    assertMobileOtpMsg1,
    assertMobileOtpMsg2,
    assertBoardOfOrgFrame,
    assertmediumOfOrgFrame,
    assertGradeOfOrgFrame,
    assertTitleOfCollection,
    clickCollectionRelevantDrpdwn,
    selectStateInstitutionDrpDwn,
    selectStateInstitutionDrpDwnValue,
    closeProfile,
    idAsRequestedByStateBoardOrg,
    updateButtonInproFilePage,
    buttonClose1,
    assertPhoneNoFieldPreField,
    assertEmailFieldPreField,
    homeTabClick,
    assertBoardValue,
    assertClassValue,
    assertMediumValue,
    assertRightContent,
    assertRightContent2,
    content1,
    content2,
    clkExpandContent,
    assertPreFilledName,
    clkTheCourse,
    tAndCBelowOtpTxtbox,
    stateDropdownAfterSwithUserLocation,
    districtDropdownAfterSwitchUserLocation,
    clkContinueBtn,
    submitBtn,
    clkHamrureger,
    ClkCloseInHamru,
    selectFilterBoardTn,
    selectFilterBoardFirstValue,
    assertFirstSlide,
    secondAnswerOption,
    firstAnswerOption,
    navigateToPrevious,
    showAnswerButton,
    assertQuestionSkipped,
    assertTotalQuestion,
    assertHightlightedAnswer,
    submitButtonInQuestionSet,
    clickFirstAnswerToChangeOption,
    ansScore2,
    ansScore1,
    ansKeys1,
    ansKeys2,
    ansKeys3,
    previewNext,
    correctButton,
    partialScore,
    engKeyBoard,
    customKeyBoard,
    keyBoard,
    ansFild1,
    ansFild2,
    ansFild3,
    createdQuestion,
    questionConfiguration,
    questionConfiguration,
    questionSlid,
    editQuestion,
    deleteButtonInWorkSpace,
    saveAsDraftInWorkspace,
    assertFirstnode,
    assertSecondnode,
    selectUrdu,
    assertSearchBtnUrdu,
    assertSearchFieldUrdu,
    assertshareBtnUrdu,
    keyBoard1,
    customKeyBoard1,
    assertErrMsgInAddUser,
    clkSubmitOrUpdateDetailsProfile,
    SelectBMCstateTN,
    BMCstateTN,
    SelectBMCdistrictChennai,
    SelectBMCblockPerambur,
    assertTNStateInProfile,
    assertTNDistrictInProfile,
    assertTNDBlockInProfile,
    assertTNClusterInProfile,
  }
};
module.exports = {
    contentCreation
}
