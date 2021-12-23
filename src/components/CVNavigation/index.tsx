import clsx from 'clsx';
import React from 'react';
import RCLink from '../../shared/CVLink';
import CVLogo from '../CVLogo';
import useStyles from './styles';

enum NavigationLinks {
  HOME = 'home',
  ABOUT = 'about',
  SKILLS = 'bio',
  CONTACTS = 'contacts',
}

type NavigationNamesMap = {
  [key in NavigationLinks]: string;
};

const NavigationNames: NavigationNamesMap = {
  [NavigationLinks.HOME]: 'Home',
  [NavigationLinks.ABOUT]: 'About',
  [NavigationLinks.SKILLS]: 'Skills',
  [NavigationLinks.CONTACTS]: 'Contacts',
};

export default function CVNavigation() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.CVNavigation)}>
      <CVLogo />
      <div className={clsx(classes.linksContainer)}>
        {Object.values(NavigationLinks).map((link: NavigationLinks) => {
          return <RCLink key={link} label={NavigationNames[link]} href={`#${link}`} />;
        })}
      </div>
    </div>
  );
}
