//const { element } = require("protractor");

let EtbElem1 = () => {

    var search = element(by.xpath("//*[@id='keyword']"));
    var workspace = element(by.xpath("(//*[contains(text(),' Workspace ')])[1]"));
    var collection = element(by.xpath("//span[contains(text(),'Collection')]"));
    var allMyContents = element(by.xpath("//a[contains(text(),' All My Content ')"));
    var searchCollection = element(by.xpath("//input[contains(@placeholder,'Search content')]"));
    var collectionContent = element(by.xpath("//div[contains(text(),'Collection')]"));
    var textbook = element(by.xpath("//div[contains(text(),'Textbook')]"));
    var LessonPlan = element(by.xpath("//div[contains(text(),'LessonPlan')]"));
    var Resource = element(by.xpath("//div[contains(text(),'Resource')]"));
    var SelfAssess = element(by.xpath("//div[contains(text(),'SelfAssess')]"));
    var PracticeResource = element(by.xpath("//div[contains(text(),'PracticeResource')]"));
    var LearningOutcomeDefinition = element(by.xpath("//div[contains(text(),'LearningOutcomeDefinition')]"));
    var ExplanationResource = element(by.xpath("//div[contains(text(),'ExplanationResource')]"));
    var digitalTextbook = element(by.xpath("//*[contains(text(),' Digital textbooks ')]"));
    //var alltab = elemment(by.xpath("//*[contains(@class,'item item--all')]"));
    var searchbutton = element(by.xpath("//*[contains(text(),'Search')]"));
    var appliedFilters1 = element(by.xpath("//div[@class='sb--card__type']"));
    var appliedFilters2 = element(by.xpath("//*[contains(@class,'sb--card__type')]"));
    var appliedFilters3 = element(by.xpath("//*[contains(@class,'sb--card__type')]"));
    var boardSelection = element(by.xpath("//div[contains(@class,'cfe-multiselect-field-label-container list-border')]/child::ul/span"));
    var selectBoard = element(by.xpath("//span[contains(text(),'CBSE')]/parent::div"));
    var reset = element(by.xpath("//*[contains(@class,'sb-btn sb-btn-x')]"));
    var mediumValidation = element(by.xpath("//*[contains(text(),'Select Medium')]"));
    var subjectpills = element(by.xpath("//*[contains(text(),'Select Subject')]"));
    var classSelect = element(by.xpath("//*[contains(text(),'Select Class')]"));
    var selectClass2 = element(by.xpath("//*[contains(text(),'class 12')]"));
    var subjectselect = element(by.xpath("//*[contains(text(),'Select Subject')]"));

    var digitalTextbooksFilter = element(by.xpath("//h1[contains(text(),'Digital textbooks')]"));
    var coursesFilter = element(by.xpath("//*[contains(@class,'item item')][2]"));
    var tvClassesFilter = element(by.xpath("//*[contains(@class,'item item')][3]"));
    var allFilter = element(by.xpath("//*[contains(@class,'item item')][4]"));

    var mediumValidation = element(by.xpath("//div[contains(@class,'cfe-multiselect-pills-item selected-option')]/span[ contains(text(),'English')]"));
    var classesValidation = element(by.xpath("//div[contains(@class,'cfe-multiselect-pills-item selected-option')]/span[ contains(text(),'Class 1')]"));
    var mediumValidation1 = element(by.xpath("div[contains(@class,'cfe-multiselect-pills-item')]/span[ contains(text(),'English')]"));
    var boardValidation = element(by.xpath("//*[contains(text(),'CBSE')]//parent::ul"));
    var subjectValidation = element(by.xpath("//*[contains(text(),'Select Subject')]"));
    var published_byValidation = element(by.xpath("//*[contains(text(),'Select Published by')]"));
    var publishedUsertypeValidation = element(by.xpath("//*[contains(text(),'Select User Type')]"));
    var classSelect1 = element(by.xpath("//*[contains(text(),'Class 10')]"));
    var subjectSelect1 = element(by.xpath("(//*[contains(@id,'Capa_1')])[4]"));
    var alltab = element(by.xpath("//*[contains(@class,'item item--all')]"));
    var mediumPills = element(by.xpath("(//*[contains(@class,'cfe-multiselect-field-label-container list-border')])[2]"));
    var hindi = element(by.xpath("//div[contains(@class,'cfe-multiselect-dropdown sb-modal')]//span[text()='hindi']"));
    var english = element(by.xpath("//div[contains(@class,'cfe-multiselect-dropdown sb-modal')]//span[text()='english']"));
    var selectClass1 = element(by.xpath("//*[contains(text(),'Class 11')]"));
    var subjectSelection1 = element(by.xpath("//*[contains(text(),'accountancy')]"));
    var subjectSelection2 = element(by.xpath("//*[contains(text(),'biology')]"));
    var tvClass = element(by.xpath("//a[text()=' TV classes ']"));
    var assertCollection = element(by.xpath("//div[contains(text(),'Content Playlist')]"));
    var clkExplore = element(by.xpath("//*[contains(text(),'Explore')]"));
    var assertTextBook = element(by.xpath("//*[contains(text(),'TextBook')]"));
    var assertResource = element(by.xpath("//div[contains(text(),'Resource')]"));
    var assertLessonPlan = element(by.xpath("//div[contains(text(),'Lesson Plan')]"));
    var assertSelfAssess = element(by.xpath("//div[contains(text(),'Assessment')]"));
    var assertPractiseResourse = element(by.xpath("//div[contains(text(),'Practice')]"));
    var assertLearningOutCome = element(by.xpath("//div[contains(text(),'LearningOutcomeDefinition')]"));
    var assertExplanationResource = element(by.xpath("//div[contains(text(),'Explanation')]"));


    return {
        search,
        mediumValidation1,
        collection,
        allMyContents,
        searchCollection,
        collectionContent,
        searchbutton,
        textbook,
        LessonPlan,
        Resource,
        SelfAssess,
        PracticeResource,
        LearningOutcomeDefinition,
        ExplanationResource,
        digitalTextbook,
        //alltab,
        appliedFilters1,
        appliedFilters2,
        appliedFilters3,
        boardSelection,
        selectBoard,
        reset,
        mediumPills,
        subjectpills,
        hindi,
        english,
        classSelect,
        selectClass1,
        selectClass2,
        subjectselect,
        subjectSelection1,
        subjectSelection2,
        digitalTextbooksFilter,
        coursesFilter,
        tvClassesFilter,
        allFilter,
        mediumValidation,
        classesValidation,
        //classesValidation1,
        boardValidation,
        subjectValidation,
        published_byValidation,
        publishedUsertypeValidation,
        workspace,
        classSelect1,
        subjectSelect1,
        alltab,
        tvClass,
        assertCollection,
        clkExplore,
        assertTextBook,
        assertResource,
        assertLessonPlan,
        assertSelfAssess,
        assertPractiseResourse,
        assertLearningOutCome,
        assertExplanationResource,
    }
}
module.exports = {
    EtbElem1
}