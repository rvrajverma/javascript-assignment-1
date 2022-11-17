
function checkTriangle() {
    
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const c = document.getElementById("num3").value;
    let result;
    if (a == b == c) {
        result = "Triangle is equilateral";
        document.getElementById("result").innerHTML = result;
        
    }
    else if (a == b || a == c || b == c) {
        result = "Triangle is isosceles";
        document.getElementById("result").innerHTML = result;
    }
    else {
        result = "Triangle is Scalene";
        document.getElementById("result").innerHTML = result;
    }
}


