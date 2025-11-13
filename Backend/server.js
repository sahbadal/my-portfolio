import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js";

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://my-portfolio-puce-nine-65.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json());
app.use(helmet()); // security headers

// API routes
app.use("/api/email", emailRoutes);

app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);
