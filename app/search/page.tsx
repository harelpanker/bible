'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHero from '../(home)/SectionHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
  const {
    register,
    handleSubmit,
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
      //   [{
      //       id: '08004017',
      //       b: '8',
      //       c: '4',
      //       v: '17',
      //       t:
      //         'And the women her neighbors gave it a name, saying, There is a son born to Naomi; and they called his name Obed: he is the father of Jesse, the father of David.'
      //     },
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
            className='flex gap-2 w-full max-w-md mx-auto'
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
          <div></div>
        </div>
      </Container>
    </main>
  );
};

export default Page;
