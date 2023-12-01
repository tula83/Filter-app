import { useState } from "react"

const Button = ({handleClick,value,title,clicked,isSelected}) => {

   

  return (
     <button  onClick={handleClick} value={value}
      className="btns"
      style={{background:isSelected?'white':"",color:isSelected?'Black':""}}
      
     >
     {title}
     </button>
  )
}

export default Button