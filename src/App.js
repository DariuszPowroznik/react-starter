import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import mainTheme from './theme/mainTheme';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={mainTheme}>
      <>Hello World!</>
    </ThemeProvider>
  </>
);

export default App;
