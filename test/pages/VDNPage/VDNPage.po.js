const { element, by } = require("protractor");

var VDNPage = () => {

    var clkMyProject = element(by.xpath("//a[text()='My Projects']"));
    var btnCreation = element(by.xpath("//button[text()=' Create New Project']"));
    var selectOpt1 = element(by.xpath("//label[text()='Get content targeted to Textbooks, Courses or other collections']"));
    var selectOpt3 = element(by.xpath("//label[text()='Get individual content not targeted to any collection']"));
    var selectOpt2 = element(by.xpath("//label[text()='Get content targeted to Question Sets']"));
    var btnClkNext = element(by.xpath("//button[text()='Cancel']//preceding::button[1]"));
    var enterProjectName = element(by.xpath("//input[@placeholder='Enter project name']"));
    var enterProjectDesc = element(by.xpath("//textarea[@placeholder='Enter project description']"));
    var nominationEndDate = element(by.xpath("//input[@formcontrolname='nomination_enddate']"));
    var shortlistEndDate = element(by.xpath("//input[@formcontrolname='shortlisting_enddate']"));
    var contributionEndDate = element(by.xpath("//input[@formcontrolname='content_submission_enddate']"));
    var projectEndDate = element(by.xpath("//input[@formcontrolname='enddate']"));
    var btnNext = element(by.xpath("//button[text()='Next']"));
    var btnSaveAsDraft = element(by.xpath("//button[text()='Save as Draft']"));
    var selectTargetCollection = element(by.xpath("//sui-select[@formcontrolname='target_collection_category']"));
    var Course = element(by.xpath("//span[text()='Course']"));
    var btnPublishProject = element(by.xpath("//button[text()='Publish Project']"));
    var selectFirstCollection = element(by.xpath("//th[text()='Course Unit']//following::input[@name='checkitem'][1]"));
    var selectFirstCollection1 = element(by.xpath("(//td[@class='collapsing'])[1]"));
    var clkAllMyProjects = element(by.xpath("//span[text()='All Projects']"));
    var fromOrgOnly = element(by.xpath("//label[text()='From your organization only']"));
    var skip2levelReview = element(by.xpath("//label[text()='Skip two - level Review']"));
    var selQuestionSet = element(by.xpath("//span[text()='Practice Question Set']"));
    var seleTextBook = element(by.xpath("//span[text()='eTextbook']"));
    var selExplainitionContent = element(by.xpath("//span[text()='Explanation Content']"));
    var selLearningResource = element(by.xpath("//span[text()='Learning Resource']"));
    var selOldQuestionSet = element(by.xpath("//span[text()='Practice Question Set']"));
    var selTeacherResource = element(by.xpath("//span[text()='Teacher Resource']"));
    var clkOutContentType = element(by.xpath("//label[text()='Content Type(s) ']"));
    var assertNominationTab = element(by.xpath("//a[text()='Nominations ']"));
    var fromSetOfSelContributors = element(by.xpath("//label[text()='From a selected set of contributors']"));
    var clkSelContributors = element(by.xpath("//span[text()='Select Contributors']"));
    var dropDownContrType = element(by.xpath("//button[contains(text(),'Search')]//following::sui-select"));
    var enterNameOrOrg = element(by.xpath("//input[@placeholder='Search by user name/ Organisation name']"));
    var searchBtn = element(by.xpath("//button[contains(text(),'Search')]"));
    var selIndividualType = element(by.xpath("//span[text()='Individual']"));
    var selSearchedContributer = element(by.xpath("//th[contains(text(),'Type')]//following::div[1]"));
    var btnSave = element(by.xpath("//button[text()='Save']"));
    var assertContributersAdded = element(by.xpath("//span[contains(text(),'contributor(s) added')]"));
    var assertDefaultIndApproved = element(by.xpath("//div[text()=' user ']//following::span[text()=' Approved ']"));
    var assertDefaultOrgApproved = element(by.xpath("//div[text()=' Sunrise ']//following::span[text()=' Approved ']"));
    var clkMyProjectsOnIndContributor = element(by.xpath("//span[text()='My Projects']"));
    var digitalTextBook = element(by.xpath("//span[text()='Digital Textbook']"));
    var selectFirstTextBook = element(by.xpath("(//td[@class='collapsing'])[1]"));
    var assertPreApproved = element(by.xpath("//*[@class='sb-table-body']"));
    var btnSelectContentTypes = element(by.xpath("//button[contains(text(),'Select Content Types')]"));
    var checkBoxContentType1 = element(by.xpath("//div[text()=' Select Content Types ']//following::div[2]"));
    var btnSubmitContentType = element(by.xpath("//button[contains(text(),'Submit')]"));
    var selectedContentTypeSuccess = element(by.xpath("//strong[text()='Selected Content type(s) saved successfully']"));
    var checkBoxUploadSample = element(by.xpath("//button[text()='Upload Sample']//preceding::div[1]"));
    var btnNominate = element(by.xpath("//button[text()='Nominate']"));
    var assertNominationSent = element(by.xpath("//strong[text()='Nomination sent']"));
    var openUserForAction = element(by.xpath("//div[text()=' user ']//following::button[1]"));
    var btnAccept = element(by.xpath("//button[contains(text(),'Accept')]"));
    var assertNominatiopSuccess = element(by.xpath("//strong[text()='Nomination updated successfully...']"));
    var contentPlaylistInTargetCollection = element(by.xpath("//span[text()='Content Playlist']"));
    var courseInTargetCollection = element(by.xpath("//span[text()='Course']"));
    var questionPaperInTargetCollection = element(by.xpath("//span[text()='Question Paper']"));
    
    var yesBtn = element(by.xpath("//button[contains(text(),'Yes')]"));
    var closeDeletehamburgerMenuOption = element(by.xpath("(//i[@data-tooltip='Modify'])[1]//following::div[1]"));
    var delteOption = element(by.xpath("(//i[@data-tooltip='Delete'])[1]"));
    var closeOption = element(by.xpath("(//i[@data-tooltip='Close'])[1]"));
    var updateButton = element(by.xpath("(//button[text()='Update'])[1]"));
    var editIcon = element(by.xpath("(//i[@data-tooltip='Modify'])[1]"));
    var projectScopeTab = element(by.xpath("(//div[contains(text(),' Project Scope ')])"));
    var toastMessage = element(by.className('iziToast-texts'));
    var openBtn = element(by.xpath("(//button[contains(text(),'Open')])[1]"));
    var closeButton = element(by.xpath("(//a[contains(text(),'Close ')])[1]"));
    var assertCollectionType = element(by.xpath("//label[contains(text(),'Content Type(s)')]//following::a[1]"));
    var assertNomination = element(by.xpath("//a[contains(text(),'Nominations')]"));
    var assertAssignUsers = element(by.xpath("//a[contains(text(),'Assign users to project ')]"));
    var assertContributionDashboard = element(by.xpath("//a[contains(text(),' Contribution Dashboard ')]"));
    var assertReports = element(by.xpath("//a[contains(text(),' Reports ')]"));
    var skipCheckbox = element(by.id("defaultContributeOrgReview"));
    var selectContentType = element(by.xpath("//sui-multi-select[@formcontrolname='targetPrimaryCategories']"));
    var courseAssessment = element(by.xpath("//span[text()='Course Assessment']"));
    var Course = element(by.xpath("//span[text()='Course']"));
    var selectMedium = element(by.xpath("//li[text()='Select Medium']"));
    var selectGrade = element(by.xpath("//div[text()='Select Grade']"));
    var selectSubject = element(by.xpath("//div[text()='Select Subject']"));
    var btnAply = element(by.xpath("//button[text()=' Apply ']"));
    //var selectFirstCollection = element(by.xpath("//th[text()='Course Unit']//following::input[@name='checkitem'][1]"));
    var btnYes = element(by.xpath("//button[text()='Yes']"));
    var assertToastMsg = element(by.xpath("//b[text()='Project published successfully!']"));
    //var selSunriseContributer = element(by.xpath("//label[text()='Sunrise']//following::a[text()='Contribute'][1]"));
   // var clkAllMyProjects = element(by.xpath("//span[text()='All Projects']"));
    var fromOrgOnly = element(by.xpath("//label[text()='From your organization only']"));
    var skip2levelReview = element(by.xpath("//label[text()='Skip two - level Review']"));
    var selQuestionSet = element(by.xpath("//span[text()='Practice Question Set']"));
    var selExplainitionContent = element(by.xpath("//span[text()='Explanation Content']"));
    var selLearningResource = element(by.xpath("//span[text()='Learning Resource']"));
    //var selOldQuestionSet = element(by.xpath("//span[text()='Old Practice Question Set']"));
    //var clkOutContentType = element(by.xpath("//label[text()='Content Type(s) ']"));
    var fromSetOfSelContributors = element(by.xpath("//label[text()='From a selected set of contributors']"));
    var clkSelContributors = element(by.xpath("//span[text()='Select Contributors']"));
    var dropDownContrType = element(by.xpath("//button[contains(text(),'Search')]//following::sui-select"));
    var enterNameOrOrg = element(by.xpath("//input[@placeholder='Search by user name/ Organisation name']"));
    var searchBtn = element(by.xpath("//button[contains(text(),'Search')]"));
    var selIndividualType = element(by.xpath("//span[text()='Individual']"));
    var selSearchedContributer = element(by.xpath("//th[contains(text(),'Type')]//following::div[1]"));
    var btnSave = element(by.xpath("//button[text()='Save']"));
    var assertContributersAdded = element(by.xpath("//span[contains(text(),'contributor(s) added')]"));
    var assertDefaultIndApproved = element(by.xpath("//div[text()=' user ']//following::span[text()=' Approved ']"));
    var assertDefaultOrgApproved = element(by.xpath("//div[text()=' Sunrise ']//following::span[text()=' Approved ']"));
    var clkMyProjectsOnIndContributor = element(by.xpath("//span[text()='My Projects']"));
    var assertPreApproved = element(by.xpath("//*[@class='sb-table-body']"));
   // var btnSelectContentTypes = element(by.xpath("//button[contains(text(),'Select Content Types')]"));
    var checkBoxContentType1 = element(by.xpath("//div[text()=' Select Content Types ']//following::div[2]"));
    var btnSubmitContentType = element(by.xpath("//button[contains(text(),'Submit')]"));
    var selectedContentTypeSuccess = element(by.xpath("//strong[text()='Selected Content type(s) saved successfully']"));
    var checkBoxUploadSample = element(by.xpath("//button[text()='Upload Sample']//preceding::div[1]"));
    var btnNominate = element(by.xpath("//button[text()='Nominate']"));
    var assertNominationSent = element(by.xpath("//strong[text()='Nomination sent']"));
    var openUserForAction = element(by.xpath("//span[contains(text(),' Pending ')]//following::button[1]"));
    var btnAccept = element(by.xpath("//button[contains(text(),'Accept')]"));
    var assertNominatiopSuccess = element(by.xpath("//strong[text()='Nomination updated successfully...']"));
    var addRecogDesc = element(by.xpath("//textarea[@placeholder='Add description']"));
    var contentPlayList = element(by.xpath("//span[text()='Content Playlist']"));
    var selMediumEnglish = element(by.xpath("(//span[text()='English'])[3]"));
    var selectGradeClass1 = element(by.xpath("//span[text()='Class 1']"));
    var selectSubjectEnglish = element(by.xpath("(//span[text()='English'])[4]"));
    var selectFirstContentPlaylist = element(by.xpath("//th[contains(text(),'Playlist Unit')]//following::div[1]"));
    var btnReject = element(by.xpath("//button[text()='Reject']"));
    var enterReasonForReject = element(by.xpath("//textarea[@placeholder='Add comment']"));
    var assertReject = element(by.xpath("//div[text()=' user ']//following::span[text()=' Rejected ']"));
    var assignUsersToProjectTab = element(by.xpath("//a[text()='Assign users to project ']"));
    var selectRole = element(by.xpath("(//option[text()=' Select Role '])[1]"));
    var selectReviewer = element(by.xpath("(//option[text()=' REVIEWER '])[1]"));
    var assertRolesUpdated = element(by.xpath("//strong[text()='Roles updated...']"));
    var nominationEnabled = element(by.xpath("//em[contains(text(),'1 day to go')]"));
    var nominationStatus = element(by.xpath("(//div[text()='Shortlisting Nominations'])[1]//preceding::em[1]"));
    var clickModify = element(by.xpath("(//i[@data-tooltip='Modify'])[1]"));
    var btnUpdate = element(by.xpath("//button[text()='Update']"));
    var selectReviewer1 = element(by.xpath("(//option[text()=' REVIEWER '])[2]"));
    var enterSearchField = element(by.xpath("//input[@placeholder='Search...']"));
    var clkSearchbtn = element(by.xpath("//button[text()='Search']"));
    var digitalTextBooksTab = element(by.xpath("//a[contains(text(),'Digital Textbooks ')]"));
    var contributionDashBoardTab = element(by.xpath("//a[contains(text(),' Contribution Dashboard ')]"));
    var assertReportsTab = element(by.xpath("//a[contains(text(),' Reports ')]"));
    var nominationEndDateInDetails = element(by.xpath("(//div[contains(text(),'Nomination Submission')])[1]//following::div[1]"));
    var shortlistEndDateInDetails = element(by.xpath("(//div[contains(text(),'Shortlisting Nominations')]//following::div[1])[1]"));
    var contributionListEndDateInDetails = element(by.xpath("//div[contains(text(),'Contribution & Review')]//following::div[1]"));
    var projectEndDateInDetails = element(by.xpath("//div[contains(text(),'Project End Date')]//following::div[1]"));
    var clkFrameworkType = element(by.xpath("//div[contains(text(),'Select Framework')]"));
    var checkPracticeQuestion = element(by.xpath("//label[contains(text(),'Practice Question Set')]"));
    var checkeTextbook = element(by.xpath("//label[contains(text(),' eTextbook')]"));
    var checkExplanationContent = element(by.xpath("//label[contains(text(),'Explanation Content')]"));
    var checkLearningResource = element(by.xpath("//label[contains(text(),'Learning Resource')]"));
    var checkLearningPlanUnit = element(by.xpath("//label[contains(text(),'Lesson Plan Unit')]"));
    var clkUploadSample = element(by.xpath("//button[contains(text(),'Upload Sample')]"));
    var clkeTextbook = element(by.xpath("//div[@class='title']//span[contains(text(),'eTextbook')][1]"));
    var eTextbookCreateNewBtn = element(by.xpath("//button[contains(text(),'Create new ')]"));
    var slteTextbookContribute = element(by.xpath("//div[contains(text(),'eTextbook')]"));
    var clkContnue = element(by.xpath("//button[contains(text(),'Continue ')]"));
    var clkContentTypeDropdown = element(by.xpath("//label[contains(text(),'Content Type(s) ')]//following::i[@class='dropdown icon']"));
    var clkBrowseFile = element(by.xpath("//h5[contains(text(),'Drag and Drop Files here')]//following::div[1]"));
    var assertSuccesMsgFileUpload = element(by.xpath("//strong[contains(text(),'Content Successfully Uploaded...')]"));
    var clkSubmit = element(by.xpath("//button[@id='submitContent']"));
    var enterName = element(by.xpath("//input[@placeholder='Name']"));
    var enterCopyRight = element(by.xpath("//input[@placeholder='Enter Copyright and Year']"));
    var clickCheckBox = element(by.xpath("//input[@id='content-policy-check']"));
    var clkSubmitUploadForm = element(by.xpath("//input[@id='content-policy-check']//following::button[1]"));
    var assertContentSentReviewMsg = element(by.xpath("//strong[contains(text(),'Content sent for review')]"));
    var assertNoOfSamples = element(by.xpath("//label[contains(text(),'Number of Samples')]//following::dt[contains(text(),'1')]"));
    var clkBackBtn = element(by.xpath("//button[contains(text(),'Back')]"));
    var assertPendingStatusInNomincationTab = element(by.xpath("//span[contains(text(),'Pending')]"));
    var clkOpenInNomincationTab = element(by.xpath("//div[contains(text(),'Individual')]//following::button[contains(text(),'Open')]"));
    var clkViewSample = element(by.xpath("//button[contains(text(),'View Sample Content')]"));
    var assertTotalCountInContentTypeSec = element(by.xpath("//div[@class='title']//span[contains(text(),'eTextbook')][1]//following::span[contains(text(),'1')]"));
    var clkUploadedSampleContentType = element(by.xpath("//div[@class='chapter-lists--item']//following::span[1]"));
    var assertUploadSampleFile = element(by.xpath("//div[@id='viewerContainer']"));
    var assertContributionEndDate = element(by.xpath("(//div[contains(text(),'Contributions')]//following::div[1])[1]"));
    var assignUserTab = element(by.xpath("//div[text()='Assign users to project']"));
    var selectContributor = element(by.xpath("(//option[text()=' CONTRIBUTOR '])[1]"));
    var assertNominationEndDate = element(by.xpath("(//div[contains(text(),'Nomination End Date')])[1]//following::div[1]"));
    var assertShortlistEndDate = element(by.xpath("(//div[contains(text(),'Shortlisting Nominations')])[1]//following::div[1]"));
    var assertContributionAndReviewEndDate = element(by.xpath("(//div[contains(text(),'Contribution & Review')])[1]//following::div[1]"));
    var assertProjectEndDate = element(by.xpath("(//div[contains(text(),'Project End Date')])[1]//following::div[1]"));
    var enrollmentPopup = element(by.xpath("//div[text()=' Enroll as Contributor ']"));
    var assertOrgOption = element(by.xpath("//label[text()='Organisation']"));
    var assertIndOption = element(by.xpath("//label[text()='Individual']"));
    var assertCheckBox = element(by.xpath("//input[@id='tncAccepted']"));
    var openApprovedProject = element(by.xpath("(//span[text()='Approved'])[1]//following::button[1]"));
    var assertMyContent = element(by.xpath("//span[text()='My Content']"));
    var assertMyContentHeading = element(by.xpath("//h3[text()=' My Content']"));
    var assertTotalContributed = element(by.xpath("//div[text()=' Total Contributed ']"));
    var assertPublishedOnDiksha = element(by.xpath("//div[text()=' Published on DIKSHA ']"));
    var assertNotPublishedOnDiksha = element(by.xpath("//div[text()=' Not Published on DIKSHA']"));
    var selectBoth = element(by.xpath("(//option[text()=' BOTH '])[1]"));
    var clkManageUsers = element(by.xpath("//a[contains(text(),'Manage Users')]"));
    var assertUser = element(by.xpath("//div[contains(text(),'Test')]"));
    var clkOnChangeRole = element(by.xpath("//select[@labelfield='name']"));
    var changeToUserRole = element(by.xpath("//select[@labelfield='name']//following::option[1]"));
    var changeToAdminRole = element(by.xpath("//select[@labelfield='name']//following::option[2]"));
    var assertRoleUpdatedMessage = element(by.xpath("//strong[contains(text(),'Role updated successfully')]"));
    var selectCourseAssessment = element(by.xpath("//label[contains(text(),'Course Assessment')]"));
    var courseCreateNewButton = element(by.xpath("//span[contains(text(),' Course Unit1')]//following::button[1]"));
    var sltCourseAssessmentContribute = element(by.xpath("//div[contains(text(),'Course Assessment')]"));
    var radioButtonEcmlCreation1 = element(by.xpath("//div[contains(text(),'Mode of creation')]//following::label[contains(text(),'Create Interactive Content online')]"));
    var radioButtonEcmlCreation2 = element(by.xpath("//label[contains(text(),'Create Question Sets Online')]//preceding::input[@id='question']"));
    var addQuestionSet = element(by.xpath("//div[@id='toolbar']//following::i[@class='icon-questions icon custom-menu-icon']"));
    var sltQuestionCheckbox = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[1]"));
    var nextButton = element(by.xpath("//button[contains(text(),'Next')]"));
    var questionSetTitle = element(by.model("questionSetConfigObj.title"));
    var addQuestionSetButton = element(by.id("add-to-stage"));
    var savebutton = element(by.xpath("//div[contains(@id,'saveButton')]"));
    var closePopUpButton = element(by.xpath("//button[contains(text(),'Close')]"));
    var closeEditor = element(by.xpath("(//div[contains(@id,'saveButton')]//preceding::div[contains(@id,'closeButton')]//following::a)[1]"));
    var clkContnuePopUp = element(by.xpath("(//button[contains(text(),'Continue ')])[2]"));
    var addslide = element(by.xpath("(//div[@id='toolbar']//following::i[@class='caret down icon custom-icon dropdown-icon'])[1]"));
    var uploadContentButton = element(by.xpath("//button[contains(text(),'Upload Content')]"));
    var aproovePendingOpenButton = element(by.xpath("//span[contains(text(),'Approval Pending')]//following::button[1]"));
    var sendBackForCorrectionButton = element(by.xpath("//button[contains(text(),'Send back for corrections')]"));
    var publishButton = element(by.xpath("//button[contains(text(),'Publish')]"));
    var rejectButton = element(by.xpath("//button[contains(text(),'Reject')]"));
    var addComments = element(by.xpath("//*[contains(@placeholder,'Add comment')]"));
    var submitReviewbutton = element(by.xpath("//button[contains(text(),' Submit Review ')]"));
    var approvalStatus = element(by.xpath("(//th[contains(text(),'Status')]//following::span[contains(text(),' Approval Pending')]//..)[1]"));
    var approvalPendingCount = element(by.xpath("//div[contains(text(),' Approval Pending')]//child::span"));
    var approvedCount = element(by.xpath("(//div[contains(text(),' Approved')]//child::span)[1]"));
    var rejectedCount = element(by.xpath("(//div[contains(text(),' Rejected')]//child::span)[1]"));
    var correctionsPending = element(by.xpath("(//div[contains(text(),' Corrections pending')]//child::span)[1]"));
    var totalCount = element(by.xpath("(//div[contains(text(),'Total')]//child::span)[1]"));
    var selCherryContributer = element(by.xpath("//label[text()='Cherry']//following::a[text()='Contribute'][1]"));
    var submitForReviewContentButton = element(by.xpath("//button[contains(text(),'Submit for review')]"));
    var reviewContent = element(by.xpath("//button[text()='Review Content']"));
    var submitForApproval = element(by.xpath("//button[contains(text(),'Submit for Approval')]"));
    var createNewBtn = element(by.xpath("//button[contains(text(),'Create new ')]"));
    var saveBton = element(by.xpath("//button[contains(text(),'Save')]"));
    var backBtn = element(by.xpath("//button[contains(text(),'Back')]"));
    var assertDraftInTOC = element(by.xpath("//span[contains(text(),'Test')]//following::span[contains(text(),'Draft')]"));
    var kababMenu = element(by.xpath("//span[contains(text(),'Test')]//following::span[contains(text(),'Draft')]//following::div[1]"));
    var deleteDraft = element(by.xpath("//div[contains(text(),'Delete')]"));
    var bulkUploadContentBtn = element(by.xpath("//button[contains(text(),'Bulk upload content')]"));
    var editDetails = element(by.xpath("//a[contains(text(),'Edit details')]"));
    var assertContentSavedToastMessage = element(by.xpath("//strong[contains(text(),'Content updated successfully')]"));
    var clkForIndividualContentNotForAnyCollectionSection = element(by.xpath("//a[text()='For individual content not for any collection ']"));
    var clkOnBoard = element(by.xpath("//sb-icon-dropdown[@class='dropdown-icon']"));
    var selBoard = element(by.xpath("//option[text()='CBSE']"));
    var selEnglish = element(by.xpath("//label[text()='English']"));
    var selGrade = element(by.xpath("//span[text()='Class 1']"));
    var selSubject = element(by.xpath("//div[text()='Select Subject']//following::sui-select-option[1]"));
    var selClass = element(by.xpath("//span[contains(text(),'Class')]"));
    var clkUpload = element(by.xpath("//button[contains(text(),'Upload')]"));
    var clkSelectFile = element(by.xpath("//h5[text()='Drag and Drop files here']/following::div[1]"));
    var assertNominations = element(by.xpath("//a[contains(text(),'Nominations')]"));
    var openButton = element(by.xpath("//div[contains(text(),'Live')]//following::button[1]"));
    var skipReviewBtn = element(by.xpath("//label[text()='Skip two - level Review']"));
    var assertReviewEnabledMessageInProject = element(by.xpath("//span[contains(text(),'Skip two level review enabled')]"));
    var selectFrameWork = element(by.xpath("//div[contains(text(),'Select Framework')]"));
    var selectCPD = element(by.xpath("//span[contains(text(),'Continuous Professional Development')]"));
    var selectCBSE = element(by.xpath("//span[contains(text(),'CBSE')]"));
    var clickBoard = element(by.xpath("//option[contains(text(),'Select Board/Syllabus ')]"));
    var selectCBSE1 = element(by.xpath("//option[text()='CBSE']"));
    var selMedium = element(by.xpath("//option[contains(text(),'Select Medium')]"));
    var selectAll = element(by.xpath("//label[text()='Select All']"));
    var selectClass = element(by.xpath("//option[contains(text(),'Select Class')]"));
    var selSubj = element(by.xpath("//option[contains(text(),'Select Subject')]"));
    var selMed1 = element(by.xpath("//option[contains(text(),'English')]"));
    var selClass1 = element(by.xpath("//option[contains(text(),'Class 1')]"));
    var selSub1 = element(by.xpath("//option[contains(text(),'Accountancy')]"));
    var clkPendingOpen = element(by.xpath("//div[contains(text(),'Status')]//following::button[contains(text(),'Open')]"));
    var assertContents = element(by.xpath("//a[contains(text(),'Contents ')]"));
    var downloadContentDetailsBtn = element(by.xpath("//button[contains(text(),' Download Content details ')]"));
    var downloadNominationDetailsBtn = element(by.xpath("//button[contains(text(),' Download Nominations List')]"));
    var downloadContributionDetailsBtn = element(by.xpath("//button[contains(text(),' Download Contribution Details ')]"));
    var termsAndConditionsCheckBox = element(by.xpath("//label[contains(text(),'I understand and accept the ')]"));
    var assertEnrollmentSuccessMsg = element(by.xpath("//strong[contains(text(),'Enrolment is succesfully done...')]"));
    var btnCreateNew = element(by.xpath("(//button[contains(text(),'Create new ')])[1]"));
    var assertSample = element(by.xpath("//a[text()='Content Details']"));
    var continueBtn = element(by.xpath("//button[text()=' Continue ']"));
    var openSample = element(by.xpath("//button[text()='Open']"));
    var assertSampleTitle = element(by.xpath("//div[text()='sample1 ']"));
    var btnBack = element(by.xpath("//button[contains(text(),'Back')]"));
    var assertContributingOrganisation = element(by.xpath("//th[contains(text(),'Contributing Organisation')]"));
    var assertYourOrganisation = element(by.xpath("//th[contains(text(),'Your Organisation')]"));
    var draftSec = element(by.xpath("//th[contains(text(),' Draft ')]"));
    var reviewPendingSec = element(by.xpath("//th[contains(text(),' Review Pending ')]"));
    var correctionsPendingSec = element(by.xpath("//th[contains(text(),' Corrections pending ')]"));
    var acceptedSec = element(by.xpath("//th[contains(text(),' Accepted ')]"));
    var notAcceptedSec = element(by.xpath("//th[contains(text(),'Not Accepted ')]"));
    var approvalPendingSec = element(by.xpath("//th[contains(text(),' Approval Pending ')]"));
    var approvedSec = element(by.xpath("//th[contains(text(),' Approved ')]"));
    var rejectedSec = element(by.xpath("//th[contains(text(),' Rejected')]"));
    var draftCount = element(by.xpath("//td[contains(text(),'Organisation')]//following::td[1]"));
    var reviewPendingCount = element(by.xpath("//td[contains(text(),'Organisation')]//following::td[2]"));
    var correctionsPendingCount = element(by.xpath("//td[contains(text(),'Organisation')]//following::td[3]"));
    var acceptedCount = element(by.xpath("//td[contains(text(),'Organisation')]//following::td[4]"));
    var notAcceptedCount = element(by.xpath("//td[contains(text(),'Organisation')]//following::td[5]"));
    var approvalPendingCountYourOrg = element(by.xpath("//td[contains(text(),'Organisation')]//following::td[6]"));
    var approvedCountYourOrg = element(by.xpath("//td[contains(text(),'Organisation')]//following::td[7]"));
    var rejectedCountYourOrg = element(by.xpath("//td[contains(text(),'Organisation')]//following::td[8]"));

    var assignUsers = element(by.xpath("//div[contains(text(),'Assign users to project')]"));
    var selRole1 = element(by.xpath("(//option[contains(text(),'Select Role')])[1]"));
    var selRole2 = element(by.xpath("(//option[contains(text(),'Select Role')])[2]"));
    var selContributorRole = element(by.xpath("(//option[contains(text(),'CONTRIBUTOR')])[1]"));
    var selReviewerRole = element(by.xpath("(//option[contains(text(),'REVIEWER')])[2]"));
    var createUploadContent = element(by.xpath("//button[contains(text(),'Create/Upload Content')]"));
    var selETextbook = element(by.xpath("//div[contains(text(),'eTextbook')]"));
    var clkContinue = element(by.xpath("//button[contains(text(),' Continue ')]"));
    var selFileInDragAndDrop = element(by.xpath("//h5[text()='Drag and Drop Files here']/following::div[1]"));
    var clkSubmitForReview = element(by.xpath("//button[text()='Submit for review']"));
    var enterName1 = element(by.xpath("//input[@placeholder='Name']"));
    var enterYear = element(by.xpath("//input[@placeholder='Enter Copyright and Year']"));
    var policyCheckbox1 = element(by.id("content-policy-check"));
    var clksubmit = element(by.xpath("//button[text()='Submit']"));
    var author = element(by.xpath("//label[text()='Author:']"));
    var openApproveContent = element(by.xpath("//td[contains(text(),'Sample1')]//following::button[1]"));
    var approveContent2 = element(by.xpath("//td[contains(text(),'Sample2')]//following::button[1]"));
    var approveContent3 = element(by.xpath("//td[contains(text(),'Sample3')]//following::button[1]"));
    var approveContent4 = element(by.xpath("//td[contains(text(),'Sample4')]//following::button[1]"));
    var submitContenForApproval = element(by.xpath("//button[contains(text(),'Submit for Approval')]"));
    var publishContent2 = element(by.xpath("//div[contains(text(),'Sample2')]//following::button[1]"));
    var rejectContent3 = element(by.xpath("//div[contains(text(),'Sample3')]//following::button[1]"));
    var sendForCorrectionsContent4 = element(by.xpath("//div[contains(text(),'Sample4')]//following::button[1]"));
    
    var openbtnReviewPending = element(by.xpath("//span[contains(text(),'Review Pending')]//following::button[contains(text(),'Open')]"));
    var requestChanges = element(by.xpath("//button[contains(text(),'Request changes')]"));
    var assertDetails = element(by.xpath("//div[contains(text(),'Edit details')]"));
    var assertSampleFile = element(by.xpath("//span[contains(text(),'A Simple PDF File')]"));
    var clkNxtBtn1 = element(by.xpath("(//button[contains(@class,'navigation-arrows player-nextIcon paginate right ml-4')])[1]"));
    var clkNxtBtn2 = element(by.xpath("(//button[contains(@class,'navigation-arrows player-nextIcon paginate right ml-4')])"));
    var consumeComplete = element(by.xpath("//div[contains(text(),'You just completed')]"));
    var checkBoxContentType2 = element(by.xpath("//div[text()=' Select Content Types ']//following::div[4]"));
    var checkBoxContentType3 = element(by.xpath("//div[text()=' Select Content Types ']//following::div[6]"));
    var checkBoxContentType4 = element(by.xpath("//div[text()=' Select Content Types ']//following::div[8]"));
    var checkBoxContentType5 = element(by.xpath("//div[text()=' Select Content Types ']//following::div[10]"));
    var openNominations = element(by.xpath("//span[text()=' Pending ']//following::button[1]"));
    var uploadContentFromIndCont = element(by.xpath("//span[contains(text(),' Chapter')]//following::button[2]"));
    var eTextBookUpload = element(by.xpath("//div[text()='eTextbook']"));
    var openUploadedContent = element(by.xpath("//span[text()=' Approval Pending']//following::button[1]"));
    var openAngularDropdown = element(by.xpath("//span[text()=' eTextbook']//following::div[5]"));
    var openContentForReject = element(by.xpath("//span[contains(text(),'Sample')]"));
    var clkBackButton = element(by.xpath("//button[contains(text(),' Back ')]"));
    var rejectedCountInContributionDashboard = element(by.xpath("//th[contains(text(),'Rejected')]//following::td[text()='1'][2]"));
    var reviewContentBtn = element(by.xpath("//button[contains(text(),'Review Content')]"));
    var assertReviewPending = element(by.xpath("//span[text()='Review Pending']"));
    var assertDraftStatus = element(by.xpath("//span[text()='Draft']"));
    var countAwaiting = element(by.xpath("//dt[contains(text(),'3')]"));
    var eTextReviewPendings = element(by.xpath("//span[contains(text(),' eTextbook')]"));
    var selSample1ForAccept = element(by.xpath("//span[contains(text(),'sample1')]//following::span[contains(text(),'Review Pending')][1]"));
    var selSample2ForReject = element(by.xpath("//span[contains(text(),'sample2')]//following::span[contains(text(),'Review Pending')][1]"));
    var assertApprovalPending = element(by.xpath("(//span[contains(text(),'Approval Pending')])[2]"));
    var assertNotAccepted = element(by.xpath("(//span[contains(text(),'Not Accepted')])[2]"));
    var publishCountInContributionDashboard = element(by.xpath("//th[contains(text(),'Approved')]//following::td[text()='1'][2]"));
    var assertDraftStatusInTOCPage = element(by.xpath("//span[contains(text(),'PdfFile')]//following::span[contains(text(),'Draft')]"));
    var clkContentDetails = element(by.xpath("//a[contains(text(),'Content Details')]"));
    var draftStatusInEtextbook = element(by.xpath("//span[text()='eTextbook']//following::span[contains(text(),'Draft')]"));
    var countUnderDraftStatusInTOC = element(by.xpath("//span[text()='Draft:']//following::span[1]"));
    var approvalPendingLabelInTOC = element(by.xpath("//span[text()='eTextbook']//following::span[contains(text(),'Approval Pending')][1]"));
    var approvalPendingCountInTOC = element(by.xpath("//span[text()=' Approval Pending:']//following::span[1]"));
    var approvalPendingStatusInTOC = element(by.xpath("//span[contains(text(),'Sample')]//following::span[contains(text(),'Approval Pending')]"));
    var createNewButton = element(by.xpath("(//button[text()='Create new '])[1]"));
    var approvalPendingStatusPostPublishTheContent = element(by.xpath("//span[contains(text(),'Sample')]//following::span[contains(text(),'Approval Pending')]"));
    var checkBoxContentType6 = element(by.xpath("//div[text()=' Select Content Types ']//following::div[12]"));
    var checkBoxContentType7 = element(by.xpath("//div[text()=' Select Content Types ']//following::div[14]"));
    var selExplanationContentType = element(by.xpath("//div[text()='Explanation Content']"));
    var selLearningResourceContentType = element(by.xpath("//div[text()='Learning Resource']"));
    var doneBtn = element(by.xpath("//button[contains(text(),'Add Transcript')]//preceding::button[text()='Done'][1]"));
    var selPracticeQuestionSet = element(by.xpath("//div[text()='Practice Question Set']"));
    var enterDescription = element(by.xpath("//textarea[@placeholder='Description']"));
    var enterInstructions = element(by.xpath("//p[@data-placeholder='Enter Instructions']"));
    var clkSelSyllabus = element(by.xpath("//option[text()='Select Board/Syllabus ']"));
    var selCBSEBoardValue = element(by.xpath("//option[text()='CBSE ']"));
    var clkSelMediumsection = element(by.xpath("//option[text()='Select Medium ']"));
    var selEngMediumValue =  element(by.xpath("//option[text()='English']"));
    var clkSelClassSection = element(by.xpath("//option[text()='Select Class ']"));
    var selClass1Value = element(by.xpath("//option[text()='Class 1']"));
    var clkSelSubSection = element(by.xpath("//option[text()='Select Subject ']"));
    var clkSelAudienceSection = element(by.xpath("//option[text()='Select Audience ']"));
    var selAudienceValue = element(by.xpath("//option[text()='Teacher']"));
    var clkSelHour = element(by.xpath("//input[@placeholder='HH']"));
    var selHoursInDropdown = element(by.xpath("//datalist[@id='hours']//following::option[2]"));
    var sltExplainitionContent = element(by.xpath("//div[contains(text(),'Explanation Content')]"));
    var selSampleECForAccept = element(by.xpath("//span[contains(text(),'sample EC')]//following::span[contains(text(),'Review Pending')][1]"));
    var checkTeacherResource = element(by.xpath("//label[contains(text(),'Teacher Resource')]"));
    var sltLearningResource = element(by.xpath("//div[contains(text(),'Learning Resource')]"));
    var sltTeacherResource = element(by.xpath("//div[contains(text(),'Teacher Resource')]"));
    var selSampleLR1ForAccept = element(by.xpath("//span[contains(text(),'sample LR1')]//following::span[contains(text(),'Review Pending')][1]"));
    var selSampleTR1ForAccept = element(by.xpath("//span[contains(text(),'sample TR1')]//following::span[contains(text(),'Review Pending')][1]"));
    var clkRevPending = element(by.xpath("//span[contains(text(),'Test1')]//following::span[contains(text(),'Review Pending')]"));
    var clkRevPending2 = element(by.xpath("//span[contains(text(),'Test2')]//following::span[contains(text(),'Review Pending')]"));
    var assignUsersToProjectTab1 = element(by.xpath("//div[contains(text(),'Assign users to project')]"));


    return {
        clkMyProject,
        btnCreation,
        selectOpt1,
        btnClkNext,
        enterProjectName,
        enterProjectDesc,
        nominationEndDate,
        shortlistEndDate,
        contributionEndDate,
        projectEndDate,
        btnNext,
        selectContentType,
        courseAssessment,
        selectTargetCollection,
        Course,
        btnPublishProject,
        selectMedium,
        selectGrade,
        selectSubject,
        btnAply,
        selectFirstCollection,
        selectFirstCollection1,
        btnYes,
        assertToastMsg,
        //selSunriseContributer,
        clkAllMyProjects,
        fromOrgOnly,
        skip2levelReview,
        selQuestionSet,
        seleTextBook,
        selExplainitionContent,
        selLearningResource,
        selOldQuestionSet,
        selTeacherResource,
        clkOutContentType,
        assertNominationTab,
        fromSetOfSelContributors,
        clkSelContributors,
        dropDownContrType,
        enterNameOrOrg,
        searchBtn,
        selIndividualType,
        selSearchedContributer,
        btnSave,
        assertContributersAdded,
        assertDefaultIndApproved,
        assertDefaultOrgApproved,
        clkMyProjectsOnIndContributor,
        digitalTextBook,
        selectFirstTextBook,
        assertPreApproved,
        btnSelectContentTypes,
        checkBoxContentType1,
        btnSubmitContentType,
        selectedContentTypeSuccess,
        checkBoxUploadSample,
        btnNominate,
        assertNominationSent,
        openUserForAction,
        btnAccept,
        assertNominatiopSuccess,
        contentPlaylistInTargetCollection,
        courseInTargetCollection,
        questionPaperInTargetCollection,
        btnSaveAsDraft,
        yesBtn,
        selectOpt2,
        selectOpt3,
        closeDeletehamburgerMenuOption,
        delteOption,
        closeOption,
        updateButton,
        editIcon,
        toastMessage,
        projectScopeTab,
        openBtn,
        closeButton,
        assertCollectionType,
        assertNomination,
        assertAssignUsers,
        assertContributionDashboard,
        assertReports,
        skipCheckbox,
        addRecogDesc,
        contentPlayList,
        selMediumEnglish,
        selectGradeClass1,
        selectSubjectEnglish,
        selectFirstContentPlaylist,
        btnReject,
        enterReasonForReject,
        assertReject,
        assignUsersToProjectTab,
        selectRole,
        selectReviewer,
        assertRolesUpdated,
        nominationEnabled,
        nominationStatus,
        clickModify,
        btnUpdate,
        selectReviewer1,
        enterSearchField,
        clkSearchbtn,
        digitalTextBooksTab,
        contributionDashBoardTab,
        assertReportsTab,
        nominationEndDateInDetails,
        shortlistEndDateInDetails,
        contributionListEndDateInDetails,
        projectEndDateInDetails,
        clkFrameworkType,
        checkPracticeQuestion,
        checkeTextbook,
        checkExplanationContent,
        checkLearningResource,
        checkLearningPlanUnit,
        clkUploadSample,
        clkeTextbook,
        eTextbookCreateNewBtn,
        slteTextbookContribute,
        clkContnue,
        clkContentTypeDropdown,
        assertSuccesMsgFileUpload,
        clkBrowseFile,
        clkSubmit,
        enterCopyRight,
        enterName,
        clickCheckBox,
        clkSubmitUploadForm,
        assertContentSentReviewMsg,
        assertNoOfSamples,
        assertPendingStatusInNomincationTab,
        clkOpenInNomincationTab,
        clkViewSample,
        assertTotalCountInContentTypeSec,
        clkUploadedSampleContentType,
        assertUploadSampleFile,
        clkBackBtn,
        assertContributionEndDate,
        assignUserTab,
        selectContributor,
        assertNominationEndDate,
        assertShortlistEndDate,
        assertContributionAndReviewEndDate,
        assertProjectEndDate,
        enrollmentPopup,
        assertOrgOption,
        assertIndOption,
        assertCheckBox,
        openApprovedProject,
        assertMyContent,
        assertMyContentHeading,
        assertTotalContributed,
        assertPublishedOnDiksha,
        assertNotPublishedOnDiksha,
        selectBoth,
        clkManageUsers,
        assertUser,
        clkOnChangeRole,
        changeToUserRole,
        changeToAdminRole,
        assertRoleUpdatedMessage,
        selectCourseAssessment,
        courseCreateNewButton,
        sltCourseAssessmentContribute,
        radioButtonEcmlCreation1,
        radioButtonEcmlCreation2,
        //ecmlContinueButton,
        addQuestionSet,
        sltQuestionCheckbox,
        nextButton,
        questionSetTitle,
        addQuestionSetButton,
        savebutton,
        closePopUpButton,
        closeEditor,
        clkContnuePopUp,
        addslide,
        uploadContentButton,
        aproovePendingOpenButton,
        sendBackForCorrectionButton,
        publishButton,
        rejectButton,
        addComments,
        submitReviewbutton,
        approvalStatus,
        approvedCount,
        rejectedCount,
        correctionsPending,
        approvalPendingCount,
        totalCount,
        selCherryContributer,
        submitForReviewContentButton,
        reviewContent,
        submitForApproval,
        createNewBtn,
        saveBton,
        backBtn,
        assertDraftInTOC,
        kababMenu,
        deleteDraft,
        bulkUploadContentBtn,
        editDetails,
        assertContentSavedToastMessage,
        clkForIndividualContentNotForAnyCollectionSection,
        clkOnBoard,
        selBoard,
        selEnglish,
        selGrade,
        selSubject,
        selClass,
        clkUpload,
        clkSelectFile,
        assertNominations,
        openButton,
        skipReviewBtn,
        assertReviewEnabledMessageInProject,
        selectFrameWork,
        selectCPD,
        selectCBSE,
        clickBoard,
        selectCBSE1,
        selMedium,
        selectAll,
        selectClass,
        selSubj,
        selMed1,
        selClass1,
        selSub1,
        clkPendingOpen,
        assertContents,
        downloadContentDetailsBtn,
        downloadNominationDetailsBtn,
        downloadContributionDetailsBtn,
        termsAndConditionsCheckBox,
        assertEnrollmentSuccessMsg,
        btnCreateNew,
        assertSample,
        continueBtn,
        openSample,
        assertSampleTitle,
        btnBack,
        assertContributingOrganisation,
        assertYourOrganisation,
        draftSec,
        reviewPendingSec,
        correctionsPendingSec,
        acceptedSec,
        notAcceptedSec,
        approvalPendingSec,
        approvedSec,
        rejectedSec,
        draftCount,
        reviewPendingCount,
        correctionsPendingCount,
        acceptedCount,
        notAcceptedCount,
        approvalPendingCountYourOrg,
        approvedCountYourOrg,
        rejectedCountYourOrg, 
        assignUsers,
        selRole1,
        selRole2,
        selContributorRole,
        selReviewerRole,
        createUploadContent,
        selETextbook,
        clkContinue,
        selFileInDragAndDrop,
        clkSubmitForReview,
        enterName1,
        enterYear,
        clksubmit,
        openApproveContent,
        submitContenForApproval,
        policyCheckbox1,
        approveContent2,
        approveContent3,
        approveContent4,
        publishContent2,
        rejectContent3,
        sendForCorrectionsContent4,
        author,
        openbtnReviewPending,
        requestChanges,
        assertDetails,
        assertSampleFile,
        clkNxtBtn1,
        clkNxtBtn2,
        consumeComplete,
        checkBoxContentType2,
        checkBoxContentType3,
        checkBoxContentType4,
        checkBoxContentType5,
        openNominations,
        uploadContentFromIndCont,
        eTextBookUpload,
        openUploadedContent,
        openAngularDropdown,
        openContentForReject,
        clkBackButton,
        rejectedCountInContributionDashboard,
        reviewContentBtn,
        assertReviewPending,
        assertDraftStatus,
        countAwaiting,
        eTextReviewPendings,
        selSample1ForAccept,
        selSample2ForReject,
        assertApprovalPending,
        assertNotAccepted,
        publishCountInContributionDashboard,
        assertDraftStatusInTOCPage,
        clkContentDetails,
        draftStatusInEtextbook,
        countUnderDraftStatusInTOC,
        approvalPendingLabelInTOC,
        approvalPendingCountInTOC,
        approvalPendingStatusInTOC,
        createNewButton,
        approvalPendingStatusPostPublishTheContent,
        checkBoxContentType6,
        checkBoxContentType7,
        selExplanationContentType,
        selLearningResourceContentType,
        doneBtn,
        selPracticeQuestionSet,
        enterDescription,
        enterInstructions,
        clkSelSyllabus,
        selCBSEBoardValue,
        clkSelMediumsection,
        selEngMediumValue,
        clkSelClassSection,
        selClass1Value,
        clkSelSubSection,
        clkSelAudienceSection,
        selAudienceValue,
        clkSelHour,
        selHoursInDropdown,
        sltExplainitionContent,
        selSampleECForAccept,
        checkTeacherResource,
        sltLearningResource,
        sltTeacherResource,
        selSampleLR1ForAccept,
        selSampleTR1ForAccept,
        clkRevPending,
        clkRevPending2,
        assignUsersToProjectTab1,

    }
}

module.exports = {
    VDNPage
}