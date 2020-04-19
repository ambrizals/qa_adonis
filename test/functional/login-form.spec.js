"use strict";

const { test, trait } = use("Test/Suite")("Login Form");
trait("Test/Browser");
// trait("Session/Client");

test("Login form show error when username is not exists", async ({
  browser,
}) => {
  const userError = await browser.visit("/auth/login");
  await userError
    .type('[name="username"]', "coba")
    .type('[name="password"]', "coba");

  userError.assertError([
    {
      field: "username",
      message: "Username tidak ditemukan !",
    },
  ]);
});

test("Login form show error when password is invalid", async ({ browser }) => {
  const passError = await browser.visit("/auth/login");
  await passError
    .type('[name="username"]', "admin")
    .type('[name="password"]', "coba");

  passError.assertError([
    {
      field: "password",
      message: "Password tidak benar !",
    },
  ]);
});

test("Login form is correctly functionnal", async ({ browser }) => {
  const loginPass = await browser.visit("/auth/login");
  await loginPass
    .type('[name="username"]', "admin")
    .type('[name="password"]', "admin1234");

  loginPass.assertStatus(200);
});
