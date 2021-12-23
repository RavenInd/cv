import { makeStyles } from '@material-ui/styles';
import COLORS from '../../../constants/colors';

const useStyles = makeStyles(() => ({
  CVLink: {
    fontSize: 24,
    color: COLORS.MAIN_TEXT,
    fontWeight: 800,
    textDecoration: 'none',
    transition: 'all 0.4s ease',
    '&:hover': {
      color: COLORS.ACCENT_COLOR,
      cursor: 'pointer',
    },
    '&:active': {
      color: COLORS.SUB_ACCENT_COLOR,
    },
  },
}));

export default useStyles;
