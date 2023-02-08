// class TreeNode{
//     data:number
//     left:TreeNode | null
//     right: TreeNode | null

//     constructor(data:number){
//         this.data = data;
//         this.left = null;
//         this.right = null;
        
//     }
// }

// class BinarySearchTree{
//     public head: TreeNode | null
//     constructor(head?:TreeNode){
//         this.head = head || null;
//     }

//     public insert(node:TreeNode | null= this.head,value:number){
//         if (node == null){
//             const root = new TreeNode(value)
//             return root;
//         }

//         else{
//             if (value< node.data){
//                 node.left = this.insert(node.left, value)
//             }
//             else{
//                 node.right = this.insert(node.right, value)
//             }
//             return node;
//         }

//     }

//     public search(node:TreeNode|null = this.head,value:number):TreeNode|null{
//         let temp  = node;
//         if (temp == null){
//             return null;
//         }
//         else if (temp.data == value){
//             return temp
//         }
//         else{
//             if (value< temp.data){
//                 return this.search(temp.left, value)
//             }
//             else {
//                 return this.search(temp.right,value)
//             }
//         }


//     }
        

        


    
// }

// // const rootNode = new TreeNode(50);
// // rootNode.left = new TreeNode(35);
// // rootNode.right = new TreeNode(60)

// const BSTree = new BinarySearchTree()
// BSTree.insert(BSTree.head, 30);
// console.log(BSTree.head)
// BSTree.insert(BSTree.head, 40);
// console.log(BSTree.head)
// console.log(BSTree.search(BSTree.head,30))



