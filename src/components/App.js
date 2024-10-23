import { useState, useEffect } from 'react';
import Banner from './Banner';
import Card from './Card';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import Footer from './Footer'
import '../styles/Layout.css'


function App() {
  const savedCard = localStorage.getItem('card')
  const [card, updateCard] = useState(savedCard ? JSON.parse(savedCard) : [])
  useEffect(() => {
    localStorage.setItem('card', JSON.stringify(card))
  }, [card])
  return (
    <div>
      <Banner >
        <img src={logo} alt='La maison jungle' className='lmj-log' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </ Banner>

      <div className="lmj-layout-inner">
        <Card card={card} updateCard={updateCard} />
        <ShoppingList card={card} updateCard={updateCard} />
      </div>
      <Footer />
    </div>
  )
}

export default App;
