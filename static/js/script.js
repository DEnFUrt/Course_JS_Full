'use strict'
let money, time;

function start() {
    let flag = false;
    do {
        money = +prompt('Ваш бюджет на месяц?', '');
        if (!money || (!+money && +money !== 0)) {
                flag = false;
            } else {
                flag = true;
            }
    }
    while (!flag);
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}


start();

let appData = {
    budgetData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = null;
            let b = null;
            do {
                a = prompt('Введите обязательную статью расходов в этом месяце', '');
            }
            while (!this.checkString(a));
            do {
                b = prompt('Во сколько обойдется?');
            }
            while (!this.checkNumber(b));
    
            //appData.expenses[a] = b;
            this.expenses[a] = b;
        }
    },
    detectDayBudget: function() {
        this.moneyPerDay = +(money / 30).toFixed(2);
        alert(`Бюджет на 1 день - ${this.moneyPerDay} рублей`);
    },
    detectLevel: function() {
        if (this.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = null;
            do {
                a = prompt('Статья необязательных расходов?', '');
            }
            while (!this.checkString(a));  
            this.optionalExpenses[i] = a;  
        }
    },
    checkSavings: function() {
        if (this.savings) {
            let save = null;
            let percent = null;
            do {
                save = prompt('Какова сумма накоплений?', '');
            }
            while (!this.checkNumber(save));
            do {
                percent = prompt('Под какой процент?', '');
            }
            while (!this.checkNumber(percent));
            this.monthIncome = +(save/100/12*percent).toFixed(2);
            alert(`Доход с депозита ${this.monthIncome} рублей в месяц`);
        }
    },
    checkString: function(a) {
        if (!a || a === '' || typeof(a) !== 'string') {
            return false;
        } else if (a.length > 50) {
            return false;
        } else {
            return true;
        }
    },
    checkNumber: function(b) {
        if (!b || (!+b && +b !== 0)) {
            return false;
        } else {
            return true;
        }
    },
    chooseIncome: function() {
        let items = '';
        do {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        while (!this.checkString(items));
        this.income = items.split(',');
        this.income.push(prompt('Может что-то еще?', ''));
        this.income.sort();

        this.income.forEach((items, index) => {
            alert(`Способы доп.заработка: ${index + 1}. ${items}`);
        });
    },  
}

for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key} - ${appData[key]}`);
}
