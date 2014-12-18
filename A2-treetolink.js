 //Tree to double link

 var TreeNode = function(v){
     this.value = v;
     this.left = null;
     this.right = null;
 }

 var DLinkNode = function (v) {
     this.value = v;
     this.pre = null;
     this.next = null;
 }

 function DLink() {
     this.head = null;
     this.end = null;
     this.index = 0;
     this.add = function (value) {
         if (!this.head) {
             this.head = new DLinkNode(value);
             this.end = this.head;
         } else {
             var current = new DLinkNode(value);
             this.end.next = current;
             current.pre = this.end;
             this.end = current;
         }
     }

     this.print = function () {
         var current = this.head;
         while (current) {
             console.log(this.index++ + ":" + current.value.toFixed(2) + "\n");
             current = current.next;
         }
     }
 }

 function Tree() {
     this.head = null;
     this.dlink = new DLink();
     this.index = 0;
     this.add = function (value, node) {
         if (!node) {
             node = new TreeNode(value);
         } else {
             if (value < node.value) {
                 node.left = this.add(value, node.left);
             } else {
                 node.right = this.add(value, node.right);
             }
         }
         return node;
     }
     this.print = function (node) {
         if (node.left)
             this.print(node.left);
         console.log(this.index++ + ":"+ node.value.toFixed(2) + "\n");
         if (node.right)
             this.print(node.right);
     }

     this.toDlink = function (node) {
         if (node.left)
             this.toDlink(node.left);
         
         this.dlink.add(node.value);

         if (node.right)
             this.toDlink(node.right);
     }
 };

 var t = new Tree();
 t.head = t.add(50);
 for (var i = 0; i < 100; i++) {
     var v = Math.random() * 100;
     t.add(v,t.head);
 }

 t.print(t.head);
 console.log("\n\n\n\n");
 t.toDlink(t.head);
 t.dlink.print();
       


