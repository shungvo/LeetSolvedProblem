s = "badc";
t = "baba";

var isIsomorphic = function (s, t) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == undefined) map[s[i]] = t[i];
  }
  newStr = "";
  for (let i = 0; i < s.length; i++) {
    newStr += map[s[i]];
  }
  console.log(newStr)
  return newStr == t;
};
console.log(isIsomorphic(s, t));
