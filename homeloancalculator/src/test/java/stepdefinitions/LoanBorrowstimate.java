package stepdefinitions;

import com.sun.xml.internal.ws.api.ha.StickyFeature;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import javafx.scene.control.Tab;
import jdk.nashorn.internal.AssertsEnabled;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import pagefactory.LoanCalculatorPF;


/**
 * Created by Jeyachandran on 4/4/2019.
 * Contains all the step definition(test steps) matching to the features from each of the scenario.
 */
public class LoanBorrowstimate {

    public static WebDriver driver;

    LoanCalculatorPF lcDriver;


    @Given("I open a web browser")
    public void BrowserSetup() {
        System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\chromedriver.exe");
        driver = new ChromeDriver();
        lcDriver = new LoanCalculatorPF(driver);

    }


    @And("^I am in the Home Loan calculator page$")
    public void NavigateToHomeLoanPage() throws InterruptedException {

        //Calling the Home Loan calculator page in the Browser
        driver.get("https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/");
        driver.manage().window().maximize();
        System.out.println(driver.getTitle());
        Thread.sleep(2000);

    }


    @When("^I enter the details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" of the borrower$")
    public void EnterBorrowerDetails(String Apptype, String dependants, String PropertyType) {

        //Entering the Borrrower details such as application type,Number of dependents,Property type
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//input[contains(@title,'Search')]")));

        if (Apptype.equalsIgnoreCase("Single")) {
            lcDriver.AppTypeSingle().click();
        }

        Select day = new Select(lcDriver.NoOfDependents());
        day.selectByVisibleText(dependants);

        if (PropertyType.equalsIgnoreCase("ToLive")) {
            lcDriver.PropertyType().click();
        }

    }

    @And("^I enter the earnings \"([^\"]*)\" \"([^\"]*)\" of the borrower$")
    public void EnterBorrowerEarnings(String income, String otherincome) {

        //Enter the Borrower earnings such as income and other icome
        lcDriver.income().sendKeys(income);
        lcDriver.OtherIncome().sendKeys(otherincome);
    }


    @And("^I enter the expenses \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" of the borrower$")
    public void EnterBorrowerExpenses(String expenses, String homeloan, String otherloan, String othercommitment, String creditcardlimit) throws InterruptedException {

        //Enter the expenses of the borrower such as Living expenses,Current home loan repayment,other loan repayment
        //other commitment,Total credit card limit.
        lcDriver.Expenses().sendKeys(expenses);
        lcDriver.HomeLoan().sendKeys(homeloan);
        lcDriver.OtherLoan().sendKeys(otherloan);
        lcDriver.OtherCommitment().sendKeys(othercommitment);
        lcDriver.CCardLimit().sendKeys(creditcardlimit);
        lcDriver.calculate().click();
        Thread.sleep(3000);


    }

    @Then("^Borrowing estimate of \"([^\"]*)\" is displayed$")

    public void BorrowingEstimateCalculation(String borrowestimation) {

        //Verifying the Borrowing estimate amount that is displayed
        Assert.assertEquals(lcDriver.BorrowAmount().getText(), borrowestimation);

    }


    @Then("^I click the start over button$")
    public void Startover() throws InterruptedException {

        //Click the start over button
        WebElement ccardlimit = driver.findElement(By.id("credit"));
        Actions builder = new Actions(driver);
        Action seriesOfActions = builder
                .moveToElement(ccardlimit)
                .sendKeys(Keys.TAB)
                .sendKeys(Keys.ENTER)
                .click()
                .build();

        seriesOfActions.perform();
        //Putting this sleep to show that it has clicked restart and the values have been wiped off the form
        Thread.sleep(5000);

    }

    @When("^I enter \"([^\"]*)\" for the living expense and submit$")
    public void EnterOnlyLivingExpense(String expenses) throws InterruptedException {

        //Enter only the living expenses and click calculate how much could i borrow
        lcDriver.Expenses().sendKeys(expenses);
        lcDriver.calculate().click();
        Thread.sleep(2000);
    }

    @Then("^I get an message stating we are unable to give you a quote$")
    public void VerifyUnableToGetQuoteMsg() {

        //Verify the message content where is says we are unable to give you an estimate
        String UnabletogetQuoteMsg = "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on";
        String EnquiryNumber = "1800 100 641";
        String pageSource = driver.getPageSource();
        boolean isTheTextPresent = driver.getPageSource().contains(UnabletogetQuoteMsg);
        boolean isEnquiryNumberPresent = driver.getPageSource().contains(EnquiryNumber);
        Assert.assertTrue(isTheTextPresent);
        Assert.assertTrue(isEnquiryNumberPresent);
    }

    @And("I close the Browser")
    public void CloseBrowser() {
        //Closing the web browser
        driver.close();
    }

}
