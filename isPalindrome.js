s = "A man, a plan, a canal: Panama"
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let i = 0;
    while(i < (s.length / 2)) {
        if (s[i] != s[s.length - i - 1]) {
            return false
        }
        i++
    }
    return true
};

console.log(isPalindrome(s))