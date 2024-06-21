import { Button } from '@/components/ui/button';

type LearnerActionButtonsProps = {
  flipCard: () => void;
  isCardFlipped: boolean;
  guessedCorrectly: () => void;
  guessedIncorrectly: () => void;
};

export default function LearnerActionButtons({
  flipCard,
  isCardFlipped,
  guessedCorrectly,
  guessedIncorrectly,
}: LearnerActionButtonsProps) {
  return (
    <div className="flex justify-center gap-5">
      {isCardFlipped ? (
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
          <Button onClick={flipCard}>Flip</Button>
        </>
      )}
    </div>
  );
}
