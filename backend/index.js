import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";
import cors from "cors";
import connectDB from "./config/database.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// ✅ CORS configuration
const allowedOrigins = [
  "http://localhost:5173",               // local frontend
  "https://your-frontend.vercel.app"     // deployed frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Routes
app.use("/api", userRouter);

// ✅ Health route (for testing deployment)
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running 🚀" });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();  // connect to MongoDB Atlas
  console.log(`✅ Server started at PORT = ${PORT}`);
});
