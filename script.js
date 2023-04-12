let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let formInput = document.getElementById("calculate");
let notif = document.getElementById("notif");

weightInput.focus(); // membuat focus input saat pertama kali website direload

// console.log(weightInput);
// console.log(heightInput);

formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    let weight = weightInput.value 
    let height = heightInput.value

    let resultBMI = weight / ((height / 100) ** 2);

    console.log(resultBMI);

    // BMI Category
    let category = " "
    if (resultBMI < 18.5){
        category = "Underweight";
    } else if (resultBMI >= 18.5 && resultBMI <= 24.9){
        category = "Normal Weight";
    } else if (resultBMI >= 25 && resultBMI <= 29.9){
        category = "Overweight";
    } else {
        category = "Obesity";
    }
    
    // reset form
    weightInput.value = "";
    heightInput.value = "";

    weightInput.focus();

    // menyisipkan text ke dalam element HTML
    notif.innerHTML = `Your BMI is <b>${resultBMI.toFixed(1)}</b> which mean You are <b>${category}</b>`;
});