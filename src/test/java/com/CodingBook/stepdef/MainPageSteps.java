package com.CodingBook.stepdef;

import com.CodingBook.pages.MainPage;
import com.CodingBook.utils.ConfigurationReader;
import com.CodingBook.utils.MyDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;

import static com.CodingBook.pages.Base.waitSomeTime;

public class MainPageSteps {
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
    }

    @When("User checks if CodingBook logo is visible on the top left corner")
    public void userChecksIfCodingBookLogoIsVisibleOnTheTopLeftCorner() {
    }

    @And("User clicks CodingBook logo")
    public void userClicksCodingBookLogo() {
    }

    @Then("Test if user landed CodingBook homepage")
    public void testIfUserLandedCodingBookHomepage() {
    }
}

