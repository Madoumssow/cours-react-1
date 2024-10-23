import React from 'react';
import CareScale from './CareScale';
import '../styles/PlantItem.css';

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? trés bon choix 🌱✨`)
}

const PlantItem = ({ cover, name, water, light,price }) => {  // Corrigé : "walter" => "water"
    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />  {/* Utilise water ici */}
                <CareScale careType='light' scaleValue={light} />  {/* Utilise light ici */}
            </div>
        </li>
    );
};

export default PlantItem;
