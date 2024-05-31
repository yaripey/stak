type CardType = {
  id: number;
  front: string;
  back: string;
};

const mockCards: CardType[] = [
  {
    id: 1,
    front: 'Test',
    back: 'Тест',
  },
  {
    id: 2,
    front: 'Apple',
    back: 'Яблуко',
  },
];

export default function Home() {
  return (
    <main>
      <div>
        {mockCards.map((card) => (
          <div key={card.id}>
            {card.front} | {card.back}
          </div>
        ))}
      </div>
    </main>
  );
}
