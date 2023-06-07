import SectionHero from '@/app/(home)/SectionHero';
import Container from '@/components/ui/Container';
import PagePadding from '@/components/ui/PagePadding';

const api_key = process.env.API_KEY;

async function getBookName(number: string) {
  const url = `https://iq-bible.p.rapidapi.com/GetBookNameByBookId?bookId=${number}&language=english`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '07f362c51dmsh492e0ca1027aa4bp128e6ejsnaf5cb0fd7ef0',
      'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com',
    },
  };
  const res = await fetch(url, options);
  return res.json();
}

async function getChepters(number: string) {
  const url = 'https://iq-bible.p.rapidapi.com/GetChapter?language=english';
  const options = {
    method: 'GET',
    params: {
      bookId: '42',
    },
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
  params: { number },
}: {
  params: { number: string };
}) {
  // Initiate both requests in parallel
  const chepterData = getChepters(number);
  const bookNameData = getBookName(number);

  // Wait for the promises to resolve
  const [chepter, bookName] = await Promise.all([chepterData, bookNameData]);

  //console.log(bookName);

  return (
    <main className='py-10 xl:py-16'>
      <PagePadding>
        <Container>
          <div className='flex flex-col gap-12 lg:gap-16'>
            <SectionHero title={bookName[0].n} />
          </div>
        </Container>
      </PagePadding>
    </main>
  );
}
