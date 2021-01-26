//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。 
//
// 有效字符串需满足： 
//
// 
// 左括号必须用相同类型的右括号闭合。 
// 左括号必须以正确的顺序闭合。 
// 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "()"
//输出：true
// 
//
// 示例 2： 
//
// 
//输入：s = "()[]{}"
//输出：true
// 
//
// 示例 3： 
//
// 
//输入：s = "(]"
//输出：false
// 
//
// 示例 4： 
//
// 
//输入：s = "([)]"
//输出：false
// 
//
// 示例 5： 
//
// 
//输入：s = "{[]}"
//输出：true 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 104 
// s 仅由括号 '()[]{}' 组成 
// 
// Related Topics 栈 字符串 
// 👍 2114 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bufferStack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{"){
            bufferStack.push(s[i])
        }else {
            if (bufferStack.length === 0) return false;
            if ((s[i] === ")" && bufferStack[bufferStack.length - 1] === "(")
                ||(s[i] === "]" && bufferStack[bufferStack.length - 1] === "[")
                ||(s[i] === "}" && bufferStack[bufferStack.length - 1] === "{")) {
                bufferStack.pop();
            } else {
                return false
            }
        }
        console.log(bufferStack);
    }
    return bufferStack.length === 0;
};
const s = "()[]{}";
console.log(isValid(s))

//leetcode submit region end(Prohibit modification and deletion)
