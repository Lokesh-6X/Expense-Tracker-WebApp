import Category from "../models/categoryModel.js";

//@desc Create Category
//@route POST /api/categories
//@access Private
const createCategory = async (req, res) => {
    try {

        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Category name is required"
            });
        }

        const category = await Category.create({
            name,
            user: req.user.id
        });

        res.status(201).json({
            success: true,
            category
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//@desc Get Categories
//@route GET /api/categories
//@access Private
const getCategories = async (req, res) => {
    try {

        const categories = await Category.find({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            categories
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//@desc Update Category
//@route PUT /api/categories/:id
//@access Private
const updateCategory = async (req, res) => {
    try {

        const category = await Category.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        category.name = req.body.name || category.name;

        await category.save();

        res.status(200).json({
            success: true,
            category
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//@desc Delete Category
//@route DELETE /api/categories/:id
//@access Private
const deleteCategory = async (req, res) => {
    try {

        const category = await Category.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        await category.deleteOne();

        res.status(200).json({
            success: true,
            message: "Category deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
};