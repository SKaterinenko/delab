import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: string
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button:React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button className={clsx('py-[12px] px-[32px] md:py-[18px] md:px-[42px] rounded-full text-[1.125rem] md:text-[1.25rem] font-medium leading-[120%] transition duration-300', className)} {...props} type="button">{children}</button>
);

export default Button;
