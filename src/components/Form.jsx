import  React, { useState, useEffect } from 'react'

const Form = () => {
  const column = {
    height: {
      title: '長',
      default: 5
    },
    width: {
      title: '寬',
      default: 16
    },
    num: {
      title: '抽幾次',
      default: 1
    },
  };
  const [height ,setHeight] = useState(column.height.default);
  const [width ,setWidth] = useState(column.width.default);
  const [num ,setNum] = useState(column.num.default);
  const [sum ,setSum] = useState(height * width);
  const [data ,setData] = useState([]);

  const handleHeigth = (e) => {
    setHeight(e.target.value);
  }

  const handleWidth = (e) => {
    setWidth(e.target.value);
  }

	const handleClick = () => {
    console.log(data)
    setData([]);
    checkfull();
    let SpecialArr = getSpecialArr()
    buildcircle();
  }

  useEffect(() => {
    setSum(height * width);
  }, [width, height]);

  const checkfull = () => {
    if (num > sum) return alert(`長寬限制最多只能抽${sum}次`)
  }

  const getSpecialArr = () => {
    setData([]);
    let counter = {};
    let temp = num;
    let newData = [];
    while (temp > 0) {
      let special = Math.floor(Math.random() * sum + 1);
      if (!counter[special]) {
          counter[special] = 1;
          newData.push(special);
          temp--;
      }
    }
    setData(newData);
  }

  const buildcircle = () => {
    
  }

  return (
    <>
    <section className="flex gap-2 justify-center">
			<div>
				<label htmlFor="height">{column.height.title}</label>
				<input type="number" name="height" id="height" min="1" max="20" defaultValue={height} onChange={handleHeigth} />
			</div>
			<div>
				<label htmlFor="width">{column.width.title}</label>
				<input type="number" name="width" id="width" min="1" max="20" defaultValue={width} onChange={handleWidth} />
			</div>
			<div>
				<label htmlFor="num">{column.num.title}</label>
				<input type="number" name="num" id="num" min="1" max="400" defaultValue="1"  onChange={(e)=>{ setNum(e.target.value) }} />
			</div>
    </section>
    <div className="flex justify-center">
      <button type="button" onClick={handleClick} className="btn">開抽</button>
    </div>
    </>
  )
}

export default Form