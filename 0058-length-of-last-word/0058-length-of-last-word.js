/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let end = s.length - 1;

    // Skip trailing spaces
    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    let start = end;

    // Find the beginning of the last word
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }

    return end - start;
};