import { ImageResponse } from 'next/server';

export const size = {
  width: 1200,
  height: 630,
};

interface Props {
  params: {
    verse: string;
  };
}

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

export default async function og({ params }: Props) {
  const verseD = getVerse(params.verse);
  const [verseData] = await Promise.all([verseD]);

  return new ImageResponse(
    (
      <div tw='relative flex items-center justify-center w-full'>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '36px',
            textAlign: 'center',
            gap: 24,
            flexDirection: 'column',
          }}
        >
          <p tw='text-black text-6xl flex font-bold m-5'>{verseData[0]?.t}</p>
          <p tw='text-xl'>
            {verseData[0]?.b} - {verseData[0]?.c} : {verseData[0]?.v}
          </p>
        </div>
      </div>
    ),
    size
  );
}
