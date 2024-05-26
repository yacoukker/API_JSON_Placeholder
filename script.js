function getUsers(){
    let request = new XMLHttpRequest();
    request.open('GET','https://jsonplaceholder.typicode.com/users') ;
    request.setRequestHeader('Content-type','application/json');
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
            let usersElm = document.querySelector('.users');
            let users = request.response;
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
        }
        else{
            alert("error");
        }
        
    }
    
}
function getPostes(val){
    let request = new XMLHttpRequest();
    request.open('GET',`https://jsonplaceholder.typicode.com/posts?userId=${val}`) ;
    request.setRequestHeader('Content-type','application/json');
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
            let response = request.response;
            let postsElm = document.querySelector('.posts');
            postsElm.innerHTML = '';
            for(post in response){
                let postData = document.createElement('div');
                let title = document.createElement('h4');
                let text = document.createElement('p');
                postData.setAttribute("class","post");
                title.appendChild(document.createTextNode(response[post].title));
                text.appendChild(document.createTextNode(response[post].body));
                postData.appendChild(title);
                postData.appendChild(text);
                postsElm.appendChild(postData);
            }
        }else{
            alert("error");
        }
    }
}
getUsers();