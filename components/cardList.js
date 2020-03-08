import Card from './card'
import ButtonAdd from './elements/buttonAdd'
import TextBox from './elements/textBox'
import {useReducer} from 'react'
export default function CardList(props) {
  const [state, setState] = useReducer((state, newState) => ({...state, ...newState}),{
    cards: [],
    showTextBox: false
  })
  const buttonAddHandler = () => {
    setState({showTextBox: true})
  }
  const addCard = (text) => {
    setState({cards: state.cards.concat([text])})
    setState({showTextBox: false})
  }
  const onDeleteHandler = (key) => {
    setState({cards: state.cards.filter((card, index) => index !== key)})
  }  
  return (
    <div>
      <p>{props.title}</p>
      {
        state.cards.map((card, index) => {
          return <Card onDelete={onDeleteHandler} cardIndex={index} key={index} content={card}/>
        })
      }
      <ButtonAdd onClick={buttonAddHandler}/>
      {
        state.showTextBox && 
        <TextBox submitText={addCard}/>
      }
    </div>
  )
}