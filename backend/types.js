const zod = require("zod");

const addExpense = zod.object({
    title: zod.string().min(1),
    category: zod.string(),
    amount: zod.number().int().gt(0, { message: 'Amount must be greater than 0'})
})

module.exports = {
    addExpense
}