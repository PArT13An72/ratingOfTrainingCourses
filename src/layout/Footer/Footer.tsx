import React, { JSX } from 'react';
import cn from 'classnames';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

export const Footer = ({ className }: FooterProps): JSX.Element => {
  const yearNow = new Date().getFullYear();

  return (
    <footer className={cn(styles.footer, className)}>
      <span>OwlTop © 2020 - {yearNow} Все права защищены</span>
      <a href={'#'} target={'_blank'} rel="noreferrer">
        Пользовательское соглашение
      </a>
      <a href={'#'} target={'_blank'} rel="noreferrer">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
