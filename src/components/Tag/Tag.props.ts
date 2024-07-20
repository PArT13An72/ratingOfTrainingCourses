import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 'standard' | 'large';
  color?: 'ghost' | 'gray' | 'green' | 'red' | 'purple';
  href?: string;
}
