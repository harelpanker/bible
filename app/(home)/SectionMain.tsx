import { FC } from 'react';

type SectionMainProps = {
  data: {
    name: string;
  };
};

const SectionMain: FC<SectionMainProps> = ({ data }) => {
  const { name } = data;
  return <div>{name}</div>;
};

export default SectionMain;
