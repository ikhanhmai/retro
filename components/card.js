import ButtonDelete from './elements/buttonDelete'
import ButtonLike from './elements/buttonLike'
export default function Card(props) {
  const onDeleteHandler = () => {
    props.onDelete(props.cardIndex)
  }

  const onLikeHandler = () => {
    props.onLike(props.cardIndex)
  }
  return (
    <div>
      <p>{props.content}</p>
      <ButtonDelete onDelete={onDeleteHandler}/>
      <ButtonLike onLike={onLikeHandler} likeCount={props.likeCount}/>
    </div>
  )
}