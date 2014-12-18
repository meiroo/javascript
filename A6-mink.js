 //求一个数组里面 前k个最小的
 //如果k小于某常量如999 如k=100 则此时计算方法为循环100次 每次
 //都取N个里面最小的 复杂度为N*K

 //如果K很大直接用快速排序 增加参数needNum
 //把当前划分为左右两队列后，判断
 //如果左边比需要的数量小  则右边继续排 但是只排needNum-当前左边数量
 //如果左边比需要数量大   则左边继续排 继续排neednum

 var nums = [];
 for (var i = 0; i < 10000; i++) {
     nums.push(parseInt(Math.random() * 10, 10));
 }
 var algocount = 0;
 var mink = [];
 var k = 999;
 //k比较小 最快的是直接循环 复杂度 nk
 if (false) {
     for (var i = 0; i < k; i++) {
         var min = nums[0];
         var minindex = 0;
         for (var j = 1; j < nums.length; j++) {
             if (nums[j] < min) {
                 min = nums[j];
                 minindex = j;
             }
             algocount++;
         }
         mink.push(min);
         nums.splice(minindex, 1);
     }
 } else {
     //k比较大 Kuaipai
     Qsort(nums, 0, nums.length - 1, 999);

 }

 //快排序。
 function Qsort(arr, start, end, neednum) {
     if (start >= end)
         return;
     //1 先找第一个值，然后左边找大的，右边找小的交换
     //直到左右两个标志相遇，左边都是小的，右边都是大的
     var dest = arr[start];
     var s = start + 1;
     var e = end;
     while (s <= e) {
         algocount += 1;
         if (arr[s] <= dest) {
             s++;
             continue;
         }
         if (arr[e] >= dest) {
             e--;
             continue;
         }
         
         //swap
         var tmp = arr[s];
         arr[s] = arr[e];
         arr[e] = tmp;
         s++;
         e--;
     }
     //相遇后，把第一个值放到中间。
     var destindex = s - 1;
     if (start != destindex) {
         var tmp = arr[start];
         arr[start] = arr[destindex];
         arr[destindex] = tmp;
     }

     var leftsize = destindex -1 - start +1;
     if (leftsize === neednum || leftsize === neednum - 1) {
         //success
         return;
     } else if (leftsize > neednum) {
         Qsort(arr, start, destindex - 1,neednum);
     } else if (leftsize < neednum) {
         Qsort(arr, destindex + 1, end,neednum-leftsize);
     }

     //放到中间后，把中间左边和右边各排一下。
    
     
 }
 
 console.log("finish: algorithm: " + algocount);



