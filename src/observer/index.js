import { isObject, def } from "../util/index"

import { arrayMethods } from './array.js'

class Observer {
    constructor(value) {
        value.__ob__ = this;
        def(value, '__ob__', this);
        // 观察数组
        if (Array.isArray(value)) {
            this.observeArray(value);
        }
        else {
            //观察对象
            this.walk(value);
        }

    }

    observeArray(value) {

    }

    walk(data) {
        Object.keys(data).forEach(key => {
            let value = data[key];
            defineReactive(data, key, value);
        })
    }

}


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
    if (!isObject(data)) {
        return
    }
    console.log(data);
    return new Observer(data); //观测数据
}