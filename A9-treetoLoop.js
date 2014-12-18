//tree : loop print
//stack  
//pop head and push left right
//pop left and push left's left and left's right
//pop left's left and push ....


   var TreeNode = function (v) {
       this.value = v;
       this.left = null;
       this.right = null;
   }
   function Tree() {
       this.head = null;
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
           var index = 0;
           console.log(index++ + ":" + node.value + "\n");
           if (node.left)
               this.print(node.left);
           
           
           if (node.right)
               this.print(node.right);
       }

       this.print2 = function (node) {
           var index = 0;
           queue = [];
           queue.push(node);

           
           while (queue.length) {
               var node = queue.pop();
               console.log(index++ + ":" + node.value + "\n");
               if (node.left)
                   queue.push(node.left);
               if (node.right)
                   queue.push(node.right);

           }
          
       }
   };

   var t = new Tree();
   t.head = new TreeNode(10);
   t.add(1, t.head);
   t.add(3, t.head);
   t.add(5, t.head);
   t.add(2, t.head);
   t.add(3, t.head);
   t.add(4, t.head);
   t.print(t.head);
   console.log("-----------------------------");
   t.print2(t.head);
       
