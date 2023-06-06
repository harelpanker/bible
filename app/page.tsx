import SectionHero from './(home)/SectionHero';
import SectionMain from './(home)/SectionMain';
import Container from '@/components/ui/Container';
import PagePadding from '@/components/ui/PagePadding';

async function getData() {
  const res = await fetch('https://api.github.com/repos/vercel/swr');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main className='py-10 xl:py-16'>
      <PagePadding>
        <Container>
          <div className='flex flex-col gap-12 lg:gap-16'>
            <SectionHero />
            <SectionMain data={data} />
          </div>
        </Container>
      </PagePadding>
    </main>
  );
}
