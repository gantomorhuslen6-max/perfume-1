'use client';

import { CartProvider } from '../contexts/CartContext';
import Header from './Header';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Header />
      {children}
    </CartProvider>
  );
}
