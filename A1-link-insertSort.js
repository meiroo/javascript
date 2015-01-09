�   //U�h�� (��e��
   //B� N -> N*N/2


   var algocount = 0;

   var Node = function(){
       this.value = 0;
       this.next = null;
   }

   var first = new Node();
   first.value = 5;
   var before;
   for (var i = 0; i < 1000; i++) {
       if (i == 0)
           before = first;
       var current = new Node();
       current.value = parseInt(1000 * Math.random());
       before.next = current;
       before = current;
   }

   //�h (�e��
   //B�  Oŵ 1 2 3 4 5 n  n*n/2
   // }ŵ       1 1 1 1 1            n
   //��/�h /p� ���	�z�� n*n �:�b9��
   //PS p��~C B� 1  �eC  ��d*�MnB�:N
   //   �h�~C B�:N  �eC  :1
   //@�F�h�� ��(��� �eԃB���

   var insertSort = function () {
       var current = first.next;
       var last = first;
       while (current) {
           var insertpoint = null;
           var insertpointbefore = null;
           //M�Mb�}�p�~0 *�SM<'�\:�eMn
           //current�e0�M�before
           for (insertpoint = first;
               insertpoint && insertpoint.value < current.value && insertpoint != current;
               insertpointbefore = insertpoint, insertpoint = insertpoint.next)
           { algocount++; };


           //M�0����~0@���1/last�H�(r���� *��'
           if (current == insertpoint) {
               last = current;
               current = current.next;
               continue;
           }

           //~0 *'����e$�ŵ��
           var tmp = current.next;
           //SM ��first��SM'�efirstKM
           if (insertpoint == first) {
               current.next = first;
               first = current;
               algocount++;
           } else {
               //��(-���Mbb��n
               insertpointbefore.next = current;
               current.next = insertpoint;
               algocount++;
           }
           //���� *��Mb�}�p��we�t
           current = tmp;
           last.next = current;

       }
   }


   var vertify = function () {
       //vertify
       var current = first;
       var err = 0;
       for (var i = 0; i < 1000; i++) {
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
       
       

