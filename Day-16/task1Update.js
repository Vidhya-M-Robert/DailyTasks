function longestValidParenthesis(s){
    const stack = [];
    stack.push(-1);
    let maxlength = 0;
    for(let i=0;i<s.length;i++){
        if (s[i] === '('){
            stack.push(i);
        }
        else{
            stack.pop();
            if(stack.length === 0){
                stack.push(i);
            }
            else{
                let length = i-stack[stack.length -1];
                maxlength = Math.max(maxlength, length);
            }
        }
    }
    return maxlength;
}
console.log(longestValidParenthesis("(()")); 
console.log(longestValidParenthesis(")()())"));  
console.log(longestValidParenthesis("(())()"));


