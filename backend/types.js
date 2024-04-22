const zod = require("zod");

const addExpense = zod.object({
    title: zod.string().min(1),
    category: zod.string(),
    amount: zod.number().positive()
});

const deleteExpense = zod.object({
    id: zod.string()
});

module.exports = {
    addExpense,
    deleteExpense
}