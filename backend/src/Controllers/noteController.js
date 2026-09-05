import prisma from "../config/prisma.js";
import { uploadPdf } from "../services/supabaseService.js";


export const uploadNote = async (req, res) => {
    try {
        
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF file.",
            });
        }

        
        const { college, branch, year } = req.body;

        
        if (!college || !branch || !year) {
            return res.status(400).json({
                success: false,
                message: "College, Branch and Year are required.",
            });
        }

        console.log("Uploading file:", req.file.originalname);

        
        const uploadedFile = await uploadPdf(
            req.file.buffer,
            req.file.originalname
        );

        console.log("Supabase upload successful:", uploadedFile);

        
        const note = await prisma.note.create({
            data: {
                fileName: req.file.originalname,
                college,
                branch,
                year,
                fileUrl: uploadedFile.publicUrl,
            },
        });

        console.log("Note saved to database:", note.id);

        return res.status(201).json({
            success: true,
            message: "Note uploaded successfully!",
            note,
        });

    } catch (error) {
        console.error("UPLOAD NOTE ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to upload note.",
        });
    }
};



export const getAllNotes = async (req, res) => {
    try {
        const {
            college,
            branch,
            year,
            search,
        } = req.query;

        const notes = await prisma.note.findMany({
            where: {
                ...(search && {
                    fileName: {
                        contains: search,
                        mode: "insensitive",
                    },
                }),

                ...(college && {
                    college,
                }),

                ...(branch && {
                    branch,
                }),

                ...(year && {
                    year,
                }),
            },

            orderBy: {
                createdAt: "desc",
            },
        });

        return res.status(200).json({
            success: true,
            notes,
        });

    } catch (error) {
        console.error("GET NOTES ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch notes.",
        });
    }
};