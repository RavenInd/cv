import { makeStyles } from '@material-ui/styles';
import dotsBackground from '../assets/img/dots.jpeg';

const useStyles = makeStyles(() => ({
  CVroot: {
    display: 'flex',
    width: '100%',
    fontFamily: 'Comfortaa, cursive',
    flexDirection: 'column',
    height: '100vh',
    backgroundImage: `url('${dotsBackground}')`,
    backgroundSize: '16%',
    backgroundRepeat: 'repeat',
    backdropFilter: 'contrast(40%)',
  },
}));

export default useStyles;
