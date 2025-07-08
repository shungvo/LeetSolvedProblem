ransomNote = "aa";
magazine = "aab";
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  let map = new Map();

  for (let i = 0; i < magazine.length; i++) {
    if (map.get(magazine[i]) == undefined) map.set(magazine[i], Number(1));
    else map.set(magazine[i], map.get(magazine[i]) + Number(1))
  }
    console.log(map);
  for (let i = 0; i < ransomNote.length; i++) {
    if (map.get(ransomNote[i]) == undefined || map.get(ransomNote[i]) <= 0)
      return false;
    else map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
  }

  return true;
};
console.log(canConstruct(ransomNote, magazine));
