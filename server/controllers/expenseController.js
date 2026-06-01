import Expense from "../models/expenseModel.js";
import Category from "../models/categoryModel.js";


//@desc Create Expense
//@route POST /api/expenses
//@access Private
const createExpense = async (req, res) => {
    try {

        const {
            title,
            amount,
            category,
            description,
            expense_date
        } = req.body;

        if (!title || !amount || !category) {
            return res.status(400).json({
                success: false,
                message: "Title, amount and category are required"
            });
        }

        const categoryExists = await Category.findOne({
            _id: category,
            user: req.user.id
        });

        if (!categoryExists) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        const expense = await Expense.create({
            title,
            amount,
            category,
            description,
            expense_date,
            user: req.user.id
        });

        const populatedExpense = await Expense.findById(expense._id)
            .populate("category", "name");

        res.status(201).json({
            success: true,
            expense: populatedExpense
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//@desc Get All Expenses
//@route GET /api/expenses
//@access Private
const getExpenses = async (req, res) => {
    try {

        const expenses = await Expense.find({
            user: req.user.id
        })
            .populate("category", "name")
            .sort({ expense_date: -1 });

        res.status(200).json({
            success: true,
            count: expenses.length,
            expenses
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//@desc Get Single Expense
//@route GET /api/expenses/:id
//@access Private
const getExpense = async (req, res) => {
    try {

        const expense = await Expense.findOne({
            _id: req.params.id,
            user: req.user.id
        }).populate("category", "name");

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }

        res.status(200).json({
            success: true,
            expense
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//@desc Update Expense
//@route PUT /api/expenses/:id
//@access Private
const updateExpense = async (req, res) => {
    try {

        const expense = await Expense.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }

        if (req.body.category) {

            const categoryExists = await Category.findOne({
                _id: req.body.category,
                user: req.user.id
            });

            if (!categoryExists) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found"
                });
            }
        }

        const updatedExpense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        ).populate("category", "name");

        res.status(200).json({
            success: true,
            expense: updatedExpense
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//@desc Delete Expense
//@route DELETE /api/expenses/:id
//@access Private
const deleteExpense = async (req, res) => {
    try {

        const expense = await Expense.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }

        await expense.deleteOne();

        res.status(200).json({
            success: true,
            message: "Expense deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export {
    createExpense,
    getExpenses,
    getExpense,
    updateExpense,
    deleteExpense
};