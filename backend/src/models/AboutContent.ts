import mongoose, { Document, Schema } from 'mongoose';

export interface IAboutContent extends Document {
  section: string;
  title: string;
  subtitle?: string;
  content: string;
  imageUrl?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AboutContentSchema = new Schema<IAboutContent>({
  section: {
    type: String,
    required: [true, 'Хэсэг заавал оруулах шаардлагатай'],
    enum: ['hero', 'brand', 'story', 'features', 'unique', 'subscribe']
  },
  title: {
    type: String,
    required: [true, 'Гарчиг заавал оруулах шаардлагатай'],
    trim: true,
    maxlength: [200, 'Гарчиг 200 тэмдэгтээс бага байх ёстой']
  },
  subtitle: {
    type: String,
    trim: true,
    maxlength: [300, 'Дэд гарчиг 300 тэмдэгтээс бага байх ёстой']
  },
  content: {
    type: String,
    required: [true, 'Агуулга заавал оруулах шаардлагатай'],
    trim: true
  },
  imageUrl: {
    type: String,
    trim: true
  },
  order: {
    type: Number,
    required: [true, 'Дараалал заавал оруулах шаардлагатай'],
    min: [0, 'Дараалал 0-ээс их байх ёстой']
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
AboutContentSchema.index({ section: 1, order: 1 });
AboutContentSchema.index({ isActive: 1 });

export default mongoose.model<IAboutContent>('AboutContent', AboutContentSchema);
