import "./NoteCard.css";

import {
  Download,
  GraduationCap,
  School,
  CalendarDays,
  FileText,
} from "lucide-react";

export default function NoteCard({ note }) {
  const downloadUrl = note.fileUrl
    ? `${note.fileUrl}?download=${encodeURIComponent(note.fileName)}`
    : null;

  return (
    <div className="note-card">

      {/* PDF Icon */}
      <div className="pdf-icon">
        <FileText size={32} />
      </div>

      {/* File Name */}
      <h3 title={note.fileName}>
        {note.fileName}
      </h3>

      {/* Note Information */}
      <div className="note-info">

        <p>
          <School size={17} />
          <span>{note.college}</span>
        </p>

        <p>
          <GraduationCap size={17} />
          <span>{note.branch}</span>
        </p>

        <p>
          <GraduationCap size={17} />
          <span>
            {note.year === "1"
              ? "1st Year"
              : note.year === "2"
              ? "2nd Year"
              : note.year === "3"
              ? "3rd Year"
              : note.year === "4"
              ? "4th Year"
              : "Year Not Available"}
          </span>
        </p>

        <p>
          <CalendarDays size={17} />
          <span>
            {new Date(note.createdAt).toLocaleDateString()}
          </span>
        </p>

      </div>

      {/* Download Button */}
      <div className="note-footer">

        {downloadUrl ? (
          <a
            href={downloadUrl}
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} />
            Download PDF
          </a>
        ) : (
          <button
            className="download-btn disabled"
            disabled
          >
            File Not Available
          </button>
        )}

      </div>

    </div>
  );
}