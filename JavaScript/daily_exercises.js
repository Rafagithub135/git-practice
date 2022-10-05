var a = 1;
var b = a++;
var c = ++a;
undefined
a
3
b
1
c
3
var d = "hello";
var e = false;

d++;
e++;
0
d
NaN
e
1
let perplexed;
undefined
perplexed + 2
NaN
let price = 2.7
undefined
price.toFixed(2);
'2.70'
isNaN(0)
false
isNaN(1);
false
isNaN(" ")
false
isNaN("string")
true
isNaN("0")
false
isNaN("1")
false
isNaN("3.145");
false
isNaN(Number.MAX_VALUE)
false
isNaN(Infinity);
false
isNaN("true")
true
isNaN(true);
false
isNaN("false");
true
isNaN(false)
false
NaN == NaN
false
!true
false
!false
true
!!true
true
!!false
false
!!0
false
!!-0
false
!!1
true
!!-1
true
!!0.1
true
!!"hello"
true
!!""
false
!!''
false
!!"false"
true
!!"0"
true
var sample = "Hello Codeup";
undefined
sample.length
12
sample.toAllUpperCaase();
VM2464:1 Uncaught TypeError: sample.toAllUpperCaase is not a function
at <anonymous>:1:8
(anonymous) @ VM2464:1
sample.toUpperCase
ƒ toUpperCase() { [native code] }
sample
'Hello Codeup'
sample.toLowerCase
ƒ toLowerCase() { [native code] }
sample
'Hello Codeup'
sample.toLowerCase();
'hello codeup'
sample.toUpperCase();
'HELLO CODEUP'
sample + ' Students'
'Hello Codeup Students'
sample + ' Class'
'Hello Codeup Class'
sample = sample + ' Students'
'Hello Codeup Students'
sample.replace(Students, Class);
VM3034:1 Uncaught ReferenceError: Students is not defined
at <anonymous>:1:16
(anonymous) @ VM3034:1
sample.replace('Students', 'Class');
'Hello Codeup Class'
sample.indexOf("c");
-1
sample.indexOf("C");
6
sample.substring(6, 12);
'Codeup'
let mermaid = 3;
undefined
let bear = 5;
undefined
let hercules = 1;
undefined
let price = 3
undefined
let totalPrice = (mermaid + bear + hercules) * price
undefined
totalPrice
27
let google = 400;
undefined
let amazon = 380;
undefined
let facebook = 350;
undefined
let pay = (google * 6) + (amazon * 4) + (facebook * 10)
undefined
pay
7420
var username = 'codeup';
var password = 'notastrongpassword';
undefined
password.length > 5
true
username != password.substring;
true
username.length < 20
true
username == username.trim
false
password == password.trim
false