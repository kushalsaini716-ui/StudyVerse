import Link from "next/link";
import { Upload } from "lucide-react";

export default function UploadCard() {
    return (
        <Link href="/dashboard/upload" className="upload-link">

            <div className="upload-card">

                <div className="card-icon">
                    <Upload size={22} />
                </div>

                <h3>Upload & Download Notes</h3>

                <p>
                    Share PDFs, scans, or photos with
                    college, branch, semester and subject.
                </p>

                <div className="upload-preview">

                    <div className="file-name">
                        📎 thermo_unit3.pdf
                    </div>

                    <div className="uploaded-tag">
                        Uploaded
                    </div>

                </div>

                <Link href="/dashboard/upload">

                    <button className="upload-now-btn">
                        Upload Now →
                    </button>

                </Link>

            </div>

        </Link>
    );
}