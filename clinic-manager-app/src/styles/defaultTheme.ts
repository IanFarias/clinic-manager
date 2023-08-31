import { ITheme } from './types';

const defaultTheme: ITheme = {
  sizes: {
    small: '1.2rem',
    medium: '1.6rem',
    large: '2.4rem',
  },

  colors: {
    primary: '#a2edcf',
    secondary: '#f19ca3',
    terciary: '#c4ee88',

    lightPurple: '#c7b7d1',
    lightYellow: '#fffec8',

    background: '#FFFFFF',

    text: '#575757',
    title: '#242E35',

    white: '#FFFFFF',
    black: '#000000',

    success: '#008732',

    grey: {
      100: '#AAAAAA',
      200: '#575757',
      300: '#E7E7E7',
      400: '#F4F4F4',
      500: '#D6D6D6',
    },
  },
};

export default defaultTheme;
