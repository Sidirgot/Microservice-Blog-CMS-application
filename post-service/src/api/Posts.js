import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    title: "first post",
  });
});

export default router;
