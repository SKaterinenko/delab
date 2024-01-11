import React from 'react';
import clsx from 'clsx';
import { HeadingType } from '@/types/generalTypes';

const P:React.FC<HeadingType> = ({ children, className, ...props }) => (
  <p className={clsx('text-[1.125rem] xl:text-[1.25rem] font-normal leading-[120%] text-black dark:text-white', className)} {...props}>{children}</p>
);

export default P;
