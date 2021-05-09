export function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}

export function isArray(val) {
    return Array.isArray(val);
}

export function def(data, key, value) {
    Object.defineProperty(data, key, {
        enumerable: false,
        configurable: false,
        value
    })
}