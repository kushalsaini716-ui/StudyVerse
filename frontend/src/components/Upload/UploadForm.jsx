"use client";

import { useRef, useState } from "react";
import "./UploadForm.css";

import { UploadCloud, FileText } from "lucide-react";

import { colleges } from "@/data/colleges";
import { branches } from "@/data/branches";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function UploadForm() {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");

  const handleBrowse = () => {
    inputRef.current.click();
  };

  const handleFile = (e) => {
    if (!e.target.files[0]) return;
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!file || !college || !branch) {
      alert("Please complete all fields.");
      return;
    }

    const formData = new FormData();

    formData.append("pdf", file);
    formData.append("college", college);
    formData.append("branch", branch);

    try {
      const response = await fetch(
        `${API_URL}/api/notes/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Upload failed");
      }

      alert(data.message);

      setFile(null);
      setCollege("");
      setBranch("");

    } catch (error) {
      console.error(error);
      alert(error.message || "Upload failed");
    }
  };

  return (
    <section className="upload-section">
      <h1>Upload Notes</h1>

      <p>Share your notes with students across colleges.</p>

      <div
        className="drop-area"
        onDrop={handleDrop}
        onDragOver={handleDrag}
      >
        <UploadCloud size={52} />

        <h3>Drag & Drop PDF</h3>

        <span>or</span>

        <button type="button" onClick={handleBrowse}>
          Browse File
        </button>

        <input
          ref={inputRef}
          type="file"
          hidden
          accept=".pdf"
          onChange={handleFile}
        />
      </div>

      {file && (
        <div className="selected-file">
          <FileText size={22} />

          <div>
            <h4>{file.name}</h4>

            <span>
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </span>
          </div>
        </div>
      )}

      <div className="dropdowns">
        <select
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        >
          <option value="">Select College</option>

          {colleges.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          <option value="">Select Branch</option>

          {branches.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <button
        className="upload-btn"
        onClick={handleUpload}
      >
        Upload Note
      </button>
    </section>
  );
}