import { createMuiTheme } from '@material-ui/core/styles';

const overrides = {
  MuiTab: {
    // general overrides for your material tab component here
    root: {
      backgroundColor: '#212529',
      '&$selected': {
        backgroundColor: '#26bcc3',
      }
    },
  },
};

export default createMuiTheme( {
  overrides,
});