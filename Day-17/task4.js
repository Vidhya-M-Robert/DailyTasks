function Once(){
    return function X(){
        let x =10;
        console.log(x);
    }
}
const initialized = Once();
initialized();
initialized();

