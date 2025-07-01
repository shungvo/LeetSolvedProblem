const openList = ["(", "[", "{"];
const closeList = [")", "]", "}"];
const s = "([{}])"

const checkValidInput = ( s ) => {
    var openQ = [];
    if(s.length % 2 !== 0) return false
    if(closeList.includes(s[0])) {
        return false
    }
    for(let i = 0; i < s.length; i++) {
        if(openList.includes(s[i])) {
            openQ.push(s[i]);
        }
        else if(closeList.includes(s[i])) {{
            if(openList.indexOf(openQ.pop()) !== closeList.indexOf(s[i])) {
                return false
            }
        }}
    }
    if( openQ.length !== 0) {
        return false
    }
    return true
    
}

console.log(checkValidInput(s))