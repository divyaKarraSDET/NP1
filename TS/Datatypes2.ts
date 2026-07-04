 //ANY
 console.log("Examples for ANY: ")
 let a: any;
 a = "pore";
 a = 100;
 a = true;
 console.log(a);

 const b:any = 100
 console.log(b);

 var c: any;
 c = 44;
 c = false;
 c = "cool";
 console.log(c);


 //UNKNOWN
 console.log("Examples for UNKNOWN: ")
 let d: unknown = "false";
 d = "ferry";
 if(typeof d === "string"){
  console.log(d.length);
 }

 const e: unknown = false
 console.log((e as number)+11);
if(typeof e === "boolean"){
    console.log(e);
} 

var f:unknown = true;
f = 66;
f = "now";
f = true;
console.log(f);
if(typeof f === "boolean"){
    console.log(!f);
}

