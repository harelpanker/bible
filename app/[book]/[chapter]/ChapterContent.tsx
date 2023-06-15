import { FC } from 'react';
import TypographyH2 from '@/components/ui/TypographyH2';
import Link from 'next/link';
import { Link as LinkIcon, Share } from 'lucide-react';

// https://www.npmjs.com/package/react-web-share

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
};

const ChapterContent: FC<ChapterContentProps> = ({
  chapterD,
  chapter,
  share,
}) => {
  return (
    <section className='flex flex-col gap-12'>
      {chapter && <TypographyH2>Chapter {chapter}</TypographyH2>}
      <ul className='grid grid-cols-1 gap-6 divide-y divide-y-slate-300'>
        {chapterD.map((item) => (
          <li className='pt-6 first:pt-0 flex flex-col gap-3' key={item.id}>
            <div
              className={`flex w-full ${
                !share ? 'justify-between' : 'justify-end'
              }`}>
              {!share ? (
                <Link href={`/${item.b}/${item.c}/${item.id}`}>
                  <LinkIcon className='w-4 h-4' />
                </Link>
              ) : null}
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
