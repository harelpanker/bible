import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './ui/Container';

import hero_icon from '../public/images/hero_icon.svg';
import TypographyH2 from './ui/TypographyH2';

type FooterProps = {};

const links = [
  { id: '1', title: 'Home', href: '/' },
  { id: '2', title: 'Old testiment', href: '/ot' },
  { id: '3', title: 'New testiment', href: '/nt' },
  { id: '4', title: 'Search', href: '/search' },
];

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='pt-20 pb-5'>
      <Container>
        <div className='flex flex-col gap-10'>
          {/* logo and nav */}
          <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
            <Link href='/'>
              <Image src={hero_icon} alt='Logo' className='max-w-[100px]' />
            </Link>

            <nav className='flex flex-col gap-3'>
              <TypographyH2>Navigate</TypographyH2>
              <ul className='flex flex-col gap-2'>
                {links.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* copyright */}
          <p className='text-sm'>
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
