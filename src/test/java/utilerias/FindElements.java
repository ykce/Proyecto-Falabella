package utilerias;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class FindElements {
	static boolean exist = false;
	static WebElement elementFind;
	private static WebDriver driver = InstanciarNavegador.getInstance();

	// Find elements by Id, Xpath, linkTest, name, CssSelector and ClassName.
	
	
public static WebElement existElementId(String element){
	try {
		Thread.sleep(1000);
		elementFind = driver.findElement(By.id(element));
		return elementFind;
	} catch (InterruptedException NoSuchElementException) {
		elementFind=null;
	}
	return elementFind;
}


public static WebElement existElementlinkTest(String element){
	try {
		Thread.sleep(1000);
		elementFind = driver.findElement(By.linkText(element));
		return elementFind;
	} catch (InterruptedException NoSuchElementException) {
		elementFind=null;
	}
	return elementFind;
}

public static WebElement existElementName(String element){
	try {
		Thread.sleep(1000);
		elementFind = driver.findElement(By.name(element));
		return elementFind;
	} catch (InterruptedException NoSuchElementException) {
		elementFind=null;
	}
	return elementFind;
}

public static WebElement existElementXpath(String element){
	try {
		Thread.sleep(1000);
		elementFind = driver.findElement(By.xpath(element));
		return elementFind;
	} catch (InterruptedException NoSuchElementException) {
		elementFind=null;
	}
	return elementFind;

}

public static WebElement existElementClassName(String element){
	try {
		Thread.sleep(1000);
		elementFind = driver.findElement(By.className(element));
		return elementFind;
	} catch (InterruptedException NoSuchElementException) {
		elementFind=null;
	}
	return elementFind;

}
public static WebElement existElementCssSelector(String element){
	try {
		Thread.sleep(1000);
		elementFind = driver.findElement(By.cssSelector(element));
		return elementFind;
	} catch (InterruptedException NoSuchElementException) {
		elementFind=null;
	}
	return elementFind;

}
	
}
		
