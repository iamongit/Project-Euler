//10001st prime

//isp checks if num is prime
var isp=function(num){
if(num <=1){
	return false;
}

if (num === 2){
	return true;
}

for(var i=2; i<num;i++){
	if(num%i === 0){
		return false;
	}
}

return true;
};

//nth prime
var nthp=function(nth){
n=1;
x=0;
state=true;
while(state){
	if (isp(n)===true){
		x=x+1;
		if(x===nth){
			return n;
			state=false;
		}
		n=n+1;
	}else{
		n=n+1;
	}
}
};
console.log(nthp(10001));