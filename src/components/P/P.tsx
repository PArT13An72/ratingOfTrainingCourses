import React, { JSX } from 'react';
import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ children, size = 'standard' }: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size === 'small',
        [styles.standard]: size === 'standard',
        [styles.large]: size === 'large',
      })}
    >
      {children}
    </p>
  );
};
