   //单链表排序 用的插入排序
   //复杂度 N -> N*N/2


   var algocount = 0;

   var Node = function(){
       this.value = 0;
       this.next = null;
   }

   var first = new Node();
   first.value = 5;
   var before;
   for (var i = 0; i < 10000; i++) {
       if (i == 0)
           before = first;
       var current = new Node();
       current.value = parseInt(10000 * Math.random());
       before.next = current;
       before = current;
   }

   //链表 适合用插入排序
   //复杂度 最坏情况下 1 2 3 4 5 。。。n  n*n/2
   //最好情况下       1 1 1 1 1            n
   //如果不是链表 是数组 如果没有额外空间的话 n*n 因为交换费时了
   //PS 数组查找元素复杂度 1  插入元素需要依此挪动位置复杂度为N
   //   链表查找元素复杂度为N  插入元素 为1
   //所以但链表排序 可以用于那些 插入比较复杂的算法

   var insertSort = function () {
       var current = first.next;
       var last = first;
       while (current) {
           var insertpoint = null;
           var insertpointbefore = null;
           //遍历前面排好的数组，找到一个比当前值大的。作为插入位置。
           //current会插入到目标前。目标before后。
           for (insertpoint = first;
               insertpoint && insertpoint.value < current.value && insertpoint != current;
               insertpointbefore = insertpoint, insertpoint = insertpoint.next)
           { algocount++; };


           //遍历到自己都没找到，所以自己就是last。什么都不用干。继续循环下一个节点吧。
           if (current == insertpoint) {
               last = current;
               current = current.next;
               continue;
           }

           //找到一个大的。可以插入。分两种情况讨论。
           var tmp = current.next;
           //当前最小了。连first都比当前大。插入first之前。
           if (insertpoint == first) {
               current.next = first;
               first = current;
               algocount++;
           } else {
               //自己在中间，要把前面，后面都设置下。
               insertpointbefore.next = current;
               current.next = insertpoint;
               algocount++;
           }
           //继续循环下一个；同时把前面排好的数组，连起来完整。
           current = tmp;
           last.next = current;

       }
   }


   var vertify = function () {
       //vertify
       var current = first;
       var err = 0;
       for (var i = 0; i < 10000; i++) {
           if (current.value > current.next.value) {
               err = 1;
           }
           current = current.next;
       }

       var i = 0;
       console.log(" err = " + err + " algorithm: " + algocount);
   }
   
   insertSort();
   vertify();
       
       

