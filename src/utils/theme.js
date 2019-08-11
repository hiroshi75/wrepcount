import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';

export const theme = createMuiTheme({
  palette: {
    type: 'dark', // ベースのテーマ lightかdarkか
    primary: blue, // primaryのカラー
    secondary: yellow, // secondaryのカラー
  },
});
