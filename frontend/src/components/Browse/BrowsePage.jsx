"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import "./BrowsePage.css";

import { colleges } from "@/data/colleges.js";
import { branches } from "@/data/branches.js";

import { getNotes } from "@/services/noteServices.js";

import NoteCard from "./NoteCard";

export default function BrowsePage() {

    const [notes, setNotes] = useState([]);

    const [search, setSearch] = useState("");

    const [college, setCollege] = useState("");

    const [branch, setBranch] = useState("");

    const [loading, setLoading] = useState(false);

    const fetchNotes = async () => {

        setLoading(true);

        try {

            const data = await getNotes({

                search,

                college,

                branch

            });

            setNotes(data.notes);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchNotes();
        }, 300);

        return () => clearTimeout(timeout);
    }, [search, college, branch]);

    return (

        <section className="browse-page">

            <div className="browse-header">

                <h1>Browse Notes</h1>

                <p>
                    Discover notes uploaded by students from different colleges.
                </p>

            </div>

            <div className="search-panel">

                <div className="search-input">

                    <Search size={20} />

                    <input

                        type="text"

                        placeholder="Search notes..."

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                    />

                </div>

                <select

                    value={college}

                    onChange={(e) => setCollege(e.target.value)}

                >

                    <option value="">All Colleges</option>

                    {

                        colleges.map((item) => (

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        ))

                    }

                </select>

                <select

                    value={branch}

                    onChange={(e) => setBranch(e.target.value)}

                >

                    <option value="">All Branches</option>

                    {

                        branches.map((item) => (

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        ))

                    }

                </select>

                <button onClick={fetchNotes}>

                    Find Notes

                </button>

            </div>

            <div className="result-count">
                {notes.length} {notes.length === 1 ? "Note" : "Notes"} Found
            </div>

            {

                loading ?
                    (
                        <h3 className="loading">
                            Fetching notes...
                        </h3>

                    ) :
                    (

                        <div className="notes-grid">
                            {notes.length === 0 ? (
                                <div className="empty-notes">
                                    <h2>No Notes Found</h2>
                                    <p>Try changing your search or upload the first note.</p>
                                </div>
                            ) : (
                                notes.map((note) => (
                                    <NoteCard
                                        key={note.id}
                                        note={note}
                                    />
                                ))
                            )}
                        </div>

                    )

            }

        </section>

    );

}