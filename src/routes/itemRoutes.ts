import { Router } from 'express';
import { getItems, createNewItem, deleteItemById } from '../controllers/itemController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/item', authenticate, getItems);
router.post('/item', authenticate, createNewItem);
router.delete('/item/:id', authenticate, deleteItemById);

export default router;
