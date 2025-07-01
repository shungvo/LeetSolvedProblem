var lengthOfLastWord = function(s) {
    var l = s.length;
    while(s[l - 1] === ' ') {
        l--;
    }
    for(let i = l - 1; i >= 0; i--) {
        if(s[i] === ' ') return l - i - 1; 
    }
    return l
};
var s = "a "
console.log(lengthOfLastWord(s))