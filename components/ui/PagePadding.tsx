import { FC } from 'react';

type PagePaddingProps = { children: React.ReactNode };

const PagePadding: FC<PagePaddingProps> = ({ children }) => {
  return <div className='px-5 lg:px-12 overflow-hidden'>{children}</div>;
};

export default PagePadding;
