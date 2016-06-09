//sum of primes < 2 million

//isp checks if num is prime
var isp=function(num){
if(num <=1){
	return false;
}

if (num === 2){
	return true;
}

for(var i=2; i<=(num/2);i++){
	if(num%i === 0){
		return false;
	}
}

return true;
};


//sum of primes below num
var sumprime=function(num1,num2){
	sum=0;
	for(var i=num1;i<num2;i++){
		if(isp(i)===true){
			sum=sum+i;
		}
	}
	return(sum);
}
var start = new Date().getTime();
var a=sumprime(0,2000000); //9914236195
console.log(a);
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time/1000 +" seconds");
//Execution time: 268.766 seconds// 4.5 minutes


