const  myObject ={
  js:'javascript',
  cpp:'c++',
  rv:'ruby',
  swift:"swift by apple"  
}

for(const key in myObject){
   console.log(`${key} shortcut is for ${myObject[key]}`)
}