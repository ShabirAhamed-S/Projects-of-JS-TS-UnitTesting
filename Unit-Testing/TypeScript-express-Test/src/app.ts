import "dotenv/config";
import express, { Application, Request, Response, NextFunction } from "express";
import createServer from "./server";

const startServer = () => {
  createServer();
};

startServer();