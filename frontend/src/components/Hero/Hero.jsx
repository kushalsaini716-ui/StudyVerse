"use client";

import "./Hero.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <h1 className="hero-title">
          One search is all it takes
          <br />
          to <span>ace the exam.</span>
        </h1>

        <p className="hero-description">
          Upload, discover, summarize and revise smarter with
          AI-powered notes built for every college student.
        </p>

        <div className="hero-buttons">
          <Link href="/dashboard/browse">
            <button className="browse-btn">
              Browse Notes
            </button>
          </Link>

          <Link href="/dashboard/upload">
            <button className="upload-btn">
              Upload Notes
            </button>
          </Link>
        </div>

        <div className="hero-stats">
{/* 
          <div className="stat">
            📄 5000+ Notes
          </div>

          <div className="stat">
            🎓 300+ Colleges
          </div>

          <div className="stat">
            🤖 AI Powered
          </div> */}

        </div>

      </div>
    </section>
  );
}