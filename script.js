// =====================================
// LOGIN
// =====================================

const loginForm = document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value.trim();


        const password =
            document.getElementById("password").value.trim();


        if (email === "" || password === "") {

            alert("Please enter your email/phone and password.");

            return;
        }


        alert("Login successful!");


        window.location.href = "dashboard.html";

    });

}


// =====================================
// FORGOT PASSWORD
// =====================================

const forgotPassword =
    document.getElementById("forgotPassword");


if (forgotPassword) {

    forgotPassword.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Password reset link will be sent to your email or phone."
        );

    });

}


// =====================================
// GO TO SIGN UP
// =====================================

const signUpButton =
    document.getElementById("signUpButton");


if (signUpButton) {

    signUpButton.addEventListener("click", function () {

        window.location.href = "signup.html";

    });

}


// =====================================
// SIGN UP
// =====================================

const signupForm =
    document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const fullName =
            document.getElementById("fullName").value.trim();


        const email =
            document.getElementById("signupEmail").value.trim();


        const password =
            document.getElementById("signupPassword").value;


        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (
            fullName === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill in all fields.");

            return;
        }


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        alert("Account created successfully!");


        window.location.href = "index.html";

    });

}


// =====================================
// BACK TO LOGIN
// =====================================

const backToLogin =
    document.getElementById("backToLogin");


if (backToLogin) {

    backToLogin.addEventListener("click", function () {

        window.location.href = "index.html";

    });

}


// =====================================
// DASHBOARD SIDEBAR
// =====================================

const menuButton =
    document.getElementById("menuButton");


const sidebar =
    document.getElementById("sidebar");


if (menuButton && sidebar) {

    menuButton.addEventListener("click", function () {

        sidebar.classList.toggle("show");

    });

}


// =====================================
// DASHBOARD SEARCH
// =====================================

const dashboardSearch =
    document.getElementById("dashboardSearch");


if (dashboardSearch && sidebar) {

    dashboardSearch.addEventListener("input", function () {

        const searchText =
            dashboardSearch.value.toLowerCase().trim();


        const navLinks =
            sidebar.querySelectorAll(".nav-link");


        navLinks.forEach(function (link) {

            const text =
                link.textContent.toLowerCase();


            if (text.includes(searchText)) {

                link.style.display = "flex";

            } else {

                link.style.display = "none";

            }

        });

    });

}


// =====================================
// ACTIVE MENU
// =====================================

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });


        link.classList.add("active");

    });

});