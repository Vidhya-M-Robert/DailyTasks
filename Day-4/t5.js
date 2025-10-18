function findKebabCase(str){
    let Capitals = /[A-Z]/g
    let newText = str.replaceAll(Capitals,"-"+"$&").toLowerCase();
    console.log(newText);
}
findKebabCase('myFunction');


