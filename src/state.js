import { observe } from "./observer/index";


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

function initData(vm) {
    // 初始化数据
    let data = vm.$options.data;
    data = vm._data = typeof data === "function" ? data.call(vm) : data
    // 数据劫持
    observe(data); //响应式

}

function initComputed() { }

function initWatch() { }