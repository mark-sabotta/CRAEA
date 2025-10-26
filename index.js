//generate select options
//This list of school districts should be easier to maintain than one hard coded in the HTML
//It can also be used for backend validation
const Districts = [
    "District A",
    "District B",
    "District C",
    "District D",
    "Other/Not Listed"
];

const selectDistrict = document.getElementById("school-district");

Districts.forEach(districtName => {
    const option = document.createElement("option");
    option.value = districtName;
    option.textContent = districtName;
    selectDistrict.appendChild(option);
});


//Validation and form behavior
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    /*I prefer validation-schema objects, but for the scope of this mini-site,
    regex, in line felt more appropriate */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    form.addEventListener('submit', (event) => {
        // Prevent the page reload
        event.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        const emailValue = emailInput.value.trim();

        if (!emailRegex.test(emailValue)) {
            alert("Invalid email.");
        } else {
            const formData = {
                email: emailValue,
                schoolDistrict: form.querySelector('#school-district').value
            };
            const formJson = JSON.stringify(formData, null, 2);

            alert(`Validation passed\n\n${formJson}`);
        }
    });
});
