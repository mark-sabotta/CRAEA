//form behavior
//validation
//generate select options
//This list of 
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
    selectElement.appendChild(option);
});
