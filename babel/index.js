const babel = require('@babel/core')
const t = require('babel-types')
const code = `import { zip } from 'lodash'`
// js 代码： 1. module  2. 脚本
const res = babel.transform(code, {
    plugins: [
        {
            visitor: plugin
        }
    ]
})
console.log(res);
// import zip from 'lodash/zip'     // importDefault
// import zip as XX from XX     // importName
const plugin = {
    // path AST import 节点
    ImportDeclaration(path) {
        // let descs = [t.ImportDeclaration]
        // const specifies = path.node.specifies;
        // import React, { useState } from 'react'
        let descs = [t.importDefaultSpecifier('zip')]
        let str = t.stringLiteral('lodash/zip')

        let importStatement = t.ImportDeclaration(descs, str)
        path.replaceWithMultiple([ importStatement ])
    }
}