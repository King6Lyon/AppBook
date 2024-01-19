import jwt from 'jsonwebtoken';
import  User  from '../models/User.js';

const isAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ msg: 'Unauthorized - Missing token' });
    }

    const decoded = jwt.verify(token, process.env.privateKey);

    if (!decoded) {
      return res.status(401).json({ msg: 'Unauthorized - Invalid token' });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ msg: 'Unauthorized - User not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};


export default isAuth