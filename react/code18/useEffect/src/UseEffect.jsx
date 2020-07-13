import React, { useEffect, useState, useMemo } from 'react';
import { useCallback } from 'react';

function Demo() {
    const [inputVal, setVal] = useState('海阔天空');
    const [list, setList] = useState([]);
    // console.log(useState);
    const val = useMemo(()=>[1,2]);
    const handleChange = useCallback((e)=>{
        setVal(e.target.value);
    })
    // 第二个参数 依赖  react检查依赖里面有没有数据发生变化，没变化就不会重新调用
    // [] 一次 componentDidMount
    // [inputVal] 多次 componentDidUpdate
    useEffect(()=>{
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords='+inputVal).then(res=>
            res.json()
        ).then(res=>{
            setList(res.result.songs);
        })
        return () => {
            // 卸载
        }
    },[inputVal])
    return (
        <div>
            {list.length}
            <input type="text" value={inputVal} onChange={handleChange} />
        </div>
    )
}

export default Demo;