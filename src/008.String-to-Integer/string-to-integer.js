/**
 * @param {string} str
 * @return {number}
 */

const myAtoi = function (str) {
    var num = 0

    // 第一個字是英文的話 return 0
    if (/[a-zA-Z]/.test(str[0])) return 0

    // 去符號 + 空白 + a-z
    var sign = Math.sign(str.replace(/[ a-z]+/i, ''))
    // 去符號 + 空白 + a-z + 反轉字串
    var newStr = str.replace(/[- a-z]+/i, '').split('').reverse().join('')

    for (var i = 0; i < newStr.length; i++) {
        num += newStr[i] * Math.pow(10, i)
    }

    return num * sign
}

export default myAtoi;