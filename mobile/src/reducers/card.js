import { SET_CARDS } from '../actions/card';

const initialState = {
  cards: [],
};

export default function(state = initialState, action) {
  if (action.type === SET_CARDS) {
    return {
      ...state,
      cards: action.cards
    }
  }
  return state;
}
