// https://rapidapi.com/vibrantmiami/api/iq-bible

import SectionHero from './(home)/SectionHero';
import SectionMain from './(home)/SectionMain';
import Container from '@/components/ui/Container';
import PagePadding from '@/components/ui/PagePadding';

const api_key = process.env.API_KEY;
const url = 'https://iq-bible.p.rapidapi.com/GetBooks?language=english';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${api_key}`,
    'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com',
  },
};

async function getData() {
  const res = await fetch(url, options);

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className='py-10 xl:py-16'>
      <PagePadding>
        <Container>
          <div className='flex flex-col gap-12 lg:gap-16'>
            <SectionHero />
            <SectionMain booksData={data} />
          </div>
        </Container>
      </PagePadding>
    </main>
  );
}
