"use strict";

const Category = use("App/Models/Category");

class CategoryController {
  async index({ view }) {
    const category = await Category.all();
    return view.render("admin.category.index", { data: category.toJSON() });
  }

  async create({ view }) {
    return view.render("admin.category.store");
  }

  async show({ params, view }) {
    const category = await Category.find(params.id);
    return view.render("admin.category.show", { data: category.toJSON() });
  }

  async store({ request, response }) {
    try {
      const req = request.all();
      const data = new Category();
      data.name = req.name;
      data.description = req.description;
      await data.save();
      return response.route("category.index");
    } catch (error) {
      console.log(error);
    }
  }

  async update({ request, response }) {}

  async destroy({ request, response, params }) {}
}

module.exports = CategoryController;
