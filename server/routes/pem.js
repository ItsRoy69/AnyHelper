import express from "express";

import { getPEM, createPEM, updatePEM, deletePEM } from "../controllers/pem.js";

const router = express.Router();

router.get("/", getPEM);
router.post("/", createPEM);
router.patch("/:id", updatePEM);
router.delete("/:id", deletePEM);

export default router;
