import { useState } from 'react';
import CreateButton from '../../Utils/CreateButton'
import CustomInput from '../../Utils/CustonInput'
import { Category, createCategory } from '../../../services/CategoryService';
//import './style.css'

type CreateCategoryType ={
    handle: (name:string) => void
}
function CreateCategory(props:CreateCategoryType) {
    const [text, setText] = useState("");


    function onChange(text:string):void{
        setText(text)
    }

    function onClick(event:React.MouseEvent):void{
        event.preventDefault();
        props.handle(text);
    }

  return (
    <div>
        <CustomInput onChangeHandle={onChange} />
        <CreateButton handle={onClick} />
    </div>
  )
}

export default CreateCategory
