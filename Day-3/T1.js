function SumofArray(arr){
   const splitted1 = String(arr.slice(0,1));
   console.log(splitted1);
   const splitted2 = String(arr.slice(1));
   console.log(splitted2);
   const replacedStr1 =Number(splitted1.replaceAll(",",""));
   console.log(replacedStr1);
   const replacedStr2 =Number(splitted2.replaceAll(",",""));
   console.log(replacedStr2);
   console.log(replacedStr1 + replacedStr2);
}
SumofArray([[1,2,3], [0, 7]]);


