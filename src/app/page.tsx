export default async function Home() {
  const texts = [
    "STAK can help you learn words by creating cards. Here's how it works!",
    '1. You create a card by using a green button on the top right',
    '2. You write down what you want to learn and the meaning/translation of it.',
    '3. You go to your languages and press Learn button to start learning.',
    '4. STAK will offer you cards that you created with covered answers. You should try to recall the meaning/translation before revealing it.',
    '5. Depending on the results of your guess, STAK will give you the card to repeat later. If you guessed incorrectly it will return to the list of unlearned cards and if you guessed correctly it will return in later days.',
  ];

  return (
    <main className="p-5">
      <h1 className="m-5 text-2xl font-bold text-slate-500">
        Welcome to STAK!
      </h1>
      {texts.map((text, i) => (
        <p className="p-1" key={i}>
          {text}
        </p>
      ))}
    </main>
  );
}
