//const { element } = require("protractor");

let UserOnBoarding = () => {

    let dropdownProfile = element(by.xpath("(//div[@class='avatar-content'])[2]"));

    let clkAdminDashBoard = element(by.xpath("//*[contains(text(), 'Admin dashboard')]"));
    let assertReportPulse = element(by.xpath("//*[contains(text(),'Pulse of the Nation Learning')]"));
    let assertreportDigitalNation = element(by.xpath("//*[contains(text(),'Digital Learning Experience Nationwide')]"));
    let assertreportDigitalState = element(by.xpath("//*[contains(text(),'Digital Learning Experience Statewide')]"));
    let assertreportdigitalCapita = element(by.xpath("//*[contains(text(),'Digital Learning per Capita')]"));
    let assertreportGPS = element(by.xpath("//*[contains(text(),'GPS of Learning')]"));
    let assertreportDailyUsage = element(by.xpath("//*[contains(text(),'Daily Usage Report')]"));
    let assertreportConsumption = element(by.xpath("//*[contains(text(),'Content Consumption Report')]"));
    let assertreportLive = element(by.xpath("//*[contains(text(),'Live QR Code Content Status Report')]"));
    let assertreportETB = element(by.xpath("//*[contains(text(),'ETB Creation Status Report')]"));
    var dropdown = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
    var signWithStateID = element(by.xpath("//button[@id='stateButton']"));
    var stateDropDown = element(by.xpath("//i[@class='dropdown icon']"));
    var selectState = element(by.xpath("//i[@class='dropdown icon']/following::span[2]"));
    var clickSubmit = element(by.xpath("//button[contains(text(),'Submit')]"));
    var stateUsrName = element(by.id('name'));
    var usrExternalID = element(by.xpath("//input[@id='user_external_id']"));
    var schoolExternalID = element(by.xpath("//input[@id='school_external_id']"));
    var submitState = element(by.xpath("//input[@value='submit']"));
    let verifyClassSec = element(by.xpath("(//span[text()='Class 1'])[1]"));
    let clkManage = element(by.xpath("//*[contains(text(),'Manage')]"));
    let ClickSelectFile = element(by.xpath("//div[contains(text(),'Select file')]"));
    let clkSltFile = element(by.xpath("//input[@class='sb-btn-upload']"));
    let clkDownloadFile = element(by.xpath("//a[@href='/assets/SampleUserCsv.csv']/following::div"));
    //let clkDownloadFile=element(by.xpath("//a[@href='/assets/SampleUserCsv.csv']"));

    let clkFirstContent = element(by.xpath("//div[@class='sb--card__main-area']"));
    let assertTOC = element(by.xpath("//h3[@class='sb-collectionTree-title']"));
    let assertTenantLogo = element(by.xpath("//img[@alt='APeKX']"));
    let clkEnterQRCode = element(by.xpath("//button[@title='Enter QR code']"));
    let enterQrcode = element(by.xpath("//input[@placeholder='Enter 6 digit QR code']"));
    let submitQrcode = element(by.xpath("//div[@class='ui modal scroll transition active visible normal']/div[3]/button"));
    let clkLinkedContent = element(by.xpath("//h4[@class='sb-card-title']"));
    let clkExploreContentAP = element(by.xpath("//a[contains(text(),'EXPLORE CONTENT')]"));

    let clkMergeAccount = element(by.xpath("//a[contains(text(),' Merge Account ')]"));
    let mergePageAssert = element(by.xpath("//div[contains(text(),'Merge Account')]"));

    let clkMerge = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary']"));

    var dropdown = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
    var uploadStatus = element(by.xpath("//a[contains(text(),'Check Upload Status')]"));
    var organizationUpload = element(by.xpath("//a[contains(text(),'Upload Organizations')]"));
    var uploadCSV = element(by.xpath("//button[contains(text(),'UPLOAD ORGANIZATIONS CSV')]"));
    var clkAddRecoveryID = element(by.xpath("//div[contains(@aria-label,'Add recovery account')]"));
    var emailIdTextBox = element(by.xpath("//input[@type='email']"));
    //  var clkMerge = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary']"));
    var logout = element(by.xpath("//div[@id='dropdown-menu-list-header']//a[.='Logout']"));
    var clkForgot = element(by.xpath("//div[@id='fgtPortalFlow']"));
    var enterEmailInRecoveryAcc = element(by.xpath("//input[@name='identifier']"));
    var enterNameInRecoveryAcc = element(by.xpath("//input[@name='name']"));
    var nextButtonInRecoveryAcc = element(by.xpath("//button[contains(text(),' Next')]"));
    var sltRecoveryEmailId = element(by.xpath("//input[@type='checkbox']//following::label"));
    var clkGetOTPButton = element(by.xpath("//div[contains(text(),'Recover Account')]//following::input//following::button"));
    var loginButton = element(by.xpath("//a[text()=' Login ']"));
    var clickProfileIcon = element(by.xpath("//li[text()=' Profile ']"));
    var iconI = element(by.xpath("(//i[contains(@class,'name-info')])[1]"));
    var labelUserName = element(by.xpath("//div[contains(@class,'profile-user-label')]"));
    var labelUserID = element(by.xpath("(//div[contains(@class,'fnormal')])[2]"));
    var labelRoles = element(by.xpath("//span[contains(@class,'ui dodger-blue basic label mr-15 ')]"));
    var labelAddMobileNumber = element(by.xpath("//i[contains(@class,'phone ')]"));
    var labelEmail = element(by.xpath("//i[contains(@class,'mail ')]"));
    var labelRecoveryMobileNumber = element(by.xpath("//div[contains(@class,'recovery-img')]"));
    var labelBoard = element(by.xpath("//div[@class='mb-15 d-flex flex-jc-center']/span"));
    var labelMedium = element(by.xpath("//span[contains(text(),'Medium :')]"));
    var labelClasses = element(by.xpath("(//span[contains(text(),'Classes :')])[1]"));
    var labelSubjects = element(by.xpath("(//span[contains(text(),'Subjects :')])[1]"));
    var labelContributions = element(by.xpath("(//div[contains(text(),'Contribution')])[2]"));
    var popupRecoveryAccount = element(by.xpath("//span[contains(text(),'Recovery ID')]"));
    var labelEmailInPopup = element(by.xpath("//label[contains(text(),'Email address')]"));
    var labelMobileInPopup = element(by.xpath("//label[contains(text(),'Mobile Number')]"));
    var fieldEmail = element(by.xpath("(//input[@id='email'])[2]"));
    var checkboxPhone = element(by.xpath("//input[@id='phone']"));
    var fieldMobileNumber = element(by.xpath("//input[@formcontrolname='phone']"));
    var btnSubmit = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary']"));
    var errorMsgForEmail = element(by.xpath("//span[contains(text(),' This email address is the same as that linked to your profile ')]"));
    var recoveryIdDisplayed = element(by.xpath("(//span[contains(text(),'.')])[1]"));
    var selfDeclaredUserDetails = element(by.xpath("//h4[contains(@class,'sb-manage-section-title')]"));
    var uploadValidationStatus = element(by.xpath("//*[contains(text(),'Upload validation status')]"));
    var downloadUserDetail = element(by.xpath("//button[contains(text(),'Download')]"));
    var selectFile = element(by.xpath("//div[contains(text(),' Select file ')]"));
    var uploadCSVFile = element(by.xpath("//div[contains(text(),' Upload CSV file ')]"));
    var closeIcon = element(by.xpath("//i[@class='icon close']"));
    var downloadButton = element(by.xpath("(//button[contains(text(),'Download')])[2]"));
    var submitDetails = element(by.xpath("//button[contains(text(),'Submit details')]"));
    var selectPersona = element(by.xpath("//*[text()='Select persona']"));
    var selectTenant = element(by.xpath("//*[text()='Select tenants']"));
    var cancel = element(by.xpath("//button[text()=' Cancel ']"));
    var teacherOption = element(by.xpath("//*[contains(text(),'Teacher')]"));
    var otherOption = element(by.xpath("//*[contains(text(),'Other')]"));
    var andhraOption = element(by.xpath("(//*[contains(text(),'Andhra Pradesh')])[1]"));
    var assamOption = element(by.xpath("(//*[contains(text(),'Assam')])[1]"));
    var editPersonalDetail = element(by.xpath("//*[text()='Edit']"));
    var userName = element(by.xpath("//div[@class='profile-user-label font-w-bold d-flex text-center relative position']"));
    var stateName = element(by.xpath("//div[contains(text(),'State')]"));
    var districtName = element(by.xpath("//div[contains(text(),'District')]"));
    var closeEditDetail = element(by.xpath("(//i[@class='close icon'])[2]"));
    var CustodianUserpageTnC = element(by.xpath("//input[@id='tnc']/following-sibling::label[1]"));
    var welcomeIgotText = element(by.xpath("//h1[text()='Welcome to IGOT']"));
    var IgotCourse = element(by.xpath("//a[contains(@class,'item item--courses')]"));
    var selectRoleFilter = element(by.xpath("//label[contains(text(),'Class')]/following::sui-multi-select[1]"));
    var selectRole = element(by.xpath("//label[contains(text(),'Class')]/following::sui-multi-select[1]/div[2]/sui-select-option[1]/span[2]"));
    var Applybutton = element(by.xpath("//button[text()=' Apply ']"));
    var FirstContent = element(by.xpath("(//div[@class='sb--card__meta']//h4)[1]"));
    var JoinCourse = element(by.xpath("//button[text()='Join Course']"));
    var logInPermission = element(by.xpath("//div[contains(@class,'fsmall px-0')]"));
    var loginButtonForLoginPage = element(by.xpath("//a[contains(@class,'sb-btn sb-btn-normal')]"));
    var welComeToDikshaHeader = element(by.xpath("//div[text()='Welcome to DIKSHA']"));
    var report = element(by.xpath("//*[contains(text(),'Reports')]"));
    var dataset = element(by.xpath("//*[contains(text(),'Datasets')]"));
    var serialNo = element(by.xpath("//*[contains(text(),'Serial No.')]"));
    var title = element(by.xpath("//*[contains(text(),'Title')]"));
    var lastUpdatedDate = element(by.xpath("//*[contains(text(),'Last Updated Date')]"));
    var tags = element(by.xpath("//*[contains(text(),'Tags')]"));
    var updatedFrequency = element(by.xpath("//*[contains(text(),'Update Frequency')]"));
    var status = element(by.xpath("//*[contains(text(),'Status')]"));
    var contentName = element(by.xpath("//div[@class='sb-media-body']/h6"));
    var selectcsvfile = element(by.xpath("//*[contains(text(),'Select .csv file')]"));
    var uploadcsvfile = element(by.xpath("//*[contains(text(),'Upload .csv file')]"));
    var validationToasterMsg = element(by.xpath("//*[@class='iziToast-texts']"));
    var clkCheckBox = element(by.xpath("//input[@type='checkbox']"));
    var clkCheckBoxContinue = element(by.xpath("//button[contains(text(),' Continue')]"));
    var clkChangeUser = element(by.xpath("//button[contains(text(),' Change user ')]"));
    var clkHelp = element(by.xpath("//li[contains(text(),' Help')]"));
    var verifyFAQ = element(by.xpath("//div[@class='fsmall']"));
    var firstQuestionClk = element(by.xpath("//*[@class='icon icon-svg--primary']//following::div[@class='text-left panel-title']"));
    var clkNoButton = element(by.xpath("//button[@id='btn-no']"));
    var clkTypeHere = element(by.xpath("//textarea[@placeholder='Type Here...']"));
    var clkSubmitFaq = element(by.xpath("//input[@class='submit-button']"));
    var verifySuccessResponceMsg = element(by.xpath("//p[contains(text(),' Thank you for your response!')]"));
    var clkGoToHelpCenter = element(by.xpath("//a[contains(text(),' Go to Help Center ')]"));
    var HelpCenterPageAssert = element(by.xpath("//h4[contains(text(),'FAQs')]"));
    var clkEditProfile = element(by.xpath("//span[contains(text(),'Subjects :')]//following::button[contains(text(),'Edit')]"));
    var clkBoardEdit = element(by.xpath("//label[contains(text(),'Board')]//following::sui-select"));
    var verifyIGotHealthValue = element(by.xpath("(//label[contains(text(),'Board')]//following::span)[7]"));
    var clkMediumDropDown = element(by.xpath("//label[contains(text(),'Medium')]//following::sui-multi-select"));
    var sltMediumDropDown = element(by.xpath("(//label[contains(text(),'Medium')]//following::span)[3]"));
    var closeMediumIcon = element(by.xpath("//label[contains(text(),'Medium')]//following::i[@class='dropdown icon']"));
    var closeClassIcon = element(by.xpath("//label[contains(text(),'Class')]//following::i[@class='dropdown icon']"));
    var closeSubjectIcon = element(by.xpath("//label[contains(text(),'Subject')]//following::i[@class='dropdown icon']"));
    var clkClassDropDown = element(by.xpath("//label[contains(text(),'Class')]//following::sui-multi-select"));
    var sltClassDropDown = element(by.xpath("(//label[contains(text(),'Class')]//following::span)[3]"));
    var clkSubjectDropDown = element(by.xpath("//label[contains(text(),'Subject')]//following::sui-multi-select"));
    var sltSubjectDropDown = element(by.xpath("//label[contains(text(),'Subject')]//following::span[2]"));
    var clkSubmitProfile = element(by.xpath("//label[contains(text(),'Subject')]//following::button[contains(text(),' Submit ')]"));
    var assertUpdateToastrMsg = element(by.xpath("//*[contains(text(),'Profile updated successfully...')]"));
    var assertProfileBoardValue = element(by.xpath("//span[contains(text(),'Board')]//following::span[contains(text(),'IGOT-Health')]"));
    var clkEditStateAndDistritProfile = element(by.xpath("//div[contains(text(),'State')]//following::button[contains(text(),'Edit')]"));
    var profileName = element(by.xpath("//input[@name='name']"));
    var clkStateDropdown = element(by.xpath("(//div[contains(@id,'state')])[2]"));
    var sltStateDropdown = element(by.xpath("(//div[contains(text(),'State')]//following::span[contains(text(),'Andhra Pradesh')])[3]"));
    var clkDistrictDropdown = element(by.xpath("(//div[contains(@id,'district')]//following::div[@class='cfe-multiselect-field-label-container list-border'])[4]"));
    var sltDistrictDropdown = element(by.xpath("//span[contains(text(),'District')]//following::span[text()='Anantapur']"));
    var districtSubmitClk = element(by.xpath("(//div[contains(text(),'District')]//following::button[contains(text(),'Submit')])[2]"));
    var clkRegisterlink = element(by.xpath("//span[@class='registerLink']"));
    var RegisteronDikshaLabel = element(by.xpath("//div[contains(text(),' Register on DIKSHA')]"));
    var nameLabel = element(by.xpath("//label[contains(text(),'Name')]"));
    var termsandConditionlabel1 = element(by.xpath("//label[contains(text(),'I understand and accept the ')]"));
    var dikshaTermsandUse = element(by.xpath("//a[contains(text(),' DIKSHA Terms of Use ')]"));
    var clkTermsCheckbox = element(by.xpath("//input[@id='tncAccepted']"));
    var registerLabel = element(by.xpath("//button[contains(text(),'Register')]"));
    var clkYearDropdown = element(by.xpath("//div[@class='mat-select-arrow-wrapper']"));
    var sltValidYear = element(by.xpath("//span[contains(text(),'1993')]"));
    var sltInValidYear = element(by.xpath("//span[contains(text(),'2020')]"));
    var verifyParentMsg = element(by.xpath("//label[contains(text(),' Enter mobile number or email address ')]"));
    var verifyParentMsg2 = element(by.xpath("//span[contains(text(),'of your parent or guardian')]"));

    var verifyPasswordPolicyErrMsg = element(by.xpath("//label[contains(text(),'Your password must contain a minimum of 8 characters. It must include numerals, lower and upper case alphabets and special characters, without any spaces')]"));

    var registerPassword = element(by.xpath("//input[@placeholder='Enter password']"));
    var registerConfPassword = element(by.xpath("//input[@placeholder='Re-enter the password']"));
    var clkEmailCheckbox = element(by.xpath("//label[@for='email']"));
    var TypeEmail = element(by.xpath("//input[@placeholder='Email address']"));

    var clkForgotPassword = element(by.xpath("//div[@id='fgtPortalFlow']"));
    var assertOTPPage = element(by.xpath("//div[contains(text(),'One Time Password (OTP)')]"));
    var typeName = element(by.xpath("//input[@placeholder='Name']"));
    var entUSrName = element(by.xpath("//input[@name='name']"));
    var ClkCancelButton = element(by.xpath("//*[contains(text(),' Cancel')]"));
    var AddUsrCreationBtn = element(by.xpath("//button[@type='submit']"));
    var clkCheckBox = element(by.xpath("//input[@type='checkbox']"));
    var clkCheckBoxContinue = element(by.xpath("//button[contains(text(),' Continue')]"));
    var clkChangeUser = element(by.xpath("//button[contains(text(),' Change user ')]"));
    var AddUserClk = element(by.xpath("//img[@alt='Add user']"));
    var entUSrName = element(by.xpath("//input[@name='name']"));

    var helpButton = element(by.xpath("//li[contains(text(),' Help ')]//child::i"));
    var reportButton = element(by.xpath("//button[contains(text(),' Report other issue ')]"));

    var checkBoxEmail = element(by.xpath("(//*[contains(@class,'ui radio checkbox')])[2]"));

    var contributionSectionInProfile = element(by.xpath("//div[@class='ui segments']//child::div[@class='ui segment computer only']"));
    var locationPopUp = element(by.xpath("//*[contains(text(),'Your Location')]"));
    var developerOptionDebugModeDropdown = element(by.xpath("//div[text()='Developer options']//following::*[@class='icon icon-svg--primary']"));
    var enableDebugMenu = element(by.xpath("//div[text()='Enable Debug Mode ']//following::*[@class='slider round']"));




    return {

        recoveryIdDisplayed,
        errorMsgForEmail,
        btnSubmit,
        fieldMobileNumber,
        checkboxPhone,
        fieldEmail,
        checkBoxEmail,
        labelEmailInPopup,
        labelMobileInPopup,
        popupRecoveryAccount,
        labelContributions,
        iconI,
        labelUserName,
        labelUserID,
        labelRoles,
        labelAddMobileNumber,
        labelEmail,
        labelRecoveryMobileNumber,
        labelBoard,
        labelMedium,
        labelClasses,
        labelSubjects,
        dropdownProfile,
        clkAdminDashBoard,
        assertReportPulse,
        assertreportDigitalNation,
        assertreportDigitalState,
        assertreportdigitalCapita,
        assertreportGPS,
        assertreportDailyUsage,
        assertreportConsumption,
        assertreportLive,
        assertreportETB,
        dropdown,
        signWithStateID,
        stateDropDown,
        selectState,
        clickSubmit,
        stateUsrName,
        usrExternalID,
        schoolExternalID,
        submitState,
        verifyClassSec,
        clkManage,
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
        clkMergeAccount,
        clkMerge,
        mergePageAssert,
        dropdown,
        uploadStatus,
        organizationUpload,
        uploadCSV,
        clkAddRecoveryID,
        emailIdTextBox,
        clkForgot,
        enterEmailInRecoveryAcc,
        enterNameInRecoveryAcc,
        nextButtonInRecoveryAcc,
        sltRecoveryEmailId,
        clkGetOTPButton,
        loginButton,
        clickProfileIcon,
        logout,
        selfDeclaredUserDetails,
        uploadValidationStatus,
        downloadUserDetail,
        selectFile,
        uploadCSVFile,
        closeIcon,
        downloadButton,
        submitDetails,
        selectPersona,
        selectTenant,
        cancel,
        teacherOption,
        otherOption,
        andhraOption,
        assamOption,
        editPersonalDetail,
        userName,
        stateName,
        districtName,
        closeEditDetail,
        CustodianUserpageTnC,
        welcomeIgotText,
        IgotCourse,
        selectRoleFilter,
        selectRole,
        Applybutton,
        FirstContent,
        JoinCourse,
        logInPermission,
        loginButtonForLoginPage,
        welComeToDikshaHeader,
        report,
        dataset,
        serialNo,
        title,
        lastUpdatedDate,
        tags,
        updatedFrequency,
        status,
        contentName,
        selectcsvfile,
        uploadcsvfile,
        validationToasterMsg,
        AddUserClk,
        entUSrName,
        ClkCancelButton,
        AddUsrCreationBtn,
        clkCheckBox,
        clkCheckBoxContinue,
        clkChangeUser,
        clkHelp,
        verifyFAQ,
        firstQuestionClk,
        clkNoButton,
        clkTypeHere,
        clkSubmitFaq,
        verifySuccessResponceMsg,
        clkGoToHelpCenter,
        HelpCenterPageAssert,
        clkEditProfile,
        clkBoardEdit,
        verifyIGotHealthValue,
        closeMediumIcon,
        clkMediumDropDown,
        sltMediumDropDown,
        clkClassDropDown,
        sltClassDropDown,
        clkSubjectDropDown,
        sltSubjectDropDown,
        clkSubmitProfile,
        closeClassIcon,
        closeSubjectIcon,
        assertUpdateToastrMsg,
        assertProfileBoardValue,
        clkEditStateAndDistritProfile,
        profileName,
        clkStateDropdown,
        sltStateDropdown,
        clkDistrictDropdown,
        sltDistrictDropdown,
        districtSubmitClk,
        clkRegisterlink,
        RegisteronDikshaLabel,
        nameLabel,
        termsandConditionlabel1,
        dikshaTermsandUse,
        clkTermsCheckbox,
        registerLabel,
        clkYearDropdown,
        sltValidYear,
        sltInValidYear,
        verifyParentMsg,
        verifyParentMsg2,
        verifyPasswordPolicyErrMsg,
        registerPassword,
        registerConfPassword,
        clkEmailCheckbox,
        TypeEmail,
        clkForgotPassword,
        typeName,
        assertOTPPage,
        helpButton,
        reportButton,
        contributionSectionInProfile,
        locationPopUp,
        developerOptionDebugModeDropdown,
        enableDebugMenu,
    }
};
module.exports = {
    UserOnBoarding
}