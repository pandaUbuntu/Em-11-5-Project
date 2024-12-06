import CategoryList from './CategoryList'
import CreateCategory from './CreateCategory'
import './style.css'
import { Category, createCategory, getCategories, deleteCategories } from '../../services/CategoryService'
import { useState } from 'react'

function Sidebar() {
  const [categories, setCategories] = useState<Category[]>(getCategories())

  const addCategory = (name: string): void => {
    createCategory(name)
    setCategories(getCategories())
  }

  const removeCategory = (id: string): void => {
    deleteCategories(id);
    setCategories(getCategories())
  }

  return (
    <div className='sidebar-wrapper'>
        <h2>Category</h2>
        <CreateCategory handle={addCategory} />
        <CategoryList categories={categories} handleDelete={removeCategory}/>
    </div>
  )
}

export default Sidebar