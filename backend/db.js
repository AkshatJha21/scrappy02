const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://akshat2134j:r5ZeU0UEL2oFsM60@cluster0.bgshoc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
console.log("MongoDB connected successfully");

const expenseSchema = mongoose.Schema({
    title: String,
    category: String,
    amount: Number
});

const expense = mongoose.model('expenses', expenseSchema);

module.exports = {
    expense
}