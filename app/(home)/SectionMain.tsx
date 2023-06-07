import Container from '@/components/ui/Container';
import PagePadding from '@/components/ui/PagePadding';
import TypographyH2 from '@/components/ui/TypographyH2';
import Link from 'next/link';
import { FC } from 'react';

type SectionMainProps = {
  booksData: {
    n: string;
    b: string;
  }[];
};

const SectionMain: FC<SectionMainProps> = ({ booksData }) => {
  return (
    <section className='flex flex-col gap-3'>
      <TypographyH2>Books</TypographyH2>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {booksData.map((book) => (
          <li key={book.b}>
            <Link
              className='transition duration-500 px-4 flex items-center min-h-[74px] gap-7 rounded border border-slate-200 group hover:bg-slate-100'
              href={`/${book.b}`}>
              <div className='w-10 h-10 rounded bg-slate-200/80 flex items-center justify-center rotate-45 text-sm transition duration-500 group-hover:rotate-0'>
                <span className='-rotate-45 group-hover:rotate-0 transition duration-500'>
                  {book.b}
                </span>
              </div>
              <h3 className='text-lg font-semibold'>{book.n}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionMain;
