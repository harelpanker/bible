import { FC } from 'react';
import Link from 'next/link';

type NavigationProps = {
  chepterNumber: { chapterCount: number };
  book: string;
  chapter: string;
};

const Navigation: FC<NavigationProps> = ({ chepterNumber, book, chapter }) => {
  // const hideNextCompletly =
  const hideNextButton = parseInt(chapter) === chepterNumber.chapterCount;
  return (
    <section>
      <nav>
        {hideNextButton ? (
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
