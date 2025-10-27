import express from 'express';
import { body, validationResult } from 'express-validator';
import AboutContent from '../models/AboutContent';
import { authenticateToken, requireAdmin, AuthRequest } from '../middleware/admin';

const router = express.Router();

// Get all about content (public)
router.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const content = await AboutContent.find({ isActive: true })
      .sort({ section: 1, order: 1 });
    
    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Get about content error:', error);
    res.status(500).json({
      success: false,
      message: 'Агуулга авахад алдаа гарлаа'
    });
  }
});

// Get about content by section (public)
router.get('/section/:section', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { section } = req.params;
    const content = await AboutContent.find({ 
      section, 
      isActive: true 
    }).sort({ order: 1 });
    
    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Get section content error:', error);
    res.status(500).json({
      success: false,
      message: 'Хэсгийн агуулга авахад алдаа гарлаа'
    });
  }
});

// Admin routes - Get all content (including inactive)
router.get('/admin/all', authenticateToken, requireAdmin, async (req: AuthRequest, res: express.Response): Promise<void> => {
  try {
    const content = await AboutContent.find()
      .sort({ section: 1, order: 1 });
    
    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Get all admin content error:', error);
    res.status(500).json({
      success: false,
      message: 'Агуулга авахад алдаа гарлаа'
    });
  }
});

// Admin routes - Create new content
router.post('/admin', [
  authenticateToken,
  requireAdmin,
  body('section')
    .isIn(['hero', 'brand', 'story', 'features', 'unique', 'subscribe'])
    .withMessage('Зөв хэсэг сонгоно уу'),
  body('title')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Гарчиг 1-200 тэмдэгт байх ёстой'),
  body('content')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Агуулга заавал оруулах шаардлагатай'),
  body('order')
    .isInt({ min: 0 })
    .withMessage('Дараалал 0-ээс их тоо байх ёстой')
], async (req: AuthRequest, res: express.Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Оруулсан мэдээлэл буруу байна',
        errors: errors.array()
      });
      return;
    }

    const { section, title, subtitle, content, imageUrl, order, isActive } = req.body;

    const newContent = new AboutContent({
      section,
      title,
      subtitle,
      content,
      imageUrl,
      order,
      isActive: isActive !== undefined ? isActive : true
    });

    await newContent.save();

    res.status(201).json({
      success: true,
      message: 'Агуулга амжилттай үүсгэгдлээ',
      data: newContent
    });
  } catch (error) {
    console.error('Create content error:', error);
    res.status(500).json({
      success: false,
      message: 'Агуулга үүсгэхэд алдаа гарлаа'
    });
  }
});

// Admin routes - Update content
router.put('/admin/:id', [
  authenticateToken,
  requireAdmin,
  body('section')
    .optional()
    .isIn(['hero', 'brand', 'story', 'features', 'unique', 'subscribe'])
    .withMessage('Зөв хэсэг сонгоно уу'),
  body('title')
    .optional()
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Гарчиг 1-200 тэмдэгт байх ёстой'),
  body('content')
    .optional()
    .trim()
    .isLength({ min: 1 })
    .withMessage('Агуулга заавал оруулах шаардлагатай'),
  body('order')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Дараалал 0-ээс их тоо байх ёстой')
], async (req: AuthRequest, res: express.Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Оруулсан мэдээлэл буруу байна',
        errors: errors.array()
      });
      return;
    }

    const { id } = req.params;
    const updateData = req.body;

    const content = await AboutContent.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!content) {
      res.status(404).json({
        success: false,
        message: 'Агуулга олдсонгүй'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Агуулга амжилттай шинэчлэгдлээ',
      data: content
    });
  } catch (error) {
    console.error('Update content error:', error);
    res.status(500).json({
      success: false,
      message: 'Агуулга шинэчлэхэд алдаа гарлаа'
    });
  }
});

// Admin routes - Delete content
router.delete('/admin/:id', authenticateToken, requireAdmin, async (req: AuthRequest, res: express.Response): Promise<void> => {
  try {
    const { id } = req.params;

    const content = await AboutContent.findByIdAndDelete(id);

    if (!content) {
      res.status(404).json({
        success: false,
        message: 'Агуулга олдсонгүй'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Агуулга амжилттай устгагдлаа'
    });
  } catch (error) {
    console.error('Delete content error:', error);
    res.status(500).json({
      success: false,
      message: 'Агуулга устгахад алдаа гарлаа'
    });
  }
});

// Admin routes - Toggle content active status
router.patch('/admin/:id/toggle', authenticateToken, requireAdmin, async (req: AuthRequest, res: express.Response): Promise<void> => {
  try {
    const { id } = req.params;

    const content = await AboutContent.findById(id);
    if (!content) {
      res.status(404).json({
        success: false,
        message: 'Агуулга олдсонгүй'
      });
      return;
    }

    content.isActive = !content.isActive;
    await content.save();

    res.json({
      success: true,
      message: `Агуулга ${content.isActive ? 'идэвхжүүлэгдлээ' : 'идэвхгүй болгогдлоо'}`,
      data: content
    });
  } catch (error) {
    console.error('Toggle content error:', error);
    res.status(500).json({
      success: false,
      message: 'Агуулга төлөв өөрчлөхөд алдаа гарлаа'
    });
  }
});

export default router;
