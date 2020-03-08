import Card from './card'
import ButtonAdd from './elements/buttonAdd'
import TextBox from './elements/textBox'
import {useState} from 'react'
export default function CardList(props, state) {
  const [cards, setCards] = useState([])
  const [showTextBox, setShowTextBox] = useState(false)
  const buttonAddHandler = () => {
    setShowTextBox(true)
    console.log('showTextBox',showTextBox)
  }
  const addCard = (text) => {
    setCards(cards.concat([text]))
    setShowTextBox(false)
  }
  return (
    <div>
      <p>{props.title}</p>
      {
        cards.map((card, index) => {
          return <Card key={index} content={card}/>
        })
      }
      <ButtonAdd onClick={buttonAddHandler}/>
      {
        showTextBox && 
        <TextBox submitText={addCard}/>
      }
    </div>
  )
}