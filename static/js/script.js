'use strict'

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budgetData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    
}

for (let i = 0; i < 2; i++) {
    let a = null;
    let b = null;
    do {
        a = prompt('Введите обязательную статью расходов в этом месяце', '');
    }
    while (!checkA(a));
    do {
        b = prompt('Во сколько обойдется?');
    }
    while (!checkB(b));

    appData.expenses[a] = b;
}

function checkA(a) {
    if (!a || a === '') {
        return false;
    } else if (a.length > 50) {
        return false;
    } else {
        return true;
    }
}

function checkB(b) {
    if (!b || (!+b && +b !== 0)) {
        return false;
    } else {
        return true;
    }
    
}

appData.moneyPerDay = (money / 30).toFixed(2);
alert(`Бюджет на 1 день - ${appData.moneyPerDay} рублей`);

if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}
