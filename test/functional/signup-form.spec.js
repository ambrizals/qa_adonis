"use strict";

const { test, trait } = use("Test/Suite")("Signup Form");
trait("Test/Browser");

test("Signup form show error when user is already exists", async ({
  browser,
}) => {
  const signUserExists = await browser.visit("/auth/signup");
  await signUserExists
    .type('[name="username"]', "admin")
    .type('[name="email"]', "pass@admin.com")
    .type('[name="password"]', "coba");

  await signUserExists
    .submitForm("form")
    .assertHasIn("div.error-username", "Username ini sudah digunakan !")
    .screenshot("D:/coba.png");
}).timeout(6000);

test("Signup form show error when email is already exists", async ({
  browser,
}) => {
  const signUserExists = await browser.visit("/auth/signup");
  await signUserExists
    .type('[name="username"]', "admin123")
    .type('[name="email"]', "admin@localhost.com")
    .type('[name="password"]', "coba");

  await signUserExists
    .submitForm("form")
    .assertHasIn("div.error-email", "Email ini sudah digunakan !");
}).timeout(6000);
