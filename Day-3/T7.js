function tosnakeCase(str){
    const capitalLetter = /[A-Z]/g
    let transformedText = str.replaceAll(capitalLetter,"_"+"$&");
    console.log(transformedText);
    const lowered = transformedText.toLowerCase();
    console.log(lowered);
}
tosnakeCase( 'myFunction');
