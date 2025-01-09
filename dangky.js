let form = document.querySelector('form');
let users = [];
function signUp(e) {
    e.preventDefault();
    let username = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;


    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
    }
    users.push({
        username: username,
        pass: pass,

    });
    localStorage.setItem('users',JSON.stringify(users));
    alert('person registered successfully');
    window.location.href = './dangnhap.html';
}
form.addEventListener('submit',signUp);      