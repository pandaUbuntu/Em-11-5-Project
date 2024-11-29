import { useState } from 'react';
import CreateButton from '../../Utils/CreateButton'
import CustomInput from '../../Utils/CustonInput'
import { Category } from '../../../App';
//import './style.css'

function CreateCategory() {
    const [text, setText] = useState("");


    function onChange(text:string):void{
        setText(text)
    }

    function onClick(event:React.MouseEvent):void{
        event.preventDefault();

        if(text.trim().length !== 0){
            let jsonArray:any = localStorage.getItem("categories");

            const category:Category = {
                id: Math.random().toString(36).substr(2, 9),
                name: text
            };
    
            const categories:Category[] = JSON.parse(jsonArray);
    
            categories.push(category);
    
            localStorage.setItem("categories", JSON.stringify(categories));
    
            console.log(localStorage.getItem("categories"));
        }
    }


  return (
    <div>
        <CustomInput onChangeHandle={onChange} />
        <CreateButton handle={onClick} />
    </div>
  )
}

export default CreateCategory
