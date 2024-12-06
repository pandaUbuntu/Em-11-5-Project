import './style.css'

export type ButtonType ={
    handle: React.MouseEventHandler<HTMLButtonElement>
}

function CreateButton(props:ButtonType) {
  return (
    <>
        <button onClick={props.handle}>Create</button>
    </>
  )
}

export default CreateButton
