import { Button } from '@/components/ui/button';

type LearnerActionButtonsProps = {
  revealCard: () => void;
  isCardRevealed: boolean;
  guessedCorrectly: () => void;
  guessedIncorrectly: () => void;
};

export default function LearnerActionButtons({
  revealCard,
  isCardRevealed,
  guessedCorrectly,
  guessedIncorrectly,
}: LearnerActionButtonsProps) {
  return (
    <div className="flex justify-center gap-5">
      {isCardRevealed ? (
        <>
          <Button onClick={guessedIncorrectly} variant="destructive">
            I guessed incorrectly
          </Button>
          <Button onClick={guessedCorrectly} variant="secondary">
            I guessed correctly
          </Button>
        </>
      ) : (
        <>
          <Button onClick={revealCard}>Flip</Button>
        </>
      )}
    </div>
  );
}
