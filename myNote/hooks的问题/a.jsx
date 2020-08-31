import React, {
    useState,
    // useCallback,
    useRef
  } from "react";
  import "./styles.css";
  // 点击显示 count
  // 快速 点击 增加 count 2次 问 输出什么
//   useState => {value: }
  function Example() {
    const [count, setCount] = useState(0);

    // 通过ref修正count，ref相当于对象，也可以自己定义一个对象来解决
    let countRef = useRef();
    countRef.current = count;
  
    const handleAlertClick = () => {
      setTimeout(() => {
        console.log("count", count);
        // console.log("count", countRef.current);
      }, 3000);
    };
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>增加 count</button>
        <button onClick={handleAlertClick}>显示 count</button>
      </div>
    );
  }
  /**
   * capture value
   * 组件每次 render 的时候，都会形成一个快照
   * 每次都有自己独立的props state
   * for(let i = 0; i < 10; i++) {
   *    (function(j){
   *        setTimeout(()=>{
   *        console.log(j)
   * })
   * })(j)
   * }
   * function Example() {
   *    const count = 0;
   *    setTimeout(()=>{
   *        console.log(count)
   * },3000)
   * }
   * function example() {
   *    const count = 1
   * }
   *function example() {
   *    const count = 2
   * }
   */
  export default class App extends React.Component {
    render() {
      return (
        <div className="main">
          <Example />
        </div>
      );
    }
  }
  