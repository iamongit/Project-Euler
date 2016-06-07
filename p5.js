// 2520 is the smallest number that can be divided by each 
// of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly 
// divisible by all of the numbers from 1 to 20?
var start = new Date().getTime();
var p5=function(){
var num=20; //starting number to check from
var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (i=0;i<array.length;i++){
	if(num % array[i] !== 0){
		num=num+1;
		i=0;
	} 
}
console.log(num);
};

p5();
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time/1000 +" seconds");
