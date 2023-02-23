function displayUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(sub => sub.json())
        .then(data => displayUser(data))
}

// function displayUser(users) {
//     for (const user of users) {
//         console.log(user.name);
//     }
// }

function displayUser(users) {
    const ol = document.getElementById('user-list');
    for (const user of users) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ol.appendChild(li);
    }
}

