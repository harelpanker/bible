'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHero from '../(home)/SectionHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

const Page = ({}) => {
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
    <main className='py-10 xl:py-16'>
      <Container isRead>
        <div className='flex flex-col gap-12 lg:gap-16'>
          <SectionHero title='Search' />
          {/* search component */}
          <form
            className='flex gap-2 w-full max-w-md mx-auto pb-2'
            onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2 grow'>
              <Input
                {...register('search_query')}
                type='text'
                id='search_query'
                placeholder='Search...'
                autoFocus
              />
              {errors.search_query && (
                <span className='text-red-500 text-sm'>
                  {errors.search_query?.message}
                </span>
              )}
            </div>
            <Button type='submit'>Search</Button>
          </form>
          {/* resaults */}
          {resaults.length > 0 && (
            <div className='flex flex-col gap-6 lg:gap-12'>
              <ul className='grid grid-cols-1 gap-6 divide-y divide-y-slate-300'>
                {resaults
                  .slice(0, paginationNumber)
                  .map((item: ResaultProps) => (
                    <li
                      className='pt-6 first:pt-0 flex flex-col gap-3'
                      key={item.id}>
                      <div className='flex w-full justify-end'>
                        <div>
                          {item.c} : {item.v}
                        </div>
                      </div>
                      <p className='text-xl leading-relaxed lg:text-3xl lg:leading-relaxed font-medium max-w-4xl'>
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
    </main>
  );
};

export default Page;
