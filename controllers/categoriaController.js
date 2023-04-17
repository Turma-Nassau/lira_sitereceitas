class CategoryController {
    constructor() {
      this.categories = [];
    }
  
    getAllCategories(req, res) {
      res.json(this.categories);
    }
  
    getCategoryById(req, res) {
      const category = this.categories.find((c) => c.id === parseInt(req.params.id));
      if (!category) {
        return res.status(404).send("Categoria não encontrada.");
      }
      res.json(category);
    }
  
    createCategory(req, res) {
      const { name } = req.body;
      if (!name) {
        return res.status(400).send("Nome da categoria é obrigatório.");
      }
      const id = this.categories.length + 1;
      const newCategory = { id, name };
      this.categories.push(newCategory);
      res.status(201).json(newCategory);
    }
  
    updateCategoryById(req, res) {
      const { name } = req.body;
      const category = this.categories.find((c) => c.id === parseInt(req.params.id));
      if (!category) {
        return res.status(404).send("Categoria não encontrada.");
      }
      category.name = name;
      res.json(category);
    }
  
    deleteCategoryById(req, res) {
      const categoryIndex = this.categories.findIndex((c) => c.id === parseInt(req.params.id));
      if (categoryIndex === -1) {
        return res.status(404).send("Categoria não encontrada.");
      }
      this.categories.splice(categoryIndex, 1);
      res.sendStatus(204);
    }
  }
  
  module.exports = CategoryController;
  