const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://perfume-900a.onrender.com';

export interface AboutContent {
  _id: string;
  section: string;
  title: string;
  subtitle?: string;
  content: string;
  imageUrl?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export const fetchAboutContent = async (): Promise<AboutContent[]> => {
  try {
    const response = await fetch(`${API_BASE}/api/about`);
    if (!response.ok) {
      throw new Error('Failed to fetch about content');
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching about content:', error);
    return [];
  }
};

export const fetchAboutContentBySection = async (section: string): Promise<AboutContent[]> => {
  try {
    const response = await fetch(`${API_BASE}/api/about/section/${section}`);
    if (!response.ok) {
      throw new Error('Failed to fetch section content');
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching section content:', error);
    return [];
  }
};
