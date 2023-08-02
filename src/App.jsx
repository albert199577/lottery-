import './App.css'
import React, {useState} from "react";
import ReactDOM from 'react-dom/client'

function App() {
  const column = {
    height: '長',
    width: '寬',
    num: '抽幾次',
  };
  const [height ,setHeight] = useState(5);
  const [width ,setWidth] = useState(16);
  const [num ,setNum] = useState(1);
  const [sum ,setSum] = useState(height * width);
  const [data ,setData] = useState([]);

  const handleClick = () => {
    console.log(77777777)
    checkfull();
    let SpecialArr = getSpecialArr()
    buildcircle();
  }
 

  const checkfull = () => {
    if (num > sum) return alert(`長寬限制最多只能抽${sum}次`)
  }

  const getSpecialArr = () => {
    setData([]);
    let counter = {};
    let temp = num;
    while (temp > 0) {
      let special = Math.floor(Math.random() * sum + 1);
      if (!counter[special]) {
          counter[special] = 1;
          setData(data.push(special));
          temp--;
      }
    }
    console.log(data)
  }

  const buildcircle = () => {
    
  }

  const handleHeigth = (e) => {
    setHeight(e.target.value);
    setSum(height * width); 
  }

  const handleWidth = (e) => {
    setWidth(e.target.value);
    setSum(height * width);
  }

  return (
    <>
    {/* <h1 className="my-10 text-3xl text-center text-cyan-500">一抽入魂 • 無情開抽</h1> */}
    <section className="flex gap-2 justify-center">
        <div>
            <label htmlFor="height">{column.height}</label>
            <input type="number" name="height" id="height" min="1" max="20" defaultValue={height} onChange={handleHeigth} />
        </div>
        <div>
            <label htmlFor="width">{column.width}</label>
            <input type="number" name="width" id="width" min="1" max="20" defaultValue={width} onChange={handleWidth} />
        </div>
        <div>
            <label htmlFor="num">{column.num}</label>
            <input type="number" name="num" id="num" min="1" max="400" defaultValue="1"  onChange={(e)=>{ setNum(e.target.value) }} />
        </div>
    </section>
    <div className="flex justify-center">
        <button type="button" onClick={handleClick} className="btn">開抽</button>
    </div>
    <div className="app grid md:gap-4 gap-2 p-4 justify-center justify-items-center"></div>
    </>
  )
}





export default App
