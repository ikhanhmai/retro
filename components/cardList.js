import Card from './card'
import ButtonAdd from './elements/buttonAdd'
import TextBox from './elements/textBox'
import {useReducer} from 'react'
import _ from 'lodash'
export default function CardList(props) {
  const [state, setState] = useReducer((state, newState) => ({...state, ...newState}),{
    cards: [],
    showTextBox: false
  })
  const buttonAddHandler = () => {
    setState({showTextBox: true})
  }
  const addCard = (text) => {
    setState({cards: state.cards.concat([{text:text,likeCount:0}])})
    setState({showTextBox: false})
  }
  const onDeleteHandler = (key) => {
    setState({cards: state.cards.filter((card, index) => index !== key)})
  }  
  const onLikeHandler = (key) => {
    const newCards = _.map(state.cards, (card, index) => {
      if(index === key) card.likeCount++
      return card
    })
    setState({cards:newCards})
  }
  return (
    <div>
      <p>{props.title}</p>
      {
        state.cards.map((card, index) => {
          return <Card onDelete={onDeleteHandler} onLike={onLikeHandler} cardIndex={index} key={index} content={card.text} likeCount={card.likeCount}/>
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