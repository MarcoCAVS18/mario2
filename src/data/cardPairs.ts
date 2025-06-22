// src/data/cardPairs.ts
import card1 from '../assets/images/cards/card1.png';
import card2 from '../assets/images/cards/card2.png';
import card3 from '../assets/images/cards/card3.png';
import card4 from '../assets/images/cards/card4.png';
import card5 from '../assets/images/cards/card5.png';
import card6 from '../assets/images/cards/card6.png';
import card7 from '../assets/images/cards/card7.png';
import card8 from '../assets/images/cards/card8.png';
import card9 from '../assets/images/cards/card9.png';
import card10 from '../assets/images/cards/card10.png';
import card11 from '../assets/images/cards/card11.png';
import card12 from '../assets/images/cards/card12.png';

export interface CardData {
  id: string;
  image: string;
  matched: boolean;
  flipped: boolean;
}

const baseCardImages = [
  card1, 
  card2, 
  card3, 
  card4, 
  card5,
  card6, 
  card7, 
  card8, 
  card9, 
  card10, 
  card11, 
  card12, 
];

export const initialCardPairs = baseCardImages.flatMap((image, index) => {
  const uniqueId1 = `card-${index}-a`;
  const uniqueId2 = `card-${index}-b`;
  return [
    { id: uniqueId1, image, matched: false, flipped: false },
    { id: uniqueId2, image, matched: false, flipped: false },
  ];
});