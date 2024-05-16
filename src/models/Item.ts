import pool from '../utils/db';
import { v4 as uuidv4 } from 'uuid';

export interface Item {
  id: string;
  userId: string;
  nome: string;
  password: string;
}

export const getItemsByUserId = async (userId: string): Promise<Item[]> => {
  const [rows] = await pool.query('SELECT * FROM items WHERE userId = ?', [userId]);
  return rows as Item[];
};

export const createItem = async (item: Item): Promise<void> => {
  item.id = uuidv4();
  await pool.query('INSERT INTO items (id, userId, nome, password) VALUES (?, ?, ?, ?)', [item.id, item.userId, item.nome, item.password]);
};

export const deleteItem = async (id: string, userId: string): Promise<void> => {
  await pool.query('DELETE FROM items WHERE id = ? AND userId = ?', [id, userId]);
};
