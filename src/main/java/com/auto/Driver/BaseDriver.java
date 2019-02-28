package com.auto.Driver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class BaseDriver {

	public WebDriver driver;
	public void Initilization() {
		System.out.println("Base driver");
		
		  System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
		  
		  ChromeOptions options = new ChromeOptions();
		  
		  options.addArguments("window-size=1200x600"); 
		  driver = new ChromeDriver(options); 
		  driver.manage().window().maximize();
		  
		  driver.get("http://www.google.com/");
		 
	}
	
}
