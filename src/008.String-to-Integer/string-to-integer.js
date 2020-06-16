/**
 * @param {string} str
 * @return {number}
 */

const myAtoi = function (str) {
    var num = 0

    // 去符號 + 空白
    var sign = Math.sign(str.replace(/ +/i, ''))
    // 去符號 + 空白 + 反轉字串
    var newStr = str.replace(/[ -]+/i, '').split('').reverse().join('')

    for (var i = 0; i < newStr.length; i++) {
        num += newStr[i] * Math.pow(10, i)
    }

    return num * sign
}

export default myAtoi;