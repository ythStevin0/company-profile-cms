import jwt from 'jsonwebtoken';
import Admin from '../modules/auth/auth.model.js';
import { env } from '../config/env.js';

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'Tidak ada token, akses ditolak' });

    const decoded = jwt.verify(token, env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id).select('-password');
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Token tidak valid' });
  }
};

export default protect;
