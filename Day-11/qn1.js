function calculateTotal(billAmount,taxPercentage){
    let taxPer;
    if(taxPercentage !== undefined){
        taxPer = taxPercentage;
    }
    else{
        taxPer = 20;
    }
    const taxAmount = billAmount * (taxPer / 100);
    console.log(taxAmount);
}
calculateTotal(20000,15);