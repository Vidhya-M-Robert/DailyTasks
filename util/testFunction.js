 function testFunction(){
 testcases.forEach((testcase,index) =>{
        const outputOriginal = frequencyOfCharacters(testcase.input);
        let status = "Pass";
        if(typeof outputOriginal === "string"){
            status = outputOriginal === testcase.output ? "Pass" : "Fail"
        }
        if(typeof outputOriginal !== 'string' && Array.isArray(outputOriginal) && typeof outputOriginal !== "number" || typeof outputOriginal !== "boolean"){
            const keys1 = Object.keys(testcase.output);
            const keys2 = Object.keys(outputOriginal);
            if(keys1.length !== keys2.length){
                status = "Fail"
            }
            else{
                for(let key of keys1){
                    if(outputOriginal[key] !== testcase.output[key]){
                        status = "Fail";
                        break;
                    }
                }
            }
        }
        if(Array.isArray(outputOriginal)){
            if(outputOriginal.length === testcase.output.length){
                for(let i = 0; i< outputOriginal.length;i++){
                    if(outputOriginal[i] !== testcase.output[i]){
                        status = "Fail"
                        break;
                    }
                }
            }
            else{
                status = "Fail"
            }
        }
    }
 )
 }