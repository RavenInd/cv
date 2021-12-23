import React from 'react';
import clsx from 'clsx';

import useStyles from './style';
import CVNavigation from '../components/CVNavigation';

const App = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.CVroot)}>
      <CVNavigation />
    </div>
  );
};

export default App;
