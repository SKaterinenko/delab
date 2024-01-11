'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import Greetings from '@/components/Greetings/Greetings';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Нужно ждать загрузки страницы тк Header используется window
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="pt-10">
      <Header />
      <Greetings />
    </main>
  );
};

export default Main;
