//判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。 
//
// 示例 1: 
//
// 输入: 121
//输出: true
// 
//
// 示例 2: 
//
// 输入: -121
//输出: false
//解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 
//
// 示例 3: 
//
// 输入: 10
//输出: false
//解释: 从右向左读, 为 01 。因此它不是一个回文数。
// 
//
// 进阶: 
//
// 你能不将整数转为字符串来解决这个问题吗？ 
// Related Topics 数学 
// 👍 1370 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x === 0) return true;
    let y = 0;
    const temp = x;
    while (x) {
        y *= 10;
        y += x % 10;
        x = parseInt(x / 10)
    }
    return temp === y;
};
// var isPalindrome = function(x) {
//     if (x < 0) return false;
//     const current = x + "";
//     let left = 0, i = left - 1, right = current.length - 1, j = right + 1;
//     while (i < j) {
//         if (current[++i] !== current[--j]) {
//             return false;
//         }
//         console.log(current[i], current[j],current[i] === current[j])
//     }
//     return true;
// };
console.log(isPalindrome(100))
//leetcode submit region end(Prohibit modification and deletion)
