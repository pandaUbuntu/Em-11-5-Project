import './style.css'
import CategoryRow from '../CategoryRow'
import { Category } from '../../../services/CategoryService'

type CategoryListType = {
    categories: Category[],
    handleDelete: (categoryId: string) => void,
}

function CategoryList(props: CategoryListType) {

  return (
    <div className='category-list-wrapper'>
        <ul>
            {props.categories.map(category => (
                <CategoryRow key={category.id} category={category} handleDelete={props.handleDelete}/>
            ))}
        </ul>
    </div>
  )
}

export default CategoryList