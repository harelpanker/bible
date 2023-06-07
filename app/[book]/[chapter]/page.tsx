import SectionHero from '@/app/(home)/SectionHero';
import Container from '@/components/ui/Container';
import PagePadding from '@/components/ui/PagePadding';
import ChapterContent from './ChapterContent';
import Navigation from './Navigation';

const api_key = process.env.API_KEY;

async function getTotalNumberOfChepters(book: string) {
  const url = `https://iq-bible.p.rapidapi.com/GetChapterCount?bookId=${book}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${api_key}`,
      'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com',
    },
  };
  const res = await fetch(url, options);
  return res.json();
}

async function getBookName(book: string) {
  const url = `https://iq-bible.p.rapidapi.com/GetBookNameByBookId?bookId=${book}&language=english`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${api_key}`,
      'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com',
    },
  };
  const res = await fetch(url, options);
  return res.json();
}

async function getChepters(book: string, chapter: string) {
  const url = `https://iq-bible.p.rapidapi.com/GetChapter?bookId=${book}&chapterId=${chapter}&versionId=kjv`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${api_key}`,
      'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com',
    },
  };

  const res = await fetch(url, options);
  return res.json();
}

type PageProps = {};

export default async function Page({
  params: { chapter, book },
}: {
  params: { chapter: string; book: string };
}) {
  const chepterNumberData = getTotalNumberOfChepters(book);
  const chepterData = getChepters(book, chapter);
  const bookNameData = getBookName(book);

  // Wait for the promises to resolve
  const [chepterNumber, chapterD, bookName] = await Promise.all([
    chepterNumberData,
    chepterData,
    bookNameData,
  ]);

  console.log(chapter);

  return (
    <main className='py-10 xl:py-16'>
      <PagePadding>
        <Container>
          <div className='flex flex-col gap-12 lg:gap-16'>
            <SectionHero title={bookName[0].n} />
            {/* chapter content */}
            <ChapterContent chapter={chapter} chapterD={chapterD} />
            {/* bottom navigation */}
            <Navigation
              chapter={chapter}
              book={book}
              chepterNumber={chepterNumber}
            />
          </div>
        </Container>
      </PagePadding>
    </main>
  );
}
