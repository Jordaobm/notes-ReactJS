import React from 'react';
import { NoteProvider } from './hooks/notes';
import Home from './pages/Home';
import GlobalStyles from './styles/global';


function App() {
  return (
    <>
      <NoteProvider>
        <Home />
      </NoteProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
