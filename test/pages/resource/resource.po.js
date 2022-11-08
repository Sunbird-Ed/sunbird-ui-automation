//const { element } = require("protractor");

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
    var addQuestionSet = element(by.xpath("//a[@data-content='Add Question Set']"));
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
    var clickRequestChanges = element(by.xpath("//body//*[contains(text(),'Request ')]"));
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
    var headerLibrary = element(by.xpath("//*[contains(@class,'textbooks')]"));
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

    var addbutton = element(by.xpath("(//button[contains(text(),'Add')])[3]"));

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
    var validateScoreResult = element(by.xpath("//li[@class='ps-score-data endpage-score ps-score-data-padding-top ng-binding']"));

    var Published = element(by.xpath(" //a[contains(.,'Published ')]"));
    var firstCourseCardContentName = element(by.xpath("//*[@class='sliderCardHeading text-cencapitalize']"));
    var deleteButton = element(by.xpath("(//i[@class='trash large icon'])[1]"));
    var yesButtonPopup = element(by.xpath("//button[contains(.,'Yes')]"));
    var messageBox = element(by.xpath("//strong[@class='iziToast-title slideIn']"));
    var allMyContent = element(by.xpath("//a[contains(.,'All My Content ')] "));
    var clickBoard = element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]"));
    var selectBoard = element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]//following::div[2]"));
    var clickMedium = element(by.xpath("//div[contains(text(),'Select Medium')]"));
    var selectMedium = element(by.xpath("//div[contains(text(),'Select Medium')]//following::div[2]"));
    var clickclass = element(by.xpath("//div[contains(text(),'Select Class')]"));
    var SelectClass = element(by.xpath("//div[contains(text(),'Select Class')]//following::div[2]"));
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
    var clickMcQFirstAnswer = element(by.xpath("//div[@class='option-text-container text-only']"));
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
    var ddSendforreview = element(by.xpath("//div[@class='ui button text-part popup-item']//following::i[2]//parent::div"));
    var sendForReviewInShareViaLink = element(by.xpath("//div[contains(@data-content,'Send for review')]"));
    var linkLimitedSharing = element(by.xpath("//div[contains(text(),'Limited sharing')]"));
    var linkShareViaLink = element(by.xpath("//a[contains(text(),' Shared via link ')]"));
    var resourceInFirstColumn = element(by.xpath("//div[@class='cardImageText center aligned ']"));
    var btnEditDetails = element(by.xpath("//span[contains(text(),'Edit Details')]//parent::a"));
    var labelLicense = element(by.xpath("//label[contains(text(),'LICENSE')]//following::div"));
    var linkCredit = element(by.xpath("//div[contains(text(),'About the content')]//following::i"));
    var labelLicenceTerms = element(by.xpath("(//div[contains(@class,'content-metadeta__text fnormal')])[1]"));
    var labelMoreDetails = element(by.xpath("(//div[contains(@class,'content-metadeta__text fnormal')])[2]"));
    var labelCopyRight = element(by.xpath("(//div[contains(@class,'content-metadeta__text fnormal')])[3]"));
    var iconPreview = element(by.xpath("(//div[@class='ui button text-part popup-item'])[2]"));
    var nextIconInPreviewBox = element(by.xpath("(//a[@class='nav-icon nav-next'])[2]"));
    var btnCloseInPreview = element(by.xpath("//h5[@class='ui right floated basic icon circular button  mouse-pointer']"));
    var ddSelectlanguage = element(by.xpath("//i[@class='dropdown icon']"));
    var labelEnglish = element(by.xpath("(//span[contains(text(),'English')])[1]"));
    var labelMyCourses = element(by.xpath("//h4[contains(text(),'courses')]"));
    var btnSlideNext = element(by.xpath("//button[contains(@class,'slick-next slick-arrow')]"));
    var btnViewAll = element(by.xpath("//button[contains(text(),' View All ')]"));
    var btnPagination = element(by.xpath("//a[contains(@class,'sb-item')]"));
    var imageCard3 = element(by.xpath("//div[@class='cardImageText center aligned ']"));
    var revieDialogClose = element(by.xpath("//span[contains(text(),'Reviewer Suggestions')]//following::i"));
    var clkUploRequestChanges = element(by.xpath("//button[@tabindex='0']"));
    var clkRejectUploadsc = element(by.xpath("//label[contains(text(),'Language is NOT simple to understand')]//following::button"));
    var clkFeaturedCourseViewAll = element(by.xpath("//span[contains(text(),' courses')]//following::button[1]"));
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
    var reviewComment1 = element(by.xpath("//textarea[@id='review-comments']"));
    var reviewerSuggestionColl = element(by.xpath("//div[@data-title='View review comments']"));
    var reviewerSuggestionTitleColl = element(by.xpath("//textarea[@name='rejectedComment']"));
    var revieDialogCloseColl = element(by.xpath("//textarea[@name='rejectedComment']//following::button"));


    var clkBoardDdAllTabs = element(by.xpath("//label[contains(text(),'Board')]//following::div[1]"));
    var sltBoardDdAllTabs = element(by.xpath("//label[contains(text(),'Board')]//following::span[1]"));

    var clkMediumDdAllTabs = element(by.xpath("//label[contains(text(),'Medium')]//following::div[1]"));
    var sltMediumDdAllTabs = element(by.xpath("//label[contains(text(),'Medium')]//following::span[1]"));
    var sltMedium2DdAllTabs = element(by.xpath("//label[contains(text(),'Medium')]//following::span[3]"));

    var clkClassDdAllTabs = element(by.xpath("//label[contains(text(),'Class')]//following::div[1]"));
    var sltClassDdAllTabs = element(by.xpath("//label[contains(text(),'Class')]//following::span[1]"));
    var sltClass2DdAllTabs = element(by.xpath("//label[contains(text(),'Class')]//following::span[3]"));

    var clkSubjectDdAllTabs = element(by.xpath("//label[contains(text(),'Subject')]//following::div[1]"));
    var sltSubjectDdAllTabs = element(by.xpath("//label[contains(text(),'Subject')]//following::span[2]"));
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
    var assertPreferencePopup = element(by.xpath("//*[contains(text(),'Browse SUNBIRD Library to find relevant content based on your preferences (Board, Medium and Class)')]"));
    var clkHome = element(by.xpath("//*[contains(text(),'Home')]"));
    var imageCard4= element(by.xpath("(//div[contains(@class,'UpReviewHeader')])"));
    var browseBySubj = element(by.xpath("//div[contains(text(),'Browse by Subjects')]"));
    var featured = element(by.xpath("//div[contains(text(),'Featured')]"));
    var browseByCategories = element(by.xpath("//div[contains(text(),'Browse by Categories')]"));
    var browseByBoard = element(by.xpath("//div[contains(text(),'Browse by Board')]"));
    var browseByAudience = element(by.xpath("//div[contains(text(),'Browse by Audience')]"));
    var assertCbseBoard = element(by.xpath("//label[contains(text(),'Cbse/ncert')]"));
    var assertIgotBoard = element(by.xpath("//label[contains(text(),'Igot-health')]"));
    var assertBoardSubContnet = element(by.xpath("//div[contains(text(),'Browse by Subjects')]//following::div[@class='item'][1]"));
    var assertCategSubContent = element(by.xpath("//div[contains(text(),'Browse by Categories')]//following::div[@class='item'][1]"));
    var clkExploreTab = element(by.xpath("//*[contains(text(),' Explore ')]"));
    var assertAudeinceType = element(by.xpath("//div[contains(text(),'Browse by Audience')]//following::label[contains(text(),'School Head Or Officials')]"));
    var assertAudeinceType2 = element(by.xpath("//div[contains(text(),'Browse by Audience')]//following::label[contains(text(),'Parent/guardian')]"));
    var clkBackInbrowseBySubjectContentCard = element(by.xpath("//div[contains(text(),'Explore economics from all the boards and mediums on  SUNBIRD')]//preceding::button[1]"));
    var clkBackInbrowseByBoardInExplore = element(by.xpath("//div[contains(text(),'Explore cbse/ncert from all the boards and mediums on  SUNBIRD')]//preceding::button[1]"));
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
    var sltMediuFilter1 = element(by.xpath("//label[contains(text(),'Medium')]//following::span[5]"));
    var sltMediuFilter2 = element(by.xpath("//label[contains(text(),'Medium')]//following::span[6]"));
    var ClkClassFilter = element(by.xpath("//label[contains(text(),'Class')]//following::div[2]"));
    var sltClassFilter1 = element(by.xpath("//label[contains(text(),'Class')]//following::span[5]"));
    var sltClassFilter2 = element(by.xpath("//label[contains(text(),'Class')]//following::span[6]"));
    var clkDigitalTxtBooks = element(by.xpath("//a[contains(text(),'Digital textbooks')]"));
    var clkTVClasses = element(by.xpath("//a[contains(text(),'TV classes')]"));
    var clkCourseHeader = element(by.xpath("//a[contains(text(),'Courses')]"));
    var MediumsAsertSelectedOption = element(by.xpath("//label[contains(text(),'Medium')]//following::span[contains(text(),',')]"));
    var ClassAsserSelctedOption = element(by.xpath("//label[contains(text(),'Medium')]//following::span[contains(text(),',')][1]"));
    var clkResetBtn = element(by.xpath("//button[contains(text(),'Reset')]"));
    var clkViewAllNcertSec = element(by.xpath("//*[contains(text(),' From NCERT ')]/following:: button[contains(text(),' View All')][1]"));
    var aseertCourseData = element(by.xpath("//*[contains(text(),'From NCERT')]//following::div[contains(text(),'Course')]"));
    var assertTextBookData = element(by.xpath("//*[contains(text(),'From NCERT')]//following::div[contains(text(),'TextBook')]"));
    var assertEnrollEndDate = element(by.xpath("//*[contains(text(),'Last date for enrolment:')]"));
    var QuestionName = element(by.xpath("//input[@placeholder='Enter Name']"));
    var enterDescription = element(by.xpath("//textarea[@placeholder='Enter Description']"));
    var enterInstruction = element(by.xpath("//div[@contenteditable='true']"));
    var AdditionalCategory = element(by.xpath("//sb-caret-down[@class='caret-down']")); 
    var selAdditionalCategory = element(by.xpath("//label[contains(text(),'Concept Map')]"));
    var selBoard = element(by.xpath("//select[@id='sb-dropdown']"));
    var selBoardValue = element(by.xpath("//option[text()='State (Tamil Nadu)']"));
    var dropdownMedium = element(by.xpath("//select[@id='sb-dropdown']//following::select[1]"));
    var selectMedium3 = element(by.xpath("//option[text()='English']"));
    var dropDownClass = element(by.xpath("//option[text()='Select Class ']"));
    var selectClass = element(by.xpath("//option[text()='Class 1']"));
    var dropDownSubject = element(by.xpath("//sb-icon-dropdown[@class='dropdown-icon']"));
    var selectSubject1 = element(by.xpath("//option[text()='Mathematics']"));
    var dropDownAudiene = element(by.xpath("//sb-icon-dropdown[@class='dropdown-icon']"));
    var selectAudience = element(by.xpath("//option[text()='Student']"));
    var maxHour = element(by.xpath("//input[@name='hour']"));
    var maxHourValue = element(by.xpath("//option[@value='01']"));
    var Qtype = element(by.xpath("//input[contains(@class,'sb-textbox')]"));
    var createNew1 = element(by.xpath("//button[contains(@class,'sb-btn sb-btn-normal sb-btn-primary mt-10 mr-30')]"));
    var createNew2 = element(by.xpath("//i[@class='icon plus']"));
    var McqOptionInput22 = element(by.xpath("(//div[@aria-label='Rich Text Editor, main'])[3]"));
    var sltCorrectAnswer1 = element(by.xpath("//label[@for='answer_1']"));
    var previewIcon1 = element(by.xpath("//i[contains(@class,'icon eye ng-star-inserted')]"));
    var alertTimeOn = element(by.xpath("//span[text()='60:00']"));
    var alertTimeOn1 = element(by.xpath("//span[text()='2:00']"));
    var nextSlideIcon = element(by.xpath("//div[@title='next slide']"));
    var warningTime1 = element(by.xpath("//span[contains(text(),'0:5')]"));
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
        saveIcon,
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
        learningOutcome,
        selectLearningOutcome,
        submitButtonInQuestion,
        nextButton,
        questionSetTitle,
        addbutton,
        saveIcon,
        closeButtonMsg,
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
    }






};
module.exports = {
    resource
}