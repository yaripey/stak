'use client';

import { CardType, LanguageType } from '@/server/db/schema';
import CardCard from './CardCard';
import { useEffect, useState } from 'react';
import LearnerActionButtons from './LearnerActionButtons';
import { updateCardStreakAction } from '@/server/actions/cards';
import { LoadingSpinner } from '@/app/_components/LoadingSpinner';

type CardsLearnerProps = {
  initCards: CardType[];
  language: LanguageType;
};

export default function CardsLearner({
  initCards,
  language,
}: CardsLearnerProps) {
  const getRandomCard = (cards: CardType[]): CardType => {
    return cards[Math.floor(Math.random() * cards.length)];
  };

  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState<CardType | null>(null);
  const [cards, setCards] = useState<CardType[]>(initCards);

  useEffect(() => {
    setCurrentCard(getRandomCard(initCards));
  }, [initCards]);

  if (cards.length === 0) return <div>There are no cards.</div>;

  const guessedCorrectly = async () => {
    if (!currentCard) return;

    const card = currentCard;

    const newStreak = card.streak < 3 ? card.streak + 1 : 3;

    const oldDate = card.dontShowUntil;
    const daysLater = card.streak * 2 + 1;

    const newDate = new Date(oldDate.setDate(oldDate.getDate() + daysLater));

    await updateCardStreakAction(card.id, newStreak, newDate);

    const newCards = cards.filter((c) => c.id !== card.id);
    setCards(newCards);

    setIsCardFlipped(false);
    setCurrentCard(getRandomCard(newCards));
  };

  const guessedIncorrectly = async () => {
    if (!currentCard) return;

    const newStreak = 0;
    const newDate = new Date();

    await updateCardStreakAction(currentCard.id, newStreak, newDate);

    setIsCardFlipped(false);
    setCurrentCard(getRandomCard(cards));
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 pt-10">
      <h1>{language.name}</h1>
      <h2>You have {cards.length} card(s) to learn.</h2>
      {currentCard ? (
        <>
          <CardCard
            front={currentCard.front}
            back={currentCard.back}
            flipped={isCardFlipped}
          />
          <LearnerActionButtons
            guessedCorrectly={guessedCorrectly}
            guessedIncorrectly={guessedIncorrectly}
            isCardFlipped={isCardFlipped}
            flipCard={() => setIsCardFlipped(true)}
          />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
