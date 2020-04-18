"use strict";

class AuthUpdatePassword {
  get rules() {
    return {
      currentPassword: "required",
      newPassword: "required",
      confirmPassword: "required",
    };
  }

  get messages() {
    return {
      "currentPassword.required": "Anda harus memasukkan password saat ini !",
      "newPassword.required": "Kolom ini wajib di isi !",
      "confirmPassword.required": "Kolom ini wajib di isi !",
    };
  }
}

module.exports = AuthUpdatePassword;
