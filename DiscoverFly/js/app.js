const bookNow = document.getElementById('submitBtn');
    bookNow.addEventListener('click',function(event){
    console.log("clicked");
})

function incrementDecrement(plusMinus,isIncrement){
    const getInputField = document.getElementById(plusMinus+'Field');
    const inputFieldNumber = parseInt(getInputField.value);
        if(isIncrement==true){
            var newCount = inputFieldNumber+1;
        }
        if(isIncrement == false && inputFieldNumber>0){
            var newCount = inputFieldNumber-1;
        }
    getInputField.value = newCount;
    console.log(getInputField);
    // const totalValue = newCount * 150;
    let totalValue = 0;
    if(plusMinus == 'firstClass'){
        totalValue = newCount*150;
    }
    if(plusMinus == 'economy'){
        totalValue = newCount*100;
    }
    document.getElementById(plusMinus+'Total').innerText = "First Class $"+totalValue;
    console.log(totalValue);
    calculateSubTotal();
}

function calculateSubTotal(){
    const firstInp = document.getElementById('firstClassField');
    const firstNumber = parseInt(firstInp.value);

    const economyInp = document.getElementById('economyField');
    const economyNumber = parseInt(economyInp.value);

    const subTotal = firstNumber*150 + economyNumber*100;

    document.getElementById('totalPrice').innerText = '$' + subTotal;
    console.log(subTotal);

    const vat = subTotal*0.1;
    document.getElementById('vat-amount').innerText = '$'+vat;

    const finalValue = vat+subTotal;
    document.getElementById('grandTotal').innerText = '$'+finalValue;
}

// function getInput(category){
//     const fieldInput = document.getElementById(category+'Field');
//     const fieldNumber = parseInt(fieldInput.value);
//     return fieldNumber;
// }

// function incrementDecrement(plusMinus,isIncrement){
//     const firstClassInput = document.getElementById(plusMinus+'Field');
//     const firstClassNumber = parseInt(firstClassInput.value);
//         if(isIncrement==true){
//             var newCountPlus = firstClassNumber+1;
//         }
//         if(isIncrement == false && firstClassNumber>0){
//             var newCountPlus = firstClassNumber-1;
//         }
//     firstClassInput.value = newCountPlus;
//     console.log(firstClassNumber);
//     const firstTotal = newCountPlus * 150;
//     document.getElementById(plusMinus+'Total').innerText = "First Class $"+firstTotal;
//     console.log(firstTotal);
// }

//First Class Increment
document.getElementById('first-increment').addEventListener('click',function(){
    incrementDecrement('firstClass',true);
})
//First Class Decrement
document.getElementById('first-decrement').addEventListener('click',function(){
    incrementDecrement('firstClass',false);
})
//Economy increment
document.getElementById('economy-increment').addEventListener('click',function(){
    incrementDecrement('economy',true);
})
//Economy decrement
document.getElementById('economy-decrement').addEventListener('click',function(){
    incrementDecrement('economy',false);
})



//First Class
// function First_incrementDecrement(isIncrement){
//     const firstClassInput = document.getElementById('firstClassField');
//     const firstClassNumber = parseInt(firstClassInput.value);
//         if(isIncrement==true){
//             var newCountPlus = firstClassNumber+1;
//         }
//         if(isIncrement == false && firstClassNumber>0){
//             var newCountPlus = firstClassNumber-1;
//         }
//     firstClassInput.value = newCountPlus;
//     console.log(firstClassNumber);
//     const firstTotal = newCountPlus * 150;
//     document.getElementById('firstTotal').innerText = "First Class $"+firstTotal;
//     console.log(firstTotal);
// }

//Economy
// function Economy_incrementDecrement(isIncrement){
//     const economyClassInput = document.getElementById('economyField');
//     const economyClassNumber = parseInt(economyClassInput.value);
//         if(isIncrement==true){
//             var newCountPlus = economyClassNumber+1;
//         }
//         if(isIncrement == false && economyClassNumber>0){
//             var newCountPlus = economyClassNumber-1;
//         }
//     economyClassInput.value = newCountPlus;
//     console.log(economyClassNumber);
//     const economyTotal = newCountPlus * 100;
//     document.getElementById('economyTotal').innerText = "First Class $"+economyTotal;
//     console.log(economyTotal);
//}

// //First Class Increment
// document.getElementById('first-increment').addEventListener('click',function(){
//     First_incrementDecrement('firstClass',true);
// })
// //First Class Decrement
// document.getElementById('first-decrement').addEventListener('click',function(){
//     First_incrementDecrement('firstClass',false);
// })
// //Economy increment
// document.getElementById('economy-increment').addEventListener('click',function(){
//     Economy_incrementDecrement('economy',true);
// })
// //Economy decrement
// document.getElementById('economy-decrement').addEventListener('click',function(){
//     Economy_incrementDecrement('economy',false);
// })