let request = new XMLHttpRequest();

//GET POST PUT...
request.addEventListener('readystatechange', ()=> {
    if(request.readyState === 4){
        console.log(request.responseText);
    }
})

request.open('GET','https://jsonplaceholder.typicode.com/posts/1');


request.send();
