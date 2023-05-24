

function Register() {

     var fullname = document.getElementById('fname').value;
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     var confrimpassword = document.getElementById('rpassword').value;

     //alert(fullname+' '+email+' '+password+' '+confrimpassword+' ')
     var fullNameRegex = /^[a-zA-Z]+$/;
     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;
     if (fullName.trim() == "") {
       alert("Please enter your full name.");
        return;
     }
     if (password.trim() == "") {
       alert("Please enter your email.");
        return;
     }
     if (email.trim() == "") {
       alert("Please enter your email.");
        return;
     }
     if(!fullNameRegex.test(fullname){
         alert('Invalid fullname');
         return;
     }
   

     if (!emailRegex.test(email)) {
         alert('Invalid email address.');
         return;
     }

     if (!passwordRegex.test(password)) {
         alert('Invalid password. Password must be at least 8 characters long, contain at least one letter and one number.');
         return;
     }

     if (password !== confirmPassword) {
         alert('Passwords do not match.');
         return;
     }

    // Further registration processing if validation passes
    // For simplicity, let's just display an alert for now
    alert('Registration successful!');

}
