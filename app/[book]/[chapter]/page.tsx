import SectionHero from '@/app/(home)/SectionHero';
import Container from '@/components/ui/Container';
import ChapterContent from './ChapterContent';
import Navigation from './Navigation';
import PrevPage from './PrevPage';
import { notFound } from 'next/navigation';

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
async function getTotalNumberOfCheptersInPrevBook(book: string) {
  const bookNumber = book !== '1' ? parseInt(book) - 1 : '1';
  const url = `https://iq-bible.p.rapidapi.com/GetChapterCount?bookId=${bookNumber}`;
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
  const chepterPrevNumberData = getTotalNumberOfCheptersInPrevBook(book);
  const chepterData = getChepters(book, chapter);
  const bookNameData = getBookName(book);

  // Wait for the promises to resolve
  const [chepterNumber, chepterPrevNumber, chapterD, bookName] =
    await Promise.all([
      chepterNumberData,
      chepterPrevNumberData,
      chepterData,
      bookNameData,
    ]);

  if (!chapterD || chapterD.length < 1) {
    notFound();
  }

  return (
    <Container isRead>
      <div className='flex flex-col gap-12 lg:gap-16'>
        <div>
          <PrevPage />
          <SectionHero title={bookName[0].n} />
        </div>
        {/* chapter content */}
        <ChapterContent
          chapter={chapter}
          chapterD={chapterD}
          chepterNumber={chepterNumber}
        />
        {/* bottom navigation */}
        <Navigation
          chapter={chapter}
          chepterPrevNumber={chepterPrevNumber}
          book={book}
          chepterNumber={chepterNumber}
        />
      </div>
    </Container>
  );
}
