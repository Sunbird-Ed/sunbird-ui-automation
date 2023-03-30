//const { element } = require("protractor");

const { element } = require("protractor");
const { elementsLocated } = require("selenium-webdriver/lib/until");

var resource = () => {

    var clickresource = element(by.xpath("//div[@class='content']/..//span[.='Resource']"));
    var linkCourse = element(by.xpath("//div[@class='content']/..//span[.='Course']"));
    var fieldName = element(by.xpath("//input[@placeholder='Name']"));
    var fieldTag = element(by.xpath("//input[@placeholder='Add a tag']"));
    var btnAddResource = element(by.xpath("//button[contains(text(),'ADD RESOURCE')]"));
    var fieldSearch = element(by.xpath("//input[@placeholder='Search...']"));
    var resourceName = element(by.xpath("//input[@placeholder='Name']"));
    var startCreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
    var addShape = element(by.xpath("//i[@id='shape']"));
    var addTriangle = element(by.xpath("//div[@class='menu transition visible']/a[1]"));
    var clicksave = element(by.id('saveButton'));
    var btnSave = element(by.xpath("//button[contains(text(),'Save')]"));
    var btnSaveAndCreate = element(by.xpath("//button[contains(text(),'Save and Create')]"));
    var closebutton = element(by.xpath("//button[contains(text(),'Close')]"));
    var addslide = element(by.xpath("//i[@id='stage']"));
    var addImage = element(by.xpath("//i[@id='image']"));
    var selectImg = element(by.xpath("//div[@class='ui image']"));
    var addHotSpot = element(by.xpath("//a[@data-content='Add Hotspot']"));
    var addscribblepad = element(by.xpath("//i[@id='scribblepad']"));
    var addActivity = element(by.xpath("//i[@id='activitybrowser']"));
    var sendForReview = element(by.xpath("//div[@class='ui button text-part popup-item']"));
    var clickAppIcon = element(by.id('   '));
    var selectAppIcon = element(by.buttonText('Select'));
    var save = element(by.buttonText('Save'));
    var clickYear = element(by.xpath("//input[@id='copyrightYear']"));
    var addbuttonActivity = element(by.xpath("(//button[text()='Add'])[2]"));
    var selectButton = element(by.xpath("//button[contains(text(),'Select')]"));
    var searchActivity = element(by.xpath("//input[@placeholder='Search activity']"));

    var createQuestion = element(by.id("create-question-button"));
    var selectMTFTemplate = element(by.xpath("//a[contains(text(),'Match The Following')]/following::div[3]"));
    var writeQuestion = element(by.xpath("//iframe[contains(@title,'Rich Text Editor')]"));
    var enterTheQuestion = element(by.xpath("//body[@contenteditable='true']"));
    var enterAnswer1 = element(by.id("cke_mtfoptionsLHS_0"));
    var enterAnswer2 = element(by.id("cke_mtfoptionsRHS_0"));
    var enterAnswer3 = element(by.id("cke_mtfoptionsLHS_1"));
    var enterAnswer4 = element(by.id("cke_mtfoptionsRHS_1"));
    var enterAnswer5 = element(by.id("cke_mtfoptionsLHS_2"));
    var enterAnswer6 = element(by.id("cke_mtfoptionsRHS_2"));
    var previewRefreshIcon = element(by.xpath("//button[.='Refresh']"));
    var createQueNext = element(by.xpath("//button[@id='next-button']"));
    var enterTheTitleQues = element(by.xpath("//input[@placeholder='Enter the Title']"));
    var fieldDescription = element(by.xpath("//textarea[@id='description']"));
    var boardInQuestion = element(by.xpath("(//div[text()='Select Board' or text()= 'Select Board/Syllabus' ])[2]"));
    var ddBoard = element(by.xpath("//label[contains(text(),'BOARD/SYLLABUS')]//following::div[1]"));
    var selectCBSEQue = element(by.xpath("(//div[text()='Select Board' or text()= 'Select Board/Syllabus' ])[2]/following::div/div[1]"));
    var btnCloseQuestion = element(by.xpath("//i[@class='cursor-pointer close link icon']"));
    var toggleShowImmediateFeedback = element(by.xpath("//input[@id='show-feedback']"));
    var toggleShuffleQuestions = element(by.xpath("//input[@id='shuffle0questions']"));
    var toggleAfterShuffled = element(by.xpath("//input[@name='shuffle_questions']"));
    var toggleAfterShowImmediateFDBK = element(by.xpath("//input[@name='show_feedback']"));
    var btnCopySlide = element(by.xpath("//i[@class='icon-duplicate link']"));
    var labelNumberOne = element(by.xpath("//span[contains(text(),'1')]"));
    var labelNumberTwo = element(by.xpath("//span[contains(text(),'2')]"));
    var inputTotalScore = element(by.id('max_score'));
    var mediumInQuestion = element(by.xpath("(//div[.='Select Medium'])[2]"));
    var selectEnglishFITB = element(by.xpath("(//div[.='Select Medium'])[2]/following::div/div[1]"));
    var labelRajasthan = element(by.xpath("(//div[contains(text(),'State (Rajasthan)')])[3]"));
    var gradeLevelInQuestion = element(by.xpath("(//div[.='Select Grade'])"));
    var selectClass4 = element(by.xpath("(//div[.='Select Grade'])/following::div/div[1]"));
    var subjectInQuestion = element(by.xpath("(//div[.='Select Subject'])[2]"));
    var selectMathematics = element(by.xpath("(//div[.='Select Subject'])[2]/following::div/div[1]"));
    var maxScore = element(by.xpath("//input[@placeholder='Enter the Max Score']"));
    var levelInQuestion = element(by.xpath("(//div[.='Select Level'])[2]"));
    var selectEasy = element(by.xpath("(//div[.='EASY'])[2]"));
    var learningOutcome = element(by.xpath("//div[contains(text(),'Select LearningOutcome')]"));
    var selectLearningOutcome = element(by.xpath("//div[text()='हिन्दी के महीनों और अयोध्या की जानकारी प्राप्त करेंगे।']"));
    var addText = element(by.xpath("//a[@data-content='Add Text']"));
    var addTextTextArea = element(by.xpath("//textarea[@placeholder='Add text here']"));
    var addTextDoneButton = element(by.xpath("//button[.='Done']"));
    var imageCard = element(by.xpath("(//div[contains(@class,'cardImageText')])[1]"));
    var selectImage = element(by.xpath("//button[contains(text(),'Select')]"));
    var addHotspot = element(by.xpath("//a[@data-content='Add Hotspot']"));
    var saveIcon = element(by.id("saveButton"));
    var closeButtonMsg = element(by.xpath("//button[contains(text(),'Close')]"));
    var clickActionTabInResourceCreation = element(by.xpath("//a[@title='Actions']"));
    var clickPlusIconInActionTab = element(by.xpath("//i[@class='plus icon']"));
    var clickActionType = element(by.xpath("//select[@id='actionTypeDropdown']/../i"));
    var selectActionTypeHide = element(by.xpath("//select[@id='actionTypeDropdown']/../div[2]//div[@class='item'][2]"));
    var clickActionTarget = element(by.xpath("//select[@id='actionTargetDropdown']/../i"));
    var selectActionTarget = element(by.xpath("//select[@id='actionTargetDropdown']/../div[2]//div[@class='item']"));
    var selectActionAddButton = element(by.id("addActionBtn"));
    var preview = element(by.xpath("//i[contains(@class,'eye')]"));
    var iFrame = element(by.tagName("iframe"));
    var nextIcon = element(by.xpath("(//a[@class='nav-icon nav-next'])[2]"));
    var iFrame = element(by.tagName("iframe"));
    var addSlide = element(by.xpath("//a[@data-content='Add Slide']"));
    var searchUploadImage = element(by.xpath("//input[@id='searchMyImageAssets']"));
    var clickImageSearch = element(by.xpath("//input[@id='searchMyImageAssets']/..//i[@class='circular search link icon inverted']"));
    var checkContentIcon = element(by.xpath("//div[@class='ui image']//img[@class='asset_thumbnail']"));
    var addShapes = element(by.xpath("//div[@data-content='Add Shapes']"));
    var addTriangleShape = element(by.xpath("//span[.='Triangle']"));
    var actionsOptionSideBar = element(by.id("actionsOptionSideBar"));
    var showActionFormBtn = element(by.id("showActionFormBtn"));
    var actionTypeDropdown = element(by.xpath("//select[@id='actionTypeDropdown']/.."));
    var showHide = element(by.xpath("//div[text()='Show / Hide']"));
    var actionTargetDropdown = element(by.xpath("//select[@id='actionTargetDropdown']/.."));
    var actionTargetDropdownFirstItem = element(by.xpath("//select[@id='actionTargetDropdown']/..//div[@class='item']"));
    var addActionbtn = element(by.id("addActionBtn"));
    var propertiesSection = element(by.xpath("//a[@title='Properties']"));
    var clickNextSlide = element(by.xpath("//div[@class='ui fluid image']"));
    var linkTo = element(by.xpath("//div[text()='Link To']"));
    var addAudio = element(by.xpath("//a[@data-content='Add Audio']"));
    var clickAllAudio = element(by.linkText("All audio"));
    var selectAudio_AllAudio = element(by.xpath("(//audio[@id='audio-6'])[2]/../.."));
    var audio = element(by.xpath("//input[@placeholder='Search Audio...']/following::audio[1]/following::div[1]"));
    var playPause = element(by.xpath("//div[text()='Play / Pause']"));
    var hide = element(by.xpath("//div[text()='Hide']"));
    var previewIcon = element(by.xpath("//div[@data-content='Preview']//i"));
    var previewPopup = element(by.xpath("//div[@class='child preview-bgimage']"));
    var previewPopupFrame = element(by.xpath("//iframe[@id='previewContentIframe']"));
    var previewNextBtn = element(by.xpath("(//a[@class='nav-icon nav-next'])[2]"));
    var contentPreiviewCompleteScreen = element(by.xpath("//h2[@class='ps-heading']"));
    var previewPopupReplayBtn = element(by.xpath("//a[@class='ps-btn ps-btn--orange endpage-icons']"));
    var showPlayerControl = element(by.xpath("//input[contains(@class,' ng-empty')]"));
    var teacherInstruction = element(by.xpath("//textarea[@id='instructions']"));
    var backgroundColor = element(by.xpath("//div[@class='sp-preview-inner']"));
    var redColor = element(by.xpath("//span[@title='#ff0000']"));
    var addQuestionSet = element(by.xpath("(//div[contains(@id,'toolbar')])//following::a[@data-content='Add Question Set']"));
    var pickQuestion = element(by.xpath("//div[@class='header ng-binding']"));
    var pickQuestionCheckBox = element(by.xpath("//div[@class='seven wide column qb-question-container']//input"));
    var pickQueNextButton = element(by.xpath("//button[contains(text(),'Next')]"));
    var questionSetTitle = element(by.xpath("//input[@placeholder='Question Set Title']"));
    var questionSetAddButton = element(by.xpath("(//button[contains(text(),'Add')])[3]"));
    var collaboratorIcon = element(by.xpath("//i[@class='add user icon custom-icon']"));
    var donebutton1 = element(by.xpath("//button[@ng-click='addCollaborators()']"));
    var closeEditor1 = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var allElements = element(by.xpath("//div[contains(.,'diksha_ntptest_org')]/following-sibling::(div[contains(.,'content creator')])"));
    var addCollaborator = element(by.xpath("//button[@class='right floated clear-btn color-blue ng-scope']"));
    var collaborationSection = element(by.xpath("//a[@mattooltip='View content you are collaborating on']"));
    var searchForReview = element(by.xpath("//input[@placeholder='Search content']"));
    var searchIconUpForReview = element(by.xpath("//input[@placeholder='Search content']/following::i"));
    var courseNameInCollaboration = element(by.xpath("//div[@class='UpReviewHeader']"));
    var editIcon1 = element(by.xpath("//i[@class='edit icon cursor-pointer']"));
    var submittedForReview = element(by.xpath("//a[contains(text(),'Submitted for review')]"));
    var courseNameInReviewSubmission = element(by.xpath("//span[@class='sliderCardHeading text-cencapitalize']"));
    var searchCollaboratorField = element(by.xpath("//input[@id='user-search']"));
    var suggestionCollaboratorList = element(by.xpath("//li[@class='searchResult ng-scope']"));
    var manageCollaborator = element(by.xpath("//a[contains(text(),'Manage Collaborators')]"));
    var removeCollaborator = element(by.xpath("//a[text()=' Remove ']"));
    var clickDoneButton = element(by.xpath("//button[text()=' Done ']"));
    var collaboratorTostrMsg = element(by.xpath("//p[contains(text(),'Collaborators updated successfully')]"));
    var closeEditor2 = element(by.xpath("//*[@id='closeButton']"));

    var reviewSubmission = element(by.xpath("//a[@href='/workspace/content/review/1']"));
    var coursename = element(by.xpath("(//span[@class='sliderCardHeading text-cencapitalize'])[1]"));
    var upForReview = element(by.xpath("//a[contains(text(),'Up For Review')]"));
    var newchild = element(by.xpath("//i[@class='level up icon clockwise rotated table-of-contents-child-icon ']"));
    var contentupload = element(by.xpath("(//img[@class='ui tiny image UpReviewTinyImage']/..//div[@class='UpReviewHeader'])[1]"));
    var clickRequestChanges = element(by.xpath("//div[contains(@id,'search-input-container')]//following::*[contains(text(),'Request ')]"));
    var rejectReason1 = element(by.xpath("(//h5[.='Appropriateness']/..//input[@class='listItem'])[1]"));
    var rejectReason2 = element(by.xpath("(//h5[.='Content details']/..//input[@class='listItem'])[1]"));
    var rejectReason3 = element(by.xpath("(//h5[.='Usability']/..//input[@class='listItem'])[1]"));
    var reviewComment = element(by.xpath("//textarea[@rows='3']"));
    var requestChangesButton = element(by.xpath("//button[contains(.,'Cancel')]/following::button[2]"));
    var untitledUnitName = element(by.xpath("//input[@placeholder='Enter title for unit']"));
    var reviewerSuggestion = element(by.xpath("//i[@class='fa fa-comment']"));
    var reviewerSuggestionTitle = element(by.xpath("//textarea[@id='review-comments']"));
    var closeLinkIcon = element(by.xpath("//div[@class='right aligned column']/i"));
    var closePageIcon = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var drafts = element(by.xpath("//a[contains(text(),'Drafts')]"));
    var searchInput = element(by.xpath("(//input[@id='keyword'])[1]"));
    var searchIcon = element(by.xpath("//button[contains(.,'Search')]"));
    var cardLabel = element(by.xpath("//span[contains(@class,'sb--card__type')]"));
    var searchedContentForUpload = element(by.xpath("(//h4[contains(@class,'sb--card__title sb__ellipsis sb__ellipsis--two text-left')])[1]"));
    var headerLibrary = element(by.xpath("//*[contains(@class,'textbooks')][1]"));
    var selectFITBTemplate = element(by.xpath("//a[contains(text(),'Fill in the Blanks')]/following::div[3]"));

    var workSpace = element(by.xpath("//*[contains(text(),'Workspace')]"));
    var headerCourse = element(by.xpath("//a[contains(.,' Trainings ')]"));
    var linkCourseInHeader = element(by.xpath("(//a[contains(text(),'Courses')])[1]"));

    var clickLargeImageIcon = element(by.xpath("//i[@class='image large icon']"));
    var checkAppIcon = element(by.xpath("//div[@class='ui image']//img"));

    var verifyLargeImageAdded = element(by.xpath("//div[@class='image-container']"));
    var clickAudioIcon = element(by.xpath("//*[@class='music large icon']"));
    var verifyAudioAdded = element(by.xpath("//div[@class='audio-container']"));
    var clickAllAudioTab = element(by.id("allAudioTab"));
    var selectAudio = element(by.xpath("//input[@id='searchAllAudioAssets']//following::div[@class='audio-tag ng-binding']"));
    var clickMathTextIcon = element(by.xpath("//span[contains(@class,'mathtext_icon')]"));
    var selectMathText = element(by.xpath("//div[@class='math-lib-header ng-binding']"));
    var selectedMathTextAdd = element(by.xpath("//button[@class='ui basic primary button math-add-button']"));
    var verifyFormualaAdded = element(by.xpath("//span[@data-math='A=\\pi r^2']"));
    var submitButtonInQuestion = element(by.xpath("(//button[@id='save-question-button'])[2]"));
    var nextButton = element(by.xpath("//button[contains(text(),'Next')]"));

    var addbutton = element(by.xpath("//span[contains(text(),'Question Set')]//following::button[contains(text(),'Add More Questions')]//following::button[2]"));

    var checkAppIcon = element(by.xpath("//div[@class='ui image']//img"));
    var yearOfCreation = element(by.xpath("//input[@id='copyrightYear']"));
    var saveButton = element(by.xpath("//button[.='Save']"));

    var searchedContentForPublish = element(by.xpath("//tbody/tr/td[1]"));

    var publishResource = element(by.xpath("//button[contains(text(),'Publish')]"));
    var checkBox = element.all(by.xpath("//input[@class='listItem']"));
    var checkBoxInCourse = element.all(by.xpath("//input[@class='checkBox']"));
    var checkBoxInCourse1 = element(by.xpath("(//input[@class='checkBox'])[1]"));
    var checkBoxInCourse2 = element(by.xpath("(//input[@class='checkBox'])[2]"));
    var checkBoxInCourse3 = element(by.xpath("(//input[@class='checkBox'])[3]"));

    var btnProceed = element(by.xpath("//button[contains(text(),'PROCEED')] "));
    var fieldInputDesc = element(by.xpath("//input[@id='name']"));
    // var btnContributors = element(by.xpath("//i[@class='users icon']"));
    var contributorsToolTip = element(by.xpath("//div[@class='item disabled ng-binding ng-scope']"));
    var btnContributors = element(by.xpath("//div[@id='contentCreditsList']"));
    var popupPublishButton = element(by.xpath("(//button[contains(text(),'Publish')])[2]"));


    var filterSearch = element(by.xpath("//input[@name='filter_search']"));
    var courseCard = element(by.xpath("//*[@class='sb-card' or @class='asset_thumbnail']"));
    var courseCard1 = element(by.xpath("//*[@class='sb--card' or @class='asset_thumbnail']"));
    var clickFITBAnsTxtBox = element(by.xpath("//input[contains(@class,'ans-field')]"));
    var clickNextButtonMCQ = element(by.xpath("//a[@ng-show='showCustomNext !== state_off']"));
    var verifyInCorrect = element(by.xpath("//img[@id='incorrectButton']"));
    var clickTryAgainButton = element(by.xpath("//div[contains(text(),'Try Again')]"));
    var verifyCorrect = element(by.xpath("//img[@id='correctButton']"));
    var clickNext = element(by.xpath("//*[contains(text(),'Next')]"));
    var giveRatings = element(by.xpath("//div[contains(text(),' Enjoyed this content? ')]//following::i"));
    var submitRating = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary']"));
    var verifyRatingSlideMsg = element(by.xpath("//*[contains(text(),'Thank you for rating this content!')]"));
    var justCompletedMsg = element(by.xpath("//*[contains(text(),'You just completed')]"));
    var ScoreLabel = element(by.xpath("//*[contains(text(),'SCORE')]"));
    var validateScoreResult = element(by.xpath("//*[contains(text(),'SCORE')]//following::ul"));

    var Published = element(by.xpath(" //a[contains(.,'Published ')]"));
    var firstCourseCardContentName = element(by.xpath("//*[@class='sliderCardHeading text-cencapitalize']"));
    var deleteButton = element(by.xpath("(//i[@class='trash large icon'])[1]"));
    var yesButtonPopup = element(by.xpath("//button[contains(.,'Yes')]"));
    var messageBox = element(by.xpath("//strong[@class='iziToast-title slideIn']"));
    var allMyContent = element(by.xpath("//a[contains(.,'All My Content ')] "));
    var clickBoard = element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]"));
    var selectBoard = element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]//following::div[2]"));
    var clickMedium = element(by.xpath("//div[contains(text(),'Select Medium')]"));
    var selectMedium = element(by.xpath("//*[contains(text(),'Select Medium')]//following::div[2]"));
    var clickclass = element(by.xpath("//*[contains(text(),'Select Class')]"));
    var SelectClass = element(by.xpath("//*[contains(text(),'Select Class')]//following::div[2]"));
    var clicksubject = element(by.xpath("//div[contains(text(),'Select Subject')]"));
    var selectSubject = element(by.xpath("//div[contains(text(),'Select Subject')]//following::div[2]"));
    var ddYear = element(by.xpath("//select[@id='_selectyear']"));
    var label2020 = element(by.xpath("//select[@id='_selectyear']//option[contains(text(),'2020')]"));
    var select = element(by.xpath("//button[contains(.,'Select')]"));
    var selectMCQTemplate = element(by.xpath("//a[contains(text(),'Multiple Choice Question')]/following::div[3]"));
    var inputAnswer1 = element(by.id("mcqoptions_0"));
    var markAsRightAnswer = element(by.xpath("//input[@id='0']"));
    var inputAnswer2 = element(by.id("mcqoptions_1"));
    var addAnswerInQuestionSet = element(by.id("mcq-add-ans-button"));
    var deleteSetAnsewerOptions = element(by.xpath("//i[@class='trash large icon delete-icon']"));
    var closePage = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var firstBook = element(by.xpath("//div[@class='ui image']"));
    var clickMcQFirstAnswer = element(by.xpath("//div[@aria-label='Select the answer']//following::div[@class='option-text-container text-only']"));
    var courseName = element(by.xpath("//input[@placeholder='Name']"));
    var boardInResource = element(by.id("board"));
    var mediumInResource = element(by.id("medium"));
    var gradeLevelInResource = element(by.id("gradeLevel"));
    var subjectInResource = element(by.id("subject"));
    var resourceTypeInResource = element(by.id("resourceType"));
    var firstItemInBoardInResource = element(by.xpath("//sui-select-option[@class='item']"));
    var firstItemInMediumInResource = element(by.xpath("//*[@id='medium']/div[2]/sui-select-option[contains(@class,'item')]"));
    var firstItemInGradeLevelInResource = element(by.xpath("//*[@id='gradeLevel']/div[2]/sui-select-option[contains(@class,'item')]"));
    var firstItemInSubjectInResource = element(by.xpath("//*[@id='subject']/div[2]/sui-select-option[contains(@class,'item')]"));
    var firstItemInResourceTypeInResource = element(by.xpath("//*[@id='resourceType']/div[3]/sui-select-option[contains(@class,'item')]"));
    var firstQuestionName = element(by.xpath("(//div[contains(@class,'header ng-binding')])[2]"));
    // var searchTextInQuestion = element(by.xpath("//input[@id='searchText']"));
    var searchTextInQuestion = element(by.xpath("//input[@id='searchText']"));
    var createdResorce = element(by.xpath("(//span[@class='sliderCardHeading text-cencapitalize'])[1]"));
    var checkBox1InSelectQuestion = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[1]"));
    var checkBox2InSelectQuestion = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[2]"));
    var checkBox3InSelectQuestion = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[3]"));
    var checkBox4InSelectQuestion = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[4]"));
    var closePage = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var searchIconInQuestion = element(by.xpath("//i[@id='qb-search-button']"));

    var arrangeTemplate = element(by.xpath("//a[contains(text(),'Arrange in Sequence')]/following::div[2]"));
    var enterSeq1ArrangeTemp = element(by.xpath("//input[@placeholder='Enter Sequence 1']"));
    var enterSeq2ArrangeTemp = element(by.xpath("//input[@placeholder='Enter Sequence 2']"));
    var addSequenceButton = element(by.xpath("//button[contains(text(),'Add Sequence')]"));
    var enterSeq3ArrangeTemp = element(by.xpath("//input[@placeholder='Enter Sequence 3']"));
    var enterSeq4ArrangeTemp = element(by.xpath("//input[@placeholder='Enter Sequence 4']"));
    var rating = element(by.xpath("(//div[@class='ng-star-inserted'])[2]"));

    var searchquestions = element(by.xpath("(//input[@placeholder='Search by question title'])[1]"));
    var clickSearchIconInQuesion = element(by.xpath("(//i[@id='qb-search-button'])[1]"));
    var verifyCopyIconInQuestion = element(by.xpath("(//i[@class='copy icon'])[1]"));
    var verifyCheckboxInQuestion = element(by.xpath("(//div[@class='header ng-binding']//following::input)[1]"));
    var selectReOrderingTemplate = element(by.xpath("//a[contains(text(),'Reordering words')]/following::div[2]"));
    var enterSentences = element(by.xpath("//textarea[@placeholder='Enter sentence(s)']"));

    var reOrderingCheck1 = element(by.xpath("//span[contains(text(),'Bangalore')]"));
    var reOrderingCheck2 = element(by.xpath("//span[contains(text(),'India')]"));
    var reOrderingBackSpace = element(by.xpath("//img[@id='reorder-backspace']"));

    var untitledCollection = element(by.xpath("//label[@class='content-title popup-item ng-binding ng-scope']"));
    var deleteSetAnsewerOptions1 = element(by.xpath("(//i[@class='trash large icon delete-icon'])[3]"));
    var deleteSetAnsewerOptions2 = element(by.xpath("(//i[@class='trash large icon delete-icon'])[4]"));
    var reload = element(by.xpath("//span[@class='reload-stage']"));
    var headerCourse1 = element(by.xpath("//*[contains(@class,'textbooks')]"));

    //RichTextEditors

    var btnBoldBeforeClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__bold cke_button_off')])[1]"));
    var btnBoldAfterClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__bold cke_button_on')])[1]"));
    var btnItalicBeforeClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__italic cke_button_off')])[1]"));
    var btnItalicAfterClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__italic cke_button_on')])[1]"))
    var btnUnderLineBeforeClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__underline cke_button_off')])[1]"));
    var btnUnderLineAfterClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__underline cke_button_on')])[1]"));
    var btnSize = element(by.xpath("(//span[contains(@id,'cke_49_text')])"));
    var btnSizeTen = element(by.xpath("//a[@id='cke_382_option']//parent::li"));
    var btnSizeTwentyEight = element(by.xpath("//a[@id='cke_391_option']//parent::li"));
    var ddSelectKeyboard = element(by.model('keyboardType'));
    var ddTypeCustom = element(by.xpath("//div[contains(@class,'menu transition visible')]//following::div[2]"));
    var inputAddKeys = element(by.xpath("//input[@placeholder='Add keys seprated by comma(,).']"));
    var fieldAnswerInFITB = element.all(by.xpath("//input[@class='ans-field']"));
    var btnBack = element(by.xpath("//button[@id='back-button']"));
    var btnResume = element(by.xpath("//div[contains(@class,'ui ok blue button ng-scope')]"));
    var btnCloseEditor = element(by.xpath("//div[contains(@class,'ui basic cancel button ng-scope')]"));
    var labelEnterTheQuestion = element(by.xpath("//span[contains(text(),'Enter the question')]"));
    var linkActiveItemDraft = element(by.xpath("(//a[contains(@class,'item active')])[1]"));
    var ddSendforreview = element(by.xpath("(//div[@class='ui button text-part popup-item']//following::i[@class='dropdown icon'])[1]"));
    var sendForReviewInShareViaLink = element(by.xpath("//div[contains(@data-content,'Send for review')]"));
    var linkLimitedSharing = element(by.xpath("//div[contains(text(),'Limited sharing')]"));
    var linkShareViaLink = element(by.xpath("//a[contains(text(),' Shared via link ')]"));
    var resourceInFirstColumn = element(by.xpath("//div[contains(@class,'cardImageText center aligned ')]"));
    var btnEditDetails = element(by.xpath("//span[contains(text(),'Edit Details')]//parent::a"));
    var labelLicense = element(by.xpath("//label[contains(text(),'LICENSE')]//following::div"));
    var linkCredit = element(by.xpath("//*[contains(text(),'About the content')]"));
    var labelLicenceTerms = element(by.xpath("(//div[contains(@class,'content-metadeta__text fnormal')])[1]"));
    var labelMoreDetails = element(by.xpath("(//div[contains(@class,'content-metadeta__text fnormal')])[2]"));
    var labelCopyRight = element(by.xpath("(//div[contains(@class,'content-metadeta__text fnormal')])[3]"));
    var iconPreview = element(by.xpath("(//div[@class='ui button text-part popup-item'])[2]"));
    var nextIconInPreviewBox = element(by.xpath("(//a[@class='nav-icon nav-next'])[2]"));
    var btnCloseInPreview = element(by.xpath("//h5[@class='ui right floated basic icon circular button  mouse-pointer']"));
    var ddSelectlanguage = element(by.xpath("//*[contains(@aria-label,'Select Language')]//following::div[contains(@class,'mat-select-arrow-wrapper')]"));
    var labelEnglish = element(by.xpath("(//span[contains(text(),'English')])[1]"));
    var labelMyCourses = element(by.xpath("//h4[contains(text(),'courses')]"));
    var btnSlideNext = element(by.xpath("//button[contains(@class,'slick-next slick-arrow')]"));
    var btnViewAll = element(by.xpath("//button[contains(text(),' View All ')]"));
    var btnPagination = element(by.xpath("//a[contains(@class,'sb-item')]"));
    var imageCard3 = element(by.xpath("//div[contains(@class,'cardImageText center aligned')]"));
    var revieDialogClose = element(by.xpath("//span[contains(text(),'Reviewer Suggestions')]//following::i"));
    var clkUploRequestChanges = element(by.xpath("//button[@tabindex='0']"));
    var clkRejectUploadsc = element(by.xpath("//label[contains(text(),'Language is NOT simple to understand')]//following::button"));
    var clkFeaturedCourseViewAll = element(by.xpath("//span[contains(text(),' courses')]//following::button[2]"));
    var SltLevelQu = element(by.xpath("//label[contains(text(),'TOPIC')]//following::i[1]"));
    var saveAndCreateButton = element(by.xpath("//button[@id='save-question-button']"));
    var resoCard = element(by.xpath("//div[@class='sb--card__meta']"));
    var fullscreenclk = element(by.xpath("//span[contains(text(),'Fullscreen')]"));
    var QuesCard = element(by.xpath("//*[@class='sb--card__meta']"));
    var QuesAnswernextButton = element(by.xpath("//div[contains(text(),'Next')]"));
    var reOrderingLngCheck1 = element(by.xpath("//div[@class='reorder-tabContainer reorder-scroll']//following::span[1]"));
    var reOrderingLngCheck2 = element(by.xpath("//div[@class='reorder-tabContainer reorder-scroll']//following::span[2]"));
    var reOrderingLngCheck3 = element(by.xpath("//div[@class='reorder-tabContainer reorder-scroll']//following::span[3]"));
    var clkSearchActivity = element(by.xpath("//input[@placeholder='Search activity']"));
    var clkSearchButton = element(by.xpath("//input[@placeholder='Search activity']//following::button[1]"));
    var clkAddButtonActivty = element(by.xpath("//input[@placeholder='Search activity']//following::button[2]"));
    var clkAddTimer = element(by.xpath("//a[@data-content='Add Timer']"));
    var clkAddProgressBar = element(by.xpath("//a[@data-content='Add Progress bar']"));
    var labelVeryBad = element(by.xpath("//div[contains(text(),' Very Bad')]"));
    var labelBad = element(by.xpath("//div[contains(text(),'Bad')]"));
    var labelAverage = element(by.xpath("//div[contains(text(),'Average')]"));
    var labelGood = element(by.xpath("//div[contains(text(),'Good')]"));
    var labelExcellent = element(by.xpath("//div[contains(text(),'Excellent')]"));
    var clkOtherLabel = element(by.xpath("//label[@for='Other']"));
    var othercommentSection = element(by.xpath("//textarea[@maxlength='1000']"));
    var giveRatings2 = element(by.xpath("//div[contains(text(),' Enjoyed this content? ')]//following::i[2]"));
    var giveRatings3 = element(by.xpath("//div[contains(text(),' Enjoyed this content? ')]//following::i[3]"));
    var giveRatings4 = element(by.xpath("//div[contains(text(),' Enjoyed this content? ')]//following::i[4]"));
    var giveRatings5 = element(by.xpath("//div[contains(text(),' Enjoyed this content? ')]//following::i[5]"));
    var fourRatingContentLabel1 = element(by.xpath("//label[@for='Content is inaccurate']"));
    var fourRatingContentLabel2 = element(by.xpath("//label[@for='Content is not displayed properly']"));
    var fourRatingContentLabel3 = element(by.xpath("//label[@for='Content is not relevant']"));
    var fourRatingContentLabel4 = element(by.xpath("//label[@for='Did not help me understand the concept']"));
    var fourRatingContentLabel5 = element(by.xpath("//label[@for='There is a technical problem']"));
    var fourRatingContentLabel6 = element(by.xpath("//label[@for='Content is insufficient or not there']"));
    var fiveRatingContentLabel1 = element(by.xpath("//label[@for='Understood the concept well']"));
    var fiveRatingContentLabel2 = element(by.xpath("//label[@for='Helped me prepare for my exam']"));
    var fiveRatingContentLabel3 = element(by.xpath("//label[@for='Learnt something new']"));
    var fiveRatingContentLabel4 = element(by.xpath("//label[@for='Helped me teach my class']"));
    var fiveRatingContentLabel5 = element(by.xpath("//label[@for='Content is interesting and fun']"));

    var dropDownLang = element(by.xpath("//i[@class='dropdown icon']"));
    var sltKannadLang = element(by.xpath("//span[contains(text(),'ಕನ್ನಡ')]"));
    var KannadaLabel1 = element(by.xpath("//div[contains(text(),' ತುಂಬಾ ಕೆಟ್ಟದಾಗಿದೆ')]"));
    var KannadaLabel2 = element(by.xpath("//div[contains(text(),'ಕೆಟ್ಟದಾಗಿದೆ')]"));
    var KannadaLabel3 = element(by.xpath("//div[contains(text(),'ಸಾಧಾರಣ')]"));
    var KannadaLabel4 = element(by.xpath("//div[contains(text(),'ಚೆನ್ನಾಗಿದೆ')]"));
    var KannadaLabel5 = element(by.xpath("//div[contains(text(),'ಅತ್ಯುತ್ತಮವಾಗಿದೆ')]"));
    var KannadaSubmitBtn = element(by.xpath("//button[contains(text(),'ಸಲ್ಲಿಸಿ')]"));
    var KannadaRatingSuccsMsg = element(by.xpath("//strong[contains(text(),'ಈ ಪಠ್ಯಾಂಶವನ್ನು ರೇಟ್ ಮಾಡಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದಗಳು!')]"));
    var kandRating1 = element(by.xpath("//div[contains(text(),' ಈ ಪಠ್ಯಾಂಶ ಖುಷಿ ನೀಡಿತೇ? ')]//following::i[1]"));
    var kandRating2 = element(by.xpath("//div[contains(text(),' ಈ ಪಠ್ಯಾಂಶ ಖುಷಿ ನೀಡಿತೇ? ')]//following::i[2]"));
    var kandRating3 = element(by.xpath("//div[contains(text(),' ಈ ಪಠ್ಯಾಂಶ ಖುಷಿ ನೀಡಿತೇ? ')]//following::i[3]"));
    var kandRating4 = element(by.xpath("//div[contains(text(),' ಈ ಪಠ್ಯಾಂಶ ಖುಷಿ ನೀಡಿತೇ? ')]//following::i[4]"));
    var kandRating5 = element(by.xpath("//div[contains(text(),' ಈ ಪಠ್ಯಾಂಶ ಖುಷಿ ನೀಡಿತೇ? ')]//following::i[5]"));

    var htmlCloseButton = element(by.xpath("//h3[contains(text(),'CLOSE ME')]"));
    var CloseButtonVideo = element(by.xpath("//div[@class='video-close-btn']"));
    var nxtButtonUpload = element(by.xpath("//a[@class='nav-icon nav-next']"));
    var clkRejectBtn = element(by.xpath("//button[contains(text(),' Reject ')]"));
    var clkcommentBox = element(by.xpath("//textarea[@name='rejectComment']"));
    var clkSubmitReviw = element(by.xpath("//button[@id='submitReview']"));
    var scrollLabelOther = element(by.xpath("//label[contains(text(),'Other Issue(s) (if there are any other issues, tick this and provide details in the comments box)')]"));
    var reviewComment1 = element(by.xpath("//div[contains(text(),' Request changes ')]//following::textarea"));
    var reviewerSuggestionColl = element(by.xpath("//div[@data-title='View review comments']"));
    var reviewerSuggestionTitleColl = element(by.xpath("//textarea[@name='rejectedComment']"));
    var revieDialogCloseColl = element(by.xpath("//textarea[@name='rejectedComment']//following::button"));


    var clkBoardDdAllTabs = element(by.xpath("//label[contains(text(),'Board')]//following::div[1]"));
    var sltBoardDdAllTabs = element(by.xpath("//*[contains(text(),'Board')]//following::span[contains(text(),' CBSE/NCERT ')]"));

    var clkMediumDdAllTabs = element(by.xpath("//label[contains(text(),'Medium')]//following::div[1]"));
    var sltMediumDdAllTabs = element(by.xpath("//label[contains(text(),'Medium')]//following::span[contains(text(),'english')]"));
    var sltMedium2DdAllTabs = element(by.xpath("//label[contains(text(),'Medium')]//following::span[3]"));

    var clkClassDdAllTabs = element(by.xpath("//label[contains(text(),'Grade')]//following::div[1]"));
    var sltClassDdAllTabs = element(by.xpath("//label[contains(text(),'Grade')]//following::span[contains(text(),' class 1 ')]"));
    var sltClass2DdAllTabs = element(by.xpath("//label[contains(text(),'Class')]//following::span[3]"));

    var clkSubjectDdAllTabs = element(by.xpath("//label[contains(text(),'Subject')]//following::div[1]"));
    var sltSubjectDdAllTabs = element(by.xpath("//label[contains(text(),'Subject')]//following::*[contains(text(),'accountancy')]"));
    var sltSubjectDD2dAllTabs = element(by.xpath("//label[contains(text(),'Subject')]//following::span[3]"));
    var courseToBeClicked = element(by.xpath("//div[@class='sb--card__meta']"));

    var clickQuestionSet = element(by.xpath("(//div[@routerlink='questionset'])"));
    var sltQuesAudienceType = element(by.xpath("(//select[@id='sb-dropdown'])[4]"));
    var questionInstruction = element(by.xpath("(//textarea[contains(@placeholder,'Enter Instructions')])"));
    var questionName = element(by.xpath("(//input[contains(@placeholder,'Enter name of the question set')])"));
    var questionDescription = element(by.xpath("(//textarea[contains(@placeholder,'Description')])"));
    var sltQuestionAudienceType = element(by.cssContainingText('option', 'Administrator'));
    var questionAudienceType = element(by.xpath("(//select[@id='sb-dropdown'])[5]"));
    var showFeedback = element(by.xpath("(//input[@id='show-feedback'])"));
    var maxTime = element(by.xpath("//input[@placeholder='HH:mm:ss']"));
    var warningTime = element(by.xpath("//input[@placeholder='hh:mm:ss']"));
    var questionAuthor = element(by.xpath("//input[contains(@placeholder,'Author')]"));
    var createNew = element(by.xpath("//i[contains(@class,'icon plus ng-star-inserted')]"));
    var questionMCQ = element(by.xpath("//div[text()='Multiple Choice Question ']"));
    var questionMCQnextBtn = element(by.xpath("//button[text()='Next ']"));
    var mCQquestionInput = element(by.xpath("(//div[@aria-label='Rich Text Editor, main'])[1]"));
    var McqOptionInput1 = element(by.xpath("(//div[@aria-label='Rich Text Editor, main'])[2]"));
    var McqOptionInput2 = element(by.xpath("(//div[@aria-label='Rich Text Editor, main'])[2]"));
    var sltCorrectAnswer = element(by.xpath("(//input[@id='answer_1'])"));
    var questionDetailsTitle = element(by.xpath("//input[contains(@placeholder,'Title')]"));
    var questionSave = element(by.xpath("//button[contains(text(),'Save')]"));
    var sendForReviewQuestionset = element(by.xpath("(//div[@class='d-flex flex-ai-center ng-star-inserted']//following::button)[3]"));
    var publishedContent = element(by.xpath("//a[text()=' Published ']"));
    var clkPreferences = element(by.xpath("//*[contains(text(),'Your preferences ')]"));
    var assertGusetName = element(by.xpath("//*[contains(text(),'Hi Guest ')]"));
    var assertPreferencePopup = element(by.xpath("//*[contains(text(),'Browse SUNBIRD Library to find relevant content based on your preferences (Board, Medium and Grade)')]"));
    var clkHome = element(by.xpath("//*[contains(text(),'Home')]"));
    var browseBySubj = element(by.xpath("//*[contains(text(),'Browse by Subjects')]"));
    var featured = element(by.xpath("//div[contains(text(),'Featured')]"));
    var browseByCategories = element(by.xpath("//div[contains(text(),'Browse by Categories')]"));
    var browseByBoard = element(by.xpath("//div[contains(text(),'Browse by Board')]"));
    var browseByAudience = element(by.xpath("//div[contains(text(),'Browse by Audience')]"));
    var assertCbseBoard = element(by.xpath("//label[contains(text(),'Cbse/ncert')]"));
    var assertIgotBoard = element(by.xpath("//label[contains(text(),'Igot-health')]"));
    var assertBoardSubContnet = element(by.xpath("//*[contains(text(),'Browse by Subjects')]//following::div[@role='button'][1]"));
    var assertCategSubContent = element(by.xpath("//div[contains(text(),'Browse by Categories')]//following::div[@role='button'][1]"));
    var clkExploreTab = element(by.xpath("//*[contains(text(),' Explore ')]"));
    var assertAudeinceType = element(by.xpath("//div[contains(text(),'Browse by Audience')]//following::label[contains(text(),'School Head Or Officials')]"));
    var assertAudeinceType2 = element(by.xpath("//div[contains(text(),'Browse by Audience')]//following::label[contains(text(),'Parent/guardian')]"));
    var clkBackInbrowseBySubjectContentCard = element(by.xpath("//span[contains(text(),'English')]//following::button[1]"));
    var clkBackInbrowseByBoardInExplore = element(by.xpath("//span[contains(text(),'English')]//following::button[1]"));
    var clkViewAllBtn = element(by.xpath("//button[contains(text(),'View all')]"));
    var clkCloseBtn = element(by.xpath("//button[contains(text(),'Close ')]"));
    var clkChangePreferenceBtn = element(by.xpath("//button[contains(text(),'CHANGE PREFERENCE')]"));
    var assertChangePreferencePopup = element(by.xpath("//div[contains(text(),'To discover relevant content, update the following details:‎')]"));
    var imageCard4 = element(by.xpath("(//div[contains(@class,'UpReviewHeader')])"));
    var deleteContent = element(by.xpath("(//i[@class='trash large icon ng-star-inserted'])[1]"));
    var searchCoursesUpForReview = element(by.xpath("(//div[@class='UpReviewHeader'])[1]"));
    var toastMsg = element(by.xpath("//*[@class='iziToast-title slideIn']"));
    var addVedio = element(by.xpath("//a[@data-content='Add Video']"));
    var addMathtext = element(by.xpath("//a[@data-content='Add Math text']"));
    var clkMediFilter = element(by.xpath("//label[contains(text(),'Medium')]//following::div[2]"));
    var sltMediuFilter1 = element(by.xpath("//mat-option[@aria-selected='false']//following::span"));
    var sltMediuFilter2 = element(by.xpath("//label[contains(text(),'Medium')]//following::span[6]"));
    var ClkClassFilter = element(by.xpath("//label[contains(text(),'Grade')]//following::div[2]"));
    var sltClassFilter1 = element(by.xpath("//mat-option[@aria-selected='false']//following::span"));
    var sltClassFilter2 = element(by.xpath("//mat-option[@aria-label='Class 1']"));
    var clkDigitalTxtBooks = element(by.xpath("//a[contains(text(),'Digital textbooks')]"));
    var clkTVClasses = element(by.xpath("//a[contains(text(),'TV classes')]"));
    var clkCourseHeader = element(by.xpath("//a[contains(text(),'Courses')]"));
    var MediumsAsertSelectedOption = element(by.xpath("//span[contains(text(),'English, Tamil')]"));
    var ClassAsserSelctedOption = element(by.xpath("//span[contains(text(),'Class 1, Class 2')]"));
    var clkResetBtn = element(by.xpath("//button[contains(text(),'Reset')]"));
    var clkViewAllNcertSec = element(by.xpath("//div[contains(text(),'From NCERT ')]//following::button[1]"));
    var aseertCourseData = element(by.xpath("//*[contains(text(),'From NCERT')]//following::div[contains(text(),'Course')]"));
    var assertTextBookData = element(by.xpath("//*[contains(text(),'From NCERT')]//following::div[contains(text(),'TextBook')]"));
    var assertEnrollEndDate = element(by.xpath("//*[contains(text(),'Last date for enrolment:')]"));
    var QuestionName = element(by.xpath("//input[contains(@placeholder,'Name')]"));
    var enterDescription = element(by.xpath("//textarea[contains(@placeholder,'Description')]"));
    var enterInstruction = element(by.xpath("//div[@contenteditable='true']"));
    var AdditionalCategory = element(by.xpath("//sb-caret-down[@class='caret-down']")); 
    var selAdditionalCategory = element(by.xpath("//label[contains(text(),'Concept Map')]"));
    var selBoard = element(by.xpath("//select[@id='sb-dropdown']"));
    var selBoardValue = element(by.xpath("//option[contains(text(),'State (Tamil Nadu)') or contains(text(),'Z_Test_Framework') or contains(text(),'CBSE')]"));
    var dropdownMedium = element(by.xpath("//select[@id='sb-dropdown']//following::select[1]"));
    var selectMedium3 = element(by.xpath("//option[contains(text(),'English')]"));
    var dropDownClass = element(by.xpath("//option[contains(text(),'Select Class')]//.."));
    var selectClass = element(by.xpath("//option[contains(text(),'Class 1')]"));
    var dropDownSubject = element(by.xpath("//option[contains(text(),'Select Subject')]"));
    var selectSubject1 = element(by.xpath("//option[contains(text(),'Mathematics')]"));
    var dropDownAudiene = element(by.xpath("//option[contains(text(),'Select Audience ')]"));
    var selectAudience = element(by.xpath("//option[contains(text(),'Student')]"));
    var maxHour = element(by.xpath("//input[@name='hour']"));
    var maxHourValue = element(by.xpath("//option[@value='01']"));
    var Qtype = element(by.xpath("//input[contains(@class,'sb-textbox')]"));
    var createNew1 = element(by.xpath("//button[contains(text(),'Create New ')]"));
    var createNew2 = element(by.xpath("//i[@class='icon plus']"));
    var McqOptionInput22 = element(by.xpath("(//div[@aria-label='Rich Text Editor, main'])[3]"));
    var sltCorrectAnswer1 = element(by.xpath("//label[@for='answer_1']"));
    var previewIcon1 = element(by.xpath("//i[contains(@class,'icon eye ng-star-inserted')]"));
    var alertTimeOn = element(by.xpath("//span[text()='60:00']"));
    var alertTimeOn1 = element(by.xpath("//span[text()='2:00']"));
    var nextSlideIcon = element(by.xpath("//div[@title='next slide']"));
    var warningTime1 = element(by.xpath("//span[contains(text(),'0:')]"));
    var warningTime2 = element(by.xpath("//span[contains(text(),'0:4')]"));
    var completeTime = element(by.xpath("//span[contains(text(),'0:0')]"));
    var questionSubjective = element(by.xpath("//div[contains(text(),'Subjective Question')]"));
    var addImageQnSet = element(by.xpath("//button[@data-tooltip='Add image']//following::i[6][@class='image outline icon']"));
    var clkAllImage = element(by.xpath("//a[text()='All Image']"));
    var selectImage1 = element(by.xpath("//i[@class='close icon']//following::img[1]"));
    var imageAdded = element(by.xpath("//label[@for='answer_1']//preceding::img"));
    var clickRight = element(by.xpath("//div[@class='ck ck-balloon-panel ck-balloon-panel_arrow_s ck-balloon-panel_with-arrow ck-toolbar-container']"));
    var AddOption = element(by.xpath("//span[text()='Add option']"));
    var mcQOptionInput3 = element(by.xpath("(//div[@aria-label='Rich Text Editor, main'])[4]"));
    var mcQOptionInput4 = element(by.xpath("(//div[@aria-label='Rich Text Editor, main'])[5]"));
    var clkSection = element(by.xpath("//span[text()='Section']"));
    var selectGrid = element(by.xpath("//button[text()='Grid']"));
    var selectHoriz = element(by.xpath("//button[text()=' Horizontal']"));
    var clkShuffle = element(by.xpath("//label[text()='Shuffle Questions']"));
    var clkVerticalSet = element(by.xpath("//span[text()='GK1']"));
    var clkGridSet = element(by.xpath("//span[text()='GK2']"));
    var clkHorizSet = element(by.xpath("//span[text()='GK3']"));
    var verticalOption1 = element(by.xpath("//div[@class='quml-navigation__previous']//following::p[3]"));
    var verticalOption4 = element(by.xpath("(//input[@name='radio'])[4]"));
    var nextIcon1 = element(by.xpath("(//span[text()='60:00']//following::div)[3]"));
    var nextIcon2 = element(by.xpath("(//div[@class='quml-navigation__previous']//following::div[1])[1]"));
    var gridOption1 = element(by.xpath("(//input[@name='radio'])[5]"));
    var gridOption4 = element(by.xpath("(//input[@name='radio'])[8]"));
    var opt1Vertical = element(by.xpath("//div[@class='option']//preceding::p[2][text()='Bangalore']"));
    var opt4Vertical = element(by.xpath("//div[@class='option']//following::p[2][text()='Madikeri']"));
    var opt1Grid = element(by.xpath("//label[@class='container']//preceding::p[2][text()='Bangalore']"));
    var opt4Grid = element(by.xpath("//label[@class='container']//following::p[2][text()='Madikeri']"));
    var opt1Horiz = element(by.xpath("//label[@class='container']//preceding::p[2][text()='Bangalore']"));
    var opt4Horiz = element(by.xpath("//label[@class='container']//following::p[2][text()='Madikeri']"));
    var ansVertical = element(by.xpath("(//input[@name='radio'])[1]"));
    var ansGrid = element(by.xpath("(//input[@name='radio'])[5]"));
    var ansHoriz = element(by.xpath("(//input[@name='radio'])[9]"));
    var selBoardValue1 = element(by.xpath("//option[text()='CBSE']"));
    var clkBold = element(by.xpath("(//button[@aria-pressed='false'])[4]"));
    var BoldSelected = element(by.xpath("(//button[@aria-pressed='true'])[1]"));
    var clkItalic = element(by.xpath("(//button[@aria-pressed='false'])[4]"));
    var ItalicSelected = element(by.xpath("(//button[@aria-pressed='true'])[2]"));
    var clkUnderLine = element(by.xpath("(//button[@aria-pressed='false'])[4]"));
    var UnderLineSelected = element(by.xpath("(//button[@aria-pressed='true'])[3]"));
    var clkBullet = element(by.xpath("(//button[@aria-pressed='false'])[4]"));
    var BulletSelected = element(by.xpath("(//button[@aria-pressed='true'])[4]"));
    var selectLayout = element(by.xpath("//label[text()='Select Layout']"));
    var clkTextAllignment = element(by.xpath("(//button[@aria-pressed='true'])[4]//following::button[1]"));
    var selectTextAllignment = element(by.xpath("(//button[@aria-pressed='true'])[4]//following::button[1]//following::button[2]"));
    var clkParagraph1 = element(by.xpath("//p[text()='Bangalore']"));
    var clkBold1 = element(by.xpath("(//button[@aria-pressed='false'])[10]"));
    var BoldSelected1 = element(by.xpath("(//button[@aria-pressed='true'])[6]"))
    var clkItalic1 = element(by.xpath("(//button[@aria-pressed='false'])[10]"));
    var ItalicSelected1 = element(by.xpath("(//button[@aria-pressed='true'])[7]"));
    var clkUnderLine1 = element(by.xpath("(//button[@aria-pressed='false'])[10]"));
    var UnderLineSelected1 = element(by.xpath("(//button[@aria-pressed='true'])[8]"));
    var clkBullet1 = element(by.xpath("(//button[@aria-pressed='false'])[10]"));
    var BulletSelected1 = element(by.xpath("(//button[@aria-pressed='true'])[9]"));
    var BackButton1 = element(by.xpath("//span[text()='Back']"));
    var backTolibrary = element(by.xpath("//span[text()='Back']"));
    var warningTime3 = element(by.xpath("//span[@class='blink']"));
    var clkAllTabs = element(by.xpath("//a[contains(text(),'Digital textbooks')]//following::a[contains(text(),'All')]"));
    var assertContentAllTab = element(by.xpath("//a[contains(text(),'Digital textbooks')]//following::a[contains(text(),'All')]"));
    var assertContinueLearning = element(by.xpath("//span[contains(text(),'Continue Learning')]"));
    var assertContinueLearningContent = element(by.xpath("//span[contains(text(),'Continue Learning')]//following::div[@class='sb--card__info']"));
    var assertRecentlyPublished = element(by.xpath("//div[contains(text(),' Recently published courses ')]"));
    var assertRecentlyPublishedContent = element(by.xpath("//div[contains(text(),' Recently published courses ')]//following::div[@class='sb--card__info']"));
    var collaboration = element(by.xpath("//a[contains(text(),' Collaborations')]"));
    var requestChengesPopUp = element(by.xpath("//div[contains(@id,'search-input-container')]//following::*[contains(text(),'Request ')][3]"));
    var lessonPlanRequestChanges = element(by.xpath("//div[@id='reviewButton']//following::*[text()='Request Changes']"));
    var commentbox = element(by.xpath("//textarea[@id='review-comments']"));
    var footerRequestChanges = element(by.xpath("//div[@id='review-footer']//following::button[contains(text(),'Request changes')][2]"));
    var selectContentType = element(by.xpath("//*[contains(text(),'Select Content type')]"));
    var contentTypeValue = element(by.xpath("//span[contains(text(),'content playlist')]"));
    var assertBoard = element(by.xpath("(//span[contains(text(),'CBSE/NCERT')])[1]"));
    var assertMedium = element(by.xpath("(//span[contains(text(),'english')])[1]"));
    var assertClass = element(by.xpath("(//span[contains(text(),'class 1')])[1]"));
    var createNewBtn = element(by.xpath("//button[contains(text(),'Create New')]"));
    var limitSharingdrpdwn = element(by.model("hideLimitedSharingBtn"));
    var assertTermsNcond = element(by.xpath("//*[contains(text(),'Terms and Privacy')]"));
    var switchToClassicTheme = element(by.xpath("//*[contains(@title,'Close sidebar')]//following::span[contains(text(),'Switch to classic theme')]"));
    var addImageQuestionSet = element(by.xpath("//button[@title='Add image']//*[@class='image outline icon']"));
    var selectImageInQuesSet = element(by.xpath("//div[text()='Select Image']//following::div[9]"));
    var clickImage = element(by.xpath("//label[text()='Question']//following::*[@class='image ck-widget ck-widget_selected']"));
    var clickZoom = element(by.xpath("//div[@class='ck-balloon-rotator__content']"));
    var assertBorad = element(by.xpath("//span[contains(text(),'State (Tamil Nadu)')]"));
    var asseertMedim = element(by.xpath("//span[contains(text(),'Medium:')]//following::span[1]"));
    var assertClass1 = element(by.xpath("//span[contains(text(),'Class')]"));
    var slideDropDown = element(by.xpath("(//div[contains(@data-content,'Add Slide')]//following::div[contains(@class,'dropdownarrowwrapper')])[1]"));
    var selectArrangeSequesnce = element(by.xpath("//a[contains(text(),'Arrange in Sequence')]/following::div[3]"));
    var clickBoldLetter = element(by.xpath("(//*[contains(@class,'cke_toolgroup')]//following::*[@title='Bold (Ctrl+B)'])[2]"));
    var sizeDropDown = element(by.xpath("(//*[contains(@id,'cke_993_text')])"));
    var assertErrorUploadingMessage = element(by.xpath("//*[contains(text(),'Error in processing the file')]//following::div[contains(text(),'Upload file again')]"));
    var previewButtonInEditor = element(by.xpath("//div[@data-content='Preview']"));
    var clkNxtSlide = element(by.xpath("(//div[contains(text(),'Questions')]//preceding::div[@aria-label='next slide'])[1]"));
    var clkClosePreview = element(by.xpath("//div[contains(text(),'Question Set Preview')]//preceding::i[1]"));
    var assertInstruction = element(by.xpath("//p[contains(text(),'Answer All')]"));
    var clkBoldQstn = element(by.xpath("(//button[@class='ck ck-button ck-off'])[1]"));
    var assertQstnBold = element(by.xpath("//strong[contains(text(),'What is the capital of Karnataka?')]"));
    var clkBoldAns1 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[10]"));
    var clkBoldAns2 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[19]"));
    var assertBoldAns1 = element(by.xpath("//strong[contains(text(),'Bangalore')]"));
    var assertBoldAns2 = element(by.xpath("//strong[contains(text(),'Mangalore')]"));
    var clkItalicQstn = element(by.xpath("(//button[@class='ck ck-button ck-off'])[2]"));
    var assertQstnItalic = element(by.xpath("//i[contains(text(),'What is the capital of Karnataka?')]"));
    var clkItalicAns1 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[11]"));
    var assertItalicAns1 = element(by.xpath("//i[contains(text(),'Bangalore')]"));
    var clkItalicAns2 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[20]"));
    var assertItalicAns2 = element(by.xpath("//i[contains(text(),'Mangalore')]"));  
    var clkUnderlineQstn = element(by.xpath("(//button[@class='ck ck-button ck-off'])[3]"));
    var assertQstnUnderline = element(by.xpath("//u[contains(text(),'What is the capital of Karnataka?')]"));
    var clkUnderlineAns1 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[12]"));
    var assertUnderlineAns1 = element(by.xpath("//u[contains(text(),'Bangalore')]"));
    var clkUnderlineAns2 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[21]"));
    var assertUnderlineAns2 = element(by.xpath("//u[contains(text(),'Mangalore')]")); 
    var assertQstnBoldSub = element(by.xpath("//strong[contains(text(),'Describe Bangalore')]"));
    var assertBoldAnsSub = element(by.xpath("//strong[contains(text(),'Bangalore Is Capital Of KARNATAKA')]"));
    var assertQstnItalicSub = element(by.xpath("//i[contains(text(),'Describe Bangalore')]"));
    var assertItalicAnsSub = element(by.xpath("//i[contains(text(),'Bangalore Is Capital Of KARNATAKA')]"));
    var assertQstnUnderlineSub = element(by.xpath("//u[contains(text(),'Describe Bangalore')]"));
    var assertUnderlineAnsSub = element(by.xpath("//u[contains(text(),'Bangalore Is Capital Of KARNATAKA')]"));
    var clkDropDownFontQstn = element(by.xpath("(//button[@class='ck ck-button ck-off ck-dropdown__button'])[3]"));
    var fontSizeSelectedForQstn = element(by.xpath("//span[text()='14']"));
    var assertFontForQstn = element(by.xpath("//span[@class='fs-14']"));
    var clkDropDownFontAns1 = element(by.xpath("(//button[@class='ck ck-button ck-off ck-dropdown__button'])[7]"));
    var fontSizeSelectedForAns1 = element(by.xpath("(//span[text()='18'])[2]"));
    var assertFontForAns1 = element(by.xpath("//span[@class='fs-18']"));
    var clkDropDownFontAns2 = element(by.xpath("(//button[@class='ck ck-button ck-off ck-dropdown__button'])[11]"));
    var fontSizeSelectedForAns2 = element(by.xpath("(//span[text()='20'])[3]"));
    var assertFontForAns2 = element(by.xpath("//span[@class='fs-20']"));
    var assertScoreMsgeWhenDisplayScoreIsYes = element(by.xpath("//div[contains(text(),'Your score is')]"));
    var selectFirstOption = element(by.xpath("(//div[@aria-label='Select the answer']//following::span)[1]"));
    var clkNextButtonInPreviewWindow = element(by.xpath("(//*[@alt='Navigate to Next'])"));
    var clkSubmitButtonInPreviewWindow = element(by.xpath("(//button[text()=' Submit '])"));
    var assertDefaultdisplayscore = element(by.xpath("(//div[@id='displayScore'])//following::div[1]"));
    var selectDisplayScoreAsNo = element(by.xpath("//div[text()='No']"));
    var displayDropDown = element(by.xpath("(//div[@id='displayScore']//following::input)[1]"));
    var clkSuperScript = element(by.xpath("(//button[@class='ck ck-button ck-off'])[9]"));
    var assertSuperScriptQstn = element(by.xpath("//sup[contains(text(),'Bangalore')]"));
    var clkSuperScriptAns1 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[18]"));
    var assertSuperScriptAns1 = element(by.xpath("//sup[contains(text(),'BESCOM')]"));
    var clkSuperScriptAns2 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[27]"));
    var assertSuperScriptAns2 = element(by.xpath("//sup[contains(text(),'MESCOM')]"));
    var clkSubScript = element(by.xpath("(//button[@class='ck ck-button ck-off'])[8]"));
    var assertSubScriptQstn = element(by.xpath("//sub[contains(text(),'Bangalore')]"));
    var clkSubScriptAns1 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[17]"));
    var assertSubScriptAns1 = element(by.xpath("//sub[contains(text(),'BESCOM')]"));
    var clkSubScriptAns2 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[26]"));
    var assertSubScriptAns2 = element(by.xpath("//sub[contains(text(),'MESCOM')]"));
    var clkScientificTextAns1 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[20]"));
    var selScientificAns1 = element(by.xpath("//div[contains(text(),'Area of circle')]"));
    var clkAddBtn = element(by.xpath("//button[contains(text(),'Add')]"));
    var assertScientificSymbol1 = element(by.xpath("//div[@class='ck ck-reset_all ck-widget__type-around']"));
    var clkScientificTextAns2 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[21]"));
    var selScientificAns2 = element(by.xpath("(//span[@class='katex'])[2]"));
    var assertScientificSymbol2 = element(by.xpath("(//div[@class='ck ck-reset_all ck-widget__type-around'])[2]"));
    var clkSymbolOpt = element(by.xpath("//a[contains(text(),'Symbols')]"));
    var clkLibOpt = element(by.xpath("//a[contains(text(),'Library')]"));
    var clkAddImgeAns1 = element(by.xpath("(//button[@class='ck ck-button ck-off ck-dropdown__button'])[8]"));
    var selectSplChar1 = element(by.xpath("(//span[contains(text(),'Special characters')]//following::span[contains(text(),'$')])[2]"));
    var assertSCAns1 = element(by.xpath("//p[contains(text(),'$')]"));
    var assertSCAns2 = element(by.xpath("//p[contains(text(),'@')]"));
    var clkParagraphOpt1 = element(by.xpath("(//span[contains(text(),'Paragraph')])[1]"));
    var clkHeadingOpt1 = element(by.xpath("(//span[contains(text(),'Heading 1')])[1]"));
    var assertHeadingOpt1 = element(by.xpath("//h1[contains(text(),'What is The Capital of Karnataka?')]"));
    var clkParagraphOpt2 = element(by.xpath("(//span[contains(text(),'Paragraph')])[2]"));
    var clkHeadingOpt2 = element(by.xpath("(//span[contains(text(),'Heading 2')])[2]"));
    var assertHeadingOpt2 = element(by.xpath("//h2[contains(text(),'Bangalore')]"));
    var clkParagraphOpt3 = element(by.xpath("(//span[contains(text(),'Paragraph')])[3]"));
    var clkHeadingOpt3 = element(by.xpath("(//span[contains(text(),'Heading 3')])[3]"));
    var assertHeadingOpt3 = element(by.xpath("//h3[contains(text(),'Mangalore')]"));
    var clkHeadingOpt6 = element(by.xpath("(//span[contains(text(),'Heading 6')])[1]"));
    var assertHeadingOpt6 = element(by.xpath("//h6[contains(text(),'American Currency')]"));
    var clkHeadingOpt5 = element(by.xpath("(//span[contains(text(),'Heading 5')])[2]"));
    var assertHeadingOpt5 = element(by.xpath("//h5[contains(text(),'Dollor')]"));
    var clkPreview = element(by.xpath("//button[contains(text(),'Preview')]"));
    var clkAlignOptAns1 = element(by.xpath("(//button[@class='ck ck-button ck-off ck-dropdown__button'])[5]"));
    var clkCenterAlignment = element(by.xpath("(//button[@class='ck ck-button ck-off'])[15]"));
    var clkAlignOptAns2 = element(by.xpath("(//button[@class='ck ck-button ck-off ck-dropdown__button'])[9]"));
    var clkRightAlignment = element(by.xpath("(//button[@class='ck ck-button ck-off'])[26]"));
    var assertCenterAlignment = element(by.xpath("//p[@class='text-center']"));
    var assertRightAlignment = element(by.xpath("//p[@class='text-right']"));
    var clkShowQFeedback = element(by.xpath("(//option[contains(text(),'Select Option')])[1]"));
    var selectYesOptQFeedback = element(by.xpath("(//option[contains(text(),'Yes')])[1]"));
    var clkShowSolution = element(by.xpath("(//option[contains(text(),'Select Option')])[2]"));
    var selectYesOptSolution = element(by.xpath("(//option[contains(text(),'Yes')])[2]"))
    var enterInstructions = element(by.xpath("//p[@data-placeholder='Enter Instructions']"));
    var chooseType = element(by.xpath("//div[contains(text(),'Choose type')]"));
    var selectTextImage = element(by.xpath("//div[contains(text(),'Text+Image')]"));
    var enterSolField = element(by.xpath("(//div[@aria-label='Rich Text Editor, main'])[6]"));
    var assertInstBeforeEdit = element(by.xpath("//p[contains(text(),'Only 10 Mins')]"));
    var assertQstnBeforeEdit = element(by.xpath("//p[text()='What is the capital of Karnataka?']"));
    var assertAnsBeforeEdit = element(by.xpath("//p[text()='Bangalore']"));
    var assertSolBeforeEdit = element(by.xpath("//p[text()='City']"));
    var clkBtnDone = element(by.xpath("(//button[text()='Done'])[2]"));
    var clkClose = element(by.xpath("//p[contains(text(),'What is the capital of Karnataka?')]//preceding::i[1]"));
    var selSection = element(by.xpath("(//span[@class='fancytree-title'])[2]"));
    var clkGK = element(by.xpath("//span[contains(text(),'GK1')]"));
    var clkEditBtn = element(by.xpath("//button[contains(text(),'Edit')]"));
    var QuestionClear = element(by.xpath("//p[contains(text(),'What is the capital of Karnataka?')]"))
    var Ans1Clear = element(by.xpath("//p[contains(text(),'Bangalore')]"));
    var solClear = element(by.xpath("//p[text()='City']"));
    var assertInstAfterEdit = element(by.xpath("//p[contains(text(),'Only 15 Mins')]"));
    var assertQstAfterEdit = element(by.xpath("//p[text()='What is the capital?']"));
    var assertAnsAfterEdit = element(by.xpath("//p[text()='Bengaluru']"));
    var assertSolAfterEdit = element(by.xpath("//p[text()='Garden City']"));

    var clkChildSection = element(by.xpath("//span[contains(@title,'Section')]"));
    var clkRootNodeInquestion = element(by.xpath("//*[contains(text(),'Section')]//following::span[@role='button'][1]//.."));
    var tableDrpdwn1 = element(by.xpath("(//*[@class='ck ck-dropdown']//*[@class='ck ck-icon ck-button__icon'])[1]"));
    var tableDrpdwn2 = element(by.xpath("(//*[@class='ck ck-dropdown']//*[@class='ck ck-icon ck-button__icon'])[3]"));
    var tableDrpdwn3 = element(by.xpath("(//*[@class='ck ck-dropdown']//*[@class='ck ck-icon ck-button__icon'])[5]"));
    var clickTableRc = element(by.xpath("//*[@data-row='1' or @data-column='2']"));
    var numberedList = element(by.xpath("(//*[@class='ck ck-button ck-off']//*[@class='ck ck-icon ck-button__icon'])[7]"));
    var numberedList2 = element(by.xpath("(//*[@class='ck ck-button ck-off']//*[@class='ck ck-icon ck-button__icon'])[16]"));
    var numberedList3 = element(by.xpath("(//*[@class='ck ck-button ck-off']//*[@class='ck ck-icon ck-button__icon'])[24]"));

    var clkImageIconQstn = element(by.xpath("(//button[@class='ui icon button insert-image-btn'])[1]"));
    var clkImageIconAns = element(by.xpath("(//button[@class='ui icon button insert-image-btn'])[2]"));
    var assertQstnImag = element(by.xpath("(//button[@class='ui icon button insert-image-btn'])[1]//following::img[1]"));
    var assertAnsImage = element(by.xpath("(//button[@class='ui icon button insert-image-btn'])[2]//following::img[1]"));
    var assertBoardFilter = element(by.xpath("//*[@id='board']"));
    var asertAddChildDisabled = element(by.xpath("//button[@class='sb-btn sb-btn-outline-primary sb-btn-normal sb-btn-radius b-none p-0 sb-disabled']"));
    var clkZoomOut = element(by.xpath("(//div[@class='magnify-icon'])[1]"));
    var assertLandscap = element(by.xpath("//div[@class='quml-landscape']"));
    var clkMobIcon = element(by.xpath("//button[@class='w-10 btn-none']"));
    var assertPortrait = element(by.xpath("//div[@class='quml-header__metadata quml-header__metadata--portrait ng-star-inserted']"));
    var assertDataRatio = element(by.xpath("//div[@data-ratio='16:9']"));
    var clkDesktopIcon = element(by.xpath("//button[@class='btn-none']"));
    var clkImageIconAns2 = element(by.xpath("(//button[@class='ui icon button insert-image-btn'])[3]"));
    var clkZommInPopup = element(by.xpath("//div[@class='image-viewer__zoomin']"));
    var assertOnZoomIn = element(by.xpath("//img[@style='width: 110%; height: 110%;']"));
    var selSubConfirmationEnable = element(by.xpath("//option[text()='Enable']"));
    var selCorrectAns1 = element(by.xpath("(//div[@class='quml-option'])[1]"));
    var selWrongAns2 = element(by.xpath("(//div[@class='quml-option'])[7]"));
    var selWrongAns3 = element(by.xpath("(//div[@class='quml-option'])[9]"));
    var clkZommOutPopup = element(by.xpath("//div[@class='image-viewer__zoomout']"));
    var assertOnZoomOut = element(by.xpath("//img[@style='width: 100%; height: 100%;']"));
    var selVideo = element(by.xpath("//div[contains(text(),'Video')]"));
    var choosevideo1 = element(by.xpath("(//button[text()='Search'])[1]//following::div[2]"));
    var btnAdd = element(by.xpath("//button[text()='Add']"));
    var resourceSubmitButton = element(by.xpath("//button[contains(text(),'Submit')]"));
    var assertTenanatFirstInfo1 = element(by.xpath("//span[contains(text(),'Publisher: ')]//following::span[@title='Tamil Nadu'][1]"));
    var assertTenanatFirstInfo2 = element(by.xpath("//span[contains(text(),'Publisher: ')]//following::span[@title='Tamil Nadu'][2]"));
    var assertTenanatFirstInfo3 = element(by.xpath("//span[contains(text(),'Publisher: ')]//following::span[@title='Tamil Nadu'][3]"));
    var assertTenanatFirstSubjectInfo1 = element(by.xpath("//span[contains(text(),'Subject: ')]//following::span[1]"));
    var titleCard1 = element(by.xpath("//div[contains(text(),'Digital Textbook')]//following::bdi[1]"));
    var titleCard2 = element(by.xpath("//div[contains(text(),'Digital Textbook')]//following::bdi[2]"));
    var assertBoardVisible= element(by.xpath("//div[contains(text(),'Digital Textbook')]//following::bdi//following::span[@title='Tamil Nadu']"));
    var assertMediumVisible = element(by.xpath("//div[contains(text(),'Digital Textbook')]//following::bdi//following::span[@title='Tamil Nadu']//following::span[1]"));
    var assertClassVisible = element(by.xpath("//div[contains(text(),'Digital Textbook')]//following::bdi//following::span[@title='Tamil Nadu']//following::span[3]"));
    var titleCourseCard1 = element(by.xpath("//div[contains(text(),'Course')]//following::bdi[1]"));
    var titleCourseCard2 = element(by.xpath("//div[contains(text(),'Course')]//following::bdi[3]"));
    var assertBmcCourse = element(by.xpath("//div[contains(text(),'Course')]//following::bdi//following::span[1]"));
    var videoButton = element(by.xpath("//span[text()='Video']"));
    var interactiveButton = element(by.xpath("//span[text()='Interactive']"));
    var docsButton = element(by.xpath("//span[text()='Docs']"));
    var Allbtn = element(by.xpath("//span[text()='All']"));
    var clkChapterUnit = element(by.xpath("//i[@title='arrow-down']//following::h4[1]"));
    var clkLicenceDropDown = element(by.xpath("//*[contains(text(),' Credits and Licence information')]"));
    var assertAuthor = element(by.xpath("//h4[contains(text(),'Author')]//following::p[1]"));
    var assertCreatedOn = element(by.xpath("//h4[contains(text(),'Created On')]//following::p[1]"));
    var assertUpdatedOn = element(by.xpath("//h4[contains(text(),'Updated on')]//following::p[1]"));
    var assertlicenceTerms = element(by.xpath("//h4[contains(text(),'License terms')]//following::p[1]"));
    var assertDescriptionLink= element(by.xpath("//p[contains(text(),'CC BY 4.0 For details see below:')]"));
    var assertCopyRights = element(by.xpath("//h4[contains(text(),'Copyright')]//following::p[1]"));
    var assertSolution = element(by.xpath("(//button[@class='ui icon button insert-image-btn'])[3]//following::img[1]"));
    var selAddedCollaborator = element(by.xpath("//i[@class='edit icon cursor-pointer']"));
    var clkBulletQuestion = element(by.xpath("(//button[@class='ck ck-button ck-off'])[4]"));
    var clkBulletAns1 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[13]"));
    var clkBulletAns2 = element(by.xpath("(//button[@class='ck ck-button ck-off'])[22]"));
    var assertBulletList1Question = element(by.xpath("//li[contains(text(),'What is the capital of Karnataka?')]"));
    var assertBulletList2Question = element(by.xpath("//li[contains(text(),'Capital Of Karnataka Is')]"));
    var assertBulletList1Ans1 = element(by.xpath("//li[contains(text(),'Bangalore')]"));
    var assertBulletList2Ans1 = element(by.xpath("//li[contains(text(),'Bengaluru')]"));
    var assertAnswer2Image = element(by.xpath("(//button[@class='ui icon button insert-image-btn'])[3]//following::img[1]"));
    var selectSolImgForMCQ = element(by.xpath("(//button[@class='ui icon button insert-image-btn'])[4]"));
    var assertSolForMCQ = element(by.xpath("(//button[@class='ui icon button insert-image-btn'])[4]//following::img[1]"));
    var resoCardclkForOldTheme = element(by.xpath("//div[@class='sb--card__meta1']"));
    var assertRichTextEditor = element(by.xpath("//label[text()='Rich Text Editor']"));
    var assertNameDisable = element(by.xpath("//input[@placeholder='Name' and @disabled='true']"));
    var assertDescDisable = element(by.xpath("//textarea[@placeholder='Description' and @disabled='true']"));
    var assertTextFieldDisable = element(by.xpath("//input[@type='text' and @disabled='true']"));
    var dropdownSummeryType = element(by.xpath("//label[contains(text(),'Summary Type')]//following::sb-icon-dropdown[1]"));
    var selDurAndScore = element(by.xpath("//option[contains(text(),'Score & Duration')]"));    
    var assertCoutMaxOnQset = element(by.xpath("//label[contains(text(),'Count of questions to be displayed in this section')]"));
    var selectMaxQuesDropdown = element(by.xpath("(//select[@id='sb-dropdown'])[1]"));
    var selectMaxQuestions = element(by.xpath("//option[@value='2: 2']"));
    var clkTableIcon1 = element(by.xpath("(//button[contains(@aria-haspopup,'true')])[3]"));
    var assertQuestion = element(by.xpath("(//div[contains(@aria-label,'Rich Text Editor, main')])[1]"));
    var clkBulletIcon2 = element(by.xpath("(//button[@aria-pressed='false'])[15]"));
    var clkTableIcon3 = element(by.xpath("(//button[contains(@aria-haspopup,'true')])[8]"));
    var assertAnswer =  element(by.xpath("(//div[contains(@aria-label,'Rich Text Editor, main')])[2]"));
    var clkChooseType = element(by.xpath("//div[contains(text(),'Choose type')]"));
    var clkTxtImage = element(by.xpath("//div[contains(text(),' Text+Image ')]"));
    var clkBulletIcon3 = element(by.xpath("(//button[starts-with(@aria-labelledby,'ck-editor__aria-label_')])[84]"));
    var clkTableIcon5 = element(by.xpath("(//button[contains(@aria-haspopup,'true')])[13]"));
    var assertSolution1 = element (by.xpath("(//div[contains(@aria-label,'Rich Text Editor, main')])[3]"));
    var assertSelectedNumOfQstns = element(by.xpath("//span[text()='2']"));
    var clkBulletIcon = element(by.xpath("(//button[@aria-pressed='false'])[7]"));
    var assertBulletIcon = element(by.xpath("(//div[contains(@aria-label,'Rich Text Editor, main')])[1]"));
    var clkBulletIcon2 = element(by.xpath("(//button[@aria-pressed='false'])[15]"));
    var assertBulletIcon2 = element(by.xpath("(//div[contains(@aria-label,'Rich Text Editor, main')])[2]"));
    var clkTableIcon1 = element(by.xpath("(//button[contains(@aria-haspopup,'true')])[3]"));
    var clkTableIcon2 = element(by.xpath("//*[@data-row='3' and @data-column='3']"));
    var clkTableIcon3 = element(by.xpath("(//button[contains(@aria-haspopup,'true')])[8]"));
    var clkTableIcon4= element(by.xpath("(//*[@data-row='4' and @data-column='4'])[2]"));
    var rowNumOption1 = element (by.xpath("(//td[@contenteditable='true'])[1]"));
    var rowNumOption2 = element(by.xpath("(//td[@contenteditable='true'])[5]"));
    var rowNumOption3 = element(by.xpath("(//td[@contenteditable='true'])[9]"));
    var assertTblOpt1 = element(by.xpath("(//div[contains(@role,'textbox')])[1]"));
    var rowNumOption4 = element(by.xpath("(//td[@contenteditable='true'])[12]"));
    var rowNumOption5 = element(by.xpath("(//td[@contenteditable='true'])[15]")); 
    var assertTblOpt1 = element(by.xpath("(//div[contains(@role,'textbox')])[1]"));
    var assertTblOpt2 = element(by.xpath("(//div[contains(@role,'textbox')])[1]"));
    var clkMcqHeadingOpt6 = element(by.xpath("(//span[contains(text(),'Heading 6')])[2]"));
    var clkParagraphOpt4 = element(by.xpath("(//span[contains(text(),'Paragraph')])[4]"));
    var clkMcqHeadingOpt1 = element(by.xpath("(//span[contains(text(),'Heading 1')])[3]")); 
    var assertMcqHeadingOPt1 = element(by.xpath("//h1[contains(text(),'Dollar')]"));
    var clkParagraphOpt5 = element(by.xpath("(//span[contains(text(),'Paragraph')])[5]"));
    var clkMcqHeadingOpt5 = element(by.xpath("(//span[contains(text(),'Heading 5')])[4]"));
    var assertMcqHeading5 = element(by.xpath("//h5[contains(text(),'Bangalore')]"));
    var assertMcqParagraph1 = element(by.xpath("//p[contains(text(),'Dollar')]"));
    var clkMcqHeadingOpt2 = element(by.xpath("(//span[contains(text(),'Heading 2')])[1]"));
    var assertMcqHeadingOpt2 = element(by.xpath("//h2[contains(text(),'What is The Capital of Karnataka?')]"));
    var clkMcqHeadingOpt3 = element(by.xpath("(//span[contains(text(),'Heading 3')])[2]"));
    var assertMcqHeading3 = element(by.xpath("//h3[contains(text(),'Bangalore')]"));
    var clkMcqHeadingOpt4 = element(by.xpath("(//span[contains(text(),'Heading 4')])[3]"));
    var assertMcqHeadingOpt3 = element(by.xpath("//h4[contains(text(),'Mangalore')]"));
    var assertParagraph = element(by.xpath("//p[contains(text(),'American Currency')]"));
    var assertConversationFlow = element(by.xpath("(//div[contains(text(),'Conversation flow')])[2]"));
    var assertTnCOnConversationFlow = element(by.xpath("(//a[contains(text(),'I agree to the required terms and conditions')])[1]"));
    var assertVerifyHeadingOpt1 = element(by.xpath("//h1[contains(text(),'American Currency')]"));
    var assertVerifyHeadingOpt2 = element(by.xpath("//h2[contains(text(),'Dollor')]"));
    var clickHeadingOption3 = element(by.xpath("(//span[contains(text(),'Heading 3')])[1]"));
    var assertVerifyHeading3 = element(by.xpath("//h3[contains(text(),'American Currency')]"));
    var clkHeadingOpt4 = element(by.xpath("(//span[contains(text(),'Heading 4')])[2]"));
    var assertHeadingOpt4 = element(by.xpath("//h4[contains(text(),'Dollar')]"));
    var btnUploadAndUse = element(by.xpath("//button[contains(text(),'Upload and Use')]"));
    var btnUploadFromComputer = element(by.xpath("//button[contains(text(),' Upload from Computer ')]"));
    var btnUploadAndUse2 = element(by.xpath("( //button[contains(text(),'Upload and Use')])[2]"));
    var assertQuestionImgUploaded = element(by.xpath("//label[contains(text(),'Question')]//following::img[1]"));
    var assertAns1ImgUploaded = element(by.xpath("//label[contains(text(),'Options')]//following::img[1]"));
    var assertAns2ImgUploaded = element(by.xpath("//label[contains(text(),'Options')]//following::img[2]"));
    var selectSummeryType = element(by.xpath("//option[text()='Complete']"));
    var selectRadioButton1 = element(by.xpath("(//label[@class='container'])[1]"));
    var selectRadioButton2 = element(by.xpath("(//label[@class='container'])[4]"));
    var selectScoreAndDuration = element(by.xpath("//option[text()='Score & Duration']"));
    var asertAnsIconYes  = element(by.xpath("(//div[@class='ng-star-inserted'])[2]"));
    var selectNoOptSolution  = element(by.xpath("(//option[contains(text(),'No')])[2]"));
    var clkAddOption = element(by.xpath("(//i[@aria-hidden='true'])[5]"));
    var clkMcqHeading3 = element(by.xpath("(//span[contains(text(),'Heading 3')])[4]"));
    var assertMcqHeadingopt4 = element(by.xpath("//h3[contains(text(),'Dollar')]"));
    var mcqSelHeading5 = element(by.xpath("(//span[contains(text(),'Heading 5')])[1]"));
    var assertMCQHeadingOpt5 = element(by.xpath("//h5[contains(text(),'What is The Capital of Karnataka?')]"));
    var clkShowAns1 =element(by.xpath("(//div[@id='submit-answer'])[1]"));
    var enterMarks = element(by.xpath("//input[@placeholder='Marks']"));
    var assertPreviewMarks = element(by.xpath("//*[@id='Pages-read-:']"));
    var clkSubmitConfirmation = element(by.xpath("//label[contains(text(),'Submit Confirmation Page ')]//following::sb-icon-dropdown[1]"));
    var submitConfirmationEnable = element(by.xpath("//option[contains(text(),'Enable')]"));
    var assertCorrectAns = element(by.xpath("//div[@class='scoreboard__index correct ng-star-inserted']"));
    var assertWrongAns = element(by.xpath("//div[@class='scoreboard__index wrong ng-star-inserted']"));
    var assertSkippedAns = element(by.xpath("//div[@class='scoreboard__index skipped ng-star-inserted']"));
    var assertQuestionImg = element(by.xpath("(//figure[@class='image'])[1]"));
    var assertAns1Img = element(by.xpath("(//figure[@class='image'])[2]"));
    var assertAns2Img = element(by.xpath("(//figure[@class='image'])[3]"));
    var assertTotalQuestions = element(by.xpath("//div[text()='Total Questions: 3']"));
    var assertQuestionsAnswered = element(by.xpath("//div[text()='Questions Answered: 2']"));
    var assertQuestionsSkipped = element(by.xpath("//div[text()='Questions Skipped: 1']"));
    var assertQuestionsNotViewed = element(by.xpath("//div[text()='Questions not Viewed: 0']"));
    var enterSection = element(by.xpath("//input[@placeholder='Title']"));
    var clkSection1 = element(by.xpath("//span[text()='Section1']"));
    var clkSection2 = element(by.xpath("//span[text()='Section2']"));
    var clkRootNode = element(by.xpath("//span[text()='Section1']//preceding::span[@class='fancytree-title']"));
    var assertInstructionFromRootNode = element(by.xpath("//p[text()='Answer All']"));
    var assertCorrectAnsSecA = element(by.xpath("//div[contains(text(),'Section A')]//following::div[@class='scoreboard__index correct ng-star-inserted'][1]"));
    var assertCorrectAnsSecB = element(by.xpath("//div[contains(text(),'Section B')]//following::div[@class='scoreboard__index correct ng-star-inserted']"));
    var assertWrongAnsSecA = element(by.xpath("//div[contains(text(),'Section A')]//following::div[@class='scoreboard__index wrong ng-star-inserted'][1]"));
    var assertWrongAnsSecB = element(by.xpath("//div[contains(text(),'Section B')]//following::div[@class='scoreboard__index wrong ng-star-inserted']"));
    var assertSkippedAnsSecA = element(by.xpath("//div[contains(text(),'Section A')]//following::div[@class='scoreboard__index skipped ng-star-inserted'][1]"));
    var assertSkippedAnsSecB = element(by.xpath("//div[contains(text(),'Section B')]//following::div[@class='scoreboard__index skipped ng-star-inserted']"));
    var assetSecAOnSubmitPage = element(by.xpath("//div[contains(text(),'Section A')]"));
    var assrtSecBOnSubmitPage = element(by.xpath("//div[contains(text(),'Section A')]//following::div[contains(text(),'Section B')]"));
    var assertQuestionNo1 = element(by.xpath("//p[contains(text(),'What is the capital of Karnataka?')]"));
    var assertQuestionNo2 = element(by.xpath("//p[contains(text(),'What is the capital of India?')]"));
    var assertQuestionNo3 = element(by.xpath("//p[contains(text(),'What is the Indian Currency?')]"));
    var assertSectionAandProgressBarActive = element(by.xpath("//label[@class='progressBar-border active' and text()='A']"));
    var assertSectionBandProgressBarActive = element(by.xpath("//label[@class='progressBar-border active' and text()='B']"));
    var assertSectionAandQuestion1Indicator = element(by.xpath("//li[@class='showFeedBack-progressBar ng-star-inserted progressBar-border' and text()=' 1 ']"));
    var assertSectionAandQuestion2Indicator = element(by.xpath("//li[@class='showFeedBack-progressBar ng-star-inserted progressBar-border' and text()=' 2 ']"));
    var assertSectionAandQuestion3Indicator = element(by.xpath("//li[@class='showFeedBack-progressBar ng-star-inserted progressBar-border' and text()=' 3 ']"));
    var clkReview = element(by.xpath("//button[contains(text(),'Review')]"));
    var assertQuestion1 = element(by.xpath("//div[contains(text(),' 1/3 ')]"));
    var NavigateSubmitPage = element(by.xpath("//li[@aria-label='scoreboard']"));
    var assertSubmitConfirmation = element(by.xpath("//div[contains(text(),'Enjoyed this content?')]"));
    var assertNextButtonOnQuestionSet = element(by.xpath("//div[@class='quml-navigation__next ml-8 ng-star-inserted' and @title='next slide']"));
    var assertPrevButtonOnQuewstionSet = element(by.xpath("//div[@class='quml-navigation__previous' and @title='preview slide']"));
    var assertBtnColor = element(by.xpath("//div[@class='quml-navigation__next quml-navigation__next--active ml-8 ng-star-inserted' and @title='next slide']"));
    var assertInstruction1 = element(by.xpath("//div[contains(text(),'Instructions')]"));
    var assertInstructionUnderline = element(by.xpath("(//u[contains(text(),'Instruction')])[1]"))
    var assertAttempts = element(by.xpath("//span[contains(text(),'Attempt') and contains(text(),'1/')]"));
    var clkMaxAttempt = element(by.xpath("//button[contains(text(),'Continue learning')]"));
    var assertReachedMaxLimit = element(by.xpath("//div[contains(text(),'You have exceeded the maximum number of attempts that can be submitted')]"));
    var assertCloseBtn = element(by.xpath("//a[contains(text(),'Close')]"));
    var assertInstBold = element(by.xpath("(//strong[contains(text(),'Instruction')])[1]"))
    var assertInstItalic = element(by.xpath("//i[contains(text(),'Instruction')]"));
    var clkShuffleCheckBox = element(by.xpath("//*[contains(@id,'shuffle-questions')]"));
    var validateShuffleMessagePopUp = element(by.xpath("//*[text()='Each question will carry equal weightage of 1 mark when using Shuffle. To provide different weightage to individual questions please turn off Shuffle.']"));
    var clkSelAns2 = element(by.xpath("//div[@class='option']//preceding::p[2][text()='New Delhi']"));
    var clkSelAns3 = element(by.xpath("//div[@class='option']//preceding::p[2][text()='Rupee']"));
    var asserTotalQuestionsAfterMax = element(by.xpath("//div[contains(text(),'Questions Answered: 5')]"));
    var clkPublishedContentCard = element(by.xpath("//div[@class='content']"));
    var firstContentCard = element(by.xpath("(//*[contains(@class,'UpForReviewListHover')]//child::td[1])[1]"));
    var assertTitleLeft = element(by.xpath("(//p[text()='test'])[1]"));
    var assertTitleCenter = element(by.xpath("//p[text()='test' and @class='text-center']"));
    var asserrtTitleRight = element(by.xpath("//p[text()='test' and @class='text-right']"));
    var assertQuestion1Left = element(by.xpath("(//p[text()='One'])[1]"));
    var assertQuestion1Center = element(by.xpath("//p[text()='one' and @class='text-center']"));
    var assertQuetion1Right = element(by.xpath("//p[text()='one' and @class='text-right']"));
    var assertLiveQuestion1 = element(by.xpath("//small[contains(text(),' Show question added to question set')]//following::sui-checkbox[1]"));
    var assertLiveQuestion2 = element(by.xpath("//small[contains(text(),' Show question added to question set')]//following::sui-checkbox[1]"));
    var clkOpt1Quest2 = element(by.xpath("(//div[@class='option']//preceding::p[2][text()='Bangalore'])[2]"));
    var clkOpt1Quest3 = element(by.xpath("(//div[@class='option']//preceding::p[2][text()='Bangalore'])[3]"));
    var assertQuestionsAnswered1 = element(by.xpath("//div[contains(text(),'Questions Answered: 6')]"));
    var clkAddQuestion = element(by.xpath("//button[contains(text(),'Add question')]"));
    var clkAddedQuestion = element(by.xpath("//span[contains(text(),'Section')]//following::span[@class='fancytree-title']"));
    var assertselectedQuestion = element(by.xpath("//li[text()='i ']"));
    var assertAppliedBoardFilterInAllTabs = element(by.xpath("//div[contains(text(),'Applied filters')]//following::label[contains(text(),'Board')]//following::a[1]"));
    var assertAppliedMediumFilterInAllTabs = element(by.xpath("//div[contains(text(),'Applied filters')]//following::label[contains(text(),'Medium')]//following::a[1]"));
    var assertAppliedSubjectFilterInAllTabs = element(by.xpath("//div[contains(text(),'Applied filters')]//following::label[contains(text(),'Subject')]//following::a[1]"));
    var selectMax3Questions = element(by.xpath("//option[@value='3: 3']"));
    var selCorrectAnswer1 = element(by.xpath("(//div[@class='quml-option'])[1]"));
    var selCorrectAnswer2 = element(by.xpath("(//div[@class='quml-option'])[2]"));
    var selCorrectAnswer3 = element(by.xpath("(//div[@class='quml-option'])[3]"));
    var assertSumOfBothSec = element(by.id("Group-18-Copy"));
    var assertTimer = element(by.xpath("//quml-durationtimer//following::span"));
    var assertTimerDisplay = element(by.xpath("//quml-timer//following::span[1]"));
    var assertTimerActive = element(by.id("timer/active"));
    var selCorrectAnswer4 = element(by.xpath("(//div[@class='quml-option'])[4]"));
    var selCorrectAnswer5 = element(by.xpath("(//div[@class='quml-option'])[5]"));
    var enterQuestionTitle = element(by.xpath("(//*[contains(@id,'searchText')])[2]"));
    var clkCopyQuestion = element(by.xpath("//span[contains(@data-tooltip,'copy question')]"));
    var submitButtonInEditQuestion = element(by.xpath("//button[contains(text(),'Submit')]"));
    var clickFunctions = element(by.xpath("(//*[@title='Add Formula'])[1]"));
    var clickFunctions2 = element(by.xpath("(//*[@title='Add Formula'])[2]"));
    var clickFunctions3 = element(by.xpath("(//*[@title='Add Formula'])[3]"));
    var clickEquations = element(by.xpath("//a[contains(text(),'Equations')]"));
    var clickEquationDropdwn = element(by.xpath("//div[contains(text(),'All Equations')]"));
    var selectEquationDropDownValue = element(by.xpath("//div[contains(text(),'Trigonometric functions')]"));
    var selectSinTheta = element(by.xpath("//div[contains(@id,'trig0')]"));
    var selectCosTheta = element(by.xpath("(//div[contains(@id,'trig1')])[1]"));
    var selectTanTheta = element(by.xpath("//*[contains(@id,'trig4')]"));
    var addButton = element(by.xpath("//*[contains(text(),'Please switch to advanced tab to copy paste LaTeX')]//following::button[contains(text(),'Add')]"));
    var assertAnsSelected = element(by.xpath("//div[@class='quml-option quml-option--selected']"));
    var assertCompleteConsume = element(by.xpath("//div[text()='You just completed']"));
    var assertAllQuestions = element(by.xpath("//span[text()='5']"));
    var assertAllQuestionConsum = element(by.xpath("//div[contains(text(),'Replay')]"));
    var clkCourse = element(by.xpath("//*[contains(text(),'Course Unit')]//following::div[@title='PDF_13.pdf']"));
    var assertTitle = element(by.xpath("(//div[text()=' PDF_13.pdf '])[1]"));
    var assertByOrg = element(by.xpath("(//div[text()=' PDF_13.pdf '])[1]//following::span[text()='by CBSE/NCERT']"));
    var assertMaxSelectedQuestions = element(by.xpath("//span[text()='3']"));
    var selectScore = element(by.xpath("//option[text()='Score']"));
    var selectImageAfterAdding = element(by.xpath("(//*[@class='image ck-widget ck-widget_selected'])"));
    var resizeOne = element(by.css("svg.ck.ck-icon.ck-button_icon"));
    var addVedioInResource = element(by.xpath("//*[@data-content='Add Video']"));
    var addAudioInResource = element(by.xpath("//*[@data-content='Add Audio']"));
    var clickSelectVedio = element(by.xpath("//*[@name='youtubeVideo']"));
    var clickSelectedVideo = element(by.xpath("//*[text()='Select']"));
    var assertmaxlength = element(by.xpath("//*[@maxlength='100']"));
    var changeTimeout = element(by.xpath("//input[@placeholder='Time'][1]"));
    var selectOptionOne = element(by.xpath("//*[contains(text(),'240,200,160')]"));
    var selectSecondOption = element(by.xpath("//*[contains(text(),'200,160,240')]"));
    var assertImageonCard = element(by.xpath("//span[contains(text(),'Continue Learning')]//following::img"));
    var assertTitleOnCard = element(by.xpath("//span[contains(text(),'Continue Learning')]//following::h4"));
    var assertSubjectOnCard = element(by.xpath("//span[contains(text(),'Subject')]//following::span[1]"));
    var assertPublisherOnCard = element(by.xpath("//span[contains(text(),'Publisher')]//following::span[1]"));
    var assertDataOnCard = element(by.xpath("//span[contains(text(),'Continue Learning')]//following::h4//following::div//following::span[1]"));
    var clkNextAfterOpen = element(by.xpath("(//a[@class='nav-icon nav-next'])[2]"));
    var clkNextButton = element(by.xpath("(//div[contains(text(),'Next')])[1]"));
    var clkOption1 = element(by.xpath("(//div[@class='option-text-container text-only'])[1]"));
    var clkAddCertificate = element(by.xpath("//a[contains(text(),'Add certificate')]"));
    var clkbtnAddCertificate = element(by.xpath("//button[contains(text(),'Add certificate')]"));
    var assert100PDisable = element(by.xpath("//input[@readonly='true']"));
    var assertPlusSign = element(by.xpath("//button[@class='d-flex flex-ai-center flex-jc-center plus-btn ng-star-inserted']"));
    var filterSearch1 = element(by.xpath("(//input[@name='filter_search'])[2]"));
    var clkAddCollaborator = element(by.xpath("//div[@class='icon-box popup-item']"));
    var clkAdd = element(by.xpath("(//strong[text()='+ADD'])[1]"));
    var clkbtnDone1 = element(by.xpath("//button[text()='Done']"));
    var clkMngCollab = element(by.xpath("//a[text()='Manage Collaborators']"));
    var clkRemove = element(by.xpath("(//strong[text()='REMOVE'])[1]"));
    var sectionGK1 = element(by.xpath("//span[text()='SectionGK1']"));
    var navigateToPrevious = element(by.xpath("//*[contains(@alt,'Navigate to previous')]"));
    var assertTimeOut = element(by.xpath("//div[contains(text(),'00:00')]"));
    var replayButton = element(by.xpath("(//*[contains(text(),'Replay')])[2]//..//child::a"));
    var selectOptionOneSlideOne = element(by.xpath("//*[contains(text(),'241,201,161')]"));
    var closeIconPopup = element(by.xpath("//*[contains(@aria-label,'close')]"));
    var nextButtonPopup = element(by.xpath("//div[contains(@id,'popup-buttons-container')]//child::div"));
    var selBoardValueOnlyRootNode = element(by.xpath("//option[contains(text(),'State (Andhra Pradesh)') or contains(text(),'Z_Test_Framework') or contains(text(),'CBSE')]"));
    var assertTextCenter = element(by.xpath("//p[text()='What is the capital of Karnataka?' and @class='text-center']"));
    var clkQuestionAlign = element(by.xpath("(//button[@class='ck ck-button ck-off ck-dropdown__button'])[1]"));
    var clkQuestionCenter = element(by.xpath("(//button[@class='ck ck-button ck-off'])[5]"));
    var assertInstructionsEntered = element(by.xpath("//div[contains(text(),'Instructions')]//following::p[text()='abcd xyz']"));
    var selNoOption = element(by.xpath("(//option[contains(text(),'No')])[1]"));
    var selMaxQuestionAs1 = element(by.xpath("//option[@value='1: 1']"));
    var selectMaxQuesDropdownRootNode = element(by.xpath("(//select[@id='sb-dropdown'])[7]"));
    var assertAfterCreateQuestion = element(by.xpath("//span[text()='Selected Question : 1']"));
    var checkUncheck1 = element(by.xpath("(//input[@class='question-select'])[1]"));
    var assertAfterUncheck1 = element(by.xpath("//span[text()='Selected Question : 0']"));
    var checkUncheck2 = element(by.xpath("(//input[@class='question-select'])[2]"));
    var checkUncheck3 = element(by.xpath("(//input[@class='question-select'])[3]"));
    var checkUncheck4 = element(by.xpath("(//input[@class='question-select'])[4]"));
    var checkUncheck5 = element(by.xpath("(//input[@class='question-select'])[5]"));
    var assertAfterCheck4 = element(by.xpath("//span[text()='Selected Question : 4']"));
    var copyQstn = element(by.xpath("(//i[@class='copy icon'])[1]"));
    var assertCopiedQuestion = element(by.xpath("(//div[contains(text(),'Copy of - Question')])[1]"));
    var boardInQuestion1 = element(by.xpath("(//div[text()='Select Board' or text()= 'Select Board/Syllabus' ])"));
    var selectCBSEQue1 = element(by.xpath("(//div[text()='Select Board' or text()= 'Select Board/Syllabus' ])/following::div/div[1]"));
    var mediumInQuestion1 = element(by.xpath("(//div[.='Select Medium'])"));
    var selectEnglishFITB1 = element(by.xpath("(//div[.='Select Medium'])/following::div/div[1]"));
    var clkDeleteQstn = element(by.xpath("(//i[@id='delete-question-config'])[1]"));
    var assertQuestionCreated = element(by.xpath("//div[contains(text(),'Question Delete')]"));
    var btnConfirmDel = element(by.xpath("//button[text()='Delete']"));
    var resoureEditorCloseIcon = element(by.xpath("//div[@id='closeButton']"));
    var assertEditIconInResouceEditor = element(by.xpath("//i[@class='edit icon link']"));
    var selectAudioOption = element(by.xpath("//button[@ng-switch-when='select']"));
    var assertAudioForQuestion = element(by.xpath("//img[@id='org-ekstep-contentrenderer-questionunit-questionComponent-AudioImg']"));
    var assertAudioForAnswer = element(by.xpath("//*[text()='India']//following::img[2]"));
    var copyQuestion = element(by.xpath("//*[@class='icon-duplicate link']"));
    var clickAnswerAudioIcon = element(by.xpath("(//*[text()='Mark as right answer'])[1]//following::i[2]"));
    var uploadBtn = element(by.xpath("//*[contains(text(),'Upload/ Record')]"));
    var uploadImage = element(by.xpath("//*[@class='huge upload icon']"));
    var uploadAndUseBtn = element(by.xpath("//*[text()='Upload and Use']"));
    var createFTB = element(by.xpath("(//div[@class='card card-hover-effect ng-scope'])[3]"));
    var clkFTBSelect = element(by.xpath("(//div[@class='card card-hover-effect ng-scope'])[3]//following::div[@class='ui small primary button']"));
    var clkbtnRefresh = element(by.xpath("//button[text()='Refresh']"));
    var clkAddText = element(by.xpath("//a[@data-content='Add Text']"));
    var typeInstruction = element(by.xpath("//textarea[@placeholder='Add text here']"));
    var clkPrevButtonInPreviewWindow = element(by.xpath("(//*[@alt='Navigate to previous'])"));
    var assertBlankPageFTB = element(by.xpath("//p[contains(text(),'[[')]"));
    var assertBlankPageFTB3 = element(by.xpath("//p[contains(text(),']]')]"));
    var assertBlankPageMCQ = element(by.xpath("//div[@title='Set Answer']//following::br"));
    var assertBlankPageReOrdering1 = element(by.xpath("//p[contains(text(),'Arrange the given words in proper order to form a sentence.')]"));
    var assertBlankPageReOrdering2 = element(by.xpath("//textarea[@maxlength='120']//following::span[contains(text(),'0')]"));
    var assertBlankPageReArranging = element(by.xpath("//span[contains(text(),'Add Sequences')]//following::span[contains(text(),'0')]"));
    var clkCloseIcon = element(by.xpath("//div[@class='two wide column right aligned']//following::i[@class='cursor-pointer close link icon']"));
    var assertQuestionInTheList = element(by.xpath("//div[text()='Close Question']"));
    var clkEditQuestion = element(by.xpath("(//i[@class='edit icon cursor-icon'])[1]"));
    var assertEditPage = element(by.xpath("//span[text()='Edit Question']"));
    var assertShowingResultsText = element(by.xpath("//h4[text()='Showing results for Q4R2I7']"));
    var assertDigitalTextbookByQR = element(by.xpath("//h4[text()='Showing results for Q4R2I7']//following::div[text()='Digital Textbook']"));
    var assertCourseByQR = element(by.xpath("//h4[text()='Showing results for Q4R2I7']//following::div[text()='Course']"));
    var assertAddedQuestion = element(by.xpath("//div[@id='ftb-template']"));

    return {
        ddSelectlanguage,
        labelEnglish,
        labelMyCourses,
        btnSlideNext,
        btnViewAll,
        btnPagination,
        btnBoldBeforeClick,
        btnBoldAfterClick,
        btnItalicBeforeClick,
        btnItalicAfterClick,
        btnUnderLineBeforeClick,
        btnUnderLineAfterClick,
        btnSize,
        btnSizeTen,
        btnSizeTwentyEight,
        ddSelectKeyboard,
        ddTypeCustom,
        inputAddKeys,
        fieldAnswerInFITB,
        btnBack,
        btnResume,
        btnCloseEditor,
        labelEnterTheQuestion,
        linkActiveItemDraft,
        ddSendforreview,
        linkLimitedSharing,
        linkShareViaLink,
        resourceInFirstColumn,
        btnEditDetails,
        labelLicense,
        linkCredit,
        labelLicenceTerms,
        labelMoreDetails,
        labelCopyRight,
        sendForReviewInShareViaLink,
        reload,
        headerCourse1,
        untitledCollection,
        deleteSetAnsewerOptions1,
        deleteSetAnsewerOptions2,
        clickresource,
        resourceName,
        startCreating,
        addShape,
        addTriangle,
        clicksave,
        closebutton,
        addslide,
        addImage,
        selectImg,
        addHotSpot,
        addscribblepad,
        addActivity,
        sendForReview,
        clickAppIcon,
        selectAppIcon,
        clickYear,
        addbuttonActivity,
        save,
        selectButton,
        searchActivity,
        createQuestion,
        selectMTFTemplate,
        writeQuestion,
        enterTheQuestion,
        enterAnswer1,
        enterAnswer2,
        enterAnswer3,
        enterAnswer4,
        enterAnswer5,
        enterAnswer6,
        previewRefreshIcon,
        createQueNext,
        boardInQuestion,
        selectCBSEQue,
        mediumInQuestion,
        selectEnglishFITB,
        gradeLevelInQuestion,
        selectClass4,
        subjectInQuestion,
        selectMathematics,
        maxScore,
        levelInQuestion,
        selectEasy,
        learningOutcome,
        selectLearningOutcome,
        addText,
        addTextTextArea,
        addTextDoneButton,
        imageCard,
        selectImage,
        addHotspot,
        closeButtonMsg,
        clickActionTabInResourceCreation,
        clickPlusIconInActionTab,
        clickActionType,
        selectActionTypeHide,
        clickActionTarget,
        selectActionTarget,
        selectActionAddButton,
        preview,
        iFrame,
        nextIcon,
        addSlide,
        searchUploadImage,
        clickImageSearch,
        checkContentIcon,
        addShapes,
        addTriangleShape,
        actionsOptionSideBar,
        showActionFormBtn,
        actionTypeDropdown,
        showHide,
        actionTargetDropdown,
        actionTargetDropdownFirstItem,
        addActionbtn,
        propertiesSection,
        clickNextSlide,
        linkTo,
        addAudio,
        clickAllAudio,
        selectAudio_AllAudio,
        audio,
        playPause,
        hide,
        previewIcon,
        previewPopup,
        previewPopupFrame,
        previewNextBtn,
        contentPreiviewCompleteScreen,
        previewPopupReplayBtn,
        showPlayerControl,
        teacherInstruction,
        backgroundColor,
        redColor,
        addQuestionSet,
        pickQuestion,
        pickQuestionCheckBox,
        pickQueNextButton,
        questionSetTitle,
        questionSetAddButton,
        collaboratorIcon,
        donebutton1,
        closeEditor1,
        allElements,
        addCollaborator,
        collaborationSection,
        searchForReview,
        searchIconUpForReview,
        courseNameInCollaboration,
        editIcon1,
        submittedForReview,
        courseNameInReviewSubmission,
        searchCollaboratorField,
        suggestionCollaboratorList,
        collaboratorTostrMsg,
        manageCollaborator,
        removeCollaborator,
        clickDoneButton,
        closeEditor2,
        reviewSubmission,
        upForReview,
        contentupload,
        clickRequestChanges,
        rejectReason1,
        rejectReason2,
        rejectReason3,
        reviewComment,
        requestChangesButton,
        coursename,
        reviewerSuggestion,
        reviewerSuggestionTitle,
        closeLinkIcon,
        closePageIcon,
        drafts,
        untitledUnitName,
        newchild,
        searchInput,
        searchIcon,
        cardLabel,
        searchedContentForUpload,
        headerLibrary,
        selectFITBTemplate,
        clickBoard,
        selectBoard,
        clickMedium,
        selectMedium,
        clickclass,
        SelectClass,
        clicksubject,
        selectSubject,
        allMyContent,
        messageBox,
        yesButtonPopup,
        deleteButton,
        firstCourseCardContentName,
        Published,
        validateScoreResult,
        ScoreLabel,
        justCompletedMsg,
        verifyRatingSlideMsg,
        submitRating,
        giveRatings,
        clickNext,
        verifyCorrect,
        clickTryAgainButton,
        verifyInCorrect,
        clickNextButtonMCQ,
        clickFITBAnsTxtBox,
        courseCard,
        searchIcon,
        filterSearch,
        headerLibrary,
        popupPublishButton,
        checkBox,
        publishResource,
        searchedContentForPublish,
        searchIconUpForReview,
        upForReview,
        saveButton,
        headerCourse,
        searchInput,
        searchIcon,
        startCreating,
        workSpace,
        iFrame,
        addQuestionSet,
        createQuestion,
        selectFITBTemplate,
        writeQuestion,
        //  enterTheQuestion,
        clickLargeImageIcon,
        checkAppIcon,
        selectAppIcon,
        verifyLargeImageAdded,
        clickAudioIcon,
        verifyAudioAdded,
        clickAllAudioTab,
        selectAudio,
        clickMathTextIcon,
        selectMathText,
        selectedMathTextAdd,
        verifyFormualaAdded,
        previewRefreshIcon,
        createQueNext,
        enterTheTitleQues,
        boardInQuestion,
        selectCBSEQue,
        mediumInQuestion,
        selectEnglishFITB,
        gradeLevelInQuestion,
        selectClass4,
        subjectInQuestion,
        selectMathematics,
        maxScore,
        levelInQuestion,
        selectEasy,
        // learningOutcome,
        selectLearningOutcome,
        submitButtonInQuestion,
        nextButton,
        //questionSetTitle,
        addbutton,
        saveIcon,
        sendForReview,
        clickAppIcon,
        checkAppIcon,
        yearOfCreation,
        reviewSubmission,
        coursename,
        selectMCQTemplate,
        inputAnswer1,
        markAsRightAnswer,
        inputAnswer2,
        addAnswerInQuestionSet,
        deleteSetAnsewerOptions,
        closePage,
        firstBook,
        clickMcQFirstAnswer,
        courseName,
        boardInResource,
        mediumInResource,
        gradeLevelInResource,
        subjectInResource,
        resourceTypeInResource,
        firstItemInBoardInResource,
        firstItemInMediumInResource,
        firstItemInGradeLevelInResource,
        firstItemInSubjectInResource,
        firstItemInResourceTypeInResource,
        firstQuestionName,
        searchTextInQuestion,
        //   searchTextInQuestion,
        createdResorce,
        checkBox1InSelectQuestion,
        checkBox2InSelectQuestion,
        checkBox3InSelectQuestion,
        checkBox4InSelectQuestion,
        closePage,
        searchIconInQuestion,
        arrangeTemplate,
        enterSeq1ArrangeTemp,
        enterSeq2ArrangeTemp,
        addSequenceButton,
        enterSeq3ArrangeTemp,
        enterSeq4ArrangeTemp,
        rating,
        searchquestions,
        clickSearchIconInQuesion,
        verifyCopyIconInQuestion,
        verifyCheckboxInQuestion,
        selectReOrderingTemplate,
        enterSentences,

        reOrderingCheck1,
        reOrderingCheck2,
        reOrderingBackSpace,
        select,
        courseCard1,
        linkCourse,
        fieldName,
        fieldDescription,
        fieldTag,
        btnAddResource,
        fieldSearch,
        checkBoxInCourse,
        btnProceed,
        btnContributors,
        contributorsToolTip,
        fieldInputDesc,
        checkBoxInCourse1,
        checkBoxInCourse2,
        checkBoxInCourse3,
        btnSave,
        ddYear,
        label2020,
        iconPreview,
        nextIconInPreviewBox,
        btnCloseInPreview,
        linkCourseInHeader,
        labelRajasthan,
        ddBoard,
        btnSaveAndCreate,
        btnCloseQuestion,
        toggleShowImmediateFeedback,
        toggleShuffleQuestions,
        inputTotalScore,
        toggleAfterShuffled,
        toggleAfterShowImmediateFDBK,
        btnCopySlide,
        labelNumberOne,
        labelNumberTwo,
        imageCard3,
        revieDialogClose,
        clkUploRequestChanges,
        clkRejectUploadsc,
        clkFeaturedCourseViewAll,
        SltLevelQu,
        saveAndCreateButton,
        resoCard,
        fullscreenclk,
        QuesCard,
        QuesAnswernextButton,
        reOrderingLngCheck1,
        reOrderingLngCheck2,
        reOrderingLngCheck3,
        clkSearchActivity,
        clkSearchButton,
        clkAddButtonActivty,
        clkAddTimer,
        clkAddProgressBar,
        labelVeryBad,
        labelBad,
        labelAverage,
        labelGood,
        labelExcellent,
        clkOtherLabel,
        othercommentSection,
        giveRatings2,
        giveRatings3,
        giveRatings4,
        giveRatings5,
        fourRatingContentLabel1,
        fourRatingContentLabel2,
        fourRatingContentLabel3,
        fourRatingContentLabel4,
        fourRatingContentLabel5,
        fourRatingContentLabel6,
        fiveRatingContentLabel1,
        fiveRatingContentLabel2,
        fiveRatingContentLabel3,
        fiveRatingContentLabel4,
        fiveRatingContentLabel5,
        dropDownLang,
        sltKannadLang,
        KannadaLabel1,
        KannadaLabel2,
        KannadaLabel3,
        KannadaLabel4,
        KannadaLabel5,
        KannadaSubmitBtn,
        KannadaRatingSuccsMsg,
        kandRating1,
        kandRating2,
        kandRating3,
        kandRating4,
        kandRating5,
        htmlCloseButton,
        CloseButtonVideo,
        nxtButtonUpload,
        clkRejectBtn,
        clkcommentBox,
        clkSubmitReviw,
        scrollLabelOther,
        reviewComment1,
        reviewerSuggestionColl,
        reviewerSuggestionTitleColl,
        revieDialogCloseColl,
        clkBoardDdAllTabs,
        clkMediumDdAllTabs,
        sltBoardDdAllTabs,
        sltMediumDdAllTabs,
        sltMedium2DdAllTabs,
        sltSubjectDD2dAllTabs,
        clkClassDdAllTabs,
        sltClassDdAllTabs,
        sltClass2DdAllTabs,
        sltSubjectDdAllTabs,
        clkSubjectDdAllTabs,
        courseToBeClicked,

        clickQuestionSet,
        sltQuesAudienceType,
        questionInstruction,
        questionName,
        questionDescription,
        questionAudienceType,
        showFeedback,
        questionAuthor,
        questionMCQ,
        questionMCQnextBtn,
        mCQquestionInput,
        McqOptionInput1,
        McqOptionInput2,
        sltCorrectAnswer,
        questionDetailsTitle,
        sltQuestionAudienceType,
        maxTime,
        warningTime,
        createNew,
        questionSave,
        sendForReviewQuestionset,
        publishedContent,
        clkPreferences,
        assertPreferencePopup,
        clkHome,
        assertGusetName,
        imageCard4,
        browseBySubj,
        featured,
        browseByCategories,
        browseByBoard,
        browseByAudience,
        assertIgotBoard,
        assertCbseBoard,
        assertBoardSubContnet,
        assertCategSubContent,
        clkExploreTab,
        assertAudeinceType,
        assertAudeinceType2,
        clkBackInbrowseBySubjectContentCard,
        clkBackInbrowseByBoardInExplore,
        clkViewAllBtn,
        clkCloseBtn,
        clkChangePreferenceBtn,
        assertChangePreferencePopup,
        deleteContent,
        searchCoursesUpForReview,
        toastMsg,
        addVedio,
        addMathtext,
        clkMediFilter,
        sltMediuFilter1,
        sltMediuFilter2,
        ClkClassFilter,
        sltClassFilter1,
        sltClassFilter2,
        clkDigitalTxtBooks,
        clkCourseHeader,
        clkTVClasses,
        MediumsAsertSelectedOption,
        ClassAsserSelctedOption,
        clkViewAllNcertSec,
        clkResetBtn,
        aseertCourseData,
        assertTextBookData,
        assertEnrollEndDate,
        QuestionName,
        enterDescription,
        enterInstruction,
        AdditionalCategory,
        selAdditionalCategory,
        selBoard,
        selBoardValue,
        dropdownMedium,
        selectMedium3,
        dropDownClass,
        selectClass,
        dropDownSubject,
        selectSubject1,
        dropDownAudiene,
        selectAudience,
        maxHour,
        maxHourValue,
        Qtype,
        createNew1,
        McqOptionInput22,
        createNew2,
        sltCorrectAnswer1,
        previewIcon1,
        alertTimeOn,
        nextSlideIcon,
        alertTimeOn1,
        warningTime1,
        warningTime2,
        completeTime,
        questionSubjective,
        addImageQnSet,
        selectImage1,
        imageAdded,
        clkAllImage,
        clickRight,
        mcQOptionInput3,
        mcQOptionInput4,
        AddOption,
        clkSection,
        selectGrid,
        clkVerticalSet,
        clkShuffle,
        clkGridSet,
        selectHoriz,
        verticalOption1,
        clkHorizSet,
        verticalOption4,
        nextIcon2,
        nextIcon1,
        gridOption4,
        gridOption1,
        opt1Vertical,
        opt4Vertical,
        opt1Grid,
        opt4Grid,
        opt1Horiz,
        opt4Horiz,
        ansGrid,
        ansVertical,
        ansHoriz,
        selBoardValue1,
        clkBold,
        BoldSelected,
        clkItalic,
        ItalicSelected,
        clkUnderLine,
        UnderLineSelected,
        BulletSelected,
        clkBullet,
        clkTextAllignment,
        selectLayout,
        selectTextAllignment,
        BoldSelected1,
        clkParagraph1,
        clkBold1,
        clkItalic1,
        ItalicSelected1,
        UnderLineSelected1,
        clkUnderLine1,
        BulletSelected1,
        clkBullet1,
        BackButton1,
        backTolibrary,
        warningTime3,
        clkAllTabs,
        assertContentAllTab,
        assertContinueLearning,
        assertContinueLearningContent,
        assertRecentlyPublished,
        assertRecentlyPublishedContent,
        collaboration,
        requestChengesPopUp,
        lessonPlanRequestChanges,
        commentbox,
        footerRequestChanges,
        selectContentType,
        contentTypeValue,
        assertBoard,
        assertMedium,
        assertClass,
        createNewBtn,
        limitSharingdrpdwn,
        assertTermsNcond,
        switchToClassicTheme,
        addImageQuestionSet,
        selectImageInQuesSet,
        clickImage,
        clickZoom,
        assertBorad,
        asseertMedim,
        assertClass1,
        slideDropDown,
        selectArrangeSequesnce,
        clickBoldLetter,
        sizeDropDown,
        assertErrorUploadingMessage,
        previewButtonInEditor,
        clkNxtSlide,
        clkClosePreview,
        assertInstruction,
        clkBoldQstn,
        assertQstnBold,
        clkBoldAns1,
        clkBoldAns2,
        assertBoldAns1,
        assertBoldAns2,
        clkItalicQstn,
        assertQstnItalic,
        clkItalicAns1,
        assertItalicAns1,
        clkItalicAns2,
        assertItalicAns2,
        clkUnderlineQstn,
        assertQstnUnderline,
        clkUnderlineAns1,
        assertUnderlineAns1,
        clkUnderlineAns2,
        assertUnderlineAns2,
        assertQstnBoldSub,
        assertBoldAnsSub,
        assertQstnItalicSub,
        assertItalicAnsSub,
        assertQstnUnderlineSub,
        assertUnderlineAnsSub,
        clkDropDownFontQstn,
        fontSizeSelectedForQstn,
        assertFontForQstn,
        clkDropDownFontAns1,
        fontSizeSelectedForAns1,
        assertFontForAns1,
        clkDropDownFontAns2,
        fontSizeSelectedForAns2,
        assertFontForAns2,
        assertScoreMsgeWhenDisplayScoreIsYes,
        selectFirstOption,
        clkNextButtonInPreviewWindow,
        clkSubmitButtonInPreviewWindow,
        assertDefaultdisplayscore,
        selectDisplayScoreAsNo,
        displayDropDown,
        clkSuperScript,
        assertSuperScriptQstn,
        clkSuperScriptAns1,
        assertSuperScriptAns1,
        clkSuperScriptAns2,
        assertSuperScriptAns2,
        clkSubScript,
        assertSubScriptQstn,
        clkSubScriptAns1,
        assertSubScriptAns1,
        clkSubScriptAns2,
        assertSubScriptAns2,
        clkScientificTextAns1,
        selScientificAns1,
        clkAddBtn,
        assertScientificSymbol1,
        clkScientificTextAns2,
        selScientificAns2,
        assertScientificSymbol2,
        clkSymbolOpt,
        clkLibOpt,
        clkAddImgeAns1,
        selectSplChar1,
        assertSCAns1,
        assertSCAns2,
        clkParagraphOpt1,
        clkHeadingOpt1,
        assertHeadingOpt1,
        clkParagraphOpt2,
        clkHeadingOpt2,
        assertHeadingOpt2,
        clkParagraphOpt3,
        clkHeadingOpt3,
        assertHeadingOpt3,
        clkHeadingOpt6,
        assertHeadingOpt6,
        clkHeadingOpt5,
        assertHeadingOpt5,
        clkPreview,
        clkAlignOptAns1,
        clkCenterAlignment,
        clkAlignOptAns2,
        clkRightAlignment,
        assertCenterAlignment,
        assertRightAlignment,
        clkShowQFeedback,
        selectYesOptQFeedback,
        clkShowSolution,
        selectYesOptSolution,
        enterInstructions,
        chooseType,
        selectTextImage,
        enterSolField,
        assertInstBeforeEdit,
        assertQstnBeforeEdit,
        assertAnsBeforeEdit,
        assertSolBeforeEdit,
        clkBtnDone,
        clkClose,
        selSection,
        clkGK,
        clkEditBtn,
        QuestionClear,
        Ans1Clear,
        solClear,
        assertInstAfterEdit,
        assertQstAfterEdit,
        assertAnsAfterEdit,
        assertSolAfterEdit,
        clkChildSection,
        clkRootNodeInquestion,
        tableDrpdwn1,
        tableDrpdwn2,
        tableDrpdwn3,
        clickTableRc,
        numberedList,
        numberedList2,
        numberedList3,
        clkImageIconQstn,
        clkImageIconAns,
        assertQstnImag,
        assertAnsImage,
        assertBoardFilter,
        asertAddChildDisabled,
        clkZoomOut,
        assertLandscap,
        clkMobIcon,
        assertPortrait,
        assertDataRatio,
        clkDesktopIcon,
        clkImageIconAns2,
        clkZommInPopup,
        assertOnZoomIn,
        selSubConfirmationEnable,
        selCorrectAns1,
        selWrongAns2,
        selWrongAns3,
        clkZommOutPopup,
        assertOnZoomOut,
        selVideo,
        choosevideo1,
        btnAdd,
        resourceSubmitButton,
        assertTenanatFirstInfo1,
        assertTenanatFirstInfo2,
        assertTenanatFirstInfo3,
        assertTenanatFirstSubjectInfo1,
        titleCard1,
        titleCard2,
        assertBoardVisible,
        assertMediumVisible,
        assertClassVisible,
        titleCourseCard1,
        titleCourseCard2,
        assertBmcCourse,
        videoButton,
        interactiveButton,
        docsButton,
        Allbtn,
        clkChapterUnit,
        clkLicenceDropDown,
        assertAuthor,
        assertCreatedOn,
        assertUpdatedOn,
        assertlicenceTerms,
        assertDescriptionLink,
        assertCopyRights,
        assertSolution,
        selAddedCollaborator,
        clkBulletQuestion,
        clkBulletAns1,
        clkBulletAns2,
        assertBulletList1Question,
        assertBulletList2Question,
        assertBulletList1Ans1,
        assertBulletList2Ans1,
        assertAnswer2Image,
        selectSolImgForMCQ,
        assertSolForMCQ,
        resoCardclkForOldTheme,
        assertRichTextEditor,
        assertNameDisable,
        assertDescDisable,
        assertTextFieldDisable,
        dropdownSummeryType,
        selDurAndScore,
        assertCoutMaxOnQset,
        selectMaxQuesDropdown,
        selectMaxQuestions,
        clkTableIcon1,
        assertQuestion,
        clkBulletIcon2,
        clkTableIcon3,
        assertAnswer,
        clkChooseType,
        clkTxtImage,
        clkBulletIcon3,
        clkTableIcon5,
        assertSolution1,
        assertSelectedNumOfQstns,
        clkBulletIcon,
        assertBulletIcon,
        clkBulletIcon2,
        assertBulletIcon2,
        clkTableIcon1,
        clkTableIcon2,
        clkTableIcon3,
        clkTableIcon4,
        rowNumOption1,
        rowNumOption2,
        rowNumOption3,
        rowNumOption4,
        rowNumOption5,
        assertTblOpt1,
        assertTblOpt2,
        clkMcqHeadingOpt6,
		clkParagraphOpt4,
		clkMcqHeadingOpt1,
		assertMcqHeadingOPt1,
		clkParagraphOpt5,
		clkMcqHeadingOpt5,
		assertMcqHeading5,
		assertMcqParagraph1,
		clkMcqHeadingOpt2,
		assertMcqHeadingOpt2,
		clkMcqHeadingOpt3,
		assertMcqHeading3,
		clkMcqHeadingOpt4,
		assertMcqHeadingOpt3,
        assertParagraph,
        assertConversationFlow,
        assertTnCOnConversationFlow,
        assertVerifyHeadingOpt1,
        assertVerifyHeadingOpt2,
        clickHeadingOption3,
        assertVerifyHeading3,
        clkHeadingOpt4,
        assertHeadingOpt4,
        btnUploadAndUse,
        btnUploadFromComputer,
        btnUploadAndUse2,
        assertQuestionImgUploaded,
        assertAns1ImgUploaded,
        assertAns2ImgUploaded,
        selectSummeryType,
        selectRadioButton1,
        selectRadioButton2,
        selectScoreAndDuration,
        asertAnsIconYes,
        selectNoOptSolution,
        clkAddOption,
        clkMcqHeading3,
        assertMcqHeadingopt4,
        mcqSelHeading5,
        assertMCQHeadingOpt5,
        clkShowAns1,
        enterMarks,
        assertPreviewMarks,
        clkSubmitConfirmation,
        submitConfirmationEnable,
        assertCorrectAns,
        assertWrongAns,
        assertSkippedAns,
        assertQuestionImg,
        assertAns1Img,
        assertAns2Img,
        assertTotalQuestions,
        assertQuestionsAnswered,
        assertQuestionsSkipped,
        assertQuestionsNotViewed,
        enterSection,
        clkSection1,
        clkSection2,
        clkRootNode,
        assertInstructionFromRootNode,
        assertCorrectAnsSecA,
        assertCorrectAnsSecB,
        assertWrongAnsSecA,
        assertWrongAnsSecB,
        assertSkippedAnsSecA,
        assertSkippedAnsSecB,
        assetSecAOnSubmitPage,
        assrtSecBOnSubmitPage,
        assertQuestionNo1,
        assertQuestionNo2,
        assertQuestionNo3,
        assertSectionAandProgressBarActive,
        assertSectionBandProgressBarActive,
        assertSectionAandQuestion1Indicator,
        assertSectionAandQuestion2Indicator,
        assertSectionAandQuestion3Indicator,
        clkReview,
        assertQuestion1,
        NavigateSubmitPage,
        assertSubmitConfirmation,
        assertNextButtonOnQuestionSet,
        assertPrevButtonOnQuewstionSet,
        assertBtnColor,
        assertInstruction1,
        assertInstructionUnderline,
        assertAttempts,
        clkMaxAttempt,
        assertReachedMaxLimit,
        assertCloseBtn,
        assertInstBold,
        assertInstItalic,
        clkShuffleCheckBox,
        validateShuffleMessagePopUp,
        clkSelAns2,
        clkSelAns3,
        asserTotalQuestionsAfterMax,
        clkPublishedContentCard,
        firstContentCard,
        assertTitleLeft,
        assertTitleCenter,
        asserrtTitleRight,
        assertQuestion1Left,
        assertQuestion1Center,
        assertQuetion1Right,
        assertLiveQuestion1,
        assertLiveQuestion2,
        clkOpt1Quest2,
        clkOpt1Quest3,
        assertQuestionsAnswered1,
        clkAddQuestion,
        clkAddedQuestion,
        assertselectedQuestion,
        assertAppliedBoardFilterInAllTabs,
        assertAppliedMediumFilterInAllTabs,
        assertAppliedSubjectFilterInAllTabs,
        selectMax3Questions,
        selCorrectAnswer1,
        selCorrectAnswer2,
        selCorrectAnswer3,
        assertSumOfBothSec,
        assertTimer,
        assertTimerDisplay,
        assertTimerActive,
        selCorrectAnswer4,
        selCorrectAnswer5,
        enterQuestionTitle,
        clkCopyQuestion,
        submitButtonInEditQuestion,
        clickFunctions,
        clickEquations,
        clickEquationDropdwn,
        selectEquationDropDownValue,
        selectSinTheta,
        selectCosTheta,
        addButton,
        selectTanTheta,
        clickFunctions2,
        clickFunctions3,
        assertAnsSelected,
        assertCompleteConsume,
        assertAllQuestions,
        assertAllQuestionConsum,
        clkCourse,
        assertTitle,
        assertByOrg,
        assertMaxSelectedQuestions,
        selectScore,
        selectImageAfterAdding,
        resizeOne,
        assertmaxlength,
        addVedioInResource,
        addAudioInResource,
        clickSelectVedio,
        clickSelectedVideo,
        changeTimeout,
        selectOptionOne,
        selectSecondOption,
        assertImageonCard,
        assertTitleOnCard,
        assertSubjectOnCard,
        assertPublisherOnCard,
        assertDataOnCard,
        clkNextAfterOpen,
        clkNextButton,
        clkOption1,
        clkAddCertificate,
        clkbtnAddCertificate,
        assert100PDisable,
        assertPlusSign,
        filterSearch1,
        clkAddCollaborator,
        clkAdd,
        clkbtnDone1,
        clkMngCollab,
        clkRemove,
        sectionGK1,
        navigateToPrevious,
        assertTimeOut,
        replayButton,
        selectOptionOneSlideOne,
        closeIconPopup,
        nextButtonPopup,
        selBoardValueOnlyRootNode,
        assertTextCenter,
        clkQuestionAlign,
        clkQuestionCenter,
        assertInstructionsEntered,
        selNoOption,
        selMaxQuestionAs1,
        selectMaxQuesDropdownRootNode,
        assertAfterCreateQuestion,
        checkUncheck1,
        assertAfterUncheck1,
        checkUncheck2,
        checkUncheck3,
        checkUncheck4,
        checkUncheck5,
        assertAfterCheck4,
        copyQstn,
        assertCopiedQuestion,
        boardInQuestion1,
        selectCBSEQue1,
        mediumInQuestion1,
        selectEnglishFITB1,
        clkDeleteQstn,
        assertQuestionCreated,
        btnConfirmDel,
        resoureEditorCloseIcon,
        assertEditIconInResouceEditor,
        selectAudioOption,
        assertAudioForQuestion,
        assertAudioForAnswer,
        copyQuestion,
        clickAnswerAudioIcon,
        uploadBtn,
        uploadImage,
        uploadAndUseBtn,
        createFTB,
        clkFTBSelect,
        clkbtnRefresh,   
        clkAddText,
        typeInstruction,
        clkPrevButtonInPreviewWindow,
        assertBlankPageFTB,
        assertBlankPageFTB3,
        assertBlankPageMCQ,
        assertBlankPageReOrdering1,
        assertBlankPageReOrdering2,
        assertBlankPageReArranging,
        clkCloseIcon,
        assertQuestionInTheList,
        clkEditQuestion,
        assertEditPage,
        assertShowingResultsText,
        assertDigitalTextbookByQR,
        assertCourseByQR,
        assertAddedQuestion,
    }
};
module.exports = {
    resource
}
