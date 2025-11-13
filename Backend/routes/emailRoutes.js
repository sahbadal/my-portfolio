import express from "express";
import { handleSendMail } from "../controllers/emailController.js";
import { limiter } from "../middlewares/rateLimiter.js";
import { validateForm } from "../middlewares/validateInput.js";

const router = express.Router();

router.post("/send", limiter, validateForm, handleSendMail);

export default router;
