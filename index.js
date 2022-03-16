// This is conform box
/*const  a = confirm(" Are you sure you want to submit the form")


if(a){
     alert(" thanks for submitting from");
}
else{
     alert(" Plz fill the  form correctly !");
}
*/
var arr = [1, , 5, 6, 7, 8,11, 'abc'];
var arr2 = ['b',"d", 'a', 'c', 'd', 'e'];
// document.write('arr length --', arr.length) // 11
// document.write(arr2.sort()); // its sorts element in ascending order but for number it will give us a wrong sorting order
// document.write(arr.sort()); // now it will work properly
//  document.write(arr2.pop()); // it will pop last element from the array and delete from array
// arr2.push("vipin"); // it will push(add) element at the end of array
// arr.shift(); // it will remove first element from the array 
// arr.unshift('cde'); // method adds a new element to an array (at the beginning), 
//  document.write(arr.concat(arr2)); // it will join element
//  document.write(arr.join("/"));
/*var b = arr.slice(0, 5); // it is return sliced items and it takes two parameter (start, end)
 document.write(b);*/
//  document.write(arr.splice(2,0,"1","vipin"));  // The splice() method can be used to add new items to an array and it is return deleted items
// document.write(arr[0]) // access element by indexing and indexing will start from zero(0)
// document.write(arr.indexOf("abc")) // it will give us index and if not exist, then it will return -1
// document.write(arr2.lastIndexOf("d")) // it will give us last given item index and it will give preference to last visit
// document.write(arr.includes(2)) // it will give us boolean output if given item is exist, otherwise it will give us false
// let result = arr.toString(); // output - 1,2,3,4,5,6,7,8,9,10,abc
// document.write(typeof arr) // it gives us type of as string
// document.write(arr.fill("vipin"));// it fill all value as ram 
// document.write(arr);1
  /* some methods if a single value is greater then 18 its return true
   var age =[12,15,16,145];
   b = age.some(adult);
   document.write(b); 
   function adult(age){
        return age>=18;
   }
   every methods if all balue is greater then 18 then its return true
   */
  /* var age = [1,44,33,44,243,8,5,66];
//  var a = age.find(adults);// if condition is true it's print the first value  
// var a = age.findIndex(adults);// it is print the index no.
var a = age.filter(adults); 
function adults(age){
      return age >=18;
 }
 document.write( );
*/
// foreach = 
 a = ["vipin","abhi","jitu"];
 a.forEach(function(value){
    document.write(value);

 });

