import { initMixin } from "./init"

// 所有的功能都通过原型扩展的方式来添加
function Vue (options){
    this._init(options);
}

// 给原型增加方法
initMixin(Vue);

export default Vue;
