import express from "express";
import path, { dirname } from "path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import { logger } from "#util";
import indexRouter from "#routes/index";
import usersRouter from "#routes/users";
import authRouter from "#routes/auth";

const app = express();
const currDirName = dirname(fileURLToPath(import.meta.url));

app.use(morgan(
  ":remote-addr - :remote-user \":method :url HTTP/:http-version\" :status \":referrer\" \":user-agent\"",
  { stream: logger.stream },
));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(currDirName, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

export default app;
