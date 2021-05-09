import { initState } from "./state";

//在原型上添加一个inti方法
export function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        // Vue的内部 $options 就是用户传递的所有参数
        const vm = this;
        // 这个options 就包含了用户创建实例时传入的所有属性 Vue.options
        vm.$options = options;

        //初始化状态
        initState(vm);//分割代码
    }
}