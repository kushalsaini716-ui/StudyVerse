import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">



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

          

                <div className="hero-search">

                    <input
                        type="text"
                        placeholder="Search Notes..."
                    />

                    <select>
                        <option>College</option>
                    </select>

                    <select>
                        <option>Subject</option>
                    </select>

                    <button>
                        Find Notes
                    </button>

                </div>

                {/* Stats */}

                <div className="hero-stats">

                    <div className="stat">
                        📄 5000+ Notes
                    </div>

                    <div className="stat">
                        🎓 300+ Colleges
                    </div>

                    <div className="stat">
                        🤖 AI Powered
                    </div>

                </div>

            </div>

        </section>
    );
}