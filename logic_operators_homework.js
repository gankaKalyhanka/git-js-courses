
let age = prompt('Сколько тебе лет?', '')
if (age>=14 && age<=90) {
    alert('Ты нам подходишь!')
}
else
{alert('Сорре, в следующий раз')
}  //сделала проверку с помощью логического оператора


let age = prompt('Сколько тебе лет?', '')
if (age>=!14 && age<=!90) {
    alert('Ты нам подходишь!')
}
else
{alert('Сорре, в следующий раз')
}   //переписала предыдущую проверку с использованием !


console.log( null || 2 || undefined );
console.log( 1 && null && 2 );
console.log( console.log(1) || 2 || console.log(3) );
console.log( console.log(1) && console.log(2) );
console.log( null || 2 && 3 || 4 );


let age = prompt('Сколько тебе лет?', '')
if (age<=14 || age>=90) {
    alert('Ты нам подходишь!')
}
else
{alert('Сорре, в следующий раз')
}   //переписала предыдущую проверку без использования !


let user = prompt('Кто там?', '')
if (user == 'Админ')
{
    let password = prompt('Пароль?', '')
    alert (password)
    if (password == 'Я главный')
    {alert ('Здравствуйте')}
    else if (password == '' || password == null)
    {alert ('Отменено')}
    else {alert ('Неверный пароль')}
}
else if (user == null || user == '')
{alert('Отменено')
}
else
{alert('Я вас не знаю')
}

//код, который будет спрашивать логин с помощью prompt
// в браузере все работает

