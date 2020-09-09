module.exports = function(source) {
    console.log(source);
    // md -> html 状态机

    return `
        import React from 'react';
        import Markdown from 'markdown-to-jsx';
        export default function Post() {
            return React.createElement(Markdown, {}, \`${source}\`)
        }
    `;
}