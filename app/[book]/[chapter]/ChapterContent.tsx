import TypographyH2 from '@/components/ui/TypographyH2';
import { FC } from 'react';

type ChapterContentProps = {
  chapterD: {
    id: string;
    b: string;
    c: string;
    v: string;
    t: string;
  }[];
  chapter: string;
};

const ChapterContent: FC<ChapterContentProps> = ({ chapterD, chapter }) => {
  return (
    <section className='flex flex-col gap-12'>
      <TypographyH2>Chapter {chapter}</TypographyH2>
      <ul className='grid grid-cols-1 gap-6 divide-y divide-y-slate-300'>
        {chapterD.map((item) => (
          <li className='pt-6 first:pt-0 flex flex-col gap-3' key={item.id}>
            <div className='flex w-full justify-end'>
              <div>
                {item.c} : {item.v}
              </div>
            </div>
            <p className='text-xl font-medium max-w-4xl leading-relaxed'>
              {item.t}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChapterContent;
