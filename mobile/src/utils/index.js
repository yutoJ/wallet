export function normalizeCards(cards) {
  return cards.map(card => {
    return {
      key: card.key || '',
      name: card.name || '',
      type: card.type || ''
    }
  })
}
