function calculate(operation) {
    // debugger
    let result;
    const number1 = document.getElementById("num1").value;
    const number2 = document.getElementById("num2").value;
    switch (operation) {
        case "plus":
            result = Number(number1) + Number(number2);
            document.getElementById("result").innerHTML= result;
            break;
        case "minus":
            result = number1 - number2;
            document.getElementById("result").innerHTML= result;
            break;
            case "multiply":
            result = number1 * number2;
            document.getElementById("result").innerHTML= result;
            break;
            case "divide":
            result = number1 / number2;
            document.getElementById("result").innerHTML= result;
            break;
        default:
            break;
    }
}