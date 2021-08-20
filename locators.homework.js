console.log(document.querySelector("input#orb-search-q")) //нашла поле поиска
a = $x('//*[@id="orb-search-q"]') //то же самое через икспас

console.log(document.querySelector("li.orb-nav-worklife").querySelector("a")) //нашла ссылку на один из разделов

console.log(document.querySelector('[href="https://www.bbc.com/worklife"]')) //по-другому нашла
a = $x('//*[@id="orb-nav-links"]/ul/li[5]/a') //нашла ссылку через xpath

console.log(document.querySelector("a.block-link__overlay-link")) //нашла картинку на главной сайта
a = $x ('//*[@id="page"]/section[3]/div/ul/li[1]/div/a') //то же самое с икс пас

console.log(document.querySelector('#orb-nav-links').querySelectorAll("li:nth-child(even)>a")) //четные ссылки
a = $x ('//*[@id="page"]/section[3]/div/ul/li[position() mod 2 = 0]/a') //четные с икспасом, непонятно работает

console.log(document.querySelector("h2.module__title")) //нашла элемент с датой
a = $x ('//*[@id="page"]/section[2]/h2') //нашла элемент с датой икспасом

