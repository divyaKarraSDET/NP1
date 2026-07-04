//var -- scope is global 

console.log("Examples for VAR: ")

var var1: number | string = 100;
 
var1 = "Hello";    
var1 = 'ello';
var1 = `llo`;
console.log(var1); //Re-assignment - o/p is llo

console.log(var2); //Hoisting - o/p is undefined
 var var2= 90.7777;
 var2 = 80;

 var var4 = 790;
 var var4 = true;
 console.log(var4); //Re-declaration - o/p is true


 //let -- scope is funtional/block

 console.log("Examples for LET: ")
 let rose: string = "red";
 //let rose = 'pink';
 console.log(rose); //Re-declaration - o/p is transform error

 //console.log(lily);
 let lily: boolean = true; //Hoisting - o/p is ReferenceError

 let lotus = 99.00;
 lotus = 88.77;
 console.log(lotus); //Re-assignment - o/p is 88.77


 //const -- scope is functional/block

 console.log("Examples for CONST: ")

 const pie: string = "3.14";
 //const pie  = "hii";  
 console.log(pie); // Re-declaration - o/p is transform error

 const gama = "violet";
 //gama = "yellow";
 console.log(gama);   //Re-assignment - o/p is transform error/type error

 //console.log(Beta);
 const Beta = true;  //Hoisting - o/p is ReferenceError

 