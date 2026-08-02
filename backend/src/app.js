import express from "express";
import cors from "cors"; 
import noteRoutes from "./routes/noteRoute.js";


 const app = express();

 app.use(cors());

 app.use(express.json());

 app.use("/api/notes",noteRoutes);

 app.get("/",(req,res) => {
    res.json({
        message: "StudyVerse Backend Running"
    });
 });

 export default app;
 