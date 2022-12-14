import path from "path";
import express, { Express } from "express";
import cors from "cors";
import logger from "morgan";
import compression from "compression";
import helmet from "helmet";
import { engine } from "express-handlebars";

// import routes
import indexRouter from "./routes/index";
import categoriesRouter from "./routes/categories";
import productsRouter from "./routes/products";
import transactionsRouter from "./routes/transactions";
import authRouter from "./routes/auth";
import viewsRouter from "./routes/views";

// Creating Express application.
const app: Express = express();

// Custom middleware.
import requestTime from "./middlewares/requestTime";
app.use(requestTime);

// Middleware (goes first than routes).
app.use(logger("dev"));
app.use(cors()); // enable All CORS Requests
app.use(express.json()); // for parsing application/json (body-parser)
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(compression()); // 3rd party plugin: compresses all the responses
app.use(helmet()); // 3rd party plugin: secure your Express apps by setting various HTTP headers

// TODO: secure the server routes with basic auth in selected routes (as needed).
// Define routes
app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/transactions", transactionsRouter);
app.use("/auth", authRouter);

// Static files.
app.use("/static", express.static(path.join(__dirname, "public")));

// Views/template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.enable("view cache");

app.use("/views", viewsRouter);

export { app };
