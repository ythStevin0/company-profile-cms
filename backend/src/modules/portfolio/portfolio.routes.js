import express from 'express';
import { getPortfolios, createPortfolio, updatePortfolio, deletePortfolio } from './portfolio.controller.js';

const router = express.Router();

router.get('/', getPortfolios);
router.post('/', createPortfolio);
router.put('/:id', updatePortfolio);
router.delete('/:id', deletePortfolio);

export default router;