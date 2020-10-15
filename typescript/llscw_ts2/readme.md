从零开始 配置webpack + ts
https://github.com/Lemoncode/react-typescript-samples/blob/master/hooks/00_BoilerPlate/Readme.md

## 大致流程
- Prerequisites: Install Node.js
- Initialize ./package.json (with npm init)
- Install:
    - Webpack and webpack-dev-server.
    - TypeScript.
    - Babel.
- Setup ./webpack.config.js
- Create a test JS file.
- Create a simple HTML file.

## 03_State
- 最低限度的基础配置 webpack babelrc……
- 实现了父子组件传值

## 重点：
interface Props {
    userName: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

onChange 的类型声明