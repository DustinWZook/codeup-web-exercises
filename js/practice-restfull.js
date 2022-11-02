

fetch('https://dog.ceo/api/breeds/image/random')
.then(respone => respone.json())
.then(data => {
    // console.log(data)
    let randomDog = new Image()
    randomDog.src = data.message
    document.body.appendChild(randomDog);
})
    .catch(err => console.log(err))

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'my first post',
        body: "this is my first post",
        userId: 444,
    }),
    headers: {
        'content-type': 'applications/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))