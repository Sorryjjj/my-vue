//重写数组方法

let oldArrayMethods = Array.prototype;

export let arrayMethods = Object.create(oldArrayMethods);

const methods = [
    'push',
    'shift',
    'unshift',
    'pop',
    'sort',
    'splice',
    'reverse'
]

methods.forEach(method => {
    arrayMethods[method] = function (...args) {
        console.log("push");
        // AOP 切面编程
        const result = oldArrayMethods[method].apply(this, args); // 调用原生方法

        let inserted;
        let ob = this.__ob__;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2);
            default:
                break;
        }
        //继续观测新增属性
        if(inserted) {
            ob.observeArray(inserted);
        }

        return result;
    }
})