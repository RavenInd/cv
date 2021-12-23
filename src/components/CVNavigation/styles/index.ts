import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  CVNavigation: {
    fontFamily: 'Comfortaa, cursive',
    display: 'flex',
    alignItems: 'center',
    height: 80,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    '&::before': {
      content: "' '",
      position: 'absolute',
      background: 'inherit',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      boxShadow: 'inset 0 0 2000px #6667aa',
      filter: 'blur(100px)',
      margin: '-20px',
    },
  },
  linksContainer: {
    display: 'flex',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
