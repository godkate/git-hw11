let numOrStr = prompt('input number or string');
console.log(numOrStr)

/*if (numOrStr === null) {
    console.log('ви скасували')
} else if (numOrStr.trim() === '') {
    console.log('Empty String');
} else if (isNaN(+numOrStr)) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}*/

switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
    case '':
    case ' ':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
        //Цей кейс не працює і я не розумію чому. Будь ласка, коли будеш перевіряти цю домашку, поясни.
    default:
        console.log('OK!');
}