import { SEARCH_FLOWER, GET_FLOWER } from '../actions/actionTypes';

const initialState = {
    flowers: [],
    flowerName: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_FLOWER:
            return{
                ...state,
                flowerName: action.flowerName,
                flowers: action.flowers.flowers
            }
        case GET_FLOWER:
            return {
                ...state,
                flowers: action.flowers
                
            }
        default: 
            return state;
    }
};

export default reducer;