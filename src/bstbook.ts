// interface bookcollection{
//     title: string 
//     // the title of the book
//     author: string
//     // the author of the book
//     genre: string
//     // the genre of the book
//     isbn: string
//     // the ISBN of the book

// }



// class TreeNode{
//     data:bookcollection
//     left:TreeNode | null
//     right: TreeNode | null
//     key: string

//     constructor(data:bookcollection,key:string){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//         this.key = key

//     }
// }

// class BinarySearchTree{
//     public head: TreeNode | null
//     constructor(head?:TreeNode){
//         this.head = head || null;
//     }

//     public insert(node:TreeNode | null= this.head,data:bookcollection, key:string){
//         if (node == null){
//             const root = new TreeNode(data,key)
//             return root;
//         }

//         else{
//             if (key< data[key as keyof bookcollection]){
//                 node.left = this.insert(node.left, data, key)
//             }
//             else{
//                 node.right = this.insert(node.right, data, key)
//             }
//             return node;
//         }
//     }

//     public search(node:TreeNode | null = this.head,key:string):bookcollection|null{
//         let temp  = node;

//         if (temp == null){
//             return null;
//         }
        
//         else if (temp.data[key as keyof bookcollection] == key){
//             return temp.data
//         }
//         else{
//             console.log(temp.data[key as keyof bookcollection]);

//             if (key < temp.data[key as keyof bookcollection]){
//                 return this.search(temp.left, key)
//             }
//             else {
//                 return this.search(temp.right,key)
//             }
//         }


//     }
        
// //     public inorder(node:TreeNode|null = this.head){
// //         let temp = node;
// //         if (temp == null){
// //             return
// //         }
// //         console.log(temp.data)
// //         this.inorder(temp.left)
// //         this.inorder(temp.right)
// //     }
// // }
        


    
// // // }
// // const book1 = {title:"book1",author:"abhsihek",isbn:"9",genre:"comedy"}
// // const book2 = {title:"book2",author:"abhsihek",isbn:"8",genre:"comedy"}
// // const book3 = {title:"book3",author:"abhsihek",isbn:"13",genre:"logical"}
// // const book4 = {title:"book4",author:"abhsihek",isbn:"8",genre:"Horror"}

// // const rootNode = new TreeNode(book1,"isbn");
// // rootNode.left = new TreeNode(book2,"isbn");
// // rootNode.right = new TreeNode(book3,"isbn")
// // const BSTree = new BinarySearchTree(rootNode)

// // BSTree.insert(BSTree.head,book4,"isbn");
// // // console.log(BSTree)
// // BSTree.search(BSTree.head, "13")
// // // BSTree.inorder(BSTree.head)




// // // BSTree.insert(BSTree.head, 40);
// // // console.log(BSTree.search(BSTree.head,40))



// // // type Colors = {
// // //     primary: '#eee',
// // //     primaryBorder: '#444',
// // //     secondary: '#007bff',
// // //     black: '#000',
// // //     white: '#fff',
// // //     whiteBorder: '#f2f2f7',
// // //     green: '#53C497',
// // //     darkGreen: '#43A17C',
// // //     infoGreen: '#23AEB7',
// // //     pastelLightGreen: '#F3FEFF',
// // // }
// // // type ColorKeys = keyof Colors; // "primary" | "primaryBorder" | "secondary" ....
// // // function SomeComponent({ color }: { color: ColorKeys }) {
// // //   return "Something"
// // // }
// // // // SomeComponent({ color: "WhateverColor"})
// // // SomeComponent({ color: "primary"})

interface bookcollection{
    title: string 
    // the title of the book
    author: string
    // the author of the book
    genre: string
    // the genre of the book
    isbn: string
    // the ISBN of the book

}

const {BinarySearchTree,BinarySearchTreeNode} = require('@datastructures-js/binary-search-tree');

class Book{
    title: string 
    author: string
    genre: string
    isbn: string

    bst = new BinarySearchTree();

    addbook(data:bookcollection):void{
        this.bst.insert({id:data.title, data:data})
    }

    getbooksbytitle(title:string){

        return this.bst.find({key:title}).getValue()

    }
    
    

    getbookbygenre(genre:string){
        let result: bookcollection[] = [];
        this.bst.traverseInOrder(function (node:any){
            let value = (node.getValue()['data'])
            if (value.genre == genre){
                result.push(value)
            }
            // console.log(node.getValue())
        });
        return result;
    }

    getbooksbyauthor(author:string){
        let result: bookcollection[] = [];
        this.bst.traverseInOrder(function (node:any){
            let value = (node.getValue()['data'])
            if (value.author == author){
                result.push(value)
            }
            // console.log(node.getValue())
        });
        return result;

    }

    removebook(title:string):void{
        this.bst.insert({id:title})
    }

}


const book_shop = new Book();


const book1 = {title:"book1",author:"abhsihek",isbn:"9",genre:"comedy"}
const book2 = {title:"book2",author:"abhsihek",isbn:"8",genre:"comedy"}
const book3 = {title:"book3",author:"abhsihek",isbn:"13",genre:"logical"}
const book4 = {title:"book4",author:"abhsihek",isbn:"8",genre:"Horror"}

book_shop.addbook(book1)
book_shop.addbook(book2)
book_shop.addbook(book3)
book_shop.addbook(book4)

console.log(book_shop.getbookbygenre("comedy"))

// console.log(book_shop.bst_genre.find({id:"Horror"}).getValue());


// console.log(book_shop.getbooksbytitle("book1"))





