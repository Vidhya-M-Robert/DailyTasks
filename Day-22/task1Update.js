function formatDate(date,format){
    const map = {                                             //map object
        "YYYY":date.getFullYear().toString(),
        "YY": (date.getFullYear() % 100).toString().padStart(2,"0"),     //2025 % 100 = 25

        "MM": (date.getMonth() + 1).toString().padStart(2, "0"),  
        "M":(date.getMonth() +1).toString(),

        "DD": date.getDate().toString().padStart(2,"0"),
        "D":date.getDate().toString(),

        "HH": date.getHours().toString

    }
}