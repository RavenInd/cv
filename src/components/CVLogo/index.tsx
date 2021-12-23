import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

export default function CVLogo() {
  const classes = useStyles();
  return <div className={clsx(classes.CVLogo)}>Karasu.Sam</div>;
}
