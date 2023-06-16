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
            <DropdownMenuTrigger className='rounded py-1 px-3 border border-slate-200 bg-slate-100 flex items-center justify-center gap-2'>
              <span>Chapter {chapter}</span>{' '}
              <ChevronDown className='text-slate-700 w-4 h-4' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='flex flex-col gap-2 max-h-72 overflow-auto'>
              {Array.from(
                { length: chepterNumber?.chapterCount },
                (_, i) => i + 1
              ).map((id) => (
                <DropdownMenuItem key={id}>
                  <Link
                    href={`/${chapterD[0].b}/${id}`}>{`Chapter ${id}`}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      <ul className='grid grid-cols-1 gap-6 divide-y divide-y-slate-300'>
        {chapterD.map((item) => (
          <li className='pt-6 first:pt-0 flex flex-col gap-5' key={item.id}>
            <div className={`flex w-full justify-between`}>
              {!share ? (
                <Link href={`/${item.b}/${item.c}/${item.id}`}>
                  <LinkIcon className='w-4 h-4' />
                </Link>
              ) : (
                <Share />
              )}
              <div>
                {item.c} : {item.v}
              </div>
            </div>
            <p className='text-xl leading-relaxed lg:text-3xl lg:leading-relaxed font-medium max-w-4xl'>
              {item.t}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChapterContent;
