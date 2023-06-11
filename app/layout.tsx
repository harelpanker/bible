import Footer from '@/components/Footer';
import './globals.css';
import localFont from 'next/font/local';

export const metadata = {
  title: 'The Holy Bible',
  description: '',
};

const satoshi = localFont({
  src: [
    { path: '../public/fonts/Satoshi-Variable.ttf', style: 'normal' },
    { path: '../public/fonts/Satoshi-VariableItalic.ttf', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-satoshi',
});

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en' dir='ltr' className='scroll-smooth'>
      <body
        className={`${satoshi.variable} antialiased bg-slate-50 text-slate-900 font-sans`}>
        <div className='flex flex-col justify-between min-h-100dvh'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
