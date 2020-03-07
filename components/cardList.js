import Card from './card'
import ButtonAdd from './elements/buttonAdd'
import TextBox from './elements/textBox'
import {useState} from 'react'
export default function CardList(props, state) {
  const [cards, setCards] = useState([])
  const addCard = () => {
    setCards(cards.concat(["abc"]))
  }
  return (
    <div>
      <p>{props.title}</p>
      {
        cards.map((card) => {
          return <Card content={card}/>
        })
      }
      <ButtonAdd addCard={addCard}/>
      <TextBox/>
    </div>
  )
}