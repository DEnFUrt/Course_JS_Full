'use strict'
let money, time;
let appData = {
    budgetData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    
}

start();

function start() {
    do {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    while (!checkNumber(money));
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

chooseExpenses();

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = null;
        let b = null;
        do {
            a = prompt('Введите обязательную статью расходов в этом месяце', '');
        }
        while (!checkString(a));
        do {
            b = prompt('Во сколько обойдется?');
        }
        while (!checkNumber(b));

        appData.expenses[a] = b;
    }
}

function checkString(a) {
    if (!a || a === '') {
        return false;
    } else if (a.length > 50) {
        return false;
    } else {
        return true;
    }
}

function checkNumber(b) {
    if (!b || (!+b && +b !== 0)) {
        return false;
    } else {
        return true;
    }
    
}

detectDayBudget();

function detectDayBudget() {
    appData.moneyPerDay = +(money / 30).toFixed(2);
    alert(`Бюджет на 1 день - ${appData.moneyPerDay} рублей`);
}

detectLevel();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = null;
        do {
            a = prompt('Статья необязательных расходов?', '');
        }
        while (!checkString(a));  
        appData.optionalExpenses[i] = a;  
    }
}

checkSavings();

function checkSavings() {
    if (appData.savings) {
        let save = null;
        let percent = null;
        do {
            save = prompt('Какова сумма накоплений?', '');
        }
        while (!checkNumber(save));
        do {
            percent = prompt('Под какой процент?', '');
        }
        while (!checkNumber(percent));
        appData.monthIncome = +(save/100/12*percent).toFixed(2);
        alert(`Доход с депозита ${appData.monthIncome} рублей в месяц`);
    }
}