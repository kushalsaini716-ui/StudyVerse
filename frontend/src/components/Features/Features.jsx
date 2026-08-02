import "./Features.css";

import UploadCard from "./UploadCard";
import SummaryCard from "./SummaryCard";
import Flashcard from "./FlashCard";
import SearchCard from "./SearchCard";

export default function Features() {
    return (
        <section className="features" id="features">

            <div className="features-heading">

                <span>CORE FEATURES</span>

                <h2>
                    Everything your notes need
                    <br />
                    to work harder
                </h2>

                <p>
                    Four tools that turn a folder of scattered PDFs
                    into a searchable, revision-ready library.
                </p>

            </div>

            <div className="features-layout">

                <div className="upload-area">
                    <UploadCard />
                </div>

                <div className="summary-area">
                    <SummaryCard />
                </div>

                <div className="flashcard-area">
                    <Flashcard />
                </div>

                <div className="search-area">
                    <SearchCard />
                </div>

            </div>

        </section>
    );
}