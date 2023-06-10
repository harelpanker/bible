import { FC } from 'react';

type TypographyH2Props = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  border?: boolean;
};

const TypographyH2: FC<TypographyH2Props> = ({ children, size, border }) => {
  return (
    <h2
      className={`${!size && 'text-lg'} ${size === 'sm' && 'text-2xl'} ${
        size === 'lg' && 'text-3xl'
      } ${
        border && 'border-b'
      } scroll-m-20  pb-2 font-semibold tracking-tight transition-colors first:mt-0`}>
      {children}
    </h2>
  );
};

export default TypographyH2;
