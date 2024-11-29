import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export type Category = {
  id: string,
  name: string,
}

function App() {
  if(localStorage.getItem('categories') === null){
    localStorage.setItem('categories', JSON.stringify([]))
  }

  const [budgetValue, setBudgetValue] = useState(0)

  return (
    <div className='container'>
        <Header username='Jonh Doe' budgetValue={budgetValue}/>

        <div className='main-content-container'>
          <Sidebar />
        </div>
    </div>
  )
}

export default App
