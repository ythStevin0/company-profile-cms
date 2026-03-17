import express from 'express';
import { getMessages, createMessage, deleteMessage } from './messages.controller.js';
import protect from '../../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', protect, getMessages);
router.post('/', createMessage);
router.delete('/:id', protect, deleteMessage);

export default router;