package com.CodingBook.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Comment extends Base{
    Logger logger = LoggerFactory.getLogger(Comment.class);

    @FindBy(xpath = "//a[@class='dropdown-toggle']")
    public WebElement courses;

    @FindBy(xpath = "//a[@title='Test Automation']")
    public WebElement testAutomation;

    @FindBy(xpath = "//a[@data-tab='#tab-curriculum']")
    WebElement curriculum;

    @FindBy(xpath = "//span[contains(text(),'Test NG – Summary')]")
    WebElement testNG;

    @FindBy(xpath = "//textarea[@id='comment']")
    WebElement comment;

    @FindBy(xpath = "//input[@id='author']")
    WebElement name;

    @FindBy(xpath = "//input[@id='email']")
    WebElement email;

    @FindBy(xpath = "//input[@id='url']")
    WebElement website;

    @FindBy(xpath = "//input[@id='wp-comment-cookies-consent']")
    WebElement saveCheckBox;

    @FindBy(xpath = "//input[@id='submit']" )
    WebElement submit;

    @FindBy(xpath = "//p[@class='comment-awaiting-moderation label label-info']")
    WebElement commentSentMessage;



    public void clickTestAutomation() {
        waitSomeTime(5L);
        courses.click();
        testAutomation.click();
        logger.info("Clicked TestAutomation sub-menu");
    }


    public void clickOnTestNG(){
        testNG.click();
        logger.info("Clicked on TestNG");
    }


    public void writeAComment(String comment){
        this.comment.sendKeys(comment);
    }


    public void typeName(String name){
        this.name.sendKeys(name);
    }


    public void typeEmail(String email){
        this.email.sendKeys(email);
    }


    public void typeWebsite(){
        website.sendKeys("www.gmail.com");
    }


    public void checkTheSaveBox(){
        saveCheckBox.click();
    }


    public void ClickOnPostButton(){
        submit.click();
    }


    public void verifySuccessComment(){
        commentSentMessage.isDisplayed();
        logger.info("Comment sent successfully");
    }


}
