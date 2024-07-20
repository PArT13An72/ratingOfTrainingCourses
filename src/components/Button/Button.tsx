import React, { JSX } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({
  children,
  appearance,
  arrow = 'none',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.primary]: appearance === 'primary',
          [styles.ghost]: appearance === 'ghost',
        },
        className,
      )}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles['arrow-down']]: arrow === 'down',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
