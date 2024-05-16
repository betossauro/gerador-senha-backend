import { Request, Response } from 'express';
import { createItem, deleteItem, getItemsByUserId } from '../models/Item';

interface AuthenticatedRequest extends Request {
  userId?: string;
}

export const getItems = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userId!;
  const items = await getItemsByUserId(userId);
  return res.status(200).json(items);
};

export const createNewItem = async (req: AuthenticatedRequest, res: Response) => {
  const { nome, password } = req.body;
  const userId = req.userId!;

  const newItem = {
    id: '',
    userId,
    nome,
    password,
  };

  await createItem(newItem);
  return res.status(201).json({ message: 'Item created successfully' });
};

export const deleteItemById = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const userId = req.userId!;
  await deleteItem(id, userId);
  return res.status(200).json({ message: 'Item deleted successfully' });
};
