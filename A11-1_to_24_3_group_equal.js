//有24位老人，从76岁到99岁，每岁一人，
//他们分三桌就餐，每桌8人，要求各桌年龄的和相等，问有多少种分桌法？
//76  - 99
//1到24  => (1+24)/2*8  => 100  
//先把24分给list1  23可以分给 list1 list2=list3（所以结果会重复需要除以2）
//然后23分完再分22再分21 直到每一桌都恰好100

//sum = 2050226
//sum/2 = 1025113

var list1sum = 24;
var list1count = 1;
var list2sum = 0;
var list2count = 0;
var list3sum = 0;
var list3count = 0;
var result = 0;
function nm(num){
	if(num === 0){
		result ++;
		console.log(result + ' ||| list1:'+ list1count + " list2:"+list2count+" list3:"+list3count + ' sum1:'+ list1sum + " sum2:"+list2sum+" sum3:"+list3sum);
		return;
	}

	//insert list1
	if(list1sum < 100 && list1count < 8 && num <= 100-list1sum){
		list1count ++; list1sum+=num;
		nm(num-1);
		list1count --; list1sum -= num;
	}

	//insert list2
	if(list2sum < 100 && list2count < 8 && num <= 100-list2sum){
		list2count ++; list2sum+=num;
		nm(num-1);
		list2count --; list2sum -= num;
	}
	//insert list3
	if(list3sum < 100 && list3count < 8 && num <= 100-list3sum){
		list3count ++; list3sum+=num;
		nm(num-1);
		list3count --; list3sum -= num;
	}

	//insert none : fail => return;
	return;
	
}

nm(23);
console.log('sum = '+result);
