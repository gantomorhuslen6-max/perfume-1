import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: [true, 'Нэр заавал оруулах шаардлагатай'],
    trim: true,
    maxlength: [50, 'Нэр 50 тэмдэгтээс бага байх ёстой']
  },
  lastName: {
    type: String,
    required: [true, 'Овог заавал оруулах шаардлагатай'],
    trim: true,
    maxlength: [50, 'Овог 50 тэмдэгтээс бага байх ёстой']
  },
  email: {
    type: String,
    required: [true, 'И-мэйл заавал оруулах шаардлагатай'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Зөв и-мэйл хаяг оруулна уу'
    ]
  },
  password: {
    type: String,
    required: [true, 'Нууц үг заавал оруулах шаардлагатай'],
    minlength: [6, 'Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой']
  }
}, {
  timestamps: true
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Compare password method
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
UserSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

export default mongoose.model<IUser>('User', UserSchema);
