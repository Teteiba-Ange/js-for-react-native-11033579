/*let arr = [];
function processArray(arr) {
    const newArray = []
    for (const element of arr) {
        if (element % 2 === 0) {
            newArray.push(element ** 2)
        } else {
            newArray.push(element * 3)
        }
    }
    return newArray;
}
//testing if code actually works//
var originalArray = [1, 2, 4, 3]
var AfterArray = processArray(originalArray)
console.log(originalArray)
console.log(AfterArray)
*/
//task2//
function formatArrayStrings(strArr,numArr){
 if(strArr.length !== numArr.length){
    throw new Error('Please input arrays must have the same length')
 }
 //modifying strings based on it corresponding number//
 for(let i=0;i<= strArr.length;i++){
    var str=strArr[i];
    var num=numArr[i];
    if (num % 2 === 0) {
        strArr[i] = str.toUpperCase();
     }else
     {
       str.Arr[i] = str.toLowerCase();
     }
    }   
    return strArr;
}
var str = ["Anabel","esi","kwame"]
var num = [1,2,3]
var After = formatArrayStrings(str,num)
console.log(str)
console.log(num)
console.log(After)