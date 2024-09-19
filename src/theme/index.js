import { createTheme } from '@mui/material/styles';

export default createTheme({
    components: {
      MuiContainer: {
        defaultProps: {
          disableGutters: true,
          maxWidth: false
        }
      }
    }
  });
