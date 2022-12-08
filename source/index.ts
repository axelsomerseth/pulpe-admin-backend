#!/usr/bin/env node

// reflect-metadata shim, decorators for typeORM
import "reflect-metadata";

import { connectDB } from "./db/connection";

connectDB();

import http from "http";
import { app } from "./app";

const port = process.env.PORT || 5000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function onError(error: any) {
  console.error(error);
  throw error;
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
  console.log("Listening on " + bind);
}
