import express from "express";
import posts from "./Posts";

const router = express.Router();

router.use("/posts", posts);

export default router;
