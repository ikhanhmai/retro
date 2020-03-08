export default function ButtonLike(props){
  const onClickHandler = () => {
    props.onLike()
  }
  return (
    <div>
      <button onClick={onClickHandler}>Like</button><span>{props.likeCount}</span>
    </div>
  )
}