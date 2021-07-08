let i = 3;

while (i) {
    console.log( i-- );
} //цикл остановится на выведении 1, т.к. при i=0 будет false


let i = 0;
while (++i < 5) alert( i );//здесь покажет 1, 2, 3, 4

let i = 0;
while (i++ < 5) alert( i ); //здесь покажет 1, 2, 3, 4, 5

for (let i = 0; i < 5; i++) alert( i ); //выведется 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i ); //выведется 1, 2, 3, 4

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log( i )
    }
}


let i = 0;
while (i < 3) {
    console.log( `number ${i}!`)
    i++
}


let a
do {
    a = prompt("Введите число, большее 100?", 0)
} while (a <= 100 || a == undefined)  //цикл, который предлагает prompt ввести число, большее 100


