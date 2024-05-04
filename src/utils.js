// Your code here
function reverse(string){
    return string.split("").reverse().join("");
}

export function isPalindrome(word){
if(!/^[A-Za-z]+$/.test(word)){
    throw new Error('invalid');
}
const lowercase=word.toLowerCase()
return lowercase===reverse(lowercase)
}