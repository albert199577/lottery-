import { Input } from 'postcss';
import { React, useState} from 'react'
import Form from '../components/Form.jsx';
import Lattice from '../components/Lattice.jsx';

const HomePage = () => {
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
  const [data ,setData] = useState([]);
  const [height ,setHeight] = useState(column.height.default);
  const [width ,setWidth] = useState(column.width.default);
  const [num ,setNum] = useState(column.num.default);
  const [sum ,setSum] = useState(width * height);
  return (
    <>
    <div>
      <h1 className="my-10 text-3xl text-center text-cyan-500">一抽入魂 • 無情開抽</h1>
      <Form 
      setNum={setNum} setHeight={setHeight} setData={setData} setSum={setSum} setWidth={setWidth}
      num={num} height={height} data={data} sum={sum} width={width} column={column}/>
      <Lattice data={data} sum={sum} width={width}/>
    </div>
    </>
  )
}

export default HomePage