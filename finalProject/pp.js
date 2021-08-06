

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let gridItem = document.getElementsByClassName('grid-item')[0];
        for (const user of value){
            let div = document.createElement('div');
            div.innerText = user.id + ' '+ user.name;

            let btn = document.createElement('button');
            btn.innerText = 'details';
            btn.onclick = function () {
                window.location.href = `users-details.html?user=${JSON.stringify(user)}`;
            }
            
            div.append(btn);
            gridItem.append(div);
        }



    })

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },