export default function ButtonDelete(props) {
  const onClickHandler = () => {
    props.onDelete()
  }
  return (
    <div>
      <button onClick={onClickHandler}>Delete</button>
    </div>
  )
}