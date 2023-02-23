function removeChar(str){
    
    let str1 = str.slice(1);
    let str2 = str1.slice(0, str1.length - 1);
    return str2;
}

console.log(removeChar('eloquent'));