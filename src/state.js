import { observe } from "./observer";


export function initState(vm) {

    const opts = vm.$options;

    if (opts.props) {
        initProps(vm)
    }
    if (opts.methods) {
        initMethods(vm)
    }
    if (opts.data) {
        initData(vm)
    }
    if (opts.computed) {
        initComputed(vm)
    }
    if (opts.watch) {
        initWatch(vm)
    }
}


function initProps() { }

function initMethods() { }

//取值的时候通过代理，因为直接赋值可能会有冲突
function proxy(vm, key, target) {
    Object.defineProperty(vm, key, {
        get() {
            return vm[target][key];
        },
        set(newVale) {
            vmm[target][key] = newVale;
        }
    })
}

function initData(vm) {
    // 初始化数据
    let data = vm.$options.data;
    // 如果data是一个函数，则取函数的返回值作为对象
    data = vm._data = typeof data === "function" ? data.call(vm) : data
    // 数据劫持
    observe(data); //响应式

    // 直接读取vm属性 vm.message => vm._data.mesage
    for (let key in data) {
        proxy(vm, key, '_data');
    }
}

function initComputed() { }

function initWatch() { }