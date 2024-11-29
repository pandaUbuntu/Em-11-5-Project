import { useState } from 'react'
import './style.css'

type HeaderDataType = {
  username: string,
  budgetValue: number,
}

function Header(props:HeaderDataType) {
  

  return (
    <div className='header-wrapper'>
      <p>Hello <span>{props.username}</span></p>
      <p>Budget: <span>{props.budgetValue}</span></p>
    </div>
  )
}

export default Header