{/*
    <div id="root" className="wrap">
        <span className="demo">
            This is a span.
        </span>
        <p>DOM</p>
    </div>
    */
}


// DOM 树 AST Three Abstract
// Abstract 业务 逻辑
// 算法

let dom = {
    tag:'div',
    attrs: {
        id: 'root',
        className: 'wrap'
    },
    children: [
        {
            tag:'span',
            attrs: {
                className: 'demp'
            },
            children: [
                // 公平，
                {
                    tag: undefined,
                    text: 'This is a span.'
                },
                {
                    tag: 'p',
                    children: [
                        {
                            tag: undefined,
                            text: 'DOM'
                        }
                    ]
                }
            ]
        }
    ]
}