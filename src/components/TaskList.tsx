import { fetcher } from '@/utils/apiClient';
import React from 'react';
import useSWR from 'swr';
import TaskItem from '@/components/TaskItem';

type Todo = {
  id: number;
  value: string;
  done: boolean;
  completedAt: string;
};

interface TaskListProps {
  title: string;
  search: string;
}

function TaskList({ title, search }: TaskListProps) {
  const { data, error, isLoading, isValidating } = useSWR<{
    todo: Todo[];
    done: Todo[];
  }>(
    ['/api/todos', search],
    (keyArray: string[]) => {
      const [, searchValue] = keyArray;
      return fetcher(`/api/todos?search=${searchValue}`);
    },
    { refreshInterval: 60000 }
  );

  const loading = isLoading;
  if (error)
    return (
      <div className='flex flex-col '>
        <p className='pl-3'>{title}</p>
        <div className='flex-1 my-1 border-b border-black w-100' />
        <div className='flex flex-col space-y-2'>
          {/* <p>Error Loading Tasks</p> */}
        </div>
      </div>
    );
  if (loading)
    return (
      <div className='flex flex-col '>
        <p className='pl-3'>{title}</p>
        <div className='flex-1 my-1 border-b border-black w-100' />
        <div className='flex flex-col space-y-2'>
          {/* <p>Loading......</p> */}
        </div>
      </div>
    );

  const items = title === 'Todo' ? data!.todo : data!.done;

  return (
    <div className='flex flex-col '>
      <p className='pl-3'>{title}</p>
      <div className='flex-1 my-1 border-b border-black w-100' />
      <div className='flex flex-col space-y-2'>
        {items.map((item) => (
          <TaskItem key={item.id} item={item} search={search} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
