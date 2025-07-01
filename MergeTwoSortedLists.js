nums1 = [1,2,3,0,0,0];
nums2 = [2,5,6];
m = 3;
n = 3

var merge = function(nums1, m, nums2, n) {
    let res = [];
    let i = 0;
    let j = 0;
    while(i < m && j < n) {
        if(nums1[i] <= nums2[j]) {
            res.push(nums1[i])
            i = i + 1;
        } else {
            res.push(nums2[j])
            j = j + 1
        } ;

    }
    if(i < m) res.push(...nums1.slice(i, m));
    if(j < n) res.push(...nums2.slice(j, n));
    for(let k = 0; k < res.flat().length; k++) {
        nums1[k] = res[k];
    }
};

console.log(merge(nums1, m, nums2, n))
console.log('1',nums1)