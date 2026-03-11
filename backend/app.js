import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import uploadRoutes from "./routes/uploadRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", uploadRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});