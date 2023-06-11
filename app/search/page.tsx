import { FC } from 'react';
import Container from '@/components/ui/Container';

import SectionHero from '../(home)/SectionHero';

type pageProps = {};

const page: FC<pageProps> = ({}) => {
  return (
    <main className='py-10 xl:py-16'>
      <Container>
        <div className='flex flex-col gap-12 lg:gap-16'>
          <SectionHero title='Search' />
          {/* search component */}
          {/* resaults */}
        </div>
      </Container>
    </main>
  );
};

export default page;
