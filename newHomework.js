let styles = ["Джаз", "Блюз"]
console.log (styles)
styles.push("Рок-н-ролл")
console.log (styles)
styles.splice(1, 1, "Классика")
console.log (styles)
console.log( styles.shift() )
styles.unshift("Рэп", "Регги") //добавить в конец,заменить значение в середине,удалить первыйй эл-т,вставить в начало
console.log(styles)

    ["Мне", "уже", "пора", "в", "отпуск"].forEach(console.log)//перебрала массив с вызовом каждого эл-та

let numbers = ['1', '2', '3']
let arrow = (numbers.join(';'))
console.log (arrow)
console.log (typeof(arrow))
let newArrow = arrow.split(',')
console.log(newArrow)
console.log (typeof(newArrow)) //преобразовала массив в строку и обратно

    ['Вася', 'Петя', 'Андрюша'].forEach((item, i, arr) => {
    console.log( `${item} hello!` )
})//добавила hello к каждому элементу массива

let array = ["Выходные", "скоро", "наступят"]
let secondArray = (Boolean(array))
console.log (typeof (secondArray)) //преобразовать массив в булен
