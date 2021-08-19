let userWrap = document.getElementById('users');

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then( value => value.json())
    .then(value => {
        for (let user of value){
            let blockForEveryoneUser = document.createElement('div');
            let userName = document.createElement('p');
            userName.innerText=`${user.id} ${user.name}`;
            let userButton = document.createElement("button")
            userButton.innerText = 'user-details';
            userButton.onclick=function () {
                window.location.href = `user-details/user-details.html?user=${JSON.stringify(user)}`
            }

            blockForEveryoneUser.append(userName);
            blockForEveryoneUser.append(userButton);
            userWrap.append(blockForEveryoneUser);

        }
    })