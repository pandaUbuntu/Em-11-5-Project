import CreateCategory from './CreateCategory'
import './style.css'


function Sidebar() {
  return (
    <div className='sidebar-wrapper'>
        <h2>Category</h2>
        <CreateCategory />
    </div>
  )
}

export default Sidebar