import React from 'react';
import clsx from 'clsx';
import { HeadingType } from '@/types/generalTypes';

const H1:React.FC<HeadingType> = ({ children, className, ...props }) => (
  <h1 className={clsx('text-[2.875rem] md:text-[5rem] font-semibold leading-[110%] tracking-[-2.4px] text-black dark:text-primary', className)} {...props}>{children}</h1>
);

export default H1;
