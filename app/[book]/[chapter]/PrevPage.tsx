'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { MoveLeft } from 'lucide';
import { Button } from '@/components/ui/button';

type PrevPageProps = {};

const PrevPage: FC<PrevPageProps> = ({}) => {
  const router = useRouter();

  const handlePrevPage = () => {
    router.back();
  };

  return (
    <div>
      <Button onClick={handlePrevPage} variant='ghost'>
        {/* <MoveLeft size={24} />  */}
        <span>Back</span>
      </Button>
    </div>
  );
};

export default PrevPage;
