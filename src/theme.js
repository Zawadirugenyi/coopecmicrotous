import { extendTheme } from '@chakra-ui/react';

const brand = {
  50: '#eef7fb',
  100: '#d4eaf5',
  200: '#a9d3e8',
  300: '#71b8da',
  400: '#4aa3d0',
  500: '#2a8fc1',
  600: '#1f749e',
  700: '#1a5c7d',
  800: '#154a63',
  900: '#11394d',
};

const accent = {
  50: '#fdfce9',
  100: '#fcf9c9',
  200: '#f8f3a0',
  300: '#f9ed68',
  400: '#f7e135',
  500: '#e2c91f',
  600: '#c2a916',
  700: '#9a8412',
  800: '#6e5e0e',
  900: '#4a3f0a',
};

const fonts = {
  heading: `"Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`,
  body: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`,
};

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts,
  colors: {
    brand,
    accent,
  },
  semanticTokens: {
    colors: {
      'surface.base': {
        _light: 'white',
        _dark: 'gray.800',
      },
      'surface.muted': {
        _light: 'gray.50',
        _dark: 'gray.900',
      },
      'surface.raised': {
        _light: 'gray.50',
        _dark: 'gray.700',
      },
      'border.subtle': {
        _light: 'gray.100',
        _dark: 'whiteAlpha.200',
      },
      'text.muted': {
        _light: 'gray.500',
        _dark: 'whiteAlpha.700',
      },
      'text.soft': {
        _light: 'gray.600',
        _dark: 'whiteAlpha.800',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'var(--chakra-colors-surface-muted)',
        color: 'var(--chakra-colors-chakra-body-text)',
        lineHeight: 'tall',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      },
      '::selection': {
        background: 'brand.500',
        color: 'white',
      },
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'full',
        _focusVisible: {
          boxShadow: '0 0 0 3px rgba(42, 143, 193, 0.4)',
        },
      },
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '600',
        color: 'chakra-body-text',
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'lg',
          overflow: 'hidden',
        },
        body: {
          padding: 6,
        },
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'brand.500',
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: 'brand.500',
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'brand.500',
      },
    },
    Menu: {
      baseStyle: {
        list: {
          borderRadius: 'lg',
          overflow: 'hidden',
          boxShadow: 'lg',
          border: '1px solid',
          borderColor: 'border.subtle',
        },
        item: {
          _hover: {
            bg: 'brand.50',
            color: 'brand.600',
          },
        },
      },
    },
  },
});

export default theme;