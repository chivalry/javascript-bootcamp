const account = {
    name: 'Chuck Ross',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let expenses = 0
        this.expenses.forEach(function(expense) {
            expenses += expense.amount
        })
        let incomes = 0
        this.income.forEach(function(income) {
            incomes += income.amount
        })
        const balance = incomes - expenses
        return `${this.name} has a balance of $${balance}. $${incomes} in income. $${expenses} in expenses.`
    },
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())