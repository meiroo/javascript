 //单链表的快速排序
 // head-----  smallpos prepos currentpos----------------tail
 //复杂记了很多的pos
 // 第一次快排的首value 作为smallpos，然后每次小的就移到它前面，大的就不移动
 // 虽然不移动 但是要用currentpos往后遍历一直遍历到tail
 // 如果遍历到中间有比smallpos小的 就把链表此节点放到smallpos前面，所以要记住prepos来接curent的next
 //
 var Node = function () {
     this.value = 0;
     this.next = null;
 }

 var first = new Node();
 first.value = parseInt(10000 * Math.random());
 var before;
 for (var i = 0; i < 10000; i++) {
     if (i == 0)
         before = first;
     var current = new Node();
     current.value = parseInt(100 * Math.random());
     before.next = current;
     before = current;
 }

 
 /*var first = new Node();
 first.value = 1;
 var next = new Node();
 next.value = 5;
 first.next = next;
 next = new Node();
 next.value = 2;
 first.next.next = next;
 next = new Node();
 next.value = 4;
 first.next.next.next = next;
 next = new Node();
 next.value = 3;
 first.next.next.next.next = next;*/
 
 var algocount = 0;
 var head = Qsort(first,null,null);
 var count = 1;
 
 check(head);
 
 function check(first) {
     var current = first;
     var err = 0;
    while (current.next) {
        if (current.value > current.next.value)
            err = 1;
        count++;
        current = current.next;
    }
    console.log("count: " + count + " err: " + err + " algorithm: " + algocount);
 }


 
 //cur插入node后面 ，返回cur的next断链
 function InsertAfter(node, cur) {
     var curnext = cur.next;
     cur.next = node.next;
     node.next = cur;
     algocount++;
     return curnext;
 }

 //快排序。从start排到end，排完了和rightnode接一下。
 //返回最左边的也就是最小的值。
 
 function Qsort(start, end, rightnode) {
     var head = start;
     var tail = end;
     if (!start || start === end)
         return start;
     //value是分界线，分为左和右递归
     var value = start.value;
     //记录3个pos，smallpos代表左队列也就是比value小的位置
     //currentpos是当前遍历位置，prepos是上一个遍历位置
     var smallpos = start;
     var currentpos = start;
     var prepos = start;

     //如果当前有意义
     while (currentpos) {
         algocount++;
         var last = false;
         if (currentpos === end)
             last = true;
         //当前小，但是由于挨着左队列，所以不用换
         if (currentpos.value < start.value && smallpos.next === currentpos) {
             smallpos = smallpos.next;
             if (last) {
                 tail = currentpos;
                 break;
             }
             //next loop
             prepos = currentpos;
             currentpos = currentpos.next;
         }
         //当前小，而且要换，插入到smallpos，和smallpos下一个之间
         else if (currentpos.value < start.value) {
             //交换
             var curnext = InsertAfter(smallpos,currentpos);
             prepos.next = curnext; //接线
             smallpos = smallpos.next;
             if (last) {
                 tail = prepos;
                 break;
             }
             //next loop                   
             currentpos = curnext;
         } else {
             if (last) {
                 tail = currentpos;
                 break;
             }
             prepos = currentpos;
             currentpos = currentpos.next;
         }

     }
     //         head ,         left          ,        right       .
     //分离完毕 head - headnext.....smallpos - smallposnext...tail
     var center = head;
     var noleft = (head === smallpos);
     var noright = (smallpos === tail);

     //head.left........center..........right.tail
     if (!noleft) {
         head = InsertAfter(smallpos, center);
     }

     if (!noleft) {
         head = Qsort(head, smallpos, center);
     } else
         head = head;

     if (!noright) {
         center.next = Qsort(center.next, tail, rightnode);
     } else {
         tail = center;
         center.next = rightnode;
     }
                
     return head;
 }

       

