$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Comment.feature");
formatter.feature({
  "name": "Comment Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Write a comment",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Navigate to CodingBook website",
  "keyword": "Given "
});
formatter.step({
  "name": "click on Test Automation sub-menu under Courses menu",
  "keyword": "And "
});
formatter.step({
  "name": "click on Curriculum",
  "keyword": "And "
});
formatter.step({
  "name": "click on Test NG – Summary",
  "keyword": "And "
});
formatter.step({
  "name": "write a comment \"\u003cComment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "type name \"\u003cName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "type email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "type Website",
  "keyword": "And "
});
formatter.step({
  "name": "check the Save my information check-box",
  "keyword": "And "
});
formatter.step({
  "name": "click on Post Comment button",
  "keyword": "When "
});
formatter.step({
  "name": "verify success Comment",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Comment",
        "Name",
        "Email"
      ]
    },
    {
      "cells": [
        "C1",
        "Ahmet",
        "ahmet@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Write a comment",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to CodingBook website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.navigateToCodingBookWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Test Automation sub-menu under Courses menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.clickOnTestAutomationSubMenuUnderCoursesMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Curriculum",
  "keyword": "And "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.clickOnCurriculum()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Test NG – Summary",
  "keyword": "And "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.clickOnTestNGSummary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "write a comment \"C1\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.writeAComment(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type name \"Ahmet\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.typeName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type email \"ahmet@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.typeEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type Website",
  "keyword": "And "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.typeWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the Save my information check-box",
  "keyword": "And "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.checkTheSaveMyInformationCheckBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Post Comment button",
  "keyword": "When "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.clickOnPostCommentButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify success Comment",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CodingBook.stepdef.CommentSteps.verifySuccessComment()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[@class\u003d\u0027comment-awaiting-moderation label label-info\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.146)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tahsins-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:849:4a3e:2f84:7d32%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.146, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/9y/pxv1hhc531d...}, goog:chromeOptions: {debuggerAddress: localhost:57606}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 206918a1c3ed6d319043ce9252988fc5\n*** Element info: {Using\u003dxpath, value\u003d//p[@class\u003d\u0027comment-awaiting-moderation label label-info\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\n\tat com.CodingBook.pages.Comment.verifySuccessComment(Comment.java:95)\n\tat com.CodingBook.stepdef.CommentSteps.verifySuccessComment(CommentSteps.java:79)\n\tat ✽.verify success Comment(file:///Users/zenn/CodingBookTesting/src/test/resources/features/Comment.feature:13)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "Screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/MainPage.feature");
formatter.feature({
  "name": "CodingBook Main Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test CodingBook Logo",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens CodingBook web page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.CodingBook.stepdef.MainPageSteps.userOpensCodingBookWebPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks if CodingBook logo is visible on the top left corner",
  "keyword": "When "
});
formatter.match({
  "location": "com.CodingBook.stepdef.MainPageSteps.userChecksIfCodingBookLogoIsVisibleOnTheTopLeftCorner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks CodingBook logo",
  "keyword": "And "
});
formatter.match({
  "location": "com.CodingBook.stepdef.MainPageSteps.userClicksCodingBookLogo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that info@ email adress is present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.CodingBook.stepdef.MainPageSteps.verifyThatInfoEmailAdressIsPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});