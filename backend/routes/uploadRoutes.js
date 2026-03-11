import express from "express";
import multer from "multer";
import { handleUpload } from "../controllers/uploadController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

/**==
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload CSV and generate AI summary
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Summary generated and email sent
 */

router.post("/upload", upload.single("file"), handleUpload);

export default router;
