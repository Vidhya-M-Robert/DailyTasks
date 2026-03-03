function ObjectTest(output,outputOriginal){
    let status = "Pass";
    if(typeof output === "object" && typeof outputOriginal === "object"){
        const key1 = Object.keys(output);
        const keys2 = Object.keys(outputOriginal);
        if(key1.length !== keys2.length){
            status = "Fail"
        }
        else{
            for(let key of key1){
                if(outputOriginal[key] !== output[key]){
                    status = "Fail";
                    break;
                }
            }
        }
    }
}