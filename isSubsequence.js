var isSubsequence = function(s, t) {
    let j = 0;
    for(let i = 0; i < t.length; i++)
    {
        if(s[j] == t[i]) {
            j++;
        }
    }
    if(j == s.length) return true
    return false
};