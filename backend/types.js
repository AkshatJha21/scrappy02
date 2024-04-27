const z = require("zod");

const categoryEnum = z.enum(['Food', 'Transportation', 'Utilities', 'Entertainment']);

const addExpense = z.object({
    title: z.string().min(1),
    category: categoryEnum,
    amount: z.number()
})

const deleteExpense = z.object({
    id: z.string()
})

module.exports = {
    addExpense,
    deleteExpense
}