import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { poppins } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased `}>{children}</body>
    </html>
  );
}
