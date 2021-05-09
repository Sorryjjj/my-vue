import { isObject, isArray, def } from "../util"

import { arrayMethods } from './array.js'
class Observer {
    constructor(value) {
        value.__ob__ = this;
        def(value, '__ob__', this);
        // 观察数组，用的是重写数组的方法  函数劫持
        // 改变数组本身的方法就可以监控到了
        if (isArray(value)) {
            value.__proto__ = arrayMethods;
            this.observeArray(value);
        }
        else {
            //观察对象，核心是循环对象
            this.walk(value);
        }

    }

    observeArray(arr) {
        arr.forEach(v => {
            observe(v);
        })
     }

    walk(data) {
        // 对每个属性使用defineProperty重新定义
        Object.keys(data).forEach(key => {
            let value = data[key];
            defineReactive(data, key, value);
        })
        console.log(data);
    }

}

// 性能低的原因
// 优化：
//      不要把所有数据都放在data中
//      数据层次不要太深
//      不要频繁获取数据
//      如果数据不需要响应式，可以使用Object.freeze 冻结属性

function defineReactive(data, key, value) {
    observe(value); //递归深度检测
    Object.defineProperty(data, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue === value) return;
            observe(newValue); // 观察新设置的值
            value = newValue;
        }
    })
}


export function observe(data) {
    // 如果不是对象，不需要观测
    if (!isObject(data)) {
        return
    }
    // 用类来实现
    return new Observer(data); //观测数据
}