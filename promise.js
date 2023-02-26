const inputId = document.getElementsByTagName('input')[0];
const buttonId = document.querySelectorAll('#btn_post')[0];
const post = document.querySelectorAll('.post')[0];
const ulElComments = document.querySelector('ul');
const comments = document.querySelectorAll('.comments')[0];

function idSearch(){
    fetch(`https://jsonplaceholder.typicode.com/posts/${inputId.value}`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(displayPost)
        .catch(error => {
          console.log(`Error`, error)
        })
}
buttonId.addEventListener('click', idSearch);

function displayPost(elementPost){
    const elPost = document.createElement('span');
    elPost.className = 'post_text';
    elPost.innerText = elementPost.body;
    const btnComments = document.createElement('button');
    btnComments.innerText = 'Display comments';
    btnComments.className = 'comments_btn';
    btnComments.addEventListener('click', commentsSearch);
    post.append(elPost);
    elPost.append(btnComments);
}

function commentsSearch(){
    fetch(`https://jsonplaceholder.typicode.com/posts/${inputId.value}/comments`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(displayComments)
        .catch(error => {
            console.log(`Error`, error)
          })
}

function displayComments(arr){
    arr.forEach(elementPost => {
        const elComments = document.createElement('li');
        elComments.innerText = elementPost.body;
        comments.append(elComments);
    })
}