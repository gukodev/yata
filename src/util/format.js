export function trailingZero(num) {
    num = parseInt(num, 10)
    return num < 10 ? '0' + num : num
}

export function filterByMostRecent(arr, field) {
    return arr
        .sort((a, b) => {
            return new Date(a[field]) - new Date(b[field])
        })
        .reverse()
}
