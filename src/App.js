import React, { useEffect, useMemo, useRef, useState } from "react";

const App = () => {
  // useState
  // const [count, setCount] = useState(10);

  // const changeCount = (num) => {
  // setCount(prev => prev + num);
  // <div>{count}</div>
  // <button onClick={() => changeCount(-1)}>Increase</button>
  // <button onClick={() => changeCount(1)}>Decrease</button>
  // }

  // useEffect
  // useEffect(() => {
  //   console.log("Loading Complete");
  // }, []);

  // console.log("테스트1");

  // useMemo
  // const randomNum = useMemo(() => {
  //   return Math.random();
  // },[])

  // useRef
  // const inputRef = useRef();
  // <input ref={inputRef} type={"text"} placeholder={"name"}/>

  // changeList
  const [list, setList] = useState([0, 0, 0]);

  const changeList = (index) => {
    const tempList = [...list];
    tempList[index] = tempList[index] + 1;
    setList(tempList);
  }
  return <div>
    <div>{list[0]}</div>
    <div>{list[1]}</div>
    <div>{list[2]}</div>
    <button onClick={() => changeList(0)}>0번 변경</button>
    <button onClick={() => changeList(1)}>1번 변경</button>
    <button onClick={() => changeList(2)}>2번 변경</button>
  </div>;
};

// function App() {
//   return <div></div>;
// }

export default App;
