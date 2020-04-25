'use strict'

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
        q2 = +prompt("Во сколько обойдется?","");
//проверяем на строку(при prompt не обязательно), на отмену пользователем, чтобы не пусто, на длину
    if ( typeof(q1) === 'string' && typeof(q1) != null && typeof(q2) != null 
        && q1 != '' && q2 != '' && q1.length < 10) {
        appData.expenses[q1] = q2;
    } else {
        i--;
    }
};

// let i = 0;

// while (i < 2) {
//         let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         q2 = +prompt("Во сколько обойдется?");
// //проверяем на строку(при prompt не обязательно), на отмену пользователем, чтобы не пусто, на длину
//     if ( typeof(q1) === 'string' && typeof(q1) != null && typeof(q2) != null 
//         && q1 != '' && q2 != '' && q1.length < 10) {
//         appData.expenses[q1] = q2;
//         i++;
//         } else {
//             i--;
//         }
// };

// let i = 0;

// do {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         q2 = +prompt("Во сколько обойдется?","");
// //проверяем на строку(при prompt не обязательно), на отмену пользователем, чтобы не пусто, на длину
//     if ( typeof(q1) === 'string' && typeof(q1) != null && typeof(q2) != null 
//         && q1 != '' && q2 != '' && q1.length < 10) {
//         appData.expenses[q1] = q2;
//         i++;
//     } else {
//         i--;
//     }
// }
// while (i < 2);

appData.budgetPerDay = appData.budget / 30;

alert("Your daily buget is " + appData.budgetPerDay + " EUR");

if ( appData.budgetPerDay < 50 ) {
    console.log("Это минималка");
} else if (appData.budgetPerDay > 50 && appData.budgetPerDay < 150 ) {
    console.log("Средний уровень достатка");
} else if ( appData.budgetPerDay > 150 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};

console.log(appData);