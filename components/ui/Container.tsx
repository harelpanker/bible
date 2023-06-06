import { FC } from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className='container mx-auto'>{children}</div>;
};

export default Container;
