document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // stop form reload

            const studentId = document.getElementById("student_id").value.trim();
            const password = document.getElementById("password").value.trim();

            const validStudentId = "233014214";
            const validPassword = "6219";

            if (studentId === validStudentId && password === validPassword) {
                // ✅ Store login session
                sessionStorage.setItem("loggedIn", "true");

                // ✅ Redirect without history
                window.location.replace("home.html");
            } else {
                alert("Invalid Student ID or Password!");
            }
        });
    }

    const forgotBtn = document.getElementById("forgotBtn");
    if (forgotBtn) {
        forgotBtn.onclick = () => {
            alert("Contact admin to recover account");
        };
    }

    const registerBtn = document.getElementById("registerBtn");
    if (registerBtn) {
        registerBtn.onclick = () => {
            window.location.href = "register.html";
        };
    }
});

// 🔐 Protect secured pages
if (window.location.pathname !== "/index.html") {
    if (sessionStorage.getItem("loggedIn") !== "true") {
        window.location.replace("index.html");
    }
}

// 🚪 Logout function
function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.replace("index.html");
}



// toggling featchers for cg count
// document.getElementById("cg-count-btn").addEventListener("click", function () {
//     document.getElementById("cg-count-parent").style.display = "block"
    

// });

document.getElementById("cg-count-btn").addEventListener("click", function () {
    const cgSection = document.getElementById("cg-count-parent");

    if (cgSection.style.display === "none" || cgSection.style.display === "") {
        cgSection.style.display = "block";
    } else {
        cgSection.style.display = "none";
    }
});







//cg calculation

function calculateCGPA() {
    let completedCredits = parseFloat(document.getElementById("credit").value);
    let currentCGPA = parseFloat(document.getElementById("last_cgpa").value);
    let upcomingCredits = parseFloat(document.getElementById("upcoming_credit").value);
    let targetCGPA = parseFloat(document.getElementById("target_cgpa").value);

    // Required GPA formula
    let requiredGPA =
        ((targetCGPA * (completedCredits + upcomingCredits)) -
            (currentCGPA * completedCredits)) / upcomingCredits;

    let message = "";

    if (requiredGPA > 4.0) {
        message = `
        ❌ <b>Target CGPA is NOT achievable.</b><br><br>
        To reach CGPA <b>${targetCGPA}</b>, you would need a semester GPA of 
        <b>${requiredGPA.toFixed(2)}</b>, which is higher than the maximum possible GPA (4.00).
        `;
    }
    else if (requiredGPA < 0) {
        message = `
        ✅ <b>Congratulations!</b><br><br>
        Your current performance already meets or exceeds the target CGPA.
        `;
    }
    else if (requiredGPA >= 3.75) {
        message = `
        ⚠️ <b>Very Challenging!</b><br><br>
        You need a GPA of <b>${requiredGPA.toFixed(2)}</b>. 
        This requires excellent academic performance.
        `;
    }
    else {
        message = `
        ✅ <b>Achievable Target</b><br><br>
        You need a GPA of <b>${requiredGPA.toFixed(2)}</b> in the upcoming semester.
        Stay consistent and focused!
        `;
    }

    document.getElementById("resultText").innerHTML = message;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
