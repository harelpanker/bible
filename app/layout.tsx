import './globals.css';
import localFont from 'next/font/local';

import Footer from '@/components/Footer';
import Header from '@/components/navbar/Header';

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
        className={`${satoshi.variable} bg-slate-50 font-sans text-slate-900 antialiased`}
      >
        <div className='flex min-h-100dvh flex-col justify-between'>
          <div>
            <Header />
            <main className='relative z-10 overflow-hidden py-10 xl:py-16'>
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
