import React, { useContext } from 'react';
import { context } from "./BrowserRouter";

export default function Route(props) {
    const { pathname } = useContext(context);
    const { path, component: Com } = props;
    console.log(window.location);
    return (pathname === path ? <Com /> : null)
}