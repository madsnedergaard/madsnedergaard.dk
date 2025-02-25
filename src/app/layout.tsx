// These styles apply to every route in the application
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mads Nedergaard',
  description: 'Personal website of Mads Nedergaard, software engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
