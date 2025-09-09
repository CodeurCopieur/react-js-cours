import React from 'react'

export default function Child(props) {
    console.log(props)
  return (
    <div>
        Props Child : {props.children}
    </div>
  )
}
