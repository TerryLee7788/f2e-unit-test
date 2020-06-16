/**
 * @param {string} str
 * @return {number}
 */

const myAtoi = function (str) {
    var num = 0
    var result = 0
    var MAX_NUM

    // 第一個字是英文的話 return 0
    if (/[a-zA-Z]/.test(str[0])) return 0

    // 去符號 + 空白 + a-z
    var sign = Math.sign(str.replace(/[ a-z]+/i, ''))
    // 去符號 + 空白 + a-z + 反轉字串
    var newStr = str.replace(/[- a-z]+/i, '').split('').reverse().join('')

    for (var i = 0; i < newStr.length; i++) {
        num += newStr[i] * Math.pow(10, i)
    }

    result = num * sign
    MAX_NUM = Math.pow(2, 32) * sign

    // 如果是負的
    if (sign < 0) {
        if (result < MAX_NUM) return -2147483648
    }
    // 如果是正的
    else {
        if (result > MAX_NUM) return 2147483648
    }

    return result
}

export default myAtoi;