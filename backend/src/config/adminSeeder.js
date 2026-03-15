import dotenv from 'dotenv';
import connectDB from './db.js';
import Admin from '../modules/auth/auth.model.js';

dotenv.config();

const seedAdmin = async () => {
  await connectDB();
  await Admin.deleteMany();
  await Admin.create({
    name: 'Luminari Admin',
    email: 'admin@luminaristudio.id',
    password: 'Admin1234',
  });
  console.log('✅ Admin berhasil dibuat!');
  process.exit();
};

seedAdmin();

/*
Menjalankan seeder admin:

node src/config/adminSeeder.js
*/