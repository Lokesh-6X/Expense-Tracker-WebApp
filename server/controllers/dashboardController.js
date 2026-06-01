import Expense from "../models/expenseModel.js";
import Category from "../models/categoryModel.js";


//@desc Get Dashboard Summary
//@route GET /api/dashboard
//@access Private
const getDashboardSummary = async (req, res) => {
    try {

        const userId = req.user.id;

        const totalExpensesResult = await Expense.aggregate([
            {
                $match: {
                    user: req.user._id
                }
            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: "$amount"
                    }
                }
            }
        ]);

        const totalExpenses =
            totalExpensesResult.length > 0
                ? totalExpensesResult[0].total
                : 0;

        const totalTransactions = await Expense.countDocuments({
            user: userId
        });

        const totalCategories = await Category.countDocuments({
            user: userId
        });

        const recentExpenses = await Expense.find({
            user: userId
        })
            .populate("category", "name")
            .sort({ expense_date: -1 })
            .limit(5);

        res.status(200).json({
            success: true,
            dashboard: {
                totalExpenses,
                totalTransactions,
                totalCategories,
                recentExpenses
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


//@desc Get Monthly Expense Summary
//@route GET /api/dashboard/monthly-summary
//@access Private
const getMonthlySummary = async (req, res) => {

    try {

        const summary = await Expense.aggregate([
            {
                $match: {
                    user: req.user._id
                }
            },
            {
                $group: {
                    _id: {
                        year: {
                            $year: "$expense_date"
                        },
                        month: {
                            $month: "$expense_date"
                        }
                    },
                    totalAmount: {
                        $sum: "$amount"
                    },
                    transactionCount: {
                        $sum: 1
                    }
                }
            },
            {
                $sort: {
                    "_id.year": -1,
                    "_id.month": -1
                }
            }
        ]);

        res.status(200).json({
            success: true,
            summary
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


//@desc Get Category Wise Expense Summary
//@route GET /api/dashboard/category-summary
//@access Private
const getCategorySummary = async (req, res) => {

    try {

        const summary = await Expense.aggregate([
            {
                $match: {
                    user: req.user._id
                }
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $unwind: "$category"
            },
            {
                $group: {
                    _id: "$category.name",
                    totalAmount: {
                        $sum: "$amount"
                    },
                    transactionCount: {
                        $sum: 1
                    }
                }
            },
            {
                $sort: {
                    totalAmount: -1
                }
            }
        ]);

        res.status(200).json({
            success: true,
            summary
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


//@desc Get Recent Expenses
//@route GET /api/dashboard/recent-expenses
//@access Private
const getRecentExpenses = async (req, res) => {

    try {

        const expenses = await Expense.find({
            user: req.user.id
        })
            .populate("category", "name")
            .sort({ expense_date: -1 })
            .limit(10);

        res.status(200).json({
            success: true,
            expenses
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


export {
    getDashboardSummary,
    getMonthlySummary,
    getCategorySummary,
    getRecentExpenses
};