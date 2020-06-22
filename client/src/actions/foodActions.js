import { GET_FOODS, ADD_FOOD } from "./types";

export const getFoods = () => {
	return {
		type: GET_FOODS,
	};
};
