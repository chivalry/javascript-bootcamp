let account = {
    name: 'Chuck Ross',
    expenses: 0,
    income: 0
}


let addIncome = function(account, amount) {
    account.income += amount
}


let addExpense = function(account, amount) {
    account.expenses += amount
}


let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}


let getAccountSummary = function(account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}