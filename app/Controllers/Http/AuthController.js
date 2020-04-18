"use strict";

const User = use("App/Models/User");
const { validate } = use("Validator");
const Hash = use("Hash");

class AuthController {
  async loginForm({ view }) {
    return view.render("auth.login");
  }

  async login({ request, auth, response }) {
    const { username, password } = request.all();
    await auth.attempt(username, password);
    return response.route("auth.account");
  }

  async logout({ auth, response }) {
    await auth.logout();
    return response.route("auth.loginForm");
  }

  async account({ view }) {
    return view.render("auth.account");
  }

  async signUp({ view }) {
    return view.render("auth.signup");
  }

  async createUser({ request, response, session }) {
    // Direct input with create a new model
    const { username, password, email } = request.all();
    const user = new User();
    user.username = username;
    user.password = password;
    user.email = email;

    // const created = null;
    const created = await user.save();

    if (created) {
      session.flash({ notification: "Akun telah berhasil terdaftar !" });
      return response.route("auth.loginForm");
    }

    session.flash({ notification: "Terjadi Kesalahan !" });
    return response.route("auth.signup");
  }

  async changePassword({ view }) {
    return view.render("auth.changePassword");
  }

  async updatePassword({ request, auth, response, session }) {
    const { currentPassword, newPassword, confirmPassword } = request.all();
    const user = await auth.getUser();

    const isSame = await Hash.verify(currentPassword, user.password);

    if (isSame) {
      if (newPassword === confirmPassword) {
        const dbUser = await User.find(user.id);
        dbUser.password = confirmPassword;
        const updated = await dbUser.save();

        if (updated) {
          session.flash({ notification: "Password telah diperbarui" });
        } else {
          session.flash({ notification: "Terjadi Kesalahan !" });
        }
      } else {
        session.withErrors([
          {
            field: "confirmPassword",
            message: "Password konfirmasi harus sama dengan password baru !",
          },
        ]);
      }
    } else {
      session.withErrors([
        {
          field: "currentPassword",
          message: "Password yang anda masukkan salah !",
        },
      ]);
    }

    return response.route("auth.changepw");
  }
}

module.exports = AuthController;
