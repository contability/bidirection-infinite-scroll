'use client';

import useTopScreenEventHandler from '../../hooks/useTopScreenEventHandler';
import InfiniteScroll from '@Components/shared/InfiniteScroll';
import { IPost } from '../../app/(home)/page';
import { useUpdateUrlParam } from '../../hooks/useUpdateUrlParam';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IListTemplateProps {
  list: Array<IPost>;
}

const ListTemplate = ({ list }: IListTemplateProps) => {
  const updateUrlParam = useUpdateUrlParam();
  const searchParams = useSearchParams();
  const [limit, setLimit] = useState(Number(searchParams.get('limit')) || 5);
  const [offset, setOffset] = useState(Number(searchParams.get('offset')) || 10);

  const { onWheel, onTouchEnd, onTouchStart } = useTopScreenEventHandler({
    isCallable: true,
    callback: () => scrollUpEventHandler(),
    scrollOffset: 20,
    touchDistanceCriterion: -50,
    wheelDistanceCriterion: -10,
  });

  const scrollUpEventHandler = () => {
    console.log('scroll up');

    if (offset > 0) {
      setOffset(state => state - 1);
      setLimit(state => state + 1);
    }
  };

  const scrollDownEventHandler = () => {
    console.log('scroll down');
    setLimit(state => state + 5);
  };

  useEffect(() => {
    updateUrlParam(
      {
        offset: offset,
        limit: limit,
      },
      undefined,
      false,
    );
  }, [offset, limit]);

  return (
    <article
      className="mx-auto max-w-[720px] text-white"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <h1 className="p-[2rem] text-center text-[5rem] font-bold">양방향 스크롤</h1>
      <ul className="flex flex-col">
        <InfiniteScroll callback={scrollDownEventHandler} threshold={0} endPoint={false}>
          {list.map(value => {
            const userId = value.userId;
            const id = value.id;
            const title = value.title;
            const body = value.body;
            return (
              <li key={`list-${userId}__${id}`} className="h-[200px]">
                <b className="text-[3rem] font-bold text-gray-500">{`${userId}-${id}`}</b>
                <p className="text-[3rem]">{title}</p>
                <p className="text-[1.5rem]">{body}</p>
              </li>
            );
          })}
        </InfiniteScroll>
      </ul>
    </article>
  );
};

export default ListTemplate;
