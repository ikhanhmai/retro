import Card from './card'
import ButtonAdd from './elements/buttonAdd'
import TextBox from './elements/textBox'
export default function CardList(props) {
  return (
    <div>
      <p>{props.title}</p>
      <Card/>
      <ButtonAdd/>
      <TextBox/>
    </div>
  )
}