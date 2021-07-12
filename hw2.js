console.log (true + false)
console.log (12 / "6")
console.log ("number" + 15 + 3)
console.log (15 + 3 + "number")
console.log ([1] > null)
console.log ("foo" + + "bar")
console.log ('true' == true)
console.log (null == '')
console.log (!!"false" == !!"true")
console.log ([] + null + 1)
console.log (0 || "0" && {})
console.log ([1,2,3] == [1,2,3])
console.log ({}+[]+{}+[1])
console.log (2/'5')
console.log (null + new Date())
console.log ("2" + "2" - "2")


let isAllowed= false
console.log (typeof isAllowed)
isAllowed= String(isAllowed)
console.log (typeof isAllowed)

let age= 18
console.log (typeof age)
age= Boolean(age)
console.log (typeof age)

let name= '18'
console.log (typeof '18')
name= Number(name)
console.log (typeof name)

console.log ("" + 1 + 0)
console.log ("" - 1 + 0)
console.log (true + false)
console.log (6 / "3")
console.log ("2" * "3")
console.log (4 + 5 + "px")
console.log ("$" + 4 + 5)
console.log ("4" - 2)
console.log ("4px" - 2)
console.log (7 / 0)
console.log ("  -9  " + 5)
console.log ("  -9  " - 5)
console.log (null + 1)
console.log (undefined + 1)
console.log (" \t \n" - 2)

console.log (null === +"\n0\n")


let number = prompt('Enter number', '')
if (+number > 0) {
    alert( '1' )
} else if  (+number < 0) {
    alert( '-1' ) }
else if (+number === 0) {
    alert('0')
} else {
    alert( 'Нужно вводить числа, а не быть редиской!' );  //Написала по условию, в браузере работает
}

let name = prompt('Какое «официальное» название JavaScript?', '')
if (name == 'ECMAScript') {
    alert( 'Верно!' )
} else {
    alert( 'Не знаете? ECMAScript!' )}    // написала по условию, в браузере работает

let result = (a + b < 4) ? 'Мало' : 'Много'  //переписала if с ?

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина': ''  //переписала if else на несколько ?


let browser = prompt('Какой браузер юзаешь, дружище?', '')
if (browser == 'Edge') {
    alert( "You've got the Edge!" )
} else if (browser == 'Chrome') {
    alert('Okay we support these browsers too')
}else if (browser == 'Firefox') {
    alert('Okay we support these browsers too')
}else if (browser == 'Safari') {
    alert('Okay we support these browsers too')
}else if (browser == 'Opera') {
    alert('Okay we support these browsers too')
}else {
    alert( 'We hope that this page looks ok!' )
}  //переписала switch на if else


const number = +prompt ('Введите число между 0 и 3', '')
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;

    case 2:
    case 3:
        alert("Вы ввели число 2, а может и 3");
        break;
    default:
        alert('Ну попросили же число между 0 и 3');
}   //переписала if else на switch