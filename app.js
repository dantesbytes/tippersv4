// app.js - Main entry point for Fastify API
import fastify from "fastify";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import autoLoad from "@fastify/autoload";
import path from "path";
import displayCoolAsciiArt from "./utils/art.js";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify();
connectDB();

//auto load plugins

app.register(autoLoad, {
  dir: path.join(__dirname, "plugins"),
  dirNameRoutePrefix: false,
  ignorePattern: /.*.no-load\.js/,
});

//auto load routes
app.register(autoLoad, {
  dir: path.join(__dirname, "routes"),
  dirNameRoutePrefix: false,
  //indexPattern: /.*routes(\.js|\.cjs)$/i,
  //ignorePattern: /.*\.js/,
});

const start = async () => {
  try {
    displayCoolAsciiArt();

    app.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });
    console.log(
      `Server running @ http://localhost:${process.env.PORT || 3000}`
    );
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start(); //runner
