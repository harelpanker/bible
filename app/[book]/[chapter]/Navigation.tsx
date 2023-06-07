import { FC } from 'react';
import Link from 'next/link';

type NavigationProps = {
  chepterNumber: { chapterCount: number };
  book: string;
  chapter: string;
};

const Navigation: FC<NavigationProps> = ({ chepterNumber, book, chapter }) => {
  return (
    <section>
      <nav>
        {/* next button */}
        {parseInt(chapter) === chepterNumber.chapterCount ? (
          <Link href={`/${parseInt(book) + 1}/1`}>Next Book</Link>
        ) : (
          <Link href={`/${parseInt(book)}/${parseInt(chapter) + 1}`}>
            Next Chapter
          </Link>
        )}
      </nav>
    </section>
  );
};

export default Navigation;
