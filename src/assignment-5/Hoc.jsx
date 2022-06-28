import React, { useState } from 'react'

const CounterHoc = (Component) =>
{
    const Upgrade = () =>
    {
        const [Counter,setCount] = useState(0);
        const handleClick = () =>
        {
            setCount(Counter+1);
        }
        return <Component Counter={Counter} handleClick = {handleClick}/>
    };
  return Upgrade;
};
export default CounterHoc;
