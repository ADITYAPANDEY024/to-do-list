import React from 'react'

export default function Alert(props) {
    let AlertStyle={
        display:props.display
    }
  return (
    <div className="alert alert-success " style={AlertStyle} role="alert">
        {props.todo}
    </div>
  )
}
