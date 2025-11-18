function formatDate(date: Date,formatStr: string){
    // let formatStr = formatStr;
    let year = date.getFullYear();
    // if(formatStr.includes("YYYY" || "YY")){
        formatStr = formatStr.replace("YYYY",year);
        formatStr = formatStr.replace("YY",year.toString().slice(2));
    // }
    let month = date.getMonth();
    if(formatStr.includes("M" || "MM")){
        formatStr = formatStr.replace("M",month);
        formatStr = formatStr.replace("MM",month.toString().padStart(2,"0"));
    }
    let day = date.getDate();
    if(formatStr.includes("D" || "DD")){
        formatStr = formatStr.replace("D",day);
        formatStr = formatStr.replace("DD",day.toString().padStart(2,"0"));
    }
    let hours = date.getHours();
    if(formatStr.includes("H")){
        formatStr = formatStr.replace("H",hours);
    }
    let minutes = date.getMinutes();
    if(formatStr.includes("m")){
        formatStr = formatStr.replace("m",minutes);
    }
    let secondss = date.getSeconds();
    if(formatStr.includes("s")){
        formatStr = formatStr.replace("s",secondss);
    }
    return formatStr;
}
console.log(formatDate(new Date(2025, 1, 4, 13, 44, 3), 'YY-M-D, H:m:s'))

