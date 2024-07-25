import User from '../../models/user'; // Adjust the path as needed
import db from '../../config/connection'; // Adjust the path as needed

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, email, mobileNumber, address, postalCode, password } = req.body;

    try {
      const user = await User.create({ firstName, email, mobileNumber, address, postalCode, password });
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
