import ButtonDelete from './elements/buttonDelete'
export default function Card(props) {
  const onDeleteHandler = () => {
    props.onDelete(props.cardIndex)
  }
  return (
    <div>
      <p>{props.content}</p>
      <ButtonDelete onDelete={onDeleteHandler}/>
    </div>
  )
}