import { Sparkles } from "lucide-react";

export default function SummaryCard() {
  return (
    <div className="summary-card">

      <div className="card-icon">
        <Sparkles size={22} />
      </div>

      <h3>AI note summaries</h3>

      <p>
        Long notes, distilled to the definitions
        and formulas that actually matter.
      </p>

      <div className="summary-preview">

        <div className="summary-title">
          ↓ summarized
        </div>

        <ul>
          <li>First law of thermodynamics: ΔU = Q − W</li>
          <li>Entropy always increases in isolated systems</li>
          <li>Carnot cycle sets the efficiency ceiling</li>
        </ul>

      </div>

      <div className="summary-users">
        <span>A</span>
        <span>K</span>
        <span>R</span>
        <span>+9</span>
      </div>

    </div>
  );
}