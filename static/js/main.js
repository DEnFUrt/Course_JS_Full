//CONSTANTS

const btnStart = document.querySelector('#start');

const resultTable = document.querySelector('.result-table'),
    budgetValue = resultTable.querySelector('.budget-value'),
    daybudgetValue = resultTable.querySelector('.daybudget-value'),
    levelValue = resultTable.querySelector('.level-value'),
    expensesValue = resultTable.querySelector('.expenses-value'),
    optionalexpensesValue = resultTable.querySelector('.optionalexpenses-value'),
    incomeValue = resultTable.querySelector('.income-value'),
    monthsavingsValue = resultTable.querySelector('.monthsavings-value'),
    yearsavingsValue = resultTable.querySelector('.yearsavings-value');

const expensesItems = document.querySelectorAll('input.expenses-item');

const expensesItemBtn = document.querySelectorAll('button')[0],
    optionalexpensesBtn = document.querySelectorAll('button')[1],
    countBudgetBtn = document.querySelectorAll('button')[2];

const optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item');

const incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');