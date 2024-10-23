import React from 'react';
import { useState, useEffect } from 'react'
import '../styles/Card.css'

function Card({ card, updateCard }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = card.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])
	return isOpen ? (
		<div className='lmj-card'>
			<button
				className='lmj-card-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{card.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{card.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCard([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-card-closed'>
			<button
				className='lmj-card-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Card