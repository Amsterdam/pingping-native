export const ppBaseColors = {
  PP_PINK: '#f9454f',
  PP_ORANGE: '#fb9f00',
  PP_LIGHT_BLUE: '#2dbcca',
  PP_BABY_BLUE: '#bfe9ee',
  PP_DARK_BLUE: '#0d2036',
  PP_BULLET: '#99dce4',
  PP_SUCCESS: '#24ba10',
  PP_WHITE: '#fff',
  PP_GOLD: '#fb9f02',
  PP_GRAY: '#b9b9b9',
  PP_LIGHT_GRAY: '#e9e9e9',
  PP_BACKGROUND: '#f7fbff',
  PP_BLACK: '#000',
};

export const appColors = {
  primary: ppBaseColors.PP_ORANGE,
  secondary: ppBaseColors.PP_LIGHT_BLUE,
  danger: ppBaseColors.PP_PINK,
  headerColor: ppBaseColors.PP_DARK_BLUE,
  text: ppBaseColors.PP_BLACK,
  accentColor: ppBaseColors.PP_BABY_BLUE,
  bullet: ppBaseColors.PP_BULLET,
  success: ppBaseColors.PP_SUCCESS,
  white: ppBaseColors.PP_WHITE,
  background: ppBaseColors.PP_WHITE,
  greyedOut: ppBaseColors.PP_GRAY,
  subtleGrey: ppBaseColors.PP_LIGHT_GRAY,
  almostNotBlue: ppBaseColors.PP_BACKGROUND,
  modalBackground: 'rgba(1,1,1,0.8)',
  taskRowBackground: 'rgba(191, 233, 238, 0.3)',
};

export function setHeaderColor(color) {
  switch (color) {
    case 'primary':
      return appColors.headerColor;

    case 'white':
      return appColors.white;

    default:
      return '#000';
  }
}
