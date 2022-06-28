import React from 'react'
import CounterHoc from './Hoc';
const ClickCounter = (props)=>
{

    const {Counter,handleClick} = props;
    // const handleCount = ()=>setCount(count+1);
  return (
    <div>
        <p id='click'>ClickCounter: {Counter}</p>
        <button onClick={handleClick} id='count'>Click Counter</button>
        {/* <h2>Name:{props.name}</h2> */}
    </div>
  )
}
const EnhanceClickCounter = CounterHoc(ClickCounter,2);
export default EnhanceClickCounter;