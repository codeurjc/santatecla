import {browser, by, element} from 'protractor';

describe('workspace-project App', () => {

  beforeEach(() => {
    browser.get('http://localhost:4200/');
  });


  it('should login successfully', () => {
    element(by.id('username')).sendKeys('profesor');
    element(by.id('password')).sendKeys('profesor');
    element(by.id('send-login-button')).click();
    expect(element(by.id('user-name')).getText()).toEqual('profesor');
  });

  it('should not login', () => {
    spyOn(window, 'alert');
    element(by.id('username')).sendKeys('profesor');
    element(by.id('password')).sendKeys('password');
    element(by.id('send-login-button')).click();
    expect(window.alert).toHaveBeenCalledWith('Invalid user or password');
  });


  afterEach(async () => {
    element(by.id('logout-button')).click();
  });
});
