"use strict";

const Factory = use("Factory");
const { test, trait } = use("Test/Suite")("Admin Dashboard");
trait("Test/Browser");
trait("Auth/Client");
trait("Session/Client");
trait("DatabaseTransactions");

test("Admin dashboard is functionnal", async ({ browser }) => {
  const user = await Factory.model("App/Models/User").create();

  const adminPass = await browser.visit("/admin", (request) => {
    request.loginVia(user);
  });
  await adminPass.assertPath("/admin");
}).timeout(6000);
