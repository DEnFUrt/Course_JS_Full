'use strict'

let appData = {
    //budgetData: money,
    //timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function() {
        let sum = 0;
        for (let i = 0; i < expensesItems.length; i++) {
            let a = expensesItems[i].value;
            let b = expensesItems[++i].value;
            
            if (!this.checkString(a) || !this.checkNumber(b)) {
                alert('Неправильно заполнено название или сумма статьи обязательных расходов!\nПроверьте правильность заполнения и повторите расчет.')
                break;
            }
            sum += +b;
            this.expenses[a] = +b;
        }
        expensesValue.textContent = (sum).toFixed(2);
    },
    detectDayBudget: function() {
        let sumExpenses = 0;
        for (let key in this.expenses) {
            sumExpenses += this.expenses[key];
        }
        this.moneyPerDay = +((this.budgetData - sumExpenses) / 30).toFixed(2);
        daybudgetValue.textContent = (this.moneyPerDay).toFixed(2);
    },
    detectLevel: function() {
        let text ='';
        if (this.moneyPerDay <= 100) {
            text = 'Это минимальный уровень достатка!';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            text = 'Это средний уровень достатка!';
        } else if (appData.moneyPerDay > 2000) {
            text = 'Это высокий уровень достатка!';
        } else {
            text = 'Доход не расчитан!';
        }
        levelValue.textContent = text;
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < optionalexpensesItems.length; i++) {
            this.optionalExpenses[i] = optionalexpensesItems[i].value;
            optionalexpensesValue.textContent += `${this.optionalExpenses[i]} `; 
        }
    },
    checkSavings: function() {
        if (this.savings) {
            let sum = sumValue.value,
                percent = percentValue.value;
            if (this.checkNumber(sum) && this.checkNumber(percent)) {
                this.monthIncome = +(+sum / 100 / 12 * +percent).toFixed(2);
                this.yearIncome = +(+sum / 100 * +percent).toFixed(2);

                monthsavingsValue.textContent = this.monthIncome.toFixed(2);
                yearsavingsValue.textContent = this.yearIncome.toFixed(2);
            } else {
                monthsavingsValue.textContent = '0.00';
                yearsavingsValue.textContent = '0.00';
            }
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
        let items = incomeItem.value;
        this.income = items.split(',');
        incomeValue.textContent = this.income;
    },  
}

const start = () => {
    let money, time;
    let flag = false;
    
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    do {
        money = +prompt('Ваш бюджет на месяц?', '');
        if (!money || (!+money && +money !== 0)) {
                flag = false;
            } else {
                flag = true;
            }
    }
    while (!flag);

    appData.budgetData = money;
    appData.timeData = time;
    budgetValue.textContent = (appData.budgetData).toFixed(2);
    yearValue.value = new Date(Date.parse(appData.timeData)).getFullYear();
    monthValue.value = new Date(Date.parse(appData.timeData)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(appData.timeData)).getDate();
    enableBtn();
}

const countBudget = () => {
    if (appData.budgetData) {
        appData.detectDayBudget.bind(appData)();
        appData.detectLevel.bind(appData)();
    } else {
        daybudgetValue.textContent = 'Бюджет не рассчитан!';
    }
}

const savingsOnOff = () => {
    appData.savings = !appData.savings;
    countProfit();
}

const countProfit = () => {
    appData.checkSavings.bind(appData)();
}

function enableBtn() {
    expensesItemBtn.removeAttribute('disabled');
    optionalexpensesBtn.removeAttribute('disabled');
    countBudgetBtn.removeAttribute('disabled');
}

btnStart.addEventListener('click', start);

expensesItemBtn.addEventListener('click', appData.chooseExpenses.bind(appData));

optionalexpensesBtn.addEventListener('click', appData.chooseOptExpenses.bind(appData));

countBudgetBtn.addEventListener('click', countBudget);  

incomeItem.addEventListener('input', appData.chooseIncome.bind(appData));

checkSavings.addEventListener('click', savingsOnOff);

sumValue.addEventListener('input', countProfit);

percentValue.addEventListener('input', countProfit);
