import React from "react";
import { useState } from 'react'
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from './Categories'
import '../styles/ShoppingList.css';

function ShoppingList({ card, updateCard }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCard(name, price) {
		const currentPlantSaved = card.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cardFilteredCurrentPlant = card.filter(
				(plant) => plant.name !== name
			)
			
			updateCard([
				...cardFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			
			updateCard([...card, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCard(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}


export default ShoppingList;
