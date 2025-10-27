function getTicketPrice(age){
    if(age <= 12){
        return "$10";
    }
    else if(age>12 && age<60){
        return "$20";
    }
    else if(age >= 60){
        return "$15";
    }
}
console.log(getTicketPrice(59));