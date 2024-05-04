// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome",()=>{
    it("if the word reads the same forward and backward return true",()=>{
        const input='racecar'
        const inputed=isPalindrome(input)
        expect(inputed).toBe(true);
    });
    it("return false if word is not palindrome",()=>{
        const notpalindrome='car'
        const notpalindromeword=isPalindrome(notpalindrome)
        expect(notpalindromeword).toBe(false);
    });
 /*   it("returns true for words with a combination of uppercase and lowercase letters",()=>{
        const combo="tEsT"
        const combined=isPalindrome(combo)
        expect(combined).toBe(true);
    })*/
   /* it("throws error for empty string",()=>{
        const empty=''
        const emptystring=isPalindrome(empty)
        expect(emptystring).toBe(false)
    })*/
})