const dateOfBirth = document.querySelector("#input-date-of-birth");
const luckyNumber = document.querySelector("#input-lucky-number");
const btnCheck = document.querySelector("#btn-check");

function isBirthDayLucky(){
    const date = dateOfBirth.value;
    const sum = calculateSum(date);
    console.log(sum)
}

function calculateSum(date){
    var sum=0;
    for(var i=0;i< date.length;i++){
        if(date[i]==="-")
            continue
        sum = sum + Number(date[i])
    }
    return sum
}

btnCheck.addEventListener('click',isBirthDayLucky)
