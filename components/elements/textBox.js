import {useState} from 'react'
export default function TextBox(props) {
  const [text,setText] = useState("")
  const onChangeHandler = (e) => {
    setText(e.target.value)
  }
  const onAddClicked = () => {
    props.submitText(text)
    setText("")
  }
  return (
    <div>
      <textarea value={text} onChange={onChangeHandler}>
      </textarea>
      <button onClick={onAddClicked}>Add</button>
    </div>
  )
}