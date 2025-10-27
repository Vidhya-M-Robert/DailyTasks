function countdown(date) {
    const datenew = new Date(date);
    console.log(datenew.toLocaleString());
    const now = new Date();
    console.log(now.toLocaleString());
    
}
countdown("2025-04-12");