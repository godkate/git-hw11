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

switch (numOrStr && numOrStr.trim() && isNaN(+numOrStr)) {
    case null:
        console.log('ви скасували');
        break;
    case '':
    case ' ':
        console.log('Empty String');
        break;
    case true:
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}