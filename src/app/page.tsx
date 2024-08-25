import React, { JSX } from 'react';
import { Button, HTag, P, Tag } from '@/components';
import { Test } from '@/components/test';

const Home = (): JSX.Element => {
  return (
    <>
      <Test />
      <HTag tag={'h3'}>Что тут</HTag>
      <Button appearance={'primary'} className={'asdasd'} arrow={'right'}>
        asd
      </Button>
      <Button appearance={'ghost'} arrow={'down'}>
        asd
      </Button>
      <P size={'large'}>
        Dfa skfa;l sd;a s;jd a;sj dkjqoivhioxchviu gisuadg fgus uiagfg uasiugdfg
        uiaegwlkj gkjbcxvz v asd asd qopwjf pjaspfj iopajf iopsjvzio; jzsj
        pfjpwjefr j[je[awpf ojop[zxcjvop jzxcov jp
      </P>
      <Tag size={'large'} color={'green'}>
        -10 000 ₽
      </Tag>
      <Tag size={'standard'} color={'red'}>
        -10 000 ₽
      </Tag>
      <Tag size={'standard'} color={'purple'}>
        -10 000 ₽
      </Tag>
      <Tag size={'standard'} color={'ghost'}>
        -10 000 ₽
      </Tag>
      <Tag size={'large'} color={'red'} href={'https://google.com'}>
        ASddsa 5%
      </Tag>
    </>
  );
};

export default Home;
