 document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if (email === "pathmasri1372005@gmail.com" && password === "12345") {
                localStorage.setItem("isLoggedIn", "true"); 
                window.location.href ="index.html"; 
            } else {
                alert("Invalid Email or Password");
            }
        });
