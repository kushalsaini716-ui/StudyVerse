import { Brain } from "lucide-react";

export default function FlashCard() {
  return (
    <div className="flashcard-card">

      <div className="card-icon">
        <Brain size={22} />
      </div>

      <h3>AI Flashcards</h3>

      <p>
        Turn your notes into interactive flashcards for
        active recall and smarter revision.
      </p>

      <div className="flashcard-preview">

        <div className="flashcard-question">
          What is the First Law of Thermodynamics?
        </div>

        <div className="flashcard-footer">
          Tap to reveal answer →
        </div>

      </div>

    </div>
  );
}