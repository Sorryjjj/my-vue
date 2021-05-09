// import babel from 'rollup-plugin-babel'
// import serve from 'rollup-plugin-serve'

// export default {
//     input: './src/index.js',//打包入口
//     output: {
//         file: 'dist/umd/vue.js', // 打包出口
//         name: 'Vue', // 指定打包后全局变量名字
//         format: 'umd', // 统一模块规范
//         sourcemap: true, // 开启源码调试

//     },
//     plugins: [
//         babel({
//             exclude: "node_modules/**"
//         }),
//         proccess.env.ENV === 'development' ? serve({
//             open: true,
//             openPage: '/public/index.html',
//             port: 3000,
//             contentBase: ''
//         }): null
//     ]
// }


import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './src/index.js',
    output: {
        format: 'umd', // amd commonjs规范  默认将打包后的结果挂载到window上
        file: 'dist/vue.js', // 打包出的vue.js 文件  new Vue
        name: 'Vue',
        sourcemap: true
    },
    plugins: [
        babel({ // 解析es6 -》 es5
            exclude: "node_modules/**" // 排除文件的操作 glob  
        }),
        serve({ // 开启本地服务
            open: true,
            openPage: '/public/index.html',
            port: 3000,
            contentBase: ''
        }),
        resolve(),
        // resolve({
        //     mainFields: ['module', 'main'], // Default: ['module', 'main']
        //     browser: true,  // Default: false
        //     extensions: ['.mjs', '.js', '.jsx', '.json'],  // Default: [ '.mjs', '.js', '.json', '.node' ]
        //     preferBuiltins: false,  // Default: true
        //     jail: '/my/jail/path', // Default: '/'
        //     only: ['some_module', /^@some_scope\/.*$/], // Default: null
        //     modulesOnly: true, // Default: false
        //     dedupe: ['react', 'react-dom'], // Default: []
        //     customResolveOptions: {
        //         moduleDirectory: 'js_modules'
        //     }
        // })
    ]
}