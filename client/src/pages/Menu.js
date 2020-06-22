import React, { Component } from 'react';
import Column from '../components/Column';

import './Menu.css';

const Menu = () => {
	const foods = [
		{ name: 'donut', image: 'donut.jpg' },
		{ name: 'pizza', image: 'pizza.jpg' },
	];

	return (
		<div>
			<Column
				title='Menu'
				desc="With our wide selection, you're sure to find something you like!"
				bg='#655089'
			/>
			<ul className='menuUl'>
				{foods.map((food) => (
					<li>
						<h2>{food.name}</h2>
						<img src={food.img} alt={food.name} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;
