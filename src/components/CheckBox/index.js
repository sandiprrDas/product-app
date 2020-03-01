import React from 'react'

const CheckBox = props => {
let obj ={

}
console.log('props',props)
    return (
      <li name={props}>
       <input key={props.name}
        onClick={props.handleCheckChieldElement}
         type="checkbox"
          checked={props.isCheck}
           value={props.name} /> {props.name} {Object.keys(props.obj).forEach((items)=>{
           console.log('items',items)
               return (<h1>{items}}</h1>)
           })
           }
      </li>
    )
}
export default CheckBox