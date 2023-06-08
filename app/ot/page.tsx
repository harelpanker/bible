import SectionHero from '../(home)/SectionHero';
import SectionMain from '../(home)/SectionMain';
import Container from '@/components/ui/Container';

const api_key = process.env.API_KEY;
const url = 'https://iq-bible.p.rapidapi.com/GetBooksOT?language=english';
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

export default async function OTPage() {
  const data = await getData();

  return (
    <main className='py-10 xl:py-16'>
      <Container>
        <div className='flex flex-col gap-12 lg:gap-16'>
          <SectionHero title='Old Testament' />
          <SectionMain booksData={data} />
        </div>
      </Container>
    </main>
  );
}
