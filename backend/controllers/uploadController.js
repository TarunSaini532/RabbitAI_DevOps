import { parseFile } from "../utils/parseFile.js";
import { generateSummary } from "../services/aiService.js";
import { sendEmail } from "../services/emailService.js";

export const handleUpload = async (req, res) => {
  try {
    const email = req.body.email;
    const file = req.file;

    const type = file.originalname.split(".").pop();

    const data = await parseFile(file.path, type);

    console.log("PARSED DATA:", data);

    const summary = await generateSummary(data);

    await sendEmail(email, summary);

    res.json({ message: "Summary sent successfully!" });
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({ error: "Server error" });
  }
};
