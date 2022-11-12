// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.
// let a = 10;
// let b = 20;
// let c = 30;
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


