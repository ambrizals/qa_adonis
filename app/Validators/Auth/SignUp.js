"use strict";

const session = use("@adonisjs/session/providers/SessionProvider");

class AuthSignUp {
  get rules() {
    return {
      username: "required|unique:users",
      email: "required|email|unique:users",
      password: "required",
    };
  }

  get messages() {
    return {
      "username.required": "Username wajib di isi !",
      "username.unique": "Username ini sudah digunakan !",
      "email.required": "Email wajib di isi !",
      "email.email": "Format penulisan email tidak benar !",
      "email.unique": "Email ini sudah digunakan !",
      "password.required": "Password wajib di isi !",
    };
  }

  get validateAll() {
    return true;
  }
}

module.exports = AuthSignUp;
