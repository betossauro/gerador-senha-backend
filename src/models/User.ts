import { RowDataPacket } from 'mysql2';
import pool from '../utils/db';

export interface User {
  id: string;
  nome: string;
  email: string;
  password: string;
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM users WHERE email = ?', [email]);
    return rows.length ? (rows[0] as User) : null;
}

export const createUser = async (user: User): Promise<void> => {
  await pool.query('INSERT INTO users (id, nome, email, password) VALUES (?, ?, ?, ?)', [user.id, user.nome, user.email, user.password]);
};
