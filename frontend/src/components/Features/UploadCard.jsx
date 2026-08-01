import { Upload } from "lucide-react";

export default function UploadCard() {
    return (
        <div className="upload-card">
            <div className="card-icon">
                <upload size={22} />
            </div>

            <h3>upload & download notes</h3>
            <p>
                Share PDFs, scans, or photos with
                college, branch, semester and subject
                tagged automatically.
            </p>

            <div className="upload-preview">
                <div className="file-name">
                    📎 thermo_unit3.pdf
                </div>
                <div className="uploaded-tag">
                    Uploaded
                </div>
            </div>
        </div>
    );
}