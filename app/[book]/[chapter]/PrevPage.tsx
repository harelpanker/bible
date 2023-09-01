'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { MoveLeftIcon } from 'lucide-react';

type PrevPageProps = {};

const PrevPage: FC<PrevPageProps> = ({}) => {
  const router = useRouter();

  const handlePrevPage = () => {
    router.back();
  };

  return (
    <div>
      <Button onClick={handlePrevPage} variant='ghost' className='group -ml-4'>
        <MoveLeftIcon
          className='transition group-hover:-translate-x-1'
          size={16}
        />
        <span className='ml-2'>Back</span>
      </Button>
    </div>
  );
};

export default PrevPage;
