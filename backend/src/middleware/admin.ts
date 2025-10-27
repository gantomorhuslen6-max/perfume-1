import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
}

// Middleware to verify JWT token
export const authenticateToken = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({
        message: 'Токен олдсонгүй'
      });
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await User.findById(decoded.userId);

    if (!user) {
      res.status(401).json({
        message: 'Хэрэглэгч олдсонгүй'
      });
      return;
    }

    req.user = {
      id: (user._id as any).toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role
    };

    next();
  } catch (error) {
    res.status(401).json({
      message: 'Хүчинтэй бус токен'
    });
  }
};

// Middleware to check admin role
export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (!req.user) {
    res.status(401).json({
      message: 'Нэвтрэх шаардлагатай'
    });
    return;
  }

  if (req.user.role !== 'admin') {
    res.status(403).json({
      message: 'Админ эрх шаардлагатай'
    });
    return;
  }

  next();
};
