import prisma from "../config/prisma.js";
import { uploadPdf } from "../services/cloudinaryService.js";

export const uploadNote = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF file.",
            });
        }

        const { college, branch } = req.body;

        if (!college || !branch) {
            return res.status(400).json({
                success: false,
                message: "College and Branch are required.",
            });
        }


        console.log("Original Name:", req.file.originalname);
console.log(req.file);

        const uploadedFile = await uploadPdf(
            req.file.buffer,
            req.file.originalname
        );

        console.log(uploadedFile);


        const note = await prisma.note.create({
            data: {
                fileName: req.file.originalname,
                college,
                branch,
                fileUrl: uploadedFile.secure_url,
            },
        });

        res.status(201).json({
            success: true,
            message: "Note uploaded successfully!",
            note,
        });

    } catch (error) {
        console.error("Upload Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const getAllNotes = async (req, res) => {
    try {
        const { search, college, branch } = req.query;

        const notes = await prisma.note.findMany({
            where: {
                ...(search && {
                    fileName: {
                        contains: search,
                        mode: "insensitive",
                    },
                }),
                ...(college && { college }),
                ...(branch && { branch }),
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        res.status(200).json({
            success: true,
            notes,
        });

    } catch (error) {
  console.error("GET NOTES ERROR:", error);

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};

