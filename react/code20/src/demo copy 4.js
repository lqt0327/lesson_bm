import React, {useState, useRef, useEffect} from "react";
export const MyComponent = () => {
  const [visible, setVisible] = useState(false);
  // mount unmount 
  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child component visibility: </button>
    </>
  )
} 

export const MyChildComponent = () => {
  const [filter, setFilter] = useState("")
  const [userCollection, setUserCollection] = useState([])
  const mountedRef = useRef(false);

  const setSafeUserCollection = userCollection => mountedRef.current && setUserCollection(userCollection)

  useEffect(()=>{
      mountedRef.current = true;
      return () => (mountedRef.current=false)
  })

  React.useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
        .then(response => response.json())
        .then(json => setSafeUserCollection(json))
    }, 2500)
    return(()=>{
        // setFilter("");
        // setUserCollection()
    })
  }, [filter])

  return (
    <div>
      <input type="text" value={filter} 
      onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {
          userCollection.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}
