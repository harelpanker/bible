import { FC } from 'react';

type ContainerProps = {
  children: React.ReactNode;
  isRead?: boolean;
};

const Container: FC<ContainerProps> = ({ children, isRead }) => {
  return (
    <div
      className={`${
        isRead ? 'max-w-5xl' : ''
      } container mx-auto px-6 md:px-12 overflow-hidden`}>
      {children}
    </div>
  );
};

export default Container;
