function commentsValue() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(sub => sub.json())
        .then(data => displayComments(data))
};

function displayComments(comments) {
    const commentsSec = document.getElementById('comments-section');
    for (const comment of comments) {
        const divSec = document.createElement('div');
        divSec.innerHTML = `
        <h4>Id: ${comment.id}</h4>
        <h4>Name: ${comment.name}</h4>
        <h5>Email: ${comment.email}</h5>
        <p>Description: ${comment.body}</p>
        `
        commentsSec.appendChild(divSec);
    }
}

commentsValue();