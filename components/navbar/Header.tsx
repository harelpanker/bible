'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import Container from '../ui/Container';

import { useAtom } from 'jotai';
import isOpen from '@/store/nav-store';

import hero_icon from '../../public/images/hero_icon.svg';
import { Button } from '../ui/button';
import { set } from 'react-hook-form';

const links = [
  { id: '1', title: 'Home', href: '/' },
  { id: '2', title: 'Old testiment', href: '/ot' },
  { id: '3', title: 'New testiment', href: '/nt' },
  { id: '4', title: 'Search', href: '/search' },
];

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}) => {
  const [open, setOpen] = useAtom(isOpen);

  const handleOpen = () => {
    setOpen(!open);
    document.querySelector('body')?.classList.toggle('overflow-hidden');
    document.querySelector('body')?.classList.toggle('h-full');
  };

  return (
    <>
      <header className='min-h-[5rem] border-b border-gray-200 bg-slate-50 sticky top-0 z-50 flex items-center'>
        <Container>
          <div className='flex justify-between items-center'>
            {/* logo */}
            <Link href='/'>
              <Image src={hero_icon} alt='logo' width={70} height={45} />
            </Link>

            <nav className='hidden lg:block'>
              <ul className='flex gap-6 text-lg'>
                {links.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className='flex items-center gap-4 lg:hidden'>
              {/* nav link search */}
              <Link
                className='flex justify-center items-center w-9 h-9'
                href='/search'>
                <Search />
              </Link>
              {/* nav mobile button */}
              <Button
                onClick={handleOpen}
                type='button'
                variant='ghost'
                size='sm'
                className='w-9 h-9 p-0'>
                <Menu />
              </Button>
            </div>
          </div>
        </Container>
      </header>
      <nav
        className={`${
          open ? 'block' : 'hidden'
        } fixed z-40 bg-slate-50 w-full h-[100dvh]`}>
        <Container>
          <ul className='flex flex-col gap-12 font-medium text-2xl pt-28'>
            {links.map((item) => (
              <li key={item.id}>
                <Link onClick={handleOpen} href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  );
};

export default Header;
