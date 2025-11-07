function parenthesisLength(str){
    let count = 0;
    let count2 = 0;
    let  Arr = [];
    for(let i=0;i<str.length;i++){
        if(str[i] === "("){
            count++;
        }
        if(str[i] === ")"){
            count2++;
        }
    }
    Arr.push(count,count2);
    let min = Math.min(...Arr);
    let length = min * 2;
    console.log(length);
}
parenthesisLength("(()");     
parenthesisLength(")()())");  
parenthesisLength("(())()");
parenthesisLength("((()))"); 
parenthesisLength("((()))"); 