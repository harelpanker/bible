import SectionHero from './(home)/SectionHero';
import SectionMain from './(home)/SectionMain';
import Container from '@/components/ui/Container';
import PagePadding from '@/components/ui/PagePadding';

const url = 'https://iq-bible.p.rapidapi.com/GetBibleBookAbbreviations';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '07f362c51dmsh492e0ca1027aa4bp128e6ejsnaf5cb0fd7ef0',
    'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com',
  },
};

async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const data = await getData();
  //console.log(data);

  return (
    <main className='py-10 xl:py-16'>
      <PagePadding>
        <Container>
          <div className='flex flex-col gap-12 lg:gap-16'>
            <SectionHero />
            {/* <SectionMain /> */}
          </div>
        </Container>
      </PagePadding>
    </main>
  );
}
