const express = require("express");
const cors = require("cors");
const { expense } = require("./db");
const { addExpense } = require("./types");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/all', async (req, res) => {
    const expenses = await expense.find();

    res.status(200).json({
        expenses
    });
});

app.post('/new', async (req, res) => {
    const newExpense = req.body;
    const parsedExpense = addExpense.safeParse(newExpense);

    if (!parsedExpense.success) {
        res.status(411).json({
            message: 'Incorrect inputs'
        });
        return;
    }

    await expense.create({
        title: newExpense.title,
        category: newExpense.category,
        amount: newExpense.amount
    });

    res.status(200).json({
        message: 'Expense added successfully'
    });
});

app.delete('/remove', async (req, res) => {
    
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});