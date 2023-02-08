// const a  = "1";
// const hello = "world";


// let hello = "world"
// hello = "new"
// // hello = true

// let hello : string = "wordld";
// //  defined the type of var 


// const getfullname = (name:string, surname:string)=>{
//     return (name+ " " + surname)

// }

// getfullname("Abh","jaiswal")


//  interfaces 
// special entity in typescript helps to create objects with defined properties
// interface User_Interface{
//     name:string,
//     age ?: number;
//     //  age will not be mendatory always
//     getmessage?(): string;
//     // after question mark it wont be mendatory 


// }

// const user:User_Interface = {
//     name:"monster",
//     age: 3,
//     getmessage() {
//         return "hello" + name
// }}

// const user2 :User_Interface = {
//     name: "monst"
// }

// console.log(user.name)



//  Union operators 
//  setting up a variable with multiple data types ( union )
// interface UserInterface{
//     name:string,
//     surname:string
// }
// let username: string = "alex";
// let pageName : string | number = "1";

// let errorMessage: string | null = null;

// let user: UserInterface | null = null;

// let someprop: string | UserInterface | null | undefined | string[] | object = null;
// //  it doesn't bring any type safety 



//  Aliases in typescript 
// type ID = string;
// type AgeType= string| number
// type PopularTag = string
// type MaybePopularTag = PopularTag | null
// interface UserInterface{
//     name:ID,
//     surname:ID,
//     age:AgeType,
//     tags: PopularTag[]

// }
// const dragonTags: MaybePopularTag = "dragon";


//  Any / VOID / NEVER / UNKNOWN

//  1. Void data type 

// const doSomething = ():void =>{
//     console.log("doSomething");
// }


// const foo:void = undefined;
// foo = 'foo'

//  Anytype  (disable typescript)

// let food:any = "food"
// food = 2;


//  Never type 
// a function with never can't be executed to the end 
// const doSomething = ():never =>{
//     // console.log("doSomething");
//     throw "never";
// }

// // Unknown type
// let vAny:any = 10;
// let vUnknown:unknown = 10;
// let v:string = vUnknown as string;
//  changing the data type 

// unknown can be defined only with an unknown type 
// console.log(v)
// console.log(vUnknown.foo())   this will throw an error
// console.log(vAny.foo())


//  Type assertion ( convert one type to another )

// let pageNumber : string = "1";
// let numericPageNumber:number = ( pageNumber as unknown) as number
//  string need to be converted first into a unknown and then as a number)


//  Working with DOM ( document object models)
// let page: any = "1";
// let PageNumber = page as string;

// const someElement  = document.querySelector(".foo") as HTMLInputElement;
// console.log(someElement.value)

// const someElement  = document.querySelector(".foo");
// someElement?.addEventListener('blur',(event)=>{
//     const target = event.target as HTMLInputElement;
//     console.log(target.value)
// })


//  CLASSES in typescript 


// class User{
//     private firstName: string
//     protected lastname: string
//     readonly unChangeble: string
//     constructor(firstName:string, lastname:string){
//         this.firstName = firstName,
//         this.lastname = lastname
//         this.unChangeble = firstName
//     }

//     // changeUnchangable (): void{
//     //     this.unChangeble = "foo"
//     // }
//     //  read only cant be modified once declared 
//     //  const can't be used inside a class
//     getfullName():string{
//         return this.firstName+ " " + this.lastname
//     }
// }


// const user =  new User("monster","lessons")
// console.log(user)

// private public protected 
//  protected can be used inside the childrens or inherited classes . 
//  Readonly in typescript 

// Interface with the Class


// interface UserInterface{
//     getfullName():string
    
// }

// class User implements UserInterface{
//     private firstName: string
//     protected lastname: string
//     readonly unChangeble: string
//     constructor(firstName:string, lastname:string){
//         this.firstName = firstName,
//         this.lastname = lastname
//         this.unChangeble = firstName
//     }
//     static readonly maxAge = 50

//     changeUnchangable (): void{
//         // this.unChangeble = "foo"
//     }
//     //  read only cant be modified once declared 
//     //  const can't be used inside a class
//     getfullName():string{
//         return this.firstName+ " " + this.lastname
//     }
// }
// //  static are only accessible with the class but not the instances of the class
// const user = new User("monster","abhishek")
// // console.log(us)

// class Admin extends User{

//     private editor: string;
//     setEditor(editor:string): void{
//         this.editor  = editor
//     }


//     getEditor():string{
//         return this.editor
//     }

// }

// const admin =new  Admin("monster2", "admin2")

// console.log(admin.)


// GENERICS in TYPE SCRIPT 
// const addID = <T extends object>(obj:T) =>{
//     // now addId will take only objects 
//     const id = Math.random().toString(16);
//     return {
//         ...obj,
//         id
//     }

// }
// interface UserInterface<T>{
//     name:string
//     data:T
// }




// const user: UserInterface<{meta:string}> = {
//     name:'Jack',
//     data:{
//         meta:"foo"
//     }
// };


// const user2 : UserInterface<string[]>={
//     name:"jack",
//     data:["foo","bar"]
// }
// //  in the generics we can define the object type and will accept only that objects 

// // const result =  addID<UserInterface>(user)
// // const result = addID<string>("food")
// // console.log("result",result)
// interface UserInterface2<T,V>{
//     name:string
//     data:T
//     data2 : V
// }

// const user3:UserInterface2<string[],{meta:"food"}>={
//     name:"john",
//     data:["hello"],
//     data2:{meta:"food"}
// }


// let num2:unknown = 2;
// num2 = "maybe a string"
// num2 = 234
// console.log(num2)



// decorator 
// 1 . class decorator 

// function Component(target:Function){
//     target.prototype.id = 100;
// }

// function Component(options:{id:string}){
//     return (target:Function & typeof TestClass)=> {
//      target.elementId = options.id;   
//     }
// }

// @Component({
// id:"hello"
// })
// class TestClass{
//     static elementId:string;
//     id:number;
//     printId(prefix:string = " "):string{
//         return (prefix+ this.id)
//     }
// }

// console.log(new TestClass().id)
// class Person{
//     public name:string = "java"
//     @logger
//     sayhi():void {
//         console.log(this.name)
//     }
// }

// function logger(target:any, key:string):void {
//     console.log("this is logger")
// }

// function Logger(target:Object){
//     console.log("created",Object.keys(target))
// }



// @Logger
// class Person {
// name:string
// constructor(name: string) {
//     this.name = name;
// }
// }

// const person = new Person("John Doe");

// console output: "Person instance created: John Doe"



// const anotherPerson = new Person("Jane Doe");

// // console output: "Person instance created: Jane Doe"

// function Component(target:Function){

//     // target.prototype.id = 100;
//     console.log(target.prototype.id)
// }
// @Component
// class TestClass{
//     elementId:string;
//     id:number;
//     constructor(id:number,element:string){
//         this.elementId = element,
//         this.id = id
//     }
// }
// const u = new TestClass(2,"45")

// const allowlist = ["Jon", "Jane"];

// const allowlistOnly = (target: any, memberName: string) => {
//   let currentValue: any = target[memberName];

//   Object.defineProperty(target, memberName, {
//     set: (newValue: any) => {
//       if (!allowlist.includes(newValue)) {
//         return;
//       }
//       currentValue = newValue;
//     },
//     get: () => currentValue
//   });
// };

// class Person {
//   @allowlistOnly
//   name: string = "Jon";
// }

// const person = new Person();
// console.log(person.name);

// person.name = "Peter";
// console.log(person.name);

// person.name = "Jane";
// console.log(person.name);

// function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//       reportingURL = "http://www...";
//       console.log(title);
      
      
//     };
//   }
   
//   @reportableClassDecorator
//   class BugReport {
//     type = "report";
//     title: string;
   
//     constructor(t: string) {
//       this.title = t;
//     }
//   }
   
//   const bug = new BugReport("Needs dark mode");

// function SetColorDecorator(constructor: Function) {
//   return class extends Car {
//     constructor(color:string) {
//       super(color);
//       console.log("Instance created",color)
//     }
//   };
// }

// @SetColorDecorator
// class Car {
//   public isFixed: boolean;
//   public color: string;
//   constructor(color:string) {
//     this.color  = color;
//   }
// }

// const car = new Car("blue");

// // console.log({
// //   isFixed: car.isFixed,
// //   color: car.color,
// // });

// function Logger(constructor: Function){
//   return class extends Person{
//     constructor(name:string){
//       super(name);
//       console.log("Person Instance Created", name);
//     }
//   }
// }


// @Logger
// class Person {
// constructor(public name: string) {

// }
// }


// const person = new Person("John Doe");

// console output: "Person instance created: John Doe"



// const anotherPerson = new Person("Jane Doe");

// console output: "Person instance created: Jane Doe"



// class Book{

//   title: string
//   // the title of the book
//   author: string 
//   // the author of the book
//   genre: string 
//   //  the genre of the book
//   isbn: string 
//   //  the ISBN of the book



// const memoize = <T>(fn: Function) => {
//   const cache = new Map<string,number>();
//   const cached = function (this: any, val1: T,val2:T) {
//     return (cache.has(`${val1}.${val2}`) || cache.has(`${val2}.${val1}`))
//       ? cache.get(`${val1}.${val2}`)||cache.get(`${val2}.${val1}`)
//       : cache.set(`${val1}.${val2}`, fn.call(this, val1,val2)) && cache.get(`${val1}.${val2}`);
//   };
//   cached.cache = cache;
//   return cached;
// };

// // See the `factorial` snippet.
// const add = (num1:number, num2:number):number=>{
//   return num1+num2
// }
// const addCache = memoize(add);
// addCache(1,2); 
// addCache(2,1); 

// addCache(1,6); 
// addCache(6,1); 

// // To get all cache
// console.log(addCache.cache);


// const cache = new Map<string, number>();
// cache.set('1.2',3)
// console.log(cache.has('1.2'))
// console.log(cache.keys)

// function greeter(fn: (a: string) => void,num:string) {
//   fn(num);
// }
 
// function printToConsole(s: string) {
//   console.log(s);
// }
 
// greeter(printToConsole,'23');
  

// const last = <T>(arr: T[]): T => {
//   return arr[arr.length - 1];
// };

// const l = last([1, 2, 3]);

// const l2 = last<string>(["a", "b", "c"]);

// const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
//   return [x, y];
// };

// const v = makeArr(5, 6);
// const v2 = makeArr("a", "b");
// const v3 = makeArr<string | null, number>("a", 5);

// const makeFullName = <T extends { firstName: string; lastName: string }>(
//   obj: T
// ) => {
//   return {
//     ...obj,
//     fullName: obj.firstName + " " + obj.lastName
//   };
// };

// const v4 = makeFullName({ firstName: "bob", lastName: "junior", age: 15 });
// // // const v5 = makeFullName({ another: "bob", lastName: "junior", age: 15 });
// console.log(v4);

// interface Tab<T> {
//   id: string;
//   position: number;
//   data: T;
// }

// type NumberTab = Tab<number>;
// type StringTab = Tab<string>;



// Printing process.argv property value
// console.log(process.argv);
