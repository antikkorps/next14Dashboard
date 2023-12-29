import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Next14 Dashboard',
    default: 'Next14 Dashboard',
  },
  description: 'A simple invoicing app built with Next.js',
  metadataBase: new URL(
    'https://next14-dashboard-mf3csygkk-antikkorps.vercel.app',
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
