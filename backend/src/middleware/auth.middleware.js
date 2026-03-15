import jwt from 'jsonwebtoken';
import Admin from '../modules/auth/auth.model.js';

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'Tidak ada token, akses ditolak' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id).select('-password');
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Token tidak valid' });
  }
};

export default protect;
/*

`JWT_SECRET` di `backend/.env`:

PORT=5000
MONGO_URI=mongodb+srv://luminariAdmin:Admin1234@stevino.slokica.mongodb.net/company_profile?retryWrites=true&w=majority&appName=stevino
JWT_SECRET=luminari_secret_key_2026
*/