import express from "express";
import getCategories from "../services/categories/getCategories.js";
import createCategory from "../services/categories/createCategory.js";
import getCategoryById from "../services/categories/getCategoryById.js";
import deleteCategoryById from "../services/categories/deleteCategoryById.js";
import updateCategoryById from "../services/categories/updateCategoryById.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  const categories = getCategories();
  res.json(categories);
});

router.post("/", authMiddleware, (req, res) => {
  const { name } = req.body;
  const newCategory = createCategory(name);

  res.status(201).json(newCategory);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const category = getCategoryById(id);

  if (!category) {
    res.status(404).json({ message: `Category with id ${id} not found` });
  } else {
    res.status(200).json(category);
  }
});

router.delete("/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  const category = deleteCategoryById(id);

  if (category) {
    res.status(200).send({
      message: `Category with id ${id} successfully deleted`,
      category,
    });
  } else {
    res.status(404).json({
      message: `Category with id ${id} not found`,
    });
  }
});

router.put("/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = updateCategoryById(id, { name });

  if (category) {
    res.status(200).send({
      message: `Category with id ${id} successfully updated`,
      category,
    });
  } else {
    res.status(404).json({
      message: `Category with id ${id} not found`,
    });
  }
});

export default router;
