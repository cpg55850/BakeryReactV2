import uuid from 'uuid/v1';
import { GET_FOODS } from '../actions/types';

const initialState = {
	foods: [
		{
			name: 'White Glazed with Sprinkles',
			img: 'glazed_donut',
			id: uuid(),
		},
		{ name: 'Present', img: '', id: uuid() },
		{ name: 'Reindeer', img: '', id: uuid() },
		{ name: 'Santa Belly', img: '', id: uuid() },
		{ name: 'Cinnamon Bun', img: '', id: uuid() },
		{ name: 'Glazed Chocolate Donut', img: '', id: uuid() },
		{ name: 'Apple Fritter', img: '', id: uuid() },
		{ name: 'Chocolate Iced Glazed with Sprinkles', img: '', id: uuid() },
		{ name: 'Glazed Donut', img: '', id: uuid() },
	],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_FOODS:
			return {
				...state,
			};
		default:
			return state;
	}
}
