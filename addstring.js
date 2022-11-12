// Question 1:
var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.
console.log(str1);
console.log(str2);
console.log(str3);
str2=str2.trim();
str3=str3.trim();
// console.log(st);
console.log(str1+str2+str3);
document.write(str1+str2+str3);
