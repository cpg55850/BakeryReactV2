import { GET_FOODS, ADD_FOOD } from "../actions/types";

const initialState = {
	foods: [
		{
			name: "White Glazed with Sprinkles",
			img: "glazed_donut",
		},
		{ name: "Present", img: "" },
		{ name: "Reindeer", img: "" },
		{ name: "Santa Belly", img: "" },
		{ name: "Cinnamon Bun", img: "" },
		{ name: "Glazed Chocolate Donut", img: "" },
		{ name: "Apple Fritter", img: "" },
		{ name: "Chocolate Iced Glazed with Sprinkles", img: "" },
		{ name: "Glazed Donut", img: "" },
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
