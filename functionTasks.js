function checkAge(age) {
    return (age >= 18) ? true : confirm('Родители разрешили?') } //переписала функцию с ?


function checkAge(age) {
    return (age >= 18) || confirm('Родители разрешили?')
}   //переписала функцию с ||

function min(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
} //функция, которая возвращает меньшее из чисел a и b


function pow (x, n) {
    let result = x
    for (let i = 1; i < n; i++) {
        result *= x
    }
    return result
}
let x = prompt(x?)
let n = prompt(n?)

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`)
} else {
    alert( pow(x, n) )
}  //функция для возведения числа в степень


function sum(a,b) {
    return (a+b)
}
let result =sum(7,3)
console.log(result)


function name() {
    let currentUserName
    currentUsername = prompt('What is your name?')
    if (currentUsername === 'Anna')     {
        return console.log('Hello, Anna')
}    else {
        return console.log('Hello, my dear friend')
}
}

name()   //Если мое имя, здоровается со мной


function typeOfElement (a) {
    return typeof(a)
}
console.log (typeOfElement(true))
console.log (typeOfElement(2))
console.log (typeOfElement('true')) //функция для вызова типа элемента


[12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964].filter(item => item % 2 === 0)

//выбор четных элементов массива (возвращает новый массив)