//for of 
const arr = [1,2,3,4,5,]

for(const val of arr){
 console.log(val);   
}

//maps
const map = new Map();
map.set('1' , "a");
map.set('2' , "b");
map.set('3' , "c");
map.set('4' , "d");
console.log(map);

//[key,values] we ahve to destructutre the map
for(const [key,values] of maps){
    console.log(key);
}

// we cannot ierate object in the same way using for of