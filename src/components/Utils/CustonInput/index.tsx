export type InputType ={
    onChangeHandle: Function
}

function CustomInput(props:InputType) {
  return (
    <>
        <input onChange={(event) => props.onChangeHandle(event.target.value)}></input>
    </>    
  )
}

export default CustomInput