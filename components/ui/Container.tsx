import { FC } from 'react';

type ContainerProps = {
  children: React.ReactNode;
  isRead?: boolean;
};

const Container: FC<ContainerProps> = ({ children, isRead }) => {
  return (
    <div className={`${isRead ? 'max-w-5xl' : ''} container mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
