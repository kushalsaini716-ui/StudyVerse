import "./NoteCard.css";
import {
  Download,
  GraduationCap,
  School,
  CalendarDays,
  FileText,
} from "lucide-react";

export default function NoteCard({ note }) {
  return (
    <div className="note-card">

      <div className="pdf-icon">
        <FileText size={32} />
      </div>

      <h3>{note.fileName}</h3>

      <div className="note-info">

        <p>
          <School size={17} />
          {note.college}
        </p>

        <p>
          <GraduationCap size={17} />
          {note.branch}
        </p>

        <p>
          <CalendarDays size={17} />
          {new Date(note.createdAt).toLocaleDateString()}
        </p>

      </div>

      <div className="note-footer">

        {note.fileUrl !== "temp-url" ? (
          <a
            href={note.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
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