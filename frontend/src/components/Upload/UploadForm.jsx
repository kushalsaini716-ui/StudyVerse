"use client";

import { useRef, useState } from "react";
import "./UploadForm.css";

import {
  UploadCloud,
  FileText,
  Loader2,
} from "lucide-react";

import { colleges } from "@/data/colleges";
import { branches } from "@/data/branches";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function UploadForm() {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);

  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  const [loading, setLoading] = useState(false);

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
    if (!file || !college || !branch || !year) {
      alert("Please complete all fields.");
      return;
    }

    // Start loading state
    setLoading(true);

    const formData = new FormData();

    formData.append("pdf", file);
    formData.append("college", college);
    formData.append("branch", branch);
    formData.append("year", year);

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

      // Success
      alert(data.message);

      // Reset form
      setFile(null);
      setCollege("");
      setBranch("");
      setYear("");

      // Reset file input
      if (inputRef.current) {
        inputRef.current.value = "";
      }

    } catch (error) {
      console.error(error);

      alert(error.message || "Upload failed");

    } finally {
      // Stop loading state
      setLoading(false);
    }
  };

  return (
    <section className="upload-section">

      <h1>Upload Notes</h1>

      <p>
        Share your notes with students across colleges.
      </p>

      {/* Drag & Drop Area */}
      <div
        className="drop-area"
        onDrop={handleDrop}
        onDragOver={handleDrag}
      >
        <UploadCloud size={52} />

        <h3>Drag & Drop PDF</h3>

        <span>or</span>

        <button
          type="button"
          onClick={handleBrowse}
          disabled={loading}
        >
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

      {/* Selected File */}
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

      {/* Dropdowns */}
      <div className="dropdowns">

        {/* College */}
        <select
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          disabled={loading}
        >
          <option value="">
            Select College
          </option>

          {colleges.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {/* Branch */}
        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          disabled={loading}
        >
          <option value="">
            Select Branch
          </option>

          {branches.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {/* Year */}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          disabled={loading}
        >
          <option value="">
            Select Year
          </option>

          <option value="1">
            1st Year
          </option>

          <option value="2">
            2nd Year
          </option>

          <option value="3">
            3rd Year
          </option>

          <option value="4">
            4th Year
          </option>
        </select>

      </div>

      {/* Upload Button */}
      <button
        className="upload-btn"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2
              size={20}
              className="upload-spinner"
            />

            Uploading...
          </>
        ) : (
          <>
            <UploadCloud size={20} />

            Upload Note
          </>
        )}
      </button>

    </section>
  );
}