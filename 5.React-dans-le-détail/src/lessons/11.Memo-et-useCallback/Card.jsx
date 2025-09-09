import {memo} from 'react'

export default memo(function Card({text, customLog}) {
    customLog();
    
  console.log("render Card");
  return (
    <div>
        <h1>Card</h1>
        <p>{text}</p>
    </div>
  )
})