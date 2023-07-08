import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import PrevPage from '../PrevPage';
import ChapterContent from '../ChapterContent';

const api_key = process.env.API_KEY;

async function getVerse(verse: string) {
  const url = `https://iq-bible.p.rapidapi.com/GetVerse?verseId=${verse}&versionId=kjv`;
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

export default async function Page({
  params: { verse },
}: {
  params: { verse: string };
}) {
  const verseD = getVerse(verse);
  const [verseData] = await Promise.all([verseD]);

  if (verseData.length === 0 || !verseData) {
    notFound();
  }

  return (
    <Container isRead>
      <div className='flex flex-col gap-12 lg:gap-16'>
        <PrevPage />
        {/* chapter content */}
        <ChapterContent chapterD={verseData} share />
      </div>
    </Container>
  );
}
