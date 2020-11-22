const btn = document.querySelector('.btn');
const content = document.querySelector('.content');


const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data)

    let users = data.map(user => {
        return `
        <p>name: ${user.name}, email: ${user.email}</p>
        <p>username: ${user.username}</p>
        <p>address: ${user.address.street} ${user.address.suite}${user.address.city}</p>
        `
    })
    content.innerHTML = users.join('');
};


btn.addEventListener('click', getData)


