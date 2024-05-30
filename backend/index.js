const express = require("express");
const cors = require("cors");
const { expense } = require("./db");
const { addExpense, deleteExpense } = require("./types");

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
    const createPayload = req.body;

    const predefinedCategories = ['Food', 'Transportation', 'Utilities', 'Entertainment'];
    if (!predefinedCategories.includes(createPayload.category)) {
        return res.status(400).json({
            message: 'Invalid category. Please choose from the predefined categories.',
            predefinedCategories: predefinedCategories
        });
    }

    const parsedPayload = addExpense.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        });
        return;
    }

    await expense.create({
        title: createPayload.title,
        category: createPayload.category,
        amount: createPayload.amount
    });

    res.status(200).json({
        message: 'Expense added successfully'
    });
});

app.put('/edit', async (req, res) => {
    const editPayload = req.body;
    const parsedPayload = addExpense.safeParse(editPayload);

    if (!parsedPayload.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    await expense.updateOne({
        _id: editPayload.id,
    }, {
        title: editPayload.title,
        category: editPayload.category,
        amount: editPayload.amount
    });

    res.status(200).json({
        message: "Expense updated successfully"
    });
});

app.delete('/remove', async (req, res) => {
    const deleteBody = req.body;
    const parsedBody = deleteExpense.safeParse(deleteBody);

    if (!parsedBody.success) {
        res.status(411).json({
            message: 'Wrong input'
        });
        return;
    }

    await expense.deleteOne({
        _id: deleteBody.id
    });

    res.status(200).json({
        message: 'Expense deleted successfully'
    });
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});