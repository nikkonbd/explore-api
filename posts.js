function postValue() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(sub => sub.json())
        .then(data => displayPost(data))
}

postValue();

function displayPost(posts) {
    const postSection = document.getElementById('post-section');
    for (const post of posts) {
        const divContain = document.createElement('div');
        divContain.classList.add('post');
        divContain.innerHTML = `
        <h3>UserId: ${post.userId} </h3>
        <h2>Title: ${post.title} </h2>
        <p>Description: ${post.body} </p>
        `
        postSection.appendChild(divContain);
    }
}

