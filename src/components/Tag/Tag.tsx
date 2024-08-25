import React, { JSX } from 'react';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
  children,
  size = 'standard',
  color = 'ghost',
  href,
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.standard]: size === 'standard',
        [styles.large]: size === 'large',
        [styles.ghost]: color === 'ghost',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
        [styles.red]: color === 'red',
        [styles.purple]: color === 'purple',
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
