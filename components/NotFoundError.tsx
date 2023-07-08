import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './ui/Container';

import hero_icon from '/public/images/hero_icon.svg';
import TypographyH1 from './ui/TypographyH1';
import { Button } from '@/components/ui/button';

type NotFoundProps = {};

const NotFoundError: FC<NotFoundProps> = ({}) => {
  return (
    <section>
      <Container>
        <div className='flex flex-col items-center justify-center gap-20 text-center'>
          <Image src={hero_icon} alt='' width={150} height={150} />
          <div className='flex flex-col items-center justify-center gap-10'>
            <TypographyH1>Page not found</TypographyH1>
            <div className='flex flex-wrap items-center justify-center gap-5'>
              <Button asChild>
                <Link href={`/`}>Back home</Link>
              </Button>
              <Button variant='ghost' asChild>
                <Link href={`/search`}>Search</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundError;
