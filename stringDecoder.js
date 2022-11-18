/***
 * 
 * In this challenge, you’ll write a decoder function. The function should take in a string and 
 * return a string.
 * Start by creating a function called decoder that has a single parameter called code.
 * Each code will be a sequence of numbers and letters, always starting with a number and ending 
 * with a letter(s).
 * Each number tells you how many characters to skip before finding a good letter. After each good 
 * letter should come the next next number.
 * For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find 
 * the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.
 * So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.
 */


// const decoder = (string, decoded = '', charsToSkip = 0) => {
//     if(string.length <= 1)
//     {
//         return decoded;
//     }
//     let char = string.charAt(charsToSkip);
//     //console.log(char);
//     if(!isNaN(char))
//     {
//         //console.log(string.substr(charsToSkip + 1));
//         return decoder(string.substr(charsToSkip + 1), decoded, char);
//     } 
//     else {
//         decoded += char;
//         //console.log(decoded);
//         return decoder(string.substr(1), decoded, 0);
//     }
// }

/* Ezekiel's Solution
const decoder = (string) => {
    let decoded = '';
    for(let i = 0; i < string.length; i++)
    {
        if(!isNaN(string[i]))
        {
            decoded += string[i + parseInt(string[i]) + 1];
            i += parseInt(string[i]) + 1;
        }
    }
    return decoded;
}
*/

const decoder = (hash) => {
    let decoded = '';
    let matches = [...hash.matchAll(/[0-9]/g)];
    for(let i = 0; i < matches.length; i++)
    {
        let index = Number(matches[i]['index']);
        let number = Number(matches[i]);
        decoded += hash[index + number + 1];
    }
    return decoded;
}

console.log(decoder('0h2xce5ngbrdy'));
console.log(decoder('3vdfn'));
console.log(decoder('0r'));
console.log(decoder('2bna0p1mp2osl0e'));
console.log(decoder('0y4akjfe0s'));

