const bookNow = document.getElementById('submitBtn');
    bookNow.addEventListener('click',function(event){
        const output = document.getElementById('bookNow');
        output.style.display = 'block';
})

function incrementDecrement(plusMinus,isIncrement){
    const getInputField = document.getElementById(plusMinus+'Field');
    const inputFieldNumber = parseInt(getInputField.value);
    let newCount = inputFieldNumber;
        if(isIncrement==true){
             newCount = inputFieldNumber+1;
        }
        if(isIncrement == false && inputFieldNumber>0){
             newCount = inputFieldNumber-1;
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

    document.getElementById('totalPrice').innerText = '$' +subTotal;
    console.log(subTotal);

    const vat = subTotal*0.1;
    document.getElementById('vat-amount').innerText = '$'+vat;

    const finalValue = vat+subTotal;
    document.getElementById('grandTotal').innerText = '$'+finalValue;


    //for bookNow button 
    document.getElementById('totalTicket1').innerHTML = "First Class Ticket: "+firstNumber;
    document.getElementById('totalTicket2').innerHTML = "Economy Ticket: "+economyNumber;
    document.getElementById('bookNowTotal').innerText = "Total Amount: "+finalValue;
}

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


