var display = document.querySelector(".display");
var output = document.querySelector(".output");
var inputs =""

function clearScreen(){
    console.log("clear in working..")
    inputs = 0;
    document.querySelector("#result").value=inputs;
}
function displayOutput(val){
    inputs += val 
    document.querySelector("#result").value=inputs;
    // display.append(output)
}

function calculate(){
    inputs = eval(inputs);
    document.querySelector("#result").value=inputs;
}

