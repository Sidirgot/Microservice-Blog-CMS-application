import express from "express";
import PostController from "./PostController";

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await PostController.index();

  res.json(posts);
});

export default router;
