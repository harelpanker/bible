import { FC } from 'react';
import Image from 'next/image';
import TypographyH1 from '@/components/ui/TypographyH1';

import hero_icon from '../../public/images/hero_icon.svg';

type SectionHeroProps = {
  title?: string;
};

const SectionHero: FC<SectionHeroProps> = ({ title }) => {
  return (
    <header className='flex text-center justify-center items-center gap-3 flex-col'>
      <Image className='w-full max-w-[10rem]' src={hero_icon} alt='' priority />
      <TypographyH1>{title ? title : 'The Holy Bible'}</TypographyH1>
    </header>
  );
};

export default SectionHero;
