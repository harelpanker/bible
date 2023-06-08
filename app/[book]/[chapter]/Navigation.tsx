import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type NavigationProps = {
  chepterNumber: { chapterCount: number };
  chepterPrevNumber: { chapterCount: number };
  book: string;
  chapter: string;
};

const Navigation: FC<NavigationProps> = ({
  chepterNumber,
  chepterPrevNumber,
  book,
  chapter,
}) => {
  const hideNextButton =
    book === '66' && parseInt(chapter) === chepterNumber.chapterCount;
  const hidePrevButton = parseInt(chapter) === 1 && book === '1';

  return (
    <section>
      <nav className='flex justify-between'>
        {/* prev button */}
        {!hidePrevButton ? (
          parseInt(chapter) === 1 ? (
            <Button variant='outline' asChild>
              <Link
                href={`/${parseInt(book) - 1}/${
                  chepterPrevNumber.chapterCount
                }`}>
                Prev Book
              </Link>
            </Button>
          ) : (
            <Button variant='outline' asChild>
              <Link href={`/${parseInt(book)}/${parseInt(chapter) - 1}`}>
                Prev Chapter
              </Link>
            </Button>
          )
        ) : null}
        {/* next button */}
        {!hideNextButton ? (
          parseInt(chapter) === chepterNumber.chapterCount ? (
            <Button variant='outline' asChild>
              <Link href={`/${parseInt(book) + 1}/1`}>Next Book</Link>
            </Button>
          ) : (
            <Button variant='outline' asChild>
              <Link href={`/${parseInt(book)}/${parseInt(chapter) + 1}`}>
                Next Chapter
              </Link>
            </Button>
          )
        ) : null}
      </nav>
    </section>
  );
};

export default Navigation;
