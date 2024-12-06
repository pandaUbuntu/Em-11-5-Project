import './style.css'
import { Category } from '../../../services/CategoryService'
import DeleteButton from '../../Utils/DeleteButton'

type CategoryRowType = {
    category: Category,
    handleDelete: (categoryId: string) => void,
}

function CategoryRow(props:CategoryRowType) {
  
  return (
    <li value={props.category.id}>{props.category.name} <DeleteButton handle={props.handleDelete} id={props.category.id}/></li>
  )
}

export default CategoryRow