import { sendEmail } from "../config/emailConfig.js";

export const handleSendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const data = await sendEmail(name, email, message);
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Mail Error:", err.response?.data || err.message);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
};
