document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
         // Prevents default form submission

        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const dob = document.getElementById("dob").value;
        const degree = document.getElementById("degree").value;
        const genderMale = document.getElementById("male").checked;
        const genderFemale = document.getElementById("female").checked;
        const terms = document.getElementById("terms").checked;

        // Validation
        if (name === "" || age === "" || dob === "" || degree === "--Choose--") {
            alert("Please fill out all fields.");
            return;
        }

        if (!genderMale && !genderFemale) {
            alert("Please select a gender.");
            return;
        }

        if (!terms) {
            alert("You must agree to the Terms & Conditions.");
            return;
        }
        alert("Form submitted successfully!");
        form.submit();
    });
});
