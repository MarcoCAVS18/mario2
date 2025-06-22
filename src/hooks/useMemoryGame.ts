// src/hooks/useMemoryGame.ts

import { useState } from 'react';
import { initialCardPairs, CardData } from '../data/cardPairs';

const createInitialCards = (): CardData[] => {
  return [...initialCardPairs];
};

export const useMemoryGame = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const shuffleCards = (array: CardData[]): CardData[] => {
    const shuffled = [...array];
    // Algoritmo Fisher-Yates para mezclar aleatoriamente
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initializeGame = () => {
    // Crear cartas completamente nuevas con estado inicial
    const freshCards = createInitialCards().map(card => ({
      ...card,
      flipped: false,
      matched: false
    }));
    const shuffledCards = shuffleCards(freshCards);
    setCards(shuffledCards);
    setMoves(0);
    setMatches(0);
    setGameWon(false);
    setFlippedCards([]);
    setGameStarted(true);
  };

  const resetGame = () => {
    setGameStarted(false);
    setCards([]);
    setMoves(0);
    setMatches(0);
    setGameWon(false);
    setFlippedCards([]);
  };

  const restartGame = () => {
    // Cerrar el modal primero
    setGameWon(false);
    
    // Usar setTimeout para asegurar que el modal se cierre antes de reiniciar
    setTimeout(() => {
      // Resetear todo el estado
      setMoves(0);
      setMatches(0);
      setFlippedCards([]);
      
      // Crear cartas completamente nuevas con estado inicial
      const freshCards = createInitialCards().map(card => ({
        ...card,
        flipped: false,
        matched: false
      }));
      const shuffledCards = shuffleCards(freshCards);
      setCards(shuffledCards);
      setGameStarted(true);
    }, 100);
  };

  const handleCardClick = (index: number) => {
    if (!gameStarted && index === -1) {
      initializeGame();
      return;
    }

    if (!gameStarted || !cards[index] || cards[index].flipped || cards[index].matched || flippedCards.length >= 2) {
      return;
    }

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      const [firstIndex, secondIndex] = newFlippedCards;
      const firstCard = newCards[firstIndex];
      const secondCard = newCards[secondIndex];

      // Comparar las imágenes para ver si son el mismo par
      if (firstCard.image === secondCard.image) {
        setTimeout(() => {
          const matchedCards = [...newCards];
          matchedCards[firstIndex].matched = true;
          matchedCards[secondIndex].matched = true;
          setCards(matchedCards);
          setMatches(prev => prev + 1);
          setFlippedCards([]);

          // Verificar si el juego está ganado
          const totalMatches = matchedCards.filter(card => card.matched).length;
          if (totalMatches === matchedCards.length) {
            setGameWon(true);
          }
        }, 1000);
      } else {
        setTimeout(() => {
          const resetCards = [...newCards];
          resetCards[firstIndex].flipped = false;
          resetCards[secondIndex].flipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return {
    cards,
    moves,
    matches,
    gameWon,
    gameStarted,
    handleCardClick,
    resetGame,
    restartGame
  };
};