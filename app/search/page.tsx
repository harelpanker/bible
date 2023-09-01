'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHero from '../(home)/SectionHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type ResaultProps = {
  id: string;
  b: string;
  c: string;
  v: string;
  t: string;
};

// form
const schema = yup
  .object({
    search_query: yup.string().required('This field is required'),
  })
  .required();

type Inputs = {
  search_query: string;
};

const Page = () => {
  const [resaults, setResaults] = useState([]);
  const [paginationNumber, setPaginationNumber] = useState(12);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // async request which may result error
    const api_key = process.env.NEXT_PUBLIC_API_KEY;
    try {
      const response = await fetch(
        `https://iq-bible.p.rapidapi.com/GetSearch?query=${data.search_query}&versionId=kjv`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': `${api_key}`,
            'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com',
          },
        }
      );
      const result = await response.json();
      setResaults(result);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container isRead>
      <div className='flex flex-col gap-12 lg:gap-16'>
        <SectionHero title='Search' />
        {/* search component */}
        <form
          className='mx-auto flex w-full max-w-md gap-2 pb-2'
          onSubmit={handleSubmit(onSubmit)}>
          <div className='flex grow flex-col gap-2'>
            <Input
              {...register('search_query')}
              type='text'
              id='search_query'
              placeholder='Search...'
              autoFocus
            />
            {errors.search_query && (
              <span className='text-sm text-red-500'>
                {errors.search_query?.message}
              </span>
            )}
          </div>
          <Button type='submit'>Search</Button>
        </form>
        {/* resaults */}
        {resaults.length > 0 && (
          <div className='flex flex-col gap-6 lg:gap-12'>
            {/* {console.log(resaults)} b, c, v */}
            <ul className='divide-y-slate-300 grid grid-cols-1 gap-6 divide-y'>
              {resaults.slice(0, paginationNumber).map((item: ResaultProps) => (
                <li
                  className='flex flex-col gap-3 pt-6 first:pt-0'
                  key={item.id}>
                  <div className='flex w-full items-center justify-between'>
                    <Link href={`/${item.b}/${item.c}/${item.id}`}>
                      <LinkIcon className='h-4 w-4' />
                    </Link>
                    <div>
                      {item.c} : {item.v}
                    </div>
                  </div>
                  <p className='max-w-4xl text-xl font-medium leading-relaxed lg:text-3xl lg:leading-relaxed'>
                    {item.t}
                  </p>
                </li>
              ))}
            </ul>
            {/* Load more button  */}
            {paginationNumber < resaults.length && (
              <div className='flex'>
                <Button
                  onClick={() => setPaginationNumber(paginationNumber + 12)}>
                  Load more
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Page;
