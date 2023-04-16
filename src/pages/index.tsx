import DeleteAllButton from '@/components/DeleteAllButton';
import SearchInput from '@/components/SearchInput';
import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');
  return (
    <main className='flex items-center justify-center w-screen h-screen'>
      <div className='flex min-h-fit w-4/12 min-w-fit flex-col bg-[#f3f3f3] px-12 py-4 pb-20'>
        <div className='flex justify-between mb-12'>
          <p className='text-xl font-bold'>Marvelous 2.0</p>
          <DeleteAllButton search={search} />
        </div>
        <div className='flex space-x-10'>
          <div className='flex flex-col w-1/2 space-y-8'>
            <TaskInput search={search} />
            <TaskList title='Todo' search={search} />
          </div>
          <div className='flex flex-col w-1/2 space-y-8'>
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <TaskList title='Done' search={search} />
          </div>
        </div>
      </div>
    </main>
  );
}
