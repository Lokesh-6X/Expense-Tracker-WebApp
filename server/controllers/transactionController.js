const Transaction = require("../models/transactionModel");


//@desc Add Transaction
//@route POST /api/transactions
//@access private
exports.addTransaction = async (req, res) => {

  try {

    const { title, amount, type, category, date } = req.body;

    if (!title || !amount || !type) {
      return res.status(400).json({
        message: "Required fields missing"
      });
    }

    const transaction = await Transaction.create({
      title,
      amount,
      type,
      category,
      date,
      user_id: req.user.id   // 🔥 attach logged user automatically
    });

    res.status(201).json(transaction);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//@desc Get all Transactions for logged user
//@route GET /api/transactions
//@access private
exports.getTransactions = async (req, res) => {

  try {

    const transactions = await Transaction
      .find({ user_id: req.user.id })   // 🔥 filter by logged user
      .sort({ date: -1 });

    res.status(200).json(transactions);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//@desc Update Transaction
//@route PUT /api/transactions/:id
//@access private
exports.updateTransaction = async (req, res) => {

  try {

    const updated = await Transaction.findOneAndUpdate(

      {
        _id: req.params.id,
        user_id: req.user.id   // 🔥 ownership check inside query
      },

      req.body,

      {
        returnDocument: "after",
        runValidators: true
      }
    );

    if (!updated) {
      return res.status(404).json({
        message: "Transaction not found"
      });
    }

    res.status(200).json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//@desc Delete Transaction
//@route DELETE /api/transactions/:id
//@access private
exports.deleteTransaction = async (req, res) => {

  try {

    const deleted = await Transaction.findOneAndDelete({

      _id: req.params.id,
      user_id: req.user.id   // 🔥 ownership check

    });

    if (!deleted) {
      return res.status(404).json({
        message: "Transaction not found"
      });
    }

    res.status(200).json({
      message: "Transaction deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};