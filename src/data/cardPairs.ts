// src/data/cardPairs.ts
import card1 from '../assets/images/cards/card1.png';
// import card2 from '../assets/images/cards/card2.png';
// import card3 from '../assets/images/cards/card3.png';
// import card4 from '../assets/images/cards/card4.png';
// import card5 from '../assets/images/cards/card5.png';
// import card6 from '../assets/images/cards/card6.png';
// import card7 from '../assets/images/cards/card7.png';
// import card8 from '../assets/images/cards/card8.png';
// import card9 from '../assets/images/cards/card9.png';
// import card10 from '../assets/images/cards/card10.png';
// import card11 from '../assets/images/cards/card11.png';
// import card12 from '../assets/images/cards/card12.png';

export interface CardData {
  id: string;
  image: string; 
  matched: boolean;
  flipped: boolean;
}

// Por ahora usando card1 como ejemplo para todas las cartas
const baseCardImages = [
  card1, // card1
  card1, // card2 (usando card1 como ejemplo)
  card1, // card3 (usando card1 como ejemplo)
  card1, // card4 (usando card1 como ejemplo)
  card1, // card5 (usando card1 como ejemplo)
  card1, // card6 (usando card1 como ejemplo)
  card1, // card7 (usando card1 como ejemplo)
  card1, // card8 (usando card1 como ejemplo)
  card1, // card9 (usando card1 como ejemplo)
  card1, // card10 (usando card1 como ejemplo)
  card1, // card11 (usando card1 como ejemplo)
  card1, // card12 (usando card1 como ejemplo)
];

export const initialCardPairs = baseCardImages.flatMap((image, index) => {
  const uniqueId1 = `card-${index}-a`;
  const uniqueId2 = `card-${index}-b`;
  return [
    { id: uniqueId1, image, matched: false, flipped: false },
    { id: uniqueId2, image, matched: false, flipped: false },
  ];
});