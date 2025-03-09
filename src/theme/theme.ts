import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5f0ff',
      100: '#e9e3ff',
      200: '#d4c5ff',
      300: '#b69eff',
      400: '#9470ff',
      500: '#7c4dff',
      600: '#5e35dc',
      700: '#4726b3',
      800: '#341c8c',
      900: '#251566',
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
});

export default theme; 