import User from '../../models/user'; // Adjust the path as needed
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Install with `npm install jsonwebtoken`
import { Sequelize } from 'sequelize';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { emailOrMobile, password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          [Sequelize.Op.or]: [
            { email: emailOrMobile },
            { mobileNumber: emailOrMobile }
          ]
        }
      });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

      res.status(200).json({ message: 'Login successful', token, firstName: user.firstName });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
