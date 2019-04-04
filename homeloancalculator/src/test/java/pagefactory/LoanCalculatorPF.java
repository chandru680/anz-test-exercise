package pagefactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

/**
 * Created by Jeyachandran on 4/4/2019.
 * This is the Page factoy containing all the Webelements which we are using in our test.
 */
public class LoanCalculatorPF {
    WebDriver driver;

    public LoanCalculatorPF(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    @FindBy(id = "application_type_single")
    private WebElement SingleAppType;

    public WebElement AppTypeSingle() {
        return SingleAppType;
    }


    @FindBy(xpath = "//select[@title='Number of dependants']")
    private WebElement Dependents;

    public WebElement NoOfDependents() {

        return Dependents;
    }

    @FindBy(xpath = "//input[@id='borrow_type_home' and @value ='H']")
    private WebElement pptyType;

    public WebElement PropertyType() {
        return pptyType;
    }


    @FindBy(xpath = "//input[contains(@aria-labelledby,'q2q1')]")
    private WebElement income;

    public WebElement income() {
        return income;
    }

    @FindBy(xpath = "//input[contains(@aria-labelledby,'q2q2')]")
    private WebElement OtherIncome;

    public WebElement OtherIncome() {
        return OtherIncome;
    }

    @FindBy(id = "expenses")
    private WebElement exp;

    public WebElement Expenses() {
        return exp;
    }

    @FindBy(id = "homeloans")
    private WebElement hloan;

    public WebElement HomeLoan() {
        return hloan;
    }

    @FindBy(id = "otherloans")
    private WebElement oloan;

    public WebElement OtherLoan() {
        return oloan;
    }

    @FindBy(xpath = "//input[contains(@aria-labelledby,'q3q4')]")
    private WebElement ocommitment;

    public WebElement OtherCommitment() {
        return ocommitment;
    }

    @FindBy(id = "credit")
    private WebElement creditlmt;

    public WebElement CCardLimit() {
        return creditlmt;
    }

    @FindBy(xpath = "//button[contains(@class,'calculate')]")
    private WebElement calc;

    public WebElement calculate() {
        return calc;
    }

    @FindBy(className = "borrow__result__text__amount")
    private WebElement borrowamnt;

    public WebElement BorrowAmount() {
        return borrowamnt;
    }

    @FindBy(xpath = "//div[contains(@class,'borrow__result text--white clearfix')]//button[contains(@class,'start-over')]")
    private WebElement strtovr;

    public WebElement startover() {
        return strtovr;
    }


}
