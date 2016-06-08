// Special Pythagorean triplet
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


for(var i=0;i<=1000;i++){
	for(var j=0;j<=1000;j++){
		for(var k=0; k<=1000; k++){
			if(((i*i)+(j*j)===(k*k)) && (i+j+k===1000)){
				console.log(i,j,k);
				console.log(i*j*k);
			}
		}
	}
}


//31875000,   200 375 425