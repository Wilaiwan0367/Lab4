function validateLogin() {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are correct (for demonstration purposes)
    if (username === "nam2001" && password === "3108") {
        document.getElementById("loginMessage").innerHTML = "your username and password are correct! you are logged in.";
    } else {
        document.getElementById("loginMessage").innerHTML = "your username or password is incorrect! please try again.";
    }
}