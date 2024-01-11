import React, { HTMLAttributes } from 'react';

export type HeadingType = {
  children: React.ReactNode | string
  className?: string
} & HTMLAttributes<HTMLElement>;
