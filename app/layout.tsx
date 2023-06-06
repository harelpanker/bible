import './globals.css';
import localFont from 'next/font/local';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
    <html lang='en'>
      <body
        className={`${satoshi.variable} antialiased bg-slate-50 text-slate-900 font-sans`}>
        {children}
      </body>
    </html>
  );
}
