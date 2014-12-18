 //计算一个数组中 任意起点a到任意终点b 也就是子数组 之间的元素的和
 //要求使得元素的和最大 求和
 //

 var input = [1, -2, 3, 10, -4, 7, 2, -5];

 var continuemax = 0;
 var max = 0;
 for (var i = 0; i < input.length; i++) {
     var current = input[i];
     continuemax = continuemax+input[i];
     if (continuemax < 0) {
         continuemax = 0;
         continue;
     }
     if (max < continuemax)
         max = continuemax;
 }
 console.log("max :" + max);


