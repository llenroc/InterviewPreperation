//https://leetcode.com/problems/maximum-depth-of-binary-tree/


var maxDepth = function(root) {
    if(!root) return null;
   let q = [root];
   let result = [];
   let level = 0;
   while(q.length) {
       let n = q.length;
       level++;
       for(let i=0; i<n; i++) {
           let node = q.shift();
           
           if(node.left) {
               q.push(node.left);
           }
           if(node.right) {
               q.push(node.right)
           }
       }
   }
   return level;
};