function foo(){
    var fruit="apple";
    console.log("inside function:",fruit);
}

foo();

function  foo  (){ 
    if  (  true  ){ 
    var  fruit1 =  'apple'  ;   //exist in function  scope 
    const  fruit2 =  'banana'  ;   //exist in block  scope 
    let  fruit3 =  'strawberry'  ;
    
    console.log(fruit1); 
    console.log(fruit2); 
    console.log(fruit3); //exist in block  scope 
    } 
   
    } 
    foo(); 