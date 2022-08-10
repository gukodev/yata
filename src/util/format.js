export function trailingZero(num) {
    num = parseInt(num, 10)
    return num < 10 ? '0' + num : num
}
