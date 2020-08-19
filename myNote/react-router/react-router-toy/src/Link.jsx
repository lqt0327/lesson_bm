import React, { useContext } from 'react';
import { context } from "./BrowserRouter";

export default function Link(props) {
    const {update,pathname} = useContext(context)
    const { to, children } = props
    const handleClick = (e) => {
        e.preventDefault();
        window.history.pushState(null,null,to)
        // 整个页面更新
        // 在 Context 存一份数据
        update({pathname: to})
    }
    return (
        // <div onClick={handleClick}>
        //     {children}
        // </div>
        <a href={to} onClick={handleClick}>
            {children}
        </a>
    );
}