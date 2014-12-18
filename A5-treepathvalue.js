
 var TreeNode = function (v,l,r) {
     this.value = v;
     this.left = l;
     this.right = r;
 }
 var t1 = new TreeNode(4, null, null);
 var t2 = new TreeNode(7, null, null);
 var t3 = new TreeNode(5, t1, t2);
 var t4 = new TreeNode(12, null, null);
 var t5 = new TreeNode(10, t3, t4);

 function Tree() {
     this.index = 0;
     this.print = function (node) {
         if (node.left)
             this.print(node.left);
         console.log(this.index++ + ":" + node.value.toFixed(2) + "\n");
         if (node.right)
             this.print(node.right);
     }

     
     
     this.calculatePath = function (node, sum,str) {
         sum += node.value;
         str += (node.value+" ");
         if (sum == 22) {
             console.log(str+"<BR>");
         }
         if (node.left)
             this.calculatePath(node.left, sum,str);
         if (node.right)
             this.calculatePath(node.right, sum,str);
         
     }
 };
 var t = new Tree();
 t.print(t5);
 console.log("\n=======================\n");
 t.calculatePath(t5, 0, "");


