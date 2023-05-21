

function validLogIn() {
    //alert(`Hello world password`);
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username.trim() === '') {
        alert('Invalid username');
        return;
    }
    if (password.trim() === '') {
        alert('Invalid password');
        return;
    }

    if (username === "admin" && password === "Admin1234@") {
        alert('Login Successful!'+username+' '+password);
        window.location.href = '../home.html';
    }
    else {
        alert('Not Vaild User Login!');
       //document.getElementById('username').value='';
       //document.getElementById('password').value=''; 
    }


}