function countdown(targetDate){
    const target = new Date(targetDate).getTime();   //creates a Date Object in js and change that date into a number(milliseconds)
    const timer = setInterval(() => {
       const now =  new Date().getTime();      // current time in milliseconds
       const diff = target - now              //time left in milliseconds
    
    if(diff <= 0){
        console.log("Countdown Finished");
        clearInterval(timer);
        return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    const seconds = Math.floor(diff % (1000*60) / 1000);
    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s remaining`);
    },1000); 
    return timer;
}
countdown("2025-11-01");