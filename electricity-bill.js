function calculate(operation) {

    let result;
    const number1 = document.getElementById("num1").value;

    if (number1 >= 0 && number1 <= 50) {
        result = number1 * 0.50;
        result = result + (20 / 100 * result);
        document.getElementById("result").innerHTML = result;
    }
    else if (number1 > 50 && number1 <= 150) {
        result = number1 * 0.75;
        result = result + (20 / 100 * result);
        document.getElementById("result").innerHTML = result;
    }
    else if (number1 > 150 && number1 <= 250) {
        result = number1 * 1.20;
        result = result + (20 / 100 * result);
        document.getElementById("result").innerHTML = result;
    }
    else if (number1 > 250) {
        result = number1 * 1.50;
        result = result + (20 / 100 * result);
        document.getElementById("result").innerHTML = result;
    }
}
