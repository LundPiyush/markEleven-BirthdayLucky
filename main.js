const dateOfBirth = document.querySelector("#input-date-of-birth");
const luckyNumber = document.querySelector("#input-lucky-number");
const btnCheck = document.querySelector("#btn-check");
const message = document.querySelector("#error-message");

function isBirthDayLucky(){
    const date = dateOfBirth.value;
    const luckyNo = luckyNumber.value;
    if(date === '')
        message.innerHTML = "Please enter Valid DOB";
    else if(luckyNo==='')
        message.innerHTML ="Please enter your lucky number"
    else if(date && luckyNo)
        if(luckyNo <0)
            message.innerHTML="Please enter lucky number greater than 0";
        else{
            calculateSum(date,luckyNo)
        }
}

function calculateSum(date,luckyNo){
    var sum=0;
    for(var i=0;i< date.length;i++){
        if(date[i]==="-")
            continue
        sum = sum + Number(date[i])
    }
    if(sum % luckyNo==0){
        message.innerHTML="Yay, your birthday is lucky"
    }
    else{
        message.innerHTML ="Oops! Your birthday is not lucky"
    }
}

btnCheck.addEventListener('click',isBirthDayLucky)
