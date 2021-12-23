import clsx from 'clsx';
import React, { FC } from 'react';
import useStyles from './styles';

type LinkProps = {
  label: string;
  href: string;
};

const RCLink: FC<LinkProps> = ({ label, href }) => {
  const classes = useStyles();
  return (
    <a className={clsx(classes.CVLink)} href={href}>
      {label}
    </a>
  );
};

export default RCLink;
