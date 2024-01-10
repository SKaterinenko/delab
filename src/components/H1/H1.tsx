import React from 'react';
import { HeadingType } from '@/types/generalTypes';

const H1:React.FC<HeadingType> = ({ children }) => (
  <h1 className="text-[5rem] font-semibold leading-[110%] tracking-[-2.4px] text-black">{children}</h1>
);

export default H1;
