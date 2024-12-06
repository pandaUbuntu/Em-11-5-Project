import './style.css'

type ButtonType ={
    handle: (id:string) => void,
    id: string,
}

function DeleteButton(props:ButtonType) {
  return (
    <>
        <button onClick={(event) => props.handle(props.id)}>x</button>
    </>
  )
}

export default DeleteButton
