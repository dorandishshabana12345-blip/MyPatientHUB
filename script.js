
// LOGIN

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



// FORGOT PASSWORD


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


// GO TO SIGN UP

const signUpButton =
    document.getElementById("signUpButton");


if (signUpButton) {

    signUpButton.addEventListener("click", function () {

        window.location.href = "signup.html";

    });

}



// SIGN UP


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


// BACK TO LOGIN


const backToLogin =
    document.getElementById("backToLogin");


if (backToLogin) {

    backToLogin.addEventListener("click", function () {

        window.location.href = "index.html";

    });

}


// DASHBOARD SIDEBAR


const menuButton =
    document.getElementById("menuButton");


const sidebar =
    document.getElementById("sidebar");


if (menuButton && sidebar) {

    menuButton.addEventListener("click", function () {

        sidebar.classList.toggle("show");

    });

}



// DASHBOARD SEARCH


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



// ACTIVE MENU


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
// =========================
// FIND DOCTOR
// =========================

const doctorSearch = document.getElementById("doctorSearch");
const locationSearch = document.getElementById("locationSearch");

const searchDoctorBtn = document.getElementById("searchDoctorBtn");

const specialtyFilter =
    document.getElementById("specialtyFilter");

const genderFilter =
    document.getElementById("genderFilter");

const conditionFilter =
    document.getElementById("conditionFilter");

const languageFilter =
    document.getElementById("languageFilter");

const clearFilters =
    document.getElementById("clearFilters");

const doctorList =
    document.getElementById("doctorList");

const doctors =
    document.querySelectorAll(".doctor-item");

const noDoctorResult =
    document.getElementById("noDoctorResult");

const mapBtn =
    document.getElementById("mapBtn");

const listBtn =
    document.getElementById("listBtn");

const doctorMap =
    document.getElementById("doctorMap");


// SEARCH + FILTER FUNCTION

function filterDoctors() {

    const searchText =
        doctorSearch.value.toLowerCase().trim();

    const locationText =
        locationSearch.value.toLowerCase().trim();

    const specialty =
        specialtyFilter.value.toLowerCase();

    const gender =
        genderFilter.value.toLowerCase();

    const condition =
        conditionFilter.value.toLowerCase();

    const language =
        languageFilter.value.toLowerCase();

    let found = 0;


    doctors.forEach(function (doctor) {

        const doctorText =
            doctor.textContent.toLowerCase();

        const doctorSpecialty =
            doctor.dataset.specialty;

        const doctorGender =
            doctor.dataset.gender;

        const doctorCondition =
            doctor.dataset.condition;

        const doctorLanguage =
            doctor.dataset.language;

        const doctorLocation =
            doctor.dataset.location;


        const searchMatch =
            doctorText.includes(searchText);

        const locationMatch =
            doctorLocation.includes(locationText);

        const specialtyMatch =
            specialty === "" ||
            doctorSpecialty === specialty;

        const genderMatch =
            gender === "" ||
            doctorGender === gender;

        const conditionMatch =
            condition === "" ||
            doctorCondition === condition;

        const languageMatch =
            language === "" ||
            doctorLanguage.includes(language);


        if (
            searchMatch &&
            locationMatch &&
            specialtyMatch &&
            genderMatch &&
            conditionMatch &&
            languageMatch
        ) {

            doctor.style.display = "flex";

            found++;

        } else {

            doctor.style.display = "none";

        }

    });


    if (found === 0) {

        noDoctorResult.style.display = "block";

    } else {

        noDoctorResult.style.display = "none";

    }

}


// SEARCH BUTTON

if (searchDoctorBtn) {

    searchDoctorBtn.addEventListener(
        "click",
        filterDoctors
    );

}


// SEARCH WHEN PRESS ENTER

if (doctorSearch) {

    doctorSearch.addEventListener(
        "keyup",
        function (event) {

            if (event.key === "Enter") {

                filterDoctors();

            }

        }
    );

}


// FILTERS

if (specialtyFilter) {

    specialtyFilter.addEventListener(
        "change",
        filterDoctors
    );

}

if (genderFilter) {

    genderFilter.addEventListener(
        "change",
        filterDoctors
    );

}

if (conditionFilter) {

    conditionFilter.addEventListener(
        "change",
        filterDoctors
    );

}

if (languageFilter) {

    languageFilter.addEventListener(
        "change",
        filterDoctors
    );

}


// CLEAR FILTERS

if (clearFilters) {

    clearFilters.addEventListener(
        "click",
        function () {

            doctorSearch.value = "";

            locationSearch.value = "";

            specialtyFilter.value = "";

            genderFilter.value = "";

            conditionFilter.value = "";

            languageFilter.value = "";

            filterDoctors();

        }
    );

}


// LIST BUTTON

if (listBtn) {

    listBtn.addEventListener(
        "click",
        function () {

            doctorList.style.display = "block";

            doctorMap.style.display = "none";

            listBtn.classList.add("active-view");

            mapBtn.classList.remove("active-view");

        }
    );

}


// MAP BUTTON

if (mapBtn) {

    mapBtn.addEventListener(
        "click",
        function () {

            doctorList.style.display = "none";

            doctorMap.style.display = "block";

            mapBtn.classList.add("active-view");

            listBtn.classList.remove("active-view");

        }
    );

}


// NEXT AVAILABLE BUTTONS

const availableButtons =
    document.querySelectorAll(".available-btn");

availableButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const doctorName =
                button
                    .closest(".doctor-item")
                    .querySelector("h2")
                    .textContent;

            alert(
                "Next available appointment for " +
                doctorName +
                " will be available soon."
            );

        }
    );

});
// FIND CLINIC

const clinicSearch = document.getElementById("clinicSearch");
const clinicLocation = document.getElementById("clinicLocation");
const searchClinicBtn = document.getElementById("searchClinicBtn");
const clinicType = document.getElementById("clinicType");
const clinicService = document.getElementById("clinicService");
const clearClinic = document.getElementById("clearClinic");
const clinicItems = document.querySelectorAll(".clinic-item");
const noClinic = document.getElementById("noClinic");

function filterClinics() {

    let search = clinicSearch.value.toLowerCase();
    let location = clinicLocation.value.toLowerCase();
    let type = clinicType.value;
    let service = clinicService.value;
    let found = 0;

    clinicItems.forEach(function(clinic) {

        let text = clinic.textContent.toLowerCase();

        let matchSearch = text.includes(search);
        let matchLocation =
            clinic.dataset.location.includes(location);

        let matchType =
            type === "" || clinic.dataset.type === type;

        let matchService =
            service === "" || clinic.dataset.service === service;

        if (matchSearch && matchLocation &&
            matchType && matchService) {

            clinic.style.display = "flex";
            found++;

        } else {
            clinic.style.display = "none";
        }
    });

    noClinic.style.display =
        found === 0 ? "block" : "none";
}

if (searchClinicBtn) {
    searchClinicBtn.addEventListener("click", filterClinics);
}

clinicType.addEventListener("change", filterClinics);
clinicService.addEventListener("change", filterClinics);

clearClinic.addEventListener("click", function() {

    clinicSearch.value = "";
    clinicLocation.value = "";
    clinicType.value = "";
    clinicService.value = "";

    filterClinics();
});

const clinicListBtn =
    document.getElementById("clinicListBtn");

const clinicMapBtn =
    document.getElementById("clinicMapBtn");

const clinicList =
    document.getElementById("clinicList");

const clinicMap =
    document.getElementById("clinicMap");

clinicListBtn.addEventListener("click", function() {

    clinicList.style.display = "block";
    clinicMap.style.display = "none";

    clinicListBtn.classList.add("active-clinic");
    clinicMapBtn.classList.remove("active-clinic");
});

clinicMapBtn.addEventListener("click", function() {

    clinicList.style.display = "none";
    clinicMap.style.display = "flex";

    clinicMapBtn.classList.add("active-clinic");
    clinicListBtn.classList.remove("active-clinic");
});

document.querySelectorAll(".clinic-btn").forEach(function(button) {

    button.addEventListener("click", function() {

        const name =
            button.closest(".clinic-item")
            .querySelector("h2").textContent;

        alert(name + " selected.");

    });

});