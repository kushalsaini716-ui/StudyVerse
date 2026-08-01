import { Search } from "lucide-react";

export default function SearchCard() {
  return (
    <div className="search-card">

      <div className="card-icon">
        <Search size={22} />
      </div>

      <h3>Search & Filter</h3>

      <p>
        Find exactly what you need using powerful
        college, branch, semester and subject filters.
      </p>

      <div className="search-preview">

        <div className="search-box">
          🔍 Machine Design Notes
        </div>

        <div className="filter-tags">

          <span>Mechanical</span>

          <span>Semester 5</span>

          <span>PDF</span>

          <span>⭐ Top Rated</span>

        </div>

      </div>

    </div>
  );
}