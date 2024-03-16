
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Load user data from localStorage (if available)
var userData = JSON.parse(localStorage.getItem("userData")) || [];

function registerUser() {
    // Get the input values for registration
    var regUser = document.getElementById("regUser").value
    var regUsername = document.getElementById("regUsername").value;
    var regEmail = document.getElementById("regEmail").value;
    var regPassword = document.getElementById("regPassword").value;

    // Check if the username is already registered
    var existingUser = userData.find(user => user.username === regUsername);

    if (existingUser) {
        alert("Username already exists. Please choose a different one.");
    } else {
        // Create a new user object and add it to the userData array
        var newUser = {usercategory: regUser, username: regUsername, email: regEmail, password: regPassword };
        userData.push(newUser);

        // Save the updated userData array to localStorage
        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Registration successful!");
        clearRegistrationForm();
        container.classList.remove("right-panel-active");
    }
}



function validateLogin() {
    // Get the input values for login
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password match any user in userData
    var user = userData.find(user => user.username === username && user.password === password);

    if (user) {
        // Display a success message
        document.getElementById("errorMessage").textContent = "Login successful!";
        clearLoginForm();
        if(user.usercategory === "Farmer"){
            window.location.href = "farmer-ui.html";
        }
        else if(user.usercategory === "Vendor"){
            window.location.href = "vendor-ui.html";
        }
        else if(user.usercategory === "Expert"){
            window.location.href = "expert-ui.html";
        }
    } else {
        // Display an error message
        document.getElementById("errorMessage").textContent = "Invalid username or password. Please try again.";
    }
}

function clearRegistrationForm() {
    document.getElementById("regUsername").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regPassword").value = "";
}

function clearLoginForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

