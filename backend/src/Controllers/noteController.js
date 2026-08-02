import prisma from "../config/prisma.js";

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

    const note = await prisma.note.create({
      data: {
        fileName: req.file.originalname,
        college,
        branch,
        fileUrl: "temp-url",
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