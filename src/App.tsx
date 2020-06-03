import React from 'react';
import { Header } from './components/header/header';
import { Career } from './content/career';

interface AppProps { }

function App({ }: React.Props<AppProps>) {
  return (
    <div className="App">
      <Header />

      <Career />
    </div>
  );
}

export default App;
