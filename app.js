function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(sub => sub.json())
        .then(data => console.log(data));
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(sub => sub.json())
        .then(data => displayUsers(data))
}

function displayUsers1() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(sub => sub.json())
        .then(data => console.log(data))
}

function displayUsers(data) {
    console.log(data);
}