"use strict";

class adminCategoryStore {
  get rules() {
    return {
      name: "required|unique:categories",
      description: "required",
    };
  }

  get messages() {
    return {
      "name.required": "Nama kategori wajib di isi !",
      "name.unique": "Nama kategori wajib unik !",
      "description.required": "Deskripsi wajib di isi !",
    };
  }

  get validateAll() {
    return true;
  }
}

module.exports = adminCategoryStore;
