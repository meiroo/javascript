
//Qsort
var nums = [];
for (var i = 0; i < 10000; i++) {
   nums.push(parseInt(Math.random() * 10000, 10));
}
Qsort(nums, 0, nums.length - 1);
check(nums);

function check(arr) {
   for (var i = 1; i < arr.length; i++)
       if (arr[i - 1] > arr[i])
           var err = 1;
}

//快排序。
function Qsort(arr, start, end) {
   if (start >= end)
       return;
   //1 先找第一个值，然后左边找大的，右边找小的交换
   //直到左右两个标志相遇，左边都是小的，右边都是大的
   var dest = arr[start];
   var s = start+1;
   var e = end;
   while(s<=e){
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
   
   //放到中间后，把中间左边和右边各排一下。
   Qsort(arr, start, destindex - 1);
   Qsort(arr, destindex + 1, end);
}

