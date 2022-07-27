const checkQuestionAnswer = (question, correctAnswer) => {
    let bartAnswer = prompt(question);
    bartAnswer = bartAnswer.trim().toLowerCase();
    if (correctAnswer.toLowerCase() === bartAnswer) {
        alert('verno');
    } else {
        alert('neverno');
    }
    
}
checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
checkQuestionAnswer('Цой жив или мертв?', 'мертв');
checkQuestionAnswer('Сколько пальцев на руке?', '5');
checkQuestionAnswer('Сыр это кошка или собака-мутант?', 'Кошка');