//form behavior
//validation
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
