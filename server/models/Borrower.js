const mongoose = require("mongoose");

const borrowerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  residenceType: String,
  monthlyIncome: Number,
  previousLoan: Boolean,
  maritalStatus: String,
  numberOfDependents: Number,
  city: String,
  state: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Borrower", borrowerSchema);
