import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import blue from 'material-ui/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});

export default theme