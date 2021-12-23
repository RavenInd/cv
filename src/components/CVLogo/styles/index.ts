import { makeStyles } from '@material-ui/styles';
import COLORS from '../../../constants/colors';

const useStyles = makeStyles(() => ({
  CVLogo: {
    fontFamily: 'Titillium Web, sans-serif',
    display: 'flex',
    alignItems: 'center',
    fontSize: 48,
    fontWeight: 800,
    lineHeight: 64,
    color: COLORS.ACCENT_COLOR,
    padding: 20,
    boxSizing: 'border-box',
    height: 80,
    cursor: 'pointer',
  },
}));

export default useStyles;
