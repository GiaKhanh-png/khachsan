let form = document.querySelector("form");
function login(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if (username == users[i].username) {
            alert("login successful");
            window.location.href = "sanpham.html";
            return;
        }
    }
    alert("Wrong username or password");
}
form.addEventListener("submit", login);