
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
