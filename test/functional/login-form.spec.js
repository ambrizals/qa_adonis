"use strict";

const { test, trait } = use("Test/Suite")("Login Form");
trait("Test/Browser");

test("Login form show error when username is not exists", async ({
  browser,
}) => {
  const userError = await browser.visit("/auth/login");
  await userError
    .type('[name="username"]', "coba")
    .type('[name="password"]', "coba");

  await userError
    .submitForm('form[name="loginForm"]')
    .assertHasIn("div.error-user", "Username tidak ditemukan !");
}).timeout(6000);

test("Login form show error when password is invalid", async ({ browser }) => {
  const passError = await browser.visit("/auth/login");
  await passError
    .type('[name="username"]', "admin")
    .type('[name="password"]', "coba");

  await passError
    .submitForm('form[name="loginForm"]')
    .assertHasIn("div.error-password", "Password tidak benar !");
}).timeout(6000);

test("Login form is correctly functionnal", async ({ browser }) => {
  const loginPass = await browser.visit("/auth/login");
  await loginPass
    .type('[name="username"]', "admin")
    .type('[name="password"]', "radiohead4403");
  await loginPass
    .submitForm('form[name="loginForm"]')
    .waitForNavigation()
    .assertPath("/auth");
}).timeout(6000);
