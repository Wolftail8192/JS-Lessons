// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

class Users {
    constructor(id, name, surname , email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;

    }

}
const Lola = new Users (1,Lola, Lolalay, lola.com, 2343-2343-23);
const Kola = new Users (1,Kola, Kolalay, Kola.com, 2343-2343-34);
const Zola = new Users (1,Zola, Zolalay, Zola.com, 2343-2343-56);
const Dola = new Users (1,Dola, Dolalay, Dola.com, 2343-2343-67);
const Mola = new Users (1,Mola, Molalay, Mola.com, 2343-2343-78);
const Rola = new Users (1,Rola, Rolalay, Rola.com, 2343-2343-89);
const Gola = new Users (1,Gola, Golalay, Gola.com, 2343-2343-90);
const Sola = new Users (1,Sola, Solalay, Sola.com, 2343-2343-98);
const Bola = new Users (1,Bola, Bolalay, Bola.com, 2343-2343-87);
const Jola = new Users (1,jola, Jolalay, Jola.com, 2343-2343-65);

console.log(lola);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let Users = [
    {id:1,name:Lola, surename:Lolalay, email:lola.com, phone:2343-2343-23},
    {id:1,name:Kola, surename:Kolalay, email:Kola.com, phone:2343-2343-23},
    {id:1,name:Zola, surename:Zolalay, email:Zola.com, phone:2343-2343-23},
    {id:1,name:Dola, surename:Dolalay, email:Dola.com, phone:2343-2343-23},
    {id:1,name:Mola, surename:Molalay, email:Mola.com, phone:2343-2343-23},
    {id:1,name:Rola, surename:Rolalay, email:Rola.com, phone:2343-2343-23},
    {id:1,name:Gola, surename:Golalay, email:Gola.com, phone:2343-2343-23},
    {id:1,name:Sola, surename:Solalay, email:Sola.com, phone:2343-2343-23},
    {id:1,name:Bola, surename:Bolalay, email:Bola.com, phone:2343-2343-23},
    {id:1,name:Jola, surename:Jolalay, email:Jola.com, phone:2343-2343-23},

    ];
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

let filter = Users.filter(function  (User){
    return user % 2 === 0;
});
console.log(filter);

let sort = Users.sort(function (current, next){
    return current-next;
})
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let Client = [
    {id:1,name:Lola, surename:Lolalay, email:lola.com, phone:2343-2343-23,order:(juice,milk,bread)},
    {id:1,name:Kola, surename:Kolalay, email:Kola.com, phone:2343-2343-23,order:(juice,milk,bread,potato)},
    {id:1,name:Zola, surename:Zolalay, email:Zola.com, phone:2343-2343-23,order:(juice,milk,bread,Ice cream)},
    {id:1,name:Dola, surename:Dolalay, email:Dola.com, phone:2343-2343-23,order:(juice,milk,bread,Butter)},
    {id:1,name:Mola, surename:Molalay, email:Mola.com, phone:2343-2343-23,order:(juice,milk,bread,Cottage cheese)},
    {id:1,name:Rola, surename:Rolalay, email:Rola.com, phone:2343-2343-23,order:(juice,milk,bread,
        Sour cream)},
    {id:1,name:Gola, surename:Golalay, email:Gola.com, phone:2343-2343-23,order:(juice,milk,bread,Eggs)},
    {id:1,name:Sola, surename:Solalay, email:Sola.com, phone:2343-2343-23,order:(juice,milk,bread,Yogurt)},
    {id:1,name:Bola, surename:Bolalay, email:Bola.com, phone:2343-2343-23,order:(juice,milk,bread,Cheese)},
    {id:1,name:Jola, surename:Jolalay, email:Jola.com, phone:2343-2343-23,order:(juice,milk,bread,Cheese,Ice cream)},

];

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort = Client.sort(function (order){
    return
})
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:

class Car {
    constructor(model, producter, age, maxspeed, enginevolume) {
        this.model = model;
        this.producter = producter;
        this.age = age;
        this.maxspeed = maxspeed;
        this.enginevolume = enginevolum;
    }
    info(){}
}

// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
class Car {
    constructor(model, producter, age, maxspeed, enginevolume) {
        this.model = model;
        this.producter = producter;
        this.age = age;
        this.maxspeed = maxspeed;
        this.enginevolume = enginevolum;
    }
    info(){
        return 'model - ${this.model}, producter - ${producter}, age - ${age}, maxspeed - ${maxspeed}, enginevolume - ${enginevolume}'
    }
}

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }









