import express from "express";
import cors from "cors";
import carRoutes from "./routes/car.routes";
import errorHandler from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", carRoutes);
app.use(errorHandler);

export default app;
