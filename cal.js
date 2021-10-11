//Function to get values from text input
getValue = function(){
    
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    resultObject = {
        "number1" : number1,
        "number2" : number2,
    }
    return resultObject;
}

//plus Operation

plusbutton = document.getElementById("plusButton");
plusOperation = function(){

    numberValues = getValue();

    sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);

    result = document.getElementById("result");
    result.innerText = sum;
}

plusButton.addEventListener("click" , plusOperation)

//minusOperation

minusButton = document.getElementById("minusButton");
minusOperation = function(){
  
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    different = parseInt(number1.value) - parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = different;
}

minusButton.addEventListener("click" , minusOperation)



mulButton = document.getElementById("mulButton");
mulOperation = function(){
  
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    different = parseInt(number1.value) * parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = different;
}

mulButton.addEventListener("click" , mulOperation)



divButton = document.getElementById("divButton");
divOperation = function(){
  
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    different = parseInt(number1.value) / parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = different;
}

divButton.addEventListener("click" , divOperation)


