import express from 'express';

const router = express.Router();

import {
  act
} from "../controllers/headline";

router.get('/', act);

export default router;