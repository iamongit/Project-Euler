/* The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var p6=function(){
var i=1;
var sum=0;
var square=0;
for(i=1; i<=100;i++){
	sum=sum+i;
	square= square+(i*i);
}
var sumsquare=sum*sum;
var diff=sumsquare-square;
console.log(diff);
};
p6();