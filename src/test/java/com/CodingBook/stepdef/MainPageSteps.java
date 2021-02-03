package com.CodingBook.stepdef;

import com.CodingBook.pages.MainPage;
import com.CodingBook.utils.ConfigurationReader;
import com.CodingBook.utils.MyDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import static com.CodingBook.pages.Base.waitSomeTime;

public class MainPageSteps<mainPage> {
    Logger logger = LoggerFactory.getLogger(MainPage.class);
    MainPage mainPage = new MainPage();

    @Given("User opens CodingBook web page")
    public void userOpensCodingBookWebPage() {
        MyDriver.get().get(ConfigurationReader.getProperty("baseUrl"));

        MyDriver.get().manage().deleteAllCookies();
        waitSomeTime(3000L);
        String expected = "CodingBook – Shape your future";
        String actual = MyDriver.get().getTitle();
        Assert.assertEquals(expected, actual);
        logger.info("CodingBook title : {}",actual);
    }

    @When("User checks if CodingBook logo is visible on the top left corner")
    public void userChecksIfCodingBookLogoIsVisibleOnTheTopLeftCorner() {
        mainPage.checkLogo();
    }


    @And("User clicks CodingBook logo")
    public void userClicksCodingBookLogo() {
        mainPage.clickLogo();
    }
        @Then("Verify that info@ email adress is present")
        public void verifyThatInfoEmailAdressIsPresent() {
        mainPage.verifyInfoEmailAddress();

    }
}

