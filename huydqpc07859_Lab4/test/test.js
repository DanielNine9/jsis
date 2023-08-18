function merge (a , m, b  , n ){
    return a.filter(a => a !== 0).concat(b).sort((a,b) => a-b)
}

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(merge(nums1, m, nums2, n))