import { normalizeCards } from '../utils';

export const SET_CARDS = 'SET_CARDS';

export function setCards(cards) {
  return {
    type: SET_CARDS,
    cards
  }
}
export function getCards() {
  return (dispatch, getState) => {
    return fetch(`http://localhost:3000/users/cards`)
    .then(response => response.json())
    .then(json => {
      if(json) {
        dispatch(setCards(normalizeCards(json.cards)));
      } else {
        alert(json.error);
      }
    })
    .catch(e => alert(e));
  }
}
