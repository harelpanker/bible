import { FC } from 'react';

type TypographyH2Props = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

const TypographyH2: FC<TypographyH2Props> = ({ children, size }) => {
  return (
    <h2
      className={`${!size && 'text-lg'} ${size === 'sm' && 'text-2xl'} ${
        size === 'lg' && 'text-3xl'
      }  scroll-m-20 border-b pb-2 font-semibold tracking-tight transition-colors first:mt-0`}>
      {children}
    </h2>
  );
};

export default TypographyH2;
