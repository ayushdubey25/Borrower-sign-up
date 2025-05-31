const Borrower = require("../models/Borrower");

exports.createBorrower = async (req, res) => {
  try {
    const newBorrower = new Borrower(req.body);
    const savedBorrower = await newBorrower.save();
    res.status(201).json(savedBorrower);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
