var winstreak=function(str){
	var count=0
	var streak=0

	for(var i=0;i<str.length;i++){
		if(str[i]==='W'){
			count+=1;
			if(count>streak){
				streak=count;
			}
		}

		if(str[i]==='L'){
			count=0
		}
	}

	return streak;
}

console.log(winstreak('WWWWWWWWLWWWWLWWWWWWL'));