'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Link as LinkIcon, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Share from './Share';

type ChapterContentProps = {
  chapterD: {
    id: string;
    b: string;
    c: string;
    v: string;
    t: string;
  }[];
  chapter?: string;
  share?: boolean;
  chepterNumber?: { chapterCount: number };
};

const ChapterContent: FC<ChapterContentProps> = ({
  chepterNumber,
  chapterD,
  chapter,
  share,
}) => {
  return (
    <section className='flex flex-col gap-12'>
      {chapter && chepterNumber && (
        <div className='flex'>
          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center justify-center gap-2 rounded border border-slate-200 bg-slate-100 px-3 py-1'>
              <span>Chapter {chapter}</span>{' '}
              <ChevronDown className='h-4 w-4 text-slate-700' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='flex max-h-72 flex-col gap-2 overflow-auto'>
              {Array.from(
                { length: chepterNumber?.chapterCount },
                (_, i) => i + 1
              ).map((id) => (
                <DropdownMenuItem key={id} className='p-0'>
                  <Link
                    className='w-full px-2 py-[6px]'
                    href={`/${chapterD[0].b}/${id}`}>{`Chapter ${id}`}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      <ul className='divide-y-slate-300 grid grid-cols-1 gap-6 divide-y'>
        {chapterD.map((item) => (
          <li className='flex flex-col gap-5 pt-6 first:pt-0' key={item.id}>
            <div className={`flex w-full justify-between`}>
              {!share ? (
                <Link href={`/${item.b}/${item.c}/${item.id}`}>
                  <LinkIcon className='h-4 w-4' />
                </Link>
              ) : (
                <Share />
              )}
              <div>
                {item.c} : {item.v}
              </div>
            </div>
            <p className='max-w-4xl text-xl font-medium leading-relaxed lg:text-3xl lg:leading-relaxed'>
              {item.t}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChapterContent;
