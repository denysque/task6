const question1 = 'JavaScript появился в 1995 году?';
const question2 = ' Спецификация JavaScript называется ECMAScript?';
const question3 = 'JavaScript был создан за 1 месяц?';

if (confirm (question1) == true) {
alert(' Верно!');
} else {
    alert('Неверно! JavaScript  появился в 1995 году');
}

if (confirm (question2) == true) {
    alert (' Верно!');
} else {
    alert (' Неверно! Спецификация JavaScript называется ECMAScript');
}

if (confirm (question3) == true) {
    alert ('Неверно! JavaScript был создан за 10 дней');
} else {
    alert ('Верно! JavaScript был создан за 10 дней');
}




