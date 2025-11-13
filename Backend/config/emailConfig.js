import axios from "axios";

export const sendEmail = async (name, email, message) => {
  const payload = {
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.TO_EMAIL,
    subject: `New message from ${name}`,
    html: `
      <h3>📩 New Message from Portfolio</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  const response = await axios.post("https://api.resend.com/emails", payload, {
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    timeout: 8000,
  });

  return response.data;
};
