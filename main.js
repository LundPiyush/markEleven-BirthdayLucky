const dateOfBirth = document.querySelector("#input-date-of-birth");
const luckyNumber = document.querySelector("#input-lucky-number");
const btnCheck = document.querySelector("#btn-check");

btnCheck.addEventListener('click',function getValues(){
    console.log(dateOfBirth.value,luckyNumber.value)
})
