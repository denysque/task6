//task 1
const name = 'Denys';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Vladilen';
const reasonText = 'Программист востребованная профессия';
const numberOfMonth = 1; 
let myInfoText =`Всем привет! Меня зовут, ${name}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
    Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;

    //task 2

    /* console.log(myInfoText.replaceAll('JavaScript','JAVASCRIPT'));
    console.log(myInfoText.length);
    console.log(`first: ${myInfoText[0]} last: ${myInfoText[288]}`);
    
    //*task3

    let userName = prompt('Как вас зовут?');
    userName = userName.toUpperCase().trim();
    alert(`Вас зовут ${userName}`); */

/*task  4

let userName = prompt('Как вас зовут?');
    userName = userName.toUpperCase().trim();
let userAge = prompt('Сколько вам лет?');
userAge = Number(userName.trim());
alert(`Вас зовут ${userName} и вам ${userAge} лет`); */

//task5

/*  const userString = prompt('Введите текст для обрезки');
let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');
startSliceIndex = Number(startSliceIndex);
endSliceIndex = Number(endSliceIndex);
const resultString = userString.trim().slice(startSliceIndex, endSliceIndex);
alert(`Результат: ${resultString}`);  */

//task6

/*const userText = prompt('Введите текст');
let wordFromText = prompt('Введите слово из текста');
let indexOfWord = userText.indexOf(wordFromText);
const resultText = userText.trim().slice(0, indexOfWord);
alert(`Результат: ${resultText}`); 
*/

/* ответ:

let userText = prompt('Введите текст');
userText = userText.trim();
let wordFromText = prompt('Введите слово из текста');
wordFromText = wordFromText.trim();

const indexOfWord = userText.indexOf(wordFromText);
const resultString = userText.slice(0, indexOfWord);
alert(`Результат: ${resultString}`)

*/

//task7

/*let javaScriptDescription = ('JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.');
    let lengthOfText = (javaScriptDescription.length); //278
    lengthOfText = Number;
    const middleOfTheText = lengthOfText / 2 ;
    console.log (middleOfTheText);
    javaScriptDescription = javaScriptDescription.slice(0, 139).replaceAll('а','А').replaceAll(' ','').repeat(3);
    console.log(javaScriptDescription);
    console.log(javaScriptDescription[Math.floor((javaScriptDescription.length)/2)]);
*/
let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
const middleIndex = Math.floor(javaScriptDescription.length / 2);
javaScriptDescription = javaScriptDescription
    .slice(0, middleIndex)
    .replaceAll('а', 'А')
    .replaceAll(' ', '')
    .repeat(3)
const updatedMiddleIndex = Math.floor(javaScriptDescription.length / 2);
console.log(javaScriptDescription[updatedMiddleIndex]);
console.log(javaScriptDescription);




