export function parseNumber(str) {
    str = str.trim()
    if (str.length === 0) return undefined
    const num = parseInt(str)
    if (isNaN(num)) return undefined
    return num
}

export function isEmpty(str) {
    if (str.trim() === '') return true
    return false
}

export function validateMonth(month) {
    if (isNaN(month)) return false
    if (month < 1 || month > 12) return false
    return true
}

export function validateDay(day) {
    if (isNaN(day)) return false
    if (day < 1 || day > 31) return false
    return true
}

export function validateHour(hour) {
    if (isNaN(hour)) return false
    if (hour < 0 || hour > 23) return false
    return true
}

export function validate60(num) {
    if (isNaN(num)) return false
    if (num < 0 || num > 59) return false
    return true
}

export function datePassed(date) {
    const now = new Date()
    return date < now
}
