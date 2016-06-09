//sum of primes < 2 million

//isp checks if num is prime
var isp=function(num){
if(num <=1){
	return false;
}

if (num === 2){
	return true;
}

for(var i=2; i<=Math.sqrt(num);i++){
	if(num%i === 0){
		return false;
	}
}

return true;
};


//sum of primes below num
var sumprime=function(num){
	sum=0;
	for(var i=0;i<num;i++){
		if(isp(i)===true){
			sum+=i;
		}
	}
	return(sum);
}
var start = new Date().getTime();
var a=sumprime(2000000); //142913828922
console.log(a);
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time/1000 +" seconds");
//Execution time: 0.723 seconds


