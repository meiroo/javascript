 //任何时候都能查询当前栈中最小值的栈。要求复杂度为O（1）  
 //空间+ ： 每个Node都保存当前最小值这样一个属性。
 //算法：每次push的时候，对比head的最小值和自己。将小的存入自己最小值属性。
 //        pop后仍然正确
 var LinkNode = function(v){
     this.value = v;
     this.next = null;
     this.minvalue = v;
 }

 var Stack = function () {
     this.head = null;
     this.push = function (value) {
         if (!this.head) {
             this.head = new LinkNode(value);
         } else {
             var current = new LinkNode(value);
             if (current.value > this.head.minvalue) {
                 current.minvalue = this.head.minvalue;
             }
             current.next = this.head;
             this.head = current;
         }
     }

     this.pop = function () {
         if (!this.head) {
             return;
         } else {
             this.head = this.head.next;
         }
     }

     this.print = function () {
         var current = this.head;
         var index = 0;
         while (current) {
             console.log(index++ + "  :  " + current.value.toFixed(2) + " min " + current.minvalue.toFixed(2) + "\n");
             current = current.next;
         }
     }
 }

 //--------------------------test
 var s = new Stack();
 for (var i = 0; i < 100; i++) {
     s.push(Math.random() * 100);
 }
 s.print();

 console.log("\n\n\n========================\n\n\n");

 for (var i = 0; i < 50; i++) {
     s.pop();
 }
 console.log("\n\n\n========================\n\n\n");
 s.print();
       

