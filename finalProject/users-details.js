let usersDetailsWrap = document.getElementsByClassName('usersDetailsWrap')[0];
usersDetailsWrap.style.display = 'grid';
usersDetailsWrap.style.gridTemplateColumns= '1fr';
usersDetailsWrap.style.fontSize = '20px';
usersDetailsWrap.style.gap = '20px';
usersDetailsWrap.style.flexDirection = 'column';
usersDetailsWrap.style.alignItems = 'center';
usersDetailsWrap.style.justifyContent = 'center';
usersDetailsWrap.style.display = 'flex';



fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(value => value.json())
    .then(value => {

        for (const user of value) {
            let div = document.createElement('div');
            div.style.background = 'green';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'center';
            div.style.display = 'flex';
            div.style.flexDirection = 'column';
            div.style.textAlign = 'center';
            div.style.width = '100%';

            let url = new URL(location);
            let JOSINUser = url.searchParams.get('user');
            div.innerText = JSON.stringify(user, null, 2);
            let btn = document.createElement('button');
            btn.style.width = '90%';
            btn.style.background = 'yellow';
            btn.innerText = 'post of current user';
            btn.onclick = function () {
                window.location.href = `post-details.html?post=${JSON.stringify(user)}`;
                fetch(`https://jsonplaceholder.typicode.com/posts`)
                    .then(value => value.json())
                    .then(value => {
                        let usersPosts = document.getElementsByClassName('users-posts');
                        for (const post of value){
                            let div = document.createElement('div');
                            div.innerText = usersPosts;
                        }
                    })
            }
            div.append(btn);
            usersDetailsWrap.append(div);
        }
    })