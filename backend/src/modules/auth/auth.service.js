import Admin from './auth.model.js';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env.js';

const generateToken = (id) => {
  return jwt.sign({ id }, env.JWT_SECRET, { expiresIn: '7d' });
};

export const loginAdmin = async (email, password) => {
  const admin = await Admin.findOne({ email });
  if (!admin) throw new Error('Email tidak ditemukan');
  
  const isMatch = await admin.matchPassword(password);
  if (!isMatch) throw new Error('Password salah');

  const token = generateToken(admin._id);
  return { admin: { id: admin._id, name: admin.name, email: admin.email }, token };
};
