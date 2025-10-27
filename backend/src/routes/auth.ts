import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const expressValidator = require('express-validator');
const { body, validationResult } = expressValidator;

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Generate JWT token
const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
};

// Signup route
router.post('/signup', [
  body('firstName')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Нэр заавал оруулах шаардлагатай'),
  body('lastName')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Овог заавал оруулах шаардлагатай'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Зөв и-мэйл хаяг оруулна уу'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой')
], async (req: Request, res: Response): Promise<void> => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        message: 'Оруулсан мэдээлэл буруу байна',
        errors: errors.array()
      });
      return;
    }

    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        message: 'Энэ и-мэйл хаягтай хэрэглэгч аль хэдийн бүртгэгдсэн байна'
      });
      return;
    }

    // Create new user
    const user = new User({
      firstName,
      lastName,
      email,
      password
    });

    await user.save();

    // Generate token
    const token = generateToken((user._id as any).toString());

    res.status(201).json({
      message: 'Амжилттай бүртгүүллээ',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      message: 'Сервертэй холбогдоход алдаа гарлаа'
    });
  }
});

// Login route
router.post('/login', [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Зөв и-мэйл хаяг оруулна уу'),
  body('password')
    .notEmpty()
    .withMessage('Нууц үг оруулах шаардлагатай')
], async (req: Request, res: Response): Promise<void> => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        message: 'Оруулсан мэдээлэл буруу байна',
        errors: errors.array()
      });
      return;
    }

    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({
        message: 'И-мэйл хаяг эсвэл нууц үг буруу байна'
      });
      return;
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      res.status(401).json({
        message: 'И-мэйл хаяг эсвэл нууц үг буруу байна'
      });
      return;
    }

    // Generate token
    const token = generateToken((user._id as any).toString());

    res.json({
      message: 'Амжилттай нэвтэрлээ',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      message: 'Сервертэй холбогдоход алдаа гарлаа'
    });
  }
});

// Get current user route
router.get('/me', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
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

    res.json({
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Get user error:', error);
    res.status(401).json({
      message: 'Хүчинтэй бус токен'
    });
  }
});

export default router;
