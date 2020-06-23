import React, { useEffect, useState } from 'react';
import Column from '../components/Column';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Menu = () => {
	const [pokemon, setPokemon] = useState([]);

	const foods = useSelector((state) => state.food.foods);

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get(
				'https://pokeapi.co/api/v2/pokemon?limit=10'
			);

			const pokemon = response.data.results;

			setPokemon(pokemon);
		};

		getData();
	}, []);

	return (
		<div>
			<Column
				title='Menu'
				desc="You're going to love spending all that money."
				bg='#655089'
			/>
			<ul className='menuUl'>
				{foods.map((food) => (
					<li key={food.id}>
						<h2>{food.name}</h2>
						<hr />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;

{
	/*

.menuUl {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.menuUl li {
  text-align: center;
  justify-self: center;
  align-self: center;
  width: 100%;
  padding-right: 1rem;
  margin-right: 1rem;
}


*/
}
