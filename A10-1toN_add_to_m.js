 //如0到100之间多少个数字的和等于 40
 //0到39之间多少个数字的和等于 40
 //此时39为n 分为两种情况递归
 //使用39 然后递归0到38之间多少个数字等于 1
 //不使用39 然后递归0到38之间多少个数字等于 40
 //类推

 function nm(n,m,str) {
     if (n > m) {
         nm(m, m,str);
     } else if (n === m) {
         console.log(str + "," + n );
         nm(n - 1, m,str);
     } else if (n < m && n > 0) {
         //no use n
         nm(n - 1, m, str);

         //use n
         str = str+ "," + n;
         nm(n - 1, m - n,str);
         
         
     } else if (n <= 0) {
         return;
     } else {
         console.log("???error");
     }
 };
 nm(100, 40,"");
