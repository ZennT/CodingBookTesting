package com.CodingBook.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MainPage extends Base{
    Logger logger = LoggerFactory.getLogger(MainPage.class);

    @FindBy(xpath ="//img[@class='custom-logo']" )
    public WebElement logo;

    @FindBy(xpath ="//a[@title='About']" )
    public WebElement about;

    @FindBy(xpath = "/a[contains(text(), 'info@codingbook.org')]")
    public WebElement infoEmail;

    public void checkLogo(){
        Assert.assertTrue((logo.isDisplayed()));
        logger.info("CodingBook logo is displayed");
    }

    public void clickLogo() {
        about.click;
        waitSomeTime(5L);
        logo.click();
    }

    public void verifyInfoEmailAddress(){
        String expected = "info@codingbook.org";
        String actual = infoEmail.getText();
        Assert.assertEquals(expected,actual);
        logger.info("{} logo is present {}", actual, expected);


    }
}
