const jobType = 'dancer';
if (jobType === 'host') {
    console.log('6000r');
} else if (jobType === 'waiter') {
    console.log('2000r');
} else if (jobType === 'dancer') {
    console.log('3000r')
} else {
    console.log('ЗП не определена');
} 

//switch

switch(jobType) {
    case 'host':
    console.log('6000r');
    break;
    case 'waiter':
        console.log('2000r');
        break;
        case 'dancer':
            console.log('3000r');
            break;
            default:
                console.log('ЗП не определена');
}

// ?  замена if else
const favoriteSport = 'гребля';
/*let message = '';
 if (favoriteDrink === 'Китайский чай') {
     message = ' Ваш любимый напиток - это китайский чай';
 } else {
     message = 'Тогда ваш любимый напиток - кофе'
 }
 console.log('message', message);
*/
 // ?

 const message = favoriteSport === 'ММА'
 ? 'Ваш любимый спорт это ММА'
 :  'Вы скорее всего любите спокойный спорт';
 console.log('massage', message);