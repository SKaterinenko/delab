'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';

const Header = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme'));

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Позволяет кнопке менять тему
  useEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const setDark = () => {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    };

    const setLight = () => {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    };

    // Если клиент впервые на сайте то поставится тема которая используется в системе
    const checkTheme = () => {
      if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && darkQuery.matches)) {
        setDark();
      } else {
        setLight();
      }
    };
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark');
        window.localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        document.documentElement.classList.remove('dark');
        window.localStorage.setItem('theme', 'light');
        break;
      default:
        window.localStorage.removeItem('theme');
        checkTheme();
        break;
    }
    // Если системная тема поменялась то и сайт тоже поменяет тему
    darkQuery.addEventListener('change', (e) => {
      if (e.matches) {
        setDark();
      } else {
        setLight();
      }
    });
  }, [theme]);

  return (
    <header className="container flex justify-between items-center">
      <div><Image className="md:w-[64px] md:h-[64px] w-[46px] mh-[46px]" src="/assets/logo.png" alt="Logo" width={64} height={64} /></div>
      <div className="hidden md:flex gap-[32px]">
        <p className="font-medium text-[20px] hover:text-primary cursor-pointer">Use cases</p>
        <p className="font-medium text-[20px] hover:text-primary cursor-pointer">Features</p>
        <p className="font-medium text-[20px] hover:text-primary cursor-pointer">How to start</p>
      </div>
      <div className="flex gap-4">
        <Image className="block dark:hidden cursor-pointer" onClick={() => { handleThemeSwitch(); }} src="/assets/icons/sun.svg" alt="Sun" width={32} height={32} />
        <Image className="hidden dark:block cursor-pointer" onClick={() => { handleThemeSwitch(); }} src="/assets/icons/moon.svg" alt="Moon" width={32} height={32} />
        <Button className="bg-lightBlue text-deepBlue dark:border dark:border-grey dark:text-white dark:bg-black">Get started</Button>
      </div>
    </header>
  );
};

export default Header;
