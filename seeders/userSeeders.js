import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

const seedUser = async () => {
  const hashedPassword = await bcrypt.hash('password123', 10);
  await User.create({
    email: 'test@example.com',
    password: hashedPassword
  });
};

seedUser().then(() => {
  console.log('User seeded');
}).catch(err => {
  console.error('Seeding failed', err);
});
