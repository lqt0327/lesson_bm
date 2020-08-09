// import React, { useState, memo } from "react";

// const setSatisfactionClass = level => {
//     if(level < 100) {
//         return "very-dissatisfied"
//     }
//     if(level < 200) {
//         return "somewhat-dissatisfied"
//     }
//     if(level < 300) {
//         return "neither"
//     }
//     if(level < 400) {
//         return "somewhat-satisfied"
//     }
//     return "very-satisfied"
// }

// const isSameRange = (prevValue,nextValue) => {
//     const prevValueClass = setSatisfactionClass(prevValue.level);
//     const nextValueClass = setSatisfactionClass(nextValue.level);
//     return prevValueClass === nextValueClass
// }

// export const FaceComponent = memo((props) => {
//     // console.log(props.level)
//     const { level } = props;
//     return (
//         <div className={setSatisfactionClass(level)}>
//         </div>
//     )
// },isSameRange)

import React, { memo, useState } from 'react';

export const MyComponent = () => {
    const [userInfo,setUserInfo] = useState({
        name: ' John ',
        lastname: 'Doe'
    })

    setTimeout(()=>{
        setUserInfo({
            ...userInfo,
            name: ' John '
        })
    },2000)

    return (
        <>
            <DisplayUsername name={userInfo.name} />
            <input type="text" value={userInfo.name} onChange={e => setUserInfo({
                ...userInfo,
                name: e.target.value
            })} />
        </>
    )
}

export const DisplayUsername = memo(props=>{
    console.log('只在name发生改变时才更新')
    return <h3>{props.name}</h3>
})

// export const MyComponent = () => {
//     const [filter, setFilter] = React.useState("")
//     const [userCollection, setUserCollection] = React.useState([])

//     React.useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//         .then(response=>response.json())
//         .then(json => setUserCollection(json))
//     },[filter])
//     return (
//         // github  api  lqt0327 repos list
//         <div>
//             <input value={filter} onChange={e=>setFilter(e.target.value)} />
//             <ul>
//                 {
//                     userCollection.map((user,index)=>(
//                         <li key={index}>{user.name}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }