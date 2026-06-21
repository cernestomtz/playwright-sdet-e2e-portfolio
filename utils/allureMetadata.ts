import * as allure from 'allure-js-commons';
import { Severity } from 'allure-js-commons';

export async function setValidLoginMetadata() {
  await allure.epic('UI Automation');
  await allure.feature('Authentication');
  await allure.story('Valid Login');
  await allure.severity(Severity.CRITICAL);
  await allure.owner('Carlos Ernesto Martinez');
  await allure.description('Verify that a valid user can log in and access the inventory page.');
}

export async function setCheckoutMetadata() {
  await allure.epic('UI Automation');
  await allure.feature('Checkout');
  await allure.story('Checkout With Valid Information');
  await allure.severity(Severity.CRITICAL);
  await allure.owner('Carlos Ernesto Martinez');
  await allure.description('Verify that a user can complete checkout information and continue to the overview page.');
}

export async function setApiUserMetadata() {
  await allure.epic('API Automation');
  await allure.feature('Users API');
  await allure.story('Get Existing User');
  await allure.severity(Severity.NORMAL);
  await allure.owner('Carlos Ernesto Martinez');
  await allure.description('Verify that the API returns user details successfully for an existing user.');
}