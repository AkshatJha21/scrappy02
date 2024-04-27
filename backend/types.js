const z = require("zod");

const addExpense = z.object({
    title: z.string().min(1),
    category: z.string(),
    amount: z.number()
})

const deleteExpense = z.object({
    id: z.string()
})

module.exports = {
    addExpense,
    deleteExpense
}