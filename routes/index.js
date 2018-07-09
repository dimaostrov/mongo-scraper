import express from "express";
const router = express.Router();
import { homepage } from "../controllers/fetch";

/* GET home page. */
router.get("/", homepage);

export default router;
