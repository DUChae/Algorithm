function solution(nums) {
    const choose=nums.length/2;
    const arr=[...new Set(nums)];
    return arr.length>choose?choose:arr.length;
}