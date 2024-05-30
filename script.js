function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .then(users => {
            let usersElm = document.querySelector('.users');
            for(usr in users){
                let li = document.createElement('li');
                let nameElm = document.createElement('span') ;
                let emailElm = document.createElement('span') ;
                li.setAttribute("class", "user") ;
                li.setAttribute("data-id", users[usr].id) ;
                nameElm.appendChild(document.createTextNode(users[usr].name));
                emailElm.appendChild(document.createTextNode(users[usr].email));
                li.appendChild(nameElm);
                li.appendChild(emailElm);
                usersElm.appendChild(li);
            } 
            let userS = document.querySelectorAll('.user');
            document.querySelector('.users li:first-child').classList.add('active');
            getPostes(1);
            userS.forEach(function (usR) {
                usR.addEventListener('click', function () {
                    userS.forEach((e)=>{
                        e.classList.remove('active');
                    })
                    usR.classList.toggle('active');
                    let dataIdUser = usR.getAttribute('data-id');
                    getPostes(dataIdUser);
                });
            }); 
        })
}
function getPostes(val){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${val}`)
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .then(posts => {
            let postsElm = document.querySelector('.posts');
            postsElm.innerHTML = '';
            for(post in posts){
                let postData = document.createElement('div');
                let title = document.createElement('h4');
                let text = document.createElement('p');
                postData.setAttribute("class","post");
                title.appendChild(document.createTextNode(posts[post].title));
                text.appendChild(document.createTextNode(posts[post].body));
                postData.appendChild(title);
                postData.appendChild(text);
                postsElm.appendChild(postData);
            }
        })
}
function gitUsersUsingAxios(){
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            let users = response.data;
            let usersElm = document.querySelector('.users');
            for(usr in users){
                let li = document.createElement('li');
                let nameElm = document.createElement('span') ;
                let emailElm = document.createElement('span') ;
                li.setAttribute("class", "user") ;
                li.setAttribute("data-id", users[usr].id) ;
                nameElm.appendChild(document.createTextNode(users[usr].name));
                emailElm.appendChild(document.createTextNode(users[usr].email));
                li.appendChild(nameElm);
                li.appendChild(emailElm);
                usersElm.appendChild(li);
            } 
            let userS = document.querySelectorAll('.user');
            document.querySelector('.users li:first-child').classList.add('active');
            getPostsUsingAxios(1);
            userS.forEach(function (usR) {
                usR.addEventListener('click', function () {
                    userS.forEach((e)=>{
                        e.classList.remove('active');
                    })
                    usR.classList.toggle('active');
                    let dataIdUser = usR.getAttribute('data-id');
                    getPostsUsingAxios(dataIdUser);
                });
            });
        })
        .catch(err => alert(err));
}
function getPostsUsingAxios(val){
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${val}`)
        .then(response => {
            let posts = response.data;
            let postsElm = document.querySelector('.posts');
            postsElm.innerHTML = '';
            for(post in posts){
                let postData = document.createElement('div');
                let title = document.createElement('h4');
                let text = document.createElement('p');
                postData.setAttribute("class","post");
                title.appendChild(document.createTextNode(posts[post].title));
                text.appendChild(document.createTextNode(posts[post].body));
                postData.appendChild(title);
                postData.appendChild(text);
                postsElm.appendChild(postData);
            }
        })
        .catch(err => alert(err));
}
//getUsers();
gitUsersUsingAxios();