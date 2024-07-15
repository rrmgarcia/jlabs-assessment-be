import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import geoRoutes from "./routes/geoRoutes.js";
import { sequelize } from "./db.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/geo", geoRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
